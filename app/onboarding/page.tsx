"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const onboardingSteps = [
  {
    title: <>Find Nearby<br /><span>Pharmacies</span></>,
    description: "Discover verified pharmacies around you with real-time stock availability.",
  },
  {
    title: <>Check What&apos;s<br /><span>In Stock</span></>,
    description: "See medicine availability at nearby pharmacies before you make the trip.",
  },
  {
    title: <>Care, Your<br /><span>Way</span></>,
    description: "Choose a convenient pharmacy and continue to set up your MEDINOW delivery.",
  },
];

function PharmacyScene() {
  return (
    <svg className="pharmacy-scene" viewBox="0 0 430 500" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Medicine capsules and tablets in a softly lit pharmacy">
      <defs>
        <linearGradient id="scene-wall" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#5a62ca" />
          <stop offset=".28" stopColor="#263f8a" />
          <stop offset=".65" stopColor="#102a60" />
          <stop offset="1" stopColor="#111f4e" />
        </linearGradient>
        <linearGradient id="scene-shelf" x1="0" y1="0" x2="0" y2="1">
          <stop stopColor="#0e1d49" />
          <stop offset=".48" stopColor="#21346d" />
          <stop offset=".53" stopColor="#c7a5e2" />
          <stop offset=".57" stopColor="#f5c2db" />
          <stop offset="1" stopColor="#15265b" />
        </linearGradient>
        <linearGradient id="counter" x1="0" y1="0" x2=".8" y2="1">
          <stop stopColor="#7892e0" />
          <stop offset=".22" stopColor="#304c98" />
          <stop offset=".55" stopColor="#172b60" />
          <stop offset="1" stopColor="#061534" />
        </linearGradient>
        <linearGradient id="glass-jar" x1="0" y1="0" x2="1" y2=".2">
          <stop stopColor="#b7eaff" stopOpacity=".28" />
          <stop offset=".2" stopColor="#f5f9ff" stopOpacity=".09" />
          <stop offset=".5" stopColor="#6dafff" stopOpacity=".23" />
          <stop offset=".78" stopColor="#d3f1ff" stopOpacity=".12" />
          <stop offset="1" stopColor="#4296ed" stopOpacity=".42" />
        </linearGradient>
        <linearGradient id="capsule-blue" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#8deaff" />
          <stop offset=".3" stopColor="#138eea" />
          <stop offset=".52" stopColor="#f8fdff" />
          <stop offset="1" stopColor="#d6e9ff" />
        </linearGradient>
        <linearGradient id="capsule-pink" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#ffd4ef" />
          <stop offset=".48" stopColor="#ec8cce" />
          <stop offset="1" stopColor="#b849a6" />
        </linearGradient>
        <linearGradient id="tablet-white" x1="0" y1="0" x2=".8" y2="1">
          <stop stopColor="#fff" />
          <stop offset=".7" stopColor="#daeaff" />
          <stop offset="1" stopColor="#9bc4f1" />
        </linearGradient>
        <radialGradient id="scene-light">
          <stop stopColor="#f3baff" stopOpacity=".8" />
          <stop offset=".45" stopColor="#8875ff" stopOpacity=".34" />
          <stop offset="1" stopColor="#697bff" stopOpacity="0" />
        </radialGradient>
        <filter id="scene-blur"><feGaussianBlur stdDeviation="12" /></filter>
        <filter id="object-shadow" x="-50%" y="-50%" width="200%" height="220%">
          <feDropShadow dx="0" dy="12" stdDeviation="10" floodColor="#02091e" floodOpacity=".58" />
        </filter>
        <filter id="glass-glow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      <rect width="430" height="500" fill="url(#scene-wall)" />
      <ellipse cx="72" cy="46" rx="175" ry="125" fill="url(#scene-light)" />
      <ellipse cx="370" cy="128" rx="146" ry="160" fill="#1d73ff" opacity=".24" filter="url(#scene-blur)" />

      <g opacity=".88" filter="url(#scene-blur)">
        <path d="M0 68h430M0 172h430M0 279h430" stroke="#f5c2e3" strokeWidth="8" />
        <path d="M38 0v290M171 0v290M310 0v290M398 0v290" stroke="#0b1742" strokeWidth="19" />
        <g fill="#b9d8ff">
          <rect x="12" y="22" width="35" height="48" rx="5" /><rect x="58" y="38" width="32" height="34" rx="4" />
          <rect x="98" y="13" width="54" height="58" rx="5" /><rect x="191" y="23" width="39" height="49" rx="5" />
          <rect x="239" y="31" width="55" height="41" rx="4" /><rect x="331" y="16" width="47" height="56" rx="5" />
          <rect x="5" y="114" width="44" height="56" rx="5" /><rect x="64" y="121" width="48" height="48" rx="5" />
          <rect x="125" y="105" width="37" height="64" rx="5" /><rect x="187" y="117" width="54" height="53" rx="5" />
          <rect x="250" y="109" width="43" height="60" rx="5" /><rect x="327" y="119" width="49" height="48" rx="5" />
          <rect x="21" y="215" width="58" height="53" rx="5" /><rect x="93" y="207" width="39" height="61" rx="5" />
          <rect x="152" y="221" width="55" height="47" rx="5" /><rect x="224" y="208" width="42" height="59" rx="5" />
          <rect x="283" y="216" width="54" height="52" rx="5" /><rect x="350" y="204" width="49" height="63" rx="5" />
        </g>
        <g fill="#dd91d2" opacity=".86">
          <rect x="22" y="32" width="18" height="30" rx="3" /><rect x="107" y="24" width="20" height="39" rx="3" />
          <rect x="204" y="31" width="17" height="32" rx="3" /><rect x="341" y="24" width="19" height="37" rx="3" />
          <rect x="15" y="124" width="16" height="38" rx="3" /><rect x="198" y="127" width="19" height="34" rx="3" />
          <rect x="291" y="219" width="20" height="38" rx="3" /><rect x="358" y="212" width="18" height="42" rx="3" />
        </g>
      </g>

      <path d="M0 295 430 264v236H0z" fill="url(#counter)" />
      <path d="M0 300 430 269" stroke="#ecbafa" strokeOpacity=".7" strokeWidth="4" />
      <path d="M0 308 430 277" stroke="#83b9ff" strokeOpacity=".56" strokeWidth="2" />
      <ellipse cx="211" cy="392" rx="236" ry="61" fill="#976cff" opacity=".12" filter="url(#scene-blur)" />

      <g className="blister-pack" transform="translate(260 319) rotate(-9)" filter="url(#object-shadow)">
        <path d="M0 14 157 0l29 82L27 99z" fill="#bcd7ff" fillOpacity=".25" stroke="#d7eaff" strokeOpacity=".85" strokeWidth="3" />
        <path d="m12 23 143-12M20 42l144-13M26 62l145-14" stroke="#f5caff" strokeOpacity=".45" strokeWidth="2" />
        <g fill="url(#capsule-pink)" stroke="#ffd3f3" strokeWidth="2">
          <ellipse cx="31" cy="28" rx="11" ry="8" /><ellipse cx="65" cy="25" rx="11" ry="8" /><ellipse cx="99" cy="22" rx="11" ry="8" /><ellipse cx="133" cy="19" rx="11" ry="8" />
          <ellipse cx="39" cy="50" rx="11" ry="8" /><ellipse cx="73" cy="47" rx="11" ry="8" /><ellipse cx="107" cy="44" rx="11" ry="8" /><ellipse cx="141" cy="41" rx="11" ry="8" />
          <ellipse cx="47" cy="72" rx="11" ry="8" /><ellipse cx="81" cy="69" rx="11" ry="8" /><ellipse cx="115" cy="66" rx="11" ry="8" /><ellipse cx="149" cy="63" rx="11" ry="8" />
        </g>
        <g fill="#fff" opacity=".58">
          <ellipse cx="28" cy="25" rx="4" ry="2" /><ellipse cx="62" cy="22" rx="4" ry="2" /><ellipse cx="96" cy="19" rx="4" ry="2" />
          <ellipse cx="36" cy="47" rx="4" ry="2" /><ellipse cx="70" cy="44" rx="4" ry="2" /><ellipse cx="104" cy="41" rx="4" ry="2" />
        </g>
      </g>

      <g className="medicine-jar" transform="translate(34 254) rotate(-13 93 94)" filter="url(#object-shadow)">
        <ellipse cx="101" cy="104" rx="99" ry="88" fill="url(#glass-jar)" stroke="#83c9ff" strokeWidth="5" />
        <ellipse cx="101" cy="104" rx="83" ry="72" fill="#071b4c" fillOpacity=".45" stroke="#bfdfff" strokeOpacity=".75" strokeWidth="4" />
        <ellipse cx="101" cy="104" rx="69" ry="59" fill="#0a2e72" fillOpacity=".48" stroke="#51aaff" strokeOpacity=".58" strokeWidth="3" />
        <path d="M22 67c12-25 33-41 57-47M176 60c9 18 13 37 11 59" fill="none" stroke="#f4fcff" strokeOpacity=".84" strokeWidth="7" strokeLinecap="round" />
        <path d="M23 147c23 27 58 42 94 39" fill="none" stroke="#57c9ff" strokeOpacity=".7" strokeWidth="5" strokeLinecap="round" />
      </g>

      <g className="loose-medicines" filter="url(#object-shadow)">
        <g transform="translate(111 374) rotate(19)">
          <rect width="83" height="34" rx="17" fill="url(#capsule-blue)" stroke="#eafaff" strokeWidth="2" />
          <path d="M42 2v30" stroke="#9bd9ff" strokeWidth="2" />
          <path d="M10 7h22" stroke="#fff" strokeOpacity=".8" strokeWidth="3" strokeLinecap="round" />
        </g>
        <g transform="translate(199 396) rotate(-10)">
          <rect width="75" height="31" rx="16" fill="url(#capsule-blue)" stroke="#eafaff" strokeWidth="2" />
          <path d="M38 2v27" stroke="#a8e6ff" strokeWidth="2" />
          <path d="M9 7h17" stroke="#fff" strokeOpacity=".8" strokeWidth="3" strokeLinecap="round" />
        </g>
        <g fill="url(#tablet-white)" stroke="#fff" strokeWidth="2">
          <ellipse cx="184" cy="432" rx="20" ry="10" /><ellipse cx="295" cy="425" rx="24" ry="12" />
          <ellipse cx="350" cy="441" rx="18" ry="9" /><ellipse cx="91" cy="425" rx="17" ry="9" />
        </g>
        <g fill="url(#capsule-pink)" stroke="#ffdafa" strokeWidth="2">
          <ellipse cx="244" cy="450" rx="22" ry="11" /><ellipse cx="137" cy="456" rx="17" ry="9" />
        </g>
      </g>

      <path d="M0 0h430v500H0z" fill="url(#scene-light)" opacity=".17" />
      <path d="M0 0h430v500H0z" fill="none" stroke="#a9caff" strokeOpacity=".18" strokeWidth="2" />
    </svg>
  );
}

function PharmacyCardIcon() {
  return (
    <svg viewBox="0 0 44 44" aria-hidden="true">
      <path d="M7 18h30v20H7zM4 18l3-8h30l3 8M13 10l3-5h12l3 5M18 38V26h8v12" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinejoin="round" />
      <path d="M17 14h10M22 9v10" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 28" aria-hidden="true">
      <path d="M12 2C6.7 2 3 6.2 3 11c0 6 9 15 9 15s9-9 9-15c0-4.8-3.7-9-9-9Z" fill="currentColor" />
      <circle cx="12" cy="11" r="3" fill="#274c9a" />
    </svg>
  );
}

export default function OnboardingPage() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const currentStep = onboardingSteps[step];

  function continueOnboarding() {
    if (step < onboardingSteps.length - 1) setStep((current) => current + 1);
    else router.push("/location");
  }

  return (
    <main className="onboarding-screen">
      <section className="onboarding-hero" aria-hidden="true">
        <PharmacyScene />
        <div className="hero-shade" />
        <div className="pharmacy-glass-card pharmacy-card">
          <div className="glass-card-heading">
            <span className="glass-icon pharmacy-icon"><PharmacyCardIcon /></span>
            <span>PHARMACIES<br />NEAR YOU</span>
          </div>
          <div className="analytics-row"><span className="mini-shop-icon"><PharmacyCardIcon /></span><i><b style={{ width: "72%" }} /></i></div>
          <div className="analytics-row"><span className="mini-shop-icon"><PharmacyCardIcon /></span><i><b style={{ width: "63%" }} /></i></div>
          <div className="analytics-row"><span className="mini-shop-icon"><PharmacyCardIcon /></span><i><b style={{ width: "48%" }} /></i></div>
        </div>
        <div className="pharmacy-glass-card distance-card">
          <div className="glass-card-heading distance-heading">
            <span className="glass-icon pin-icon"><PinIcon /></span>
            <span>AVG. DISTANCE</span>
          </div>
          <div className="analytics-row"><span className="mini-pin"><PinIcon /></span><i><b style={{ width: "58%" }} /></i></div>
          <div className="analytics-row"><span className="mini-pin"><PinIcon /></span><i><b style={{ width: "52%" }} /></i></div>
          <div className="analytics-row"><span className="mini-pin"><PinIcon /></span><i><b style={{ width: "37%" }} /></i></div>
        </div>
      </section>

      <button className="onboarding-skip" type="button" onClick={() => router.replace("/location")}>Skip</button>

      <section className="onboarding-copy" aria-live="polite">
        <h1>{currentStep.title}</h1>
        <p>{currentStep.description}</p>
      </section>

      <div className="onboarding-footer">
        <div className="onboarding-dots" aria-label={`Onboarding step ${step + 1} of 3`}>
          {onboardingSteps.map((_, index) => <span className={index === step ? "active" : ""} key={index} />)}
        </div>
        <button className="onboarding-continue" type="button" onClick={continueOnboarding}>Continue</button>
      </div>
    </main>
  );
}