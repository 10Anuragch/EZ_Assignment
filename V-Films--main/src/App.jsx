import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import AboutTeam from "./components/AboutTeam.jsx";
import AboutUs from "./components/AboutUs.jsx";
import Services from "./components/Services.jsx";
import Portfolio from "./components/Portfolio.jsx";
import Contact from "./components/Contact.jsx";
import FilmProduction from "./components/FilmProduction.jsx";
import Branding from "./components/Branding.jsx";
import ArtCuration from "./components/ArtCuration.jsx";

const Home = () => {
  return (
    <div data-testid="landing-page">
      <Header />
      <main>
        <Hero />
        <AboutTeam />
        <AboutUs />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      <footer id="contact" className="paper-bg ornament-frame">
        <div className="mx-auto max-w-7xl px-6 py-10 text-center text-sm text-slate-600">
          <p data-testid="footer-text">© {new Date().getFullYear()} VFilms · Built for demo from provided design references</p>
        </div>
      </footer>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}> 
            <Route index element={<Home />} />
          </Route>
          <Route path="/film-production" element={<FilmProduction />} />
          <Route path="/branding" element={<Branding />} />
          <Route path="/art-curation" element={<ArtCuration />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
