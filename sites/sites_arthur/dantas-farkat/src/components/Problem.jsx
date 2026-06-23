import Reveal from "./ui/Reveal.jsx";
import { PROBLEMS } from "../data.js";

export default function Problem() {
  return (
    <section className="df-sec df-paper" id="problema">
      <div className="df-wrap">
        <Reveal className="df-sec-head">
          <p className="df-mono df-label">01 — O problema</p>
          <h2 className="df-h2">
            Receber o processo não é o pior.{" "}
            <span className="df-ink-dim">É descobrir tarde demais que dava para evitá-lo.</span>
          </h2>
        </Reveal>
        <div className="df-prob-grid">
          {PROBLEMS.map((p, i) => (
            <Reveal className="df-prob" key={p.t} delay={i * 90}>
              <span className="df-mono df-prob-n">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="df-prob-t">{p.t}</h3>
              <p className="df-prob-d">{p.d}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
