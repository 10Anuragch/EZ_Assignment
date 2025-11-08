import { Link } from "react-router-dom";

function CameraIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 64 48" className={className} fill="none" stroke="#0f2740" strokeWidth="1.5">
      <rect x="2" y="10" width="40" height="26" rx="3" fill="#e7eef7" />
      <polygon points="44,18 60,10 60,38 44,30" fill="#fbe5dc" stroke="#0f2740" />
      <circle cx="14" cy="24" r="6" fill="#fff" />
      <circle cx="14" cy="24" r="3" fill="#f59e0b" />
    </svg>
  );
}

export default function FilmProduction() {
  return (
    <section className="paper-bg ornament-frame min-h-screen">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="flex items-center gap-4">
          <Link to="/" className="inline-flex items-center gap-2 rounded-full border border-orange-300/80 px-3 py-1 text-sm text-orange-700 hover:bg-orange-50" data-testid="back-btn">
            ← Back
          </Link>
          <p className="font-script text-2xl text-slate-800">“Filmmaking is a chance to live many lifetimes.” – Robert Altman</p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-12 md:grid-cols-2">
          {/* Polaroid image */}
          <div className="polaroid max-w-md">
            <div className="relative h-80 w-full overflow-hidden rounded-sm">
              <img
                src="../../public/images/Film-Production.png"
                alt="Film Production"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="pt-4 text-center text-lg text-slate-800">Film Production</div>
          </div>

          {/* Copy */}
          <div>
            <p className="max-w-xl text-slate-700">
              Who says films are just an escape? We see them as a way to live many lives – to feel, to explore, and to tell stories that stay. And with each film, we carry new memories and new reasons to keep creating.
            </p>
            <p className="mt-4 font-semibold text-slate-800">V crafts:</p>
            <ul className="mt-2 list-disc space-y-1 pl-6 text-slate-700" data-testid="fp-list">
              <li>Documentaries</li>
              <li>Corporate Videos</li>
              <li>2D Animation Videos</li>
              <li>3D Animation Videos</li>
            </ul>

            <div className="mt-10 flex items-center gap-3">
              <span className="text-sm text-slate-700">Explore Now</span>
              <span className="inline-block h-1 w-24 rounded-full bg-orange-500"></span>
            </div>
          </div>
        </div>

        {/* Decorative icons */}
        <div className="pointer-events-none mt-10 grid grid-cols-2 opacity-80 md:grid-cols-4">
          <CameraIcon className="h-12" />
          <CameraIcon className="h-12 justify-self-end rotate-12" />
          <CameraIcon className="h-12 -rotate-6" />
          <CameraIcon className="h-12 justify-self-end" />
        </div>
      </div>
    </section>
  );
}
