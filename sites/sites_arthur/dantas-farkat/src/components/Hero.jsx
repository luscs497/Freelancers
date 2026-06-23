import Reveal from "./ui/Reveal.jsx";
import Arrow from "./ui/Arrow.jsx";
import { WHATSAPP } from "../config.js";
import heroImg from "../assets/hero.webp";

const STEPS = ["Hoje", "Meses", "Anos", "Processo"];

export default function Hero() {
  return (
    <section className="df-hero">
      <div className="df-hero-bg" aria-hidden="true" />
      <span className="df-watermark" aria-hidden="true">D&amp;F</span>

      <div className="df-wrap df-hero-grid">
        <div className="df-hero-copy">
          <Reveal as="p" className="df-mono df-eyebrow">
            <span className="df-eyebrow-dot" />Direito trabalhista · Empresas
          </Reveal>
          <Reveal as="h1" className="df-h1" delay={80}>
            O processo trabalhista da sua empresa <em>já começou.</em> Ele só ainda não apareceu.
          </Reveal>
          <Reveal as="p" className="df-lead" delay={160}>
            Ações raramente nascem no dia da demissão. Elas se formam meses — às vezes anos — antes, em pequenas falhas silenciosas da rotina.
          </Reveal>
          <Reveal className="df-hero-cta" delay={220}>
            <a href="#diagnostico" className="df-btn df-btn-solid">Fazer o diagnóstico <Arrow /></a>
            <a href="#sinais" className="df-btn df-btn-line">Ver os sinais de risco</a>
          </Reveal>

          <Reveal className="df-timeline" delay={300}>
            <p className="df-mono df-timeline-cap">Como um passivo se forma</p>
            <div className="df-timeline-track">
              {STEPS.map((m, i) => (
                <div className={`df-tl-step ${i === STEPS.length - 1 ? "end" : ""}`} key={m}>
                  <span className="df-tl-dot" />
                  <span className="df-mono df-tl-label">{m}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal className="df-hero-figure" delay={140}>
          <div className="df-portrait df-portrait-hero">
            <img src={heroImg} alt="Advogado da Dantas & Farkat" loading="eager" />
            <div className="df-portrait-tag">
              <span className="df-mono">Diagnóstico Preventivo</span>
              <span className="df-portrait-tag-sub">Riscos invisíveis · contratos · gestores · defesa</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
