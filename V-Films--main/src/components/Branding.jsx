import { Link } from "react-router-dom";

function BadgeIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" stroke="#0f2740" strokeWidth="1.6">
      <rect x="8" y="12" width="48" height="40" rx="6" fill="#e7eef7" />
      <circle cx="24" cy="32" r="6" fill="#fff" />
      <path d="M36 28h16M36 34h16" />
    </svg>
  );
}

export default function Branding() {
  return (
    <section className="paper-bg ornament-frame min-h-screen">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="flex items-center gap-4">
          <Link to="/" className="inline-flex items-center gap-2 rounded-full border border-orange-300/80 px-3 py-1 text-sm text-orange-700 hover:bg-orange-50" data-testid="back-btn">
            ← Back
          </Link>
          <p className="font-script text-2xl text-slate-800">“A brand is a voice, and a product is a souvenir.” – Lisa Gansky</p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-12 md:grid-cols-2">
          {/* Polaroid image */}
          <div className="polaroid max-w-md">
            <div className="relative h-80 w-full overflow-hidden rounded-sm">
              <img
                src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1600&auto=format&fit=crop"
                alt="Branding"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="pt-4 text-center text-lg text-slate-800">Branding</div>
          </div>

          {/* Copy */}
          <div>
            <p className="max-w-xl text-slate-700">
              A brand isn’t just what you see – it’s what you remember, what you carry home, and what you trust. We shape brands that people remember, return to, and fall in love with.
            </p>
            <p className="mt-4 font-semibold text-slate-800">V creates:</p>
            <ul className="mt-2 list-disc space-y-1 pl-6 text-slate-700" data-testid="branding-list">
              <li>Branding & Communication</li>
              <li>Market Mapping</li>
              <li>Content Management</li>
              <li>Social Media Management</li>
              <li>Rebranding</li>
            </ul>

            <div className="mt-10 flex items-center gap-3">
              <span className="text-sm text-slate-700">Explore Now</span>
              <span className="inline-block h-1 w-24 rounded-full bg-orange-500"></span>
            </div>
          </div>
        </div>

        {/* Decorative icons */}
        <div className="pointer-events-none mt-10 grid grid-cols-2 opacity-80 md:grid-cols-4">
          <BadgeIcon className="h-12" />
          <BadgeIcon className="h-12 justify-self-end rotate-12" />
          <BadgeIcon className="h-12 -rotate-6" />
          <BadgeIcon className="h-12 justify-self-end" />
        </div>
      </div>
    </section>
  );
}
