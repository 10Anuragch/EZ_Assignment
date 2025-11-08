import { useState } from "react";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#hero" className="text-xl font-semibold" data-testid="brand-logo">
            <span className="text-orange-500">V</span>
            <span>Films</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-slate-800" aria-label="primary">
            <a href="#services" data-testid="nav-services" className="hover:text-orange-500 transition">Services</a>
            <a href="#stories" data-testid="nav-stories" className="hover:text-orange-500 transition">Their Stories</a>
            <a href="#about" data-testid="nav-about" className="hover:text-orange-500 transition">Our Story</a>
            <a href="#varnan" data-testid="nav-varnan" className="hover:text-orange-500 transition">Varnan</a>
            <a href="#contact" data-testid="nav-cta" className="rounded-full bg-orange-500 px-4 py-2 font-medium text-white shadow hover:bg-orange-600">Let's Talk</a>
          </nav>

          <button
            data-testid="hamburger"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-300 bg-white/80 backdrop-blur text-slate-800 shadow-sm"
            aria-label="Open navigation"
          >
            <span className="sr-only">Toggle menu</span>
            <div className="space-y-1.5" aria-hidden>
              <span className="block h-0.5 w-5 bg-slate-800"></span>
              <span className="block h-0.5 w-5 bg-slate-800"></span>
              <span className="block h-0.5 w-5 bg-slate-800"></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile overlay */}
      {open && (
        <div className="md:hidden fixed inset-0 z-50 bg-white/95 backdrop-blur paper-bg">
          <div className="mx-auto max-w-3xl px-6 pt-6">
            <div className="flex items-center justify-between">
              <a href="#hero" className="text-2xl font-semibold" onClick={() => setOpen(false)}>
                <span className="text-orange-500">V</span>Films
              </a>
              <button data-testid="close-menu" onClick={() => setOpen(false)} className="h-10 w-10 rounded-full border border-slate-300 text-slate-700">
                ✕
              </button>
            </div>
            <nav className="mt-10 grid gap-6 text-lg">
              <a href="#services" onClick={() => setOpen(false)} className="hover:text-orange-500">Services</a>
              <a href="#stories" onClick={() => setOpen(false)} className="hover:text-orange-500">Their Stories</a>
              <a href="#about" onClick={() => setOpen(false)} className="hover:text-orange-500">Our Story</a>
              <a href="#varnan" onClick={() => setOpen(false)} className="hover:text-orange-500">Varnan</a>
              <a href="#contact" onClick={() => setOpen(false)} className="inline-flex w-max items-center gap-2 rounded-full bg-orange-500 px-5 py-2 text-white shadow hover:bg-orange-600">Let's Talk</a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
