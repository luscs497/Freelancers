import Reveal from "./ui/Reveal.jsx";
import officeImg from "../assets/office.webp";

export default function Cost() {
  return (
    <section className="df-sec df-dark df-cost">
      <div className="df-wrap df-cost-grid">
        <Reveal className="df-cost-figure">
          <div className="df-portrait df-portrait-office">
            <img src={officeImg} alt="Atuação no escritório" loading="lazy" />
          </div>
        </Reveal>
        <div className="df-cost-copy">
          <Reveal as="p" className="df-mono df-label">02 — O custo real</Reveal>
          <Reveal as="h2" className="df-h2" delay={70}>
            Um passivo trabalhista cobra muito além da indenização.
          </Reveal>
          <Reveal as="p" className="df-lead df-lead-dark" delay={130}>
            Ele consome tempo da gestão, produtividade, caixa, imagem e a energia que deveria ir para o crescimento.
          </Reveal>
          <div className="df-cost-cards">
            <Reveal className="df-cost-card" delay={170}>
              <h3>Prejuízo financeiro</h3>
              <p>Condenações, acordos, honorários e custas comprometem o caixa e a previsibilidade da operação.</p>
            </Reveal>
            <Reveal className="df-cost-card" delay={230}>
              <h3>Prejuízo de gestão</h3>
              <p>Quando o litígio vira rotina, o problema deixa de ser jurídico e revela falhas de organização e liderança.</p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
