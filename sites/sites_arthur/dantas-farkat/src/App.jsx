import Topbar from "./components/Topbar.jsx";
import Hero from "./components/Hero.jsx";
import Problem from "./components/Problem.jsx";
import Cost from "./components/Cost.jsx";
import Diagnostic from "./components/Diagnostic.jsx";
import Services from "./components/Services.jsx";
import Audience from "./components/Audience.jsx";
import Why from "./components/Why.jsx";
import Faq from "./components/Faq.jsx";
import FinalCta from "./components/FinalCta.jsx";
import Footer from "./components/Footer.jsx";
import WhatsappButton from "./components/WhatsappButton.jsx";

export default function App() {
  return (
    <div className="df-root">
      <Topbar />
      <main id="topo">
        <Hero />
        <Problem />
        <Cost />
        <Diagnostic />
        <Services />
        <Audience />
        <Why />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <WhatsappButton />
    </div>
  );
}
