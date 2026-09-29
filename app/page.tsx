"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

function MedicalEmblem() {
  return (
    <svg
      className="medical-emblem"
      viewBox="0 0 520 430"
      role="img"
      aria-label="Medicine, location, and delivery"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="cross" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#b7fbff" />
          <stop offset=".42" stopColor="#28dfff" />
          <stop offset="1" stopColor="#0877ff" />
        </linearGradient>
        <linearGradient id="capsuleBlue" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#21eaff" />
          <stop offset=".18" stopColor="#066dff" />
          <stop offset=".64" stopColor="#0738c8" />
          <stop offset="1" stopColor="#0aaeff" />
        </linearGradient>
        <linearGradient id="capsuleWhite" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#fff" />
          <stop offset=".58" stopColor="#e5f6ff" />
          <stop offset="1" stopColor="#8acfff" />
        </linearGradient>
        <linearGradient id="tablet" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#fff" />
          <stop offset=".62" stopColor="#e9f8ff" />
          <stop offset="1" stopColor="#93d7ff" />
        </linearGradient>
        <linearGradient id="pin" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#71f7ff" />
          <stop offset=".45" stopColor="#08baff" />
          <stop offset="1" stopColor="#0753e9" />
        </linearGradient>
        <linearGradient id="truck" x1="0" y1="0" x2="0" y2="1">
          <stop stopColor="#f8ffff" />
          <stop offset="1" stopColor="#67caff" />
        </linearGradient>
        <radialGradient id="artGlow">
          <stop stopColor="#00bfff" stopOpacity=".42" />
          <stop offset="1" stopColor="#005bff" stopOpacity="0" />
        </radialGradient>
        <filter id="blueGlow" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="9" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        <filter id="softShadow" x="-50%" y="-50%" width="200%" height="220%">
          <feDropShadow dx="0" dy="12" stdDeviation="11" floodColor="#00143d" floodOpacity=".65" />
        </filter>
        <clipPath id="capsuleClip">
          <rect x="-58" y="-157" width="116" height="314" rx="58" />
        </clipPath>
      </defs>

      <ellipse cx="260" cy="236" rx="246" ry="194" fill="url(#artGlow)" />
      <g className="emblem-rings" fill="none" strokeLinecap="round">
        <ellipse cx="259" cy="246" rx="203" ry="91" stroke="#05baff" strokeOpacity=".72" strokeWidth="3" transform="rotate(-9 259 246)" />
        <ellipse cx="259" cy="246" rx="177" ry="71" stroke="#53edff" strokeOpacity=".35" strokeWidth="2" transform="rotate(-9 259 246)" />
        <path d="M56 250c8-50 55-82 114-91" stroke="#62f3ff" strokeOpacity=".6" strokeWidth="3" />
      </g>

      <g className="cross-mark" filter="url(#blueGlow)">
        <path d="M232 48a12 12 0 0 1 12-12h46a12 12 0 0 1 12 12v57h57a12 12 0 0 1 12 12v46a12 12 0 0 1-12 12h-57v57a12 12 0 0 1-12 12h-46a12 12 0 0 1-12-12v-57h-57a12 12 0 0 1-12-12v-46a12 12 0 0 1 12-12h57z" fill="url(#cross)" stroke="#8cffff" strokeWidth="4" />
        <path d="M243 52a6 6 0 0 1 6-6h36a6 6 0 0 1 6 6v61h62a6 6 0 0 1 6 6v36a6 6 0 0 1-6 6h-62v61a6 6 0 0 1-6 6h-36a6 6 0 0 1-6-6v-61h-62a6 6 0 0 1-6-6v-36a6 6 0 0 1 6-6h62z" fill="none" stroke="#d5ffff" strokeOpacity=".56" strokeWidth="2" />
      </g>

      <g className="pin-mark" filter="url(#softShadow)">
        <path d="M424 155c-31 0-56 25-56 56 0 42 56 103 56 103s56-61 56-103c0-31-25-56-56-56Z" fill="url(#pin)" stroke="#6df8ff" strokeWidth="4" />
        <path d="M424 173c-20 0-36 16-36 36s16 36 36 36 36-16 36-36-16-36-36-36Z" fill="#062761" stroke="#8bffff" strokeWidth="6" />
        <path d="M391 197c3-13 13-23 26-26" fill="none" stroke="#fff" strokeOpacity=".76" strokeWidth="4" strokeLinecap="round" />
      </g>

      <g className="delivery-truck" transform="translate(368 286)" filter="url(#softShadow)">
        <path d="M4 16h106l-9 46H0z" fill="url(#truck)" stroke="#55eaff" strokeWidth="3" strokeLinejoin="round" />
        <path d="M110 30h26l17 20-5 21h-44z" fill="url(#truck)" stroke="#55eaff" strokeWidth="3" strokeLinejoin="round" />
        <path d="M119 36h13l11 13h-27z" fill="#0874db" stroke="#9afaff" strokeWidth="2" />
        <path d="M15 29h70M11 41h61" stroke="#05baff" strokeWidth="5" strokeLinecap="round" />
        <circle cx="27" cy="66" r="11" fill="#06245d" stroke="#75f5ff" strokeWidth="4" />
        <circle cx="119" cy="66" r="11" fill="#06245d" stroke="#75f5ff" strokeWidth="4" />
      </g>

      <g className="capsule" transform="translate(204 224) rotate(24)" filter="url(#softShadow)">
        <rect x="-58" y="-157" width="116" height="314" rx="58" fill="url(#capsuleWhite)" stroke="#d2ffff" strokeWidth="4" />
        <g clipPath="url(#capsuleClip)">
          <path d="M-62-162h124v162H-62z" fill="url(#capsuleBlue)" />
          <path d="M-47-141c14-14 31-18 49-18" fill="none" stroke="#d9ffff" strokeOpacity=".85" strokeWidth="9" strokeLinecap="round" />
          <path d="M-45 35v91" stroke="#fff" strokeOpacity=".6" strokeWidth="16" strokeLinecap="round" />
          <path d="M44-117c8 30 10 71 3 101" fill="none" stroke="#5cf6ff" strokeOpacity=".62" strokeWidth="7" strokeLinecap="round" />
        </g>
        <path d="M-49-132c10-16 23-22 39-24" fill="none" stroke="#fff" strokeOpacity=".8" strokeWidth="4" strokeLinecap="round" />
      </g>

      <g className="tablet-mark" transform="translate(276 306) rotate(12)" filter="url(#softShadow)">
        <circle r="78" fill="url(#tablet)" stroke="#d9ffff" strokeWidth="5" />
        <circle r="67" fill="none" stroke="#fff" strokeOpacity=".82" strokeWidth="4" />
        <path d="M-55 53 55-53" stroke="#86bfe9" strokeWidth="11" />
        <path d="M-58 48 51-61" stroke="#fff" strokeWidth="5" strokeLinecap="round" />
        <path d="M-48-49c17-16 39-23 61-22" fill="none" stroke="#fff" strokeOpacity=".8" strokeWidth="4" strokeLinecap="round" />
      </g>

      <ellipse cx="249" cy="393" rx="172" ry="13" fill="#009bff" opacity=".28" filter="url(#blueGlow)" />
    </svg>
  );
}

export default function SplashPage() {
  const router = useRouter();

  useEffect(() => {
    const timeout = window.setTimeout(() => router.replace("/onboarding"), 3600);
    return () => window.clearTimeout(timeout);
  }, [router]);

  return (
    <main className="splash-screen" aria-label="MEDINOW">
      <div className="ambient-arc ambient-arc-top" aria-hidden="true" />
      <div className="ambient-arc ambient-arc-bottom" aria-hidden="true" />
      <span className="light-particle particle-one" aria-hidden="true" />
      <span className="light-particle particle-two" aria-hidden="true" />
      <span className="light-particle particle-three" aria-hidden="true" />

      <section className="splash-center">
        <div className="splash-art"><MedicalEmblem /></div>
        <div className="splash-branding">
          <h1 className="brand-wordmark"><span>MEDI</span><span className="brand-cyan">NOW</span></h1>
          <p className="brand-promise">Better Health. Faster.</p>
          <p className="brand-tagline">Find. Order. Receive.</p>
        </div>
      </section>

      <div className="loading-track" role="progressbar" aria-label="Loading MEDINOW" aria-valuemin={0} aria-valuemax={100}>
        <span className="loading-progress" />
      </div>
    </main>
  );
}