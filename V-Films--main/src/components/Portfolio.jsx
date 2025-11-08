import BG from "@/assets/BG.png"; // ✅ Import background image

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      data-testid="portfolio-section"
      className="paper-bg ornament-frame relative"
      style={{
        backgroundImage: `url(${BG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay for slight dim effect */}
      <div className="absolute inset-0 bg-white/80 -z-0"></div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-20">
        {/* Section Title */}
        <div className="text-center">
          <h3 className="font-serif-display text-2xl text-slate-800">
            The Highlight Reel
          </h3>
          <p className="mt-2 text-slate-600">
            Watch the magic we’ve captured.
          </p>
        </div>

        {/* Filmstrip Container */}
        <div className="mt-10 filmstrip mx-auto max-w-4xl">
          <div className="relative overflow-hidden rounded-md bg-white/90 shadow-lg">
            {/* Side arrows */}
            <div className="absolute inset-y-0 left-0 w-12 bg-white/95 flex items-center justify-center">
              <span className="select-none text-3xl text-slate-700">‹</span>
            </div>
            <div className="absolute inset-y-0 right-0 w-12 bg-white/95 flex items-center justify-center">
              <span className="select-none text-3xl text-slate-700">›</span>
            </div>

            {/* Embedded YouTube Video */}
            <div className="pl-12 pr-12">
              <div
                className="aspect-video"
                data-testid="portfolio-video"
              >
                <iframe
                  className="h-full w-full rounded-md"
                  src="https://www.youtube.com/embed/puF9CkvmJt0?si=YdH8-9bpof3W_RhP"
                  title="Showreel"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
