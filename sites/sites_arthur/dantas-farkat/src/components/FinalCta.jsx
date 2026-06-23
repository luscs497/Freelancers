import Reveal from "./ui/Reveal.jsx";
import Arrow from "./ui/Arrow.jsx";
import { WHATSAPP } from "../config.js";
import ctaImg from "../assets/cta.webp";

export default function FinalCta() {
  return (
    <section className="df-final" id="contato">
      <span className="df-watermark df-watermark-end" aria-hidden="true">D&amp;F</span>
      <div className="df-wrap df-final-grid">
        <div className="df-final-copy">
          <Reveal as="p" className="df-mono df-eyebrow">
            <span className="df-eyebrow-dot" />Conversa estratégica
          </Reveal>
          <Reveal as="h2" className="df-h2 df-final-h" delay={70}>
            Proteja a empresa <em>antes</em> que o trabalhista comprometa o crescimento.
          </Reveal>
          <Reveal as="p" className="df-lead df-lead-dark" delay={130}>
            Uma análise preventiva revela riscos invisíveis, reduz passivos e dá segurança para decidir.
          </Reveal>
          <Reveal className="df-final-cta" delay={190}>
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="df-btn df-btn-solid df-btn-lg">
              Agendar agora pelo WhatsApp <Arrow />
            </a>
            <a href="#diagnostico" className="df-btn df-btn-line">Refazer o diagnóstico</a>
          </Reveal>
        </div>
        <Reveal className="df-final-figure" delay={140}>
          <div className="df-portrait df-portrait-cta">
            <img src={ctaImg} alt="Advogado da Dantas & Farkat" loading="lazy" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
