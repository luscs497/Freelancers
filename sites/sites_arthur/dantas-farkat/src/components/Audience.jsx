import Reveal from "./ui/Reveal.jsx";
import { AUDIENCE } from "../data.js";

export default function Audience() {
  return (
    <section className="df-sec df-dark" id="sinais">
      <div className="df-wrap">
        <Reveal className="df-sec-head">
          <p className="df-mono df-label">05 — Para quem é</p>
          <h2 className="df-h2">Empresas que querem crescer com previsibilidade jurídica.</h2>
        </Reveal>
        <div className="df-aud">
          {AUDIENCE.map(([t, d], i) => (
            <Reveal className="df-aud-card" key={t} delay={i * 60}>
              <span className="df-aud-chamfer" aria-hidden="true" />
              <h3>{t}</h3>
              <p>{d}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
