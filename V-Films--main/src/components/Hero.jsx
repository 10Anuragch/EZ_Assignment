import React from "react";
import BG from "@/assets/BG.png"; // ✅ import background image

function Mandala() {
  // Subtle inline SVG to mimic the floral mandala behind the logo
  return (
    <svg
      viewBox="0 0 400 400"
      className="h-auto w-full text-orange-300/60"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
    >
      <g opacity="0.55">
        <circle cx="200" cy="200" r="160" />
        {Array.from({ length: 16 }).map((_, i) => (
          <g key={i} transform={`rotate(${(360 / 16) * i} 200 200)`}>
            <path d="M200 40c20 30 20 60 0 90c-20-30-20-60 0-90z" />
            <path d="M200 80c12 18 12 36 0 54c-12-18-12-36 0-54z" />
            <path d="M200 120c7 11 7 22 0 33c-7-11-7-22 0-33z" />
          </g>
        ))}
      </g>
    </svg>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      data-testid="hero-section"
      className="relative ornament-frame paper-bg pt-28"
      style={{
        backgroundImage: `url(${BG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-white/60 backdrop-blur-[1px] -z-10"></div>
      {/* optional light overlay for contrast */}

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 pb-16 md:grid-cols-2 md:items-center">
        {/* Left: Mandala + Logo */}
        <div className="relative">
          <div className="absolute inset-0 -z-10">
            <Mandala />
          </div>
          <div className="pl-6 pt-10">
            <div className="inline-flex items-baseline gap-1 text-6xl md:text-7xl font-serif-display">
              <span className="text-orange-500">V</span>
              <span className="text-slate-800">Films</span>
            </div>
          </div>
        </div>

        {/* Right: Heading + Categories + Copy */}
        <div>
          <h1
            className="font-script text-slate-800 text-4xl leading-snug md:text-5xl"
            data-testid="hero-heading"
          >
            Varnan is where stories find
            <br />
            their voice and form
          </h1>

          <p
            className="mt-8 text-lg font-semibold text-orange-500"
            data-testid="hero-categories"
          >
            Films · Brands · Art
          </p>

          <p
            className="mt-8 max-w-xl text-sm text-slate-700"
            data-testid="hero-paragraph"
          >
            Since 2008, we’ve been telling stories – stories of people, their
            journeys, and the places that shape them. Some begin in polished
            boardrooms, others in humble village squares. But every story starts
            the same way – by listening with intention. V believes it takes
            trust, patience, and an eye for the unseen to capture what truly
            matters. V doesn’t just tell stories – V honors them.
          </p>
        </div>
      </div>
    </section>
  );
}
