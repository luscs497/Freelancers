import Reveal from "./ui/Reveal.jsx";
import { SERVICES } from "../data.js";

export default function Services() {
  return (
    <section className="df-sec df-paper-2" id="atuacao">
      <div className="df-wrap">
        <Reveal className="df-sec-head">
          <p className="df-mono df-label">04 — Como atuamos</p>
          <h2 className="df-h2">Inteligência jurídica antes que o risco vire prejuízo.</h2>
        </Reveal>
        <div className="df-serv">
          {SERVICES.map((s, i) => (
            <Reveal className="df-serv-row" key={s.t} delay={i * 60}>
              <span className="df-mono df-serv-n">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="df-serv-t">{s.t}</h3>
              <p className="df-serv-d">{s.d}</p>
              <span className="df-serv-line" aria-hidden="true" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
