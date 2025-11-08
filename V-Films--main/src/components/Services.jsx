import { Link } from "react-router-dom";

export default function Services() {
  const cards = [
    {
      title: "Film Production",
      img: "https://plus.unsplash.com/premium_photo-1709371824843-2b72258fbd71?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1267",
      tilt: "-rotate-3",
      to: "/film-production",
    },
    {
      title: "Branding",
      img: "https://plus.unsplash.com/premium_photo-1661281412140-dfb328ae967b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
      tilt: "rotate-2",
      to: "/branding",
    },
    {
      title: "Art Curation",
      img: "https://images.unsplash.com/photo-1710294437659-c3706109b2cc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
      tilt: "-rotate-1",
      to: "/art-curation",
    },
  ];

  return (
    <section id="services" data-testid="services-section" className="paper-bg ornament-frame">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="mx-auto max-w-3xl text-center font-serif-display text-2xl text-slate-800" data-testid="services-title">
          The storyboard reveals the breadth of our craft.
        </h2>

        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c, idx) => {
            const Card = (
              <div className={`polaroid ${c.tilt}`} data-testid={`service-card-${idx}`}>
                <div className="relative h-72 w-full overflow-hidden rounded-sm">
                  <img src={c.img} alt={c.title} className="h-full w-full object-cover" />
                </div>
                <div className="pt-4 text-center text-lg text-slate-800">{c.title}</div>
              </div>
            );
            return c.to ? (
              <Link key={c.title} to={c.to} data-testid={`service-link-${idx}`} className="block hover:scale-[1.01] transition-transform">
                {Card}
              </Link>
            ) : (
              <div key={c.title}>{Card}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
