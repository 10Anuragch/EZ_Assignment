export default function AboutUs() {
  return (
    <section id="about" data-testid="about-us-section" className="paper-bg ornament-frame">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-16 md:grid-cols-2">
        <div>
          <h3 className="font-serif-display text-2xl text-slate-800">A montage of familiar faces and names.</h3>
          <p className="mt-4 max-w-md text-slate-600">
            Some stories come from the biggest names. Others begin with bold, rising voices. We’ve been fortunate to walk alongside both – listening, creating, and building stories that matter.
          </p>

          <div className="mt-10 grid max-w-lg grid-cols-3 gap-5">
            {[
              { n: "85+", t: "Projects" },
              { n: "50+", t: "Happy Clients" },
              { n: "10+", t: "Experts Team" },
            ].map((s) => (
              <div key={s.t} className="sticky-note" data-testid={`stat-${s.t.replace(/\s/g, '').toLowerCase()}`}>
                <div className="text-3xl font-semibold text-slate-800">{s.n}</div>
                <div className="mt-1 text-sm text-orange-600">{s.t}</div>
              </div>
            ))}
          </div>
        </div>

        <div id="stories">
          <blockquote className="font-script text-3xl leading-relaxed text-slate-800 md:text-4xl">
            Every project is more than just a brief – it’s a new chapter waiting to be written. Together, we’ve crafted tales that inspire, connect, and endure.
          </blockquote>
          <div className="mt-8 flex flex-wrap gap-6 text-orange-500/90">
            {["TED", "CocaCola", "DF", "Arion"].map((b) => (
              <span key={b} className="inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-sm shadow-sm" data-testid={`brand-${b.toLowerCase()}`}>
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
