import { useCallback, useState } from "react";
import Reveal from "./ui/Reveal.jsx";
import Arrow from "./ui/Arrow.jsx";
import { SIGNALS, verdict } from "../data.js";
import { WHATSAPP } from "../config.js";

function Panel() {
  const [sel, setSel] = useState(() => new Set());
  const toggle = useCallback((i) => {
    setSel((prev) => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });
  }, []);

  const n = sel.size;
  const pct = n / SIGNALS.length;
  const v = verdict(n);

  const R = 120;
  const C = Math.PI * R;
  const off = C * (1 - pct);

  return (
    <div className="df-diag-panel">
      <div className="df-diag-grid">
        <div className="df-diag-list">
          <p className="df-mono df-diag-kicker">Marque o que reconhece na sua empresa</p>
          <ul>
            {SIGNALS.map((s, i) => {
              const on = sel.has(i);
              return (
                <li key={i}>
                  <button
                    type="button"
                    className={`df-signal ${on ? "on" : ""}`}
                    aria-pressed={on}
                    onClick={() => toggle(i)}
                  >
                    <span className="df-signal-box" aria-hidden="true">
                      <svg viewBox="0 0 24 24" width="14" height="14">
                        <path d="M5 12.5l4 4 10-10" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span className="df-signal-num df-mono">{String(i + 1).padStart(2, "0")}</span>
                    <span className="df-signal-txt">{s}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        <aside className={`df-diag-meter tone-${v.tone}`}>
          <p className="df-mono df-meter-kicker">Nível de exposição</p>
          <div className="df-gauge">
            <svg viewBox="0 0 280 160" width="100%" aria-hidden="true">
              <path d="M20 150 A120 120 0 0 1 260 150" fill="none" stroke="rgba(255,255,255,.10)" strokeWidth="14" strokeLinecap="round" />
              <path
                d="M20 150 A120 120 0 0 1 260 150"
                fill="none"
                stroke="var(--meter)"
                strokeWidth="14"
                strokeLinecap="round"
                strokeDasharray={C}
                strokeDashoffset={off}
                className="df-gauge-fill"
              />
            </svg>
            <div className="df-gauge-center">
              <span className="df-gauge-n df-mono">{n}<i>/8</i></span>
            </div>
          </div>
          <p className="df-meter-label">{v.label}</p>
          <p className="df-meter-copy">{v.copy}</p>
          <a className="df-btn df-btn-solid df-meter-cta" href={WHATSAPP} target="_blank" rel="noreferrer">
            {n >= 5 ? "Agendar com prioridade" : "Agendar análise preventiva"}
            <Arrow />
          </a>
        </aside>
      </div>
    </div>
  );
}

export default function Diagnostic() {
  return (
    <section className="df-sec df-paper df-diag" id="diagnostico">
      <div className="df-wrap">
        <Reveal className="df-sec-head df-sec-head-center">
          <p className="df-mono df-label">03 — Diagnóstico de exposição</p>
          <h2 className="df-h2">Em 8 sinais, onde sua empresa está agora.</h2>
          <p className="df-sec-sub">
            Marque o que acontece no dia a dia. O resultado é só uma leitura inicial — a análise do caso concreto é feita por advogado.
          </p>
        </Reveal>
        <Reveal delay={120}><Panel /></Reveal>
      </div>
    </section>
  );
}
