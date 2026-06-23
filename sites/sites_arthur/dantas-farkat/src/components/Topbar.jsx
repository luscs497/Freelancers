import { useEffect, useState } from "react";
import Arrow from "./ui/Arrow.jsx";
import { WHATSAPP } from "../config.js";
import logoWhite from "../assets/logo-white.png";

export default function Topbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`df-top ${scrolled ? "is-scrolled" : ""}`}>
      <div className="df-wrap df-top-in">
        <a href="#topo" className="df-brand" aria-label="Dantas & Farkat Advogados">
          <img src={logoWhite} alt="Dantas & Farkat Advogados" />
        </a>
        <a href={WHATSAPP} target="_blank" rel="noreferrer" className="df-btn df-btn-ghost df-top-cta">
          Conversa estratégica <Arrow />
        </a>
      </div>
    </header>
  );
}
