import Reveal from "./ui/Reveal.jsx";
import { REASONS } from "../data.js";
import aboutImg from "../assets/about.webp";

export default function Why() {
  return (
    <section className="df-sec df-paper df-why">
      <div className="df-wrap df-why-grid">
        <Reveal className="df-why-figure">
          <div className="df-portrait df-portrait-about">
            <img src={aboutImg} alt="Sócio da Dantas & Farkat" loading="lazy" />
            <span className="df-portrait-rule" aria-hidden="true" />
          </div>
        </Reveal>
        <div className="df-why-copy">
          <Reveal as="p" className="df-mono df-label">06 — Por que a Dantas &amp; Farkat</Reveal>
          <Reveal as="h2" className="df-h2" delay={70}>
            Mais do que responder processos: prevenir os próximos.
          </Reveal>
          <div className="df-why-list">
            {REASONS.map((r, i) => (
              <Reveal className="df-why-item" key={r.t} delay={120 + i * 70}>
                <h3>{r.t}</h3>
                <p>{r.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
