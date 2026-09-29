"use client";

import { useEffect, useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { createSupabaseBrowserClient } from "@/lib/supabase/browser";

type LoginMode = "login" | "signup" | "recovery";

function BrandMark() {
  return (
    <div className="login-brand" aria-label="MEDINOW">
      <span className="login-brand-cross" aria-hidden="true">+</span>
      <div>
        <strong><span>MEDI</span>NOW</strong>
        <small>Better Health. Faster.</small>
      </div>
    </div>
  );
}

function EyeIcon({ visible }: { visible: boolean }) {
  return visible ? (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M2.5 12s3.4-6 9.5-6 9.5 6 9.5 6-3.4 6-9.5 6-9.5-6-9.5-6Z" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="12" cy="12" r="2.5" fill="none" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  ) : (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3 3 21 21M10.6 6.2A9.5 9.5 0 0 1 12 6c6.1 0 9.5 6 9.5 6a15 15 0 0 1-3 3.6M6.2 6.7C3.8 8.3 2.5 12 2.5 12s3.4 6 9.5 6c1.3 0 2.5-.3 3.5-.8" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function LoginPage() {
  const router = useRouter();
  const [mode, setMode] = useState<LoginMode>("login");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    let queryTimer: number | undefined;
    if (query.get("recovery") === "1") {
      queryTimer = window.setTimeout(() => {
        setMode("recovery");
        setNotice("Choose a new password for your account.");
      }, 0);
    }
    if (query.get("error") === "confirmation") {
      queryTimer = window.setTimeout(() => {
        setError("This confirmation link is invalid or expired. Request a new email and try again.");
      }, 0);
    }

    let unsubscribe: (() => void) | undefined;

    try {
      const supabase = createSupabaseBrowserClient();
      const { data: { subscription } } = supabase.auth.onAuthStateChange((event) => {
        if (event === "PASSWORD_RECOVERY") {
          setMode("recovery");
          setPassword("");
          setError("");
          setNotice("Choose a new password for your account.");
        }
      });
      unsubscribe = () => subscription.unsubscribe();
    } catch {
      // Submission handlers provide the visible configuration error.
    }

    return () => {
      if (queryTimer !== undefined) window.clearTimeout(queryTimer);
      unsubscribe?.();
    };
  }, []);

  function changeMode(nextMode: LoginMode) {
    setMode(nextMode);
    setError("");
    setNotice("");
    setPassword("");
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setNotice("");
    setIsSubmitting(true);

    try {
      const supabase = createSupabaseBrowserClient();

      if (mode === "signup") {
        const { data, error: authError } = await supabase.auth.signUp({
          email: email.trim(),
          password,
          options: {
            data: { full_name: fullName.trim() },
            emailRedirectTo: `${window.location.origin}/auth/callback?next=/medinow1`,
          },
        });

        if (authError) throw authError;
        if (!data.session) {
          setNotice("Check your email to confirm your account, then come back to sign in.");
          setMode("login");
          return;
        }

        router.replace("/medinow1");
        router.refresh();
        return;
      }

      if (mode === "recovery") {
        const { error: authError } = await supabase.auth.updateUser({ password });
        if (authError) throw authError;
        setMode("login");
        setPassword("");
        setNotice("Your password has been updated. Sign in with your new password.");
        return;
      }

      const { error: authError } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password,
      });

      if (authError) throw authError;
      router.replace("/medinow1");
      router.refresh();
    } catch (caughtError) {
      const message = caughtError instanceof Error ? caughtError.message : "Something went wrong. Please try again.";
      const normalizedMessage = message.toLowerCase();
      setError(normalizedMessage.includes("invalid login credentials")
        ? "Email or password is incorrect. Check your details and try again."
        : normalizedMessage.includes("invalid supabaseurl") || normalizedMessage.includes("missing next_public_supabase")
          ? "Account access is not configured yet. Add a valid Supabase URL and anon key to the app settings."
          : message);
    } finally {
      setIsSubmitting(false);
    }
  }

  async function sendPasswordReset() {
    if (!email.trim()) {
      setError("Enter your email address first.");
      return;
    }

    setError("");
    setNotice("");
    setIsSubmitting(true);
    try {
      const supabase = createSupabaseBrowserClient();
      const { error: authError } = await supabase.auth.resetPasswordForEmail(email.trim(), {
        redirectTo: `${window.location.origin}/auth/callback?next=/login%3Frecovery%3D1`,
      });
      if (authError) throw authError;
      setNotice("If an account exists for that email, a password reset link is on its way.");
    } catch (caughtError) {
      setError(caughtError instanceof Error ? caughtError.message : "We couldn't send the reset email. Try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  const isRecovery = mode === "recovery";
  const isSignup = mode === "signup";
  const title = isRecovery ? "Set a new password" : isSignup ? "Create your account" : "Welcome back";
  const description = isRecovery
    ? "Choose a secure password to get back into your account."
    : isSignup
      ? "Create your MEDINOW account to manage your health essentials."
      : "Sign in to find, order, and receive your medicines.";

  return (
    <main className="login-screen">
      <div className="login-ambient login-ambient-one" aria-hidden="true" />
      <div className="login-ambient login-ambient-two" aria-hidden="true" />

      <div className="login-layout">
        <section className="login-story" aria-label="MEDINOW">
          <BrandMark />
          <div className="login-story-copy">
            <span className="login-kicker">YOUR HEALTH, IN REACH</span>
            <h1>Better care<br /><span>starts here.</span></h1>
            <p>Find nearby pharmacies, check medicine availability, and manage your orders in one place.</p>
          </div>
          <div className="login-story-footer"><span className="login-pulse" /> Trusted pharmacy care, made simpler</div>
        </section>

        <section className="login-form-panel" aria-labelledby="login-title">
          <div className="login-form-header">
            <div className="login-mobile-brand"><BrandMark /></div>
            <p className="login-eyebrow">MEDINOW ACCOUNT</p>
            <h2 id="login-title">{title}</h2>
            <p className="login-description">{description}</p>
          </div>

          <form className="login-form" onSubmit={handleSubmit}>
            {isSignup && (
              <label className="login-field">
                <span>Full name</span>
                <input
                  autoComplete="name"
                  name="fullName"
                  placeholder="Your name"
                  required
                  value={fullName}
                  onChange={(event) => setFullName(event.target.value)}
                />
              </label>
            )}

            {!isRecovery && (
              <label className="login-field">
                <span>Email address</span>
                <input
                  autoComplete="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </label>
            )}

            {mode === "recovery" && (
              <label className="login-field">
                <span>Email address</span>
                <input
                  autoComplete="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </label>
            )}

            <label className="login-field">
              <span>{isRecovery ? "New password" : "Password"}</span>
              <span className="login-password-wrap">
                <input
                  autoComplete={isRecovery ? "new-password" : isSignup ? "new-password" : "current-password"}
                  minLength={8}
                  name="password"
                  placeholder="At least 8 characters"
                  required
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
                <button
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="login-password-toggle"
                  onClick={() => setShowPassword((visible) => !visible)}
                  type="button"
                >
                  <EyeIcon visible={showPassword} />
                </button>
              </span>
            </label>

            {mode === "login" && (
              <button className="login-forgot" disabled={isSubmitting} onClick={sendPasswordReset} type="button">
                Forgot password?
              </button>
            )}

            {error && <p className="login-feedback error" role="alert">{error}</p>}
            {notice && <p className="login-feedback notice" role="status">{notice}</p>}

            <button className="login-submit" disabled={isSubmitting} type="submit">
              {isSubmitting ? "Please wait..." : isRecovery ? "Update password" : isSignup ? "Create account" : "Sign in"}
              {!isSubmitting && <span aria-hidden="true">→</span>}
            </button>
          </form>

          <div className="login-switch">
            {isRecovery ? (
              <button onClick={() => changeMode("login")} type="button">Back to sign in</button>
            ) : isSignup ? (
              <p>Already have an account? <button onClick={() => changeMode("login")} type="button">Sign in</button></p>
            ) : (
              <p>New to MEDINOW? <button onClick={() => changeMode("signup")} type="button">Create an account</button></p>
            )}
          </div>

          <p className="login-legal">Your MEDINOW account keeps your orders and saved medicines together.</p>
        </section>
      </div>
    </main>
  );
}