import { Link } from "react-router-dom";

function GalleryIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" stroke="#0f2740" strokeWidth="1.6">
      <rect x="8" y="14" width="48" height="36" rx="6" fill="#fbe5dc" />
      <circle cx="22" cy="28" r="6" fill="#fff" />
      <path d="M12 42l10-8 8 6 10-8 12 10" />
    </svg>
  );
}

export default function ArtCuration() {
  return (
    <section className="paper-bg ornament-frame min-h-screen">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="flex items-center gap-4">
          <Link to="/" className="inline-flex items-center gap-2 rounded-full border border-orange-300/80 px-3 py-1 text-sm text-orange-700 hover:bg-orange-50" data-testid="back-btn">
            ← Back
          </Link>
          <p className="font-script text-2xl text-slate-800">“We take art where it belongs, to the people.” – Vernita Verma</p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-12 md:grid-cols-2">
          {/* Polaroid image */}
          <div className="polaroid max-w-md">
            <div className="relative h-80 w-full overflow-hidden rounded-sm">
              <img
                src="https://images.unsplash.com/photo-1683382195205-1e3ac66d213b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687"
                alt="Art Curation"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="pt-4 text-center text-lg text-slate-800">Art Curation</div>
          </div>

          {/* Copy */}
          <div>
            <p className="max-w-xl text-slate-700">
              Art isn’t meant to sit on distant walls – it’s meant to breathe, to travel, to belong. Through every festival, every performance, and every gathering, we help stories find their stage and their people.
            </p>
            <p className="mt-4 font-semibold text-slate-800">V curates:</p>
            <ul className="mt-2 list-disc space-y-1 pl-6 text-slate-700" data-testid="ac-list">
              <li>Art Festivals</li>
              <li>Live Performances</li>
              <li>Community Events</li>
              <li>Cultural Storytelling</li>
            </ul>

            <div className="mt-10 flex items-center gap-3">
              <span className="text-sm text-slate-700">Explore Now</span>
              <span className="inline-block h-1 w-24 rounded-full bg-orange-500"></span>
            </div>
          </div>
        </div>

        {/* Decorative icons */}
        <div className="pointer-events-none mt-10 grid grid-cols-2 opacity-80 md:grid-cols-4">
          <GalleryIcon className="h-12" />
          <GalleryIcon className="h-12 justify-self-end rotate-12" />
          <GalleryIcon className="h-12 -rotate-6" />
          <GalleryIcon className="h-12 justify-self-end" />
        </div>
      </div>
    </section>
  );
}
