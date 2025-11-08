import { Link } from "react-router-dom";
import BG from "@/assets/BG.png";
import IndiaGate from "@/assets/IndiaGate.png";
import GroupImage from "@/assets/group.png";



function Arrow({ className = "" }) {
    return (
        <svg
            viewBox="0 0 200 90"
            className={className}
            fill="none"
            stroke="#223245"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M10 40c30-30 80-30 120 0" />
            <path d="M120 40c10 6 20 12 30 16" />
            <path d="M140 22l10 34" />
        </svg>
    );
}

function Silhouettes() {
    return (
        <svg viewBox="0 0 520 300" className="w-full max-w-xl text-slate-800/90">
            <g fill="#102a43">
                <path d="M40 260c-5-35 10-60 30-72 8-18-3-40 20-46 23 7 12 28 20 46 20 12 35 37 30 72z" />
                <path d="M140 260c-4-30 5-54 24-70-8-18-7-38 16-44 23 6 22 26 14 44 19 16 28 40 24 70z" />
                <path d="M235 260c-5-36 14-64 34-76 6-20 0-42 22-48 22 6 16 28 22 48 20 12 39 40 34 76z" />
                <path d="M340 260c-3-28 6-52 25-68-9-18-8-38 14-44 22 6 21 26 13 44 19 16 28 40 25 68z" />
                <path d="M435 260c-5-34 10-58 30-70 8-18-4-38 18-46 22 8 10 28 18 46 20 12 35 36 30 70z" />
            </g>
            <ellipse cx="260" cy="275" rx="180" ry="12" fill="#0f2740" opacity="0.12" />
        </svg>
    );
}

export default function AboutTeam() {
    return (
        <section
            id="team"
            data-testid="about-team-section"
            className="relative paper-bg ornament-frame bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: `url(${BG})`, // ✅ Set background image
            }}
        >
            <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-16 md:grid-cols-12 bg-white/60 backdrop-blur-[1px]">
                {/* Left cluster */}
                <div className="relative md:col-span-5">
                    {/* Sticky note */}
                    <div className="sticky-note relative inline-block -rotate-2">
                        <p className="max-w-xs text-sm text-slate-700">
                            Some craft films. Some build brands. Some curate art. We bring it
                            all together – a collective of storytellers driven by one belief:
                            every project deserves to be more than just a message; it should
                            become a masterpiece. From first spark to final frame, from raw
                            ideas to timeless visuals – we shape stories that stay with you.
                        </p>
                        <span className="absolute -top-6 right-6 h-10 w-10 rotate-12 rounded-full border-2 border-slate-400/70"></span>
                    </div>

                    {/* Landmark illustration (India Gate) */}
                    <div className="mt-10 w-48 md:w-60 mx-auto">
                        <img
                            src={IndiaGate}
                            alt="India Gate landmark"
                            className="w-full h-auto rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
                        />
                    </div>


                    <div className="mt-4 text-sm font-serif-display text-slate-700">
                        Branding Experts
                    </div>
                </div>

                {/* Right cluster */}
                <div className="relative md:col-span-7">
                    <div className="absolute -top-8 left-12 hidden md:block">
                        <div className="-rotate-6 font-script text-xl text-slate-800">
                            Film Makers
                        </div>
                        <Arrow className="h-16 w-40" />
                    </div>

                    <div className="absolute right-8 top-8 hidden md:block">
                        <div className="rotate-3 text-right font-script text-xl text-slate-800">
                            Art Curators
                        </div>
                        <Arrow className="h-16 w-40 rotate-180" />
                    </div>

                    <Silhouettes />

                    <p className="mt-8 text-center font-serif-display text-xl text-slate-800">
                        Take a closer look at the stories V bring to life.
                    </p>
                    <div className="mt-6 flex justify-center">
                        <a
                            href="#portfolio"
                            data-testid="portfolio-cta"
                            className="rounded-full bg-orange-500 px-5 py-2 text-white shadow hover:bg-orange-600"
                        >
                            View Portfolio
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
