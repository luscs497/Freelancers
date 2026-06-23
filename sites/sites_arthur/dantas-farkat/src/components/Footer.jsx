import logoWhite from "../assets/logo-white.png";

export default function Footer() {
  return (
    <footer className="df-foot">
      <div className="df-wrap df-foot-in">
        <img className="df-foot-logo" src={logoWhite} alt="Dantas & Farkat Advogados" />
        <div className="df-foot-txt">
          <p className="df-foot-tag">Experiência jurídica que faz a diferença.</p>
          <p className="df-foot-fine">
            Conteúdo informativo. A análise do caso concreto deve ser realizada por advogado.
          </p>
        </div>
      </div>
    </footer>
  );
}
