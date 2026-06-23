import { useState } from "react";
import Reveal from "./ui/Reveal.jsx";
import { FAQ } from "../data.js";

function List() {
  const [open, setOpen] = useState(0);
  return (
    <div className="df-faq">
      {FAQ.map(([q, a], i) => {
        const isOpen = open === i;
        return (
          <div className={`df-faq-item ${isOpen ? "open" : ""}`} key={i}>
            <button className="df-faq-q" onClick={() => setOpen(isOpen ? -1 : i)} aria-expanded={isOpen}>
              <span className="df-mono df-faq-n">{String(i + 1).padStart(2, "0")}</span>
              <span className="df-faq-qt">{q}</span>
              <span className="df-faq-ic" aria-hidden="true">{isOpen ? "–" : "+"}</span>
            </button>
            <div className="df-faq-a" style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}>
              <div><p>{a}</p></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function Faq() {
  return (
    <section className="df-sec df-paper-2">
      <div className="df-wrap df-faq-wrap">
        <Reveal className="df-sec-head">
          <p className="df-mono df-label">07 — Dúvidas frequentes</p>
          <h2 className="df-h2">Antes da conversa.</h2>
        </Reveal>
        <Reveal delay={80}><List /></Reveal>
      </div>
    </section>
  );
}
