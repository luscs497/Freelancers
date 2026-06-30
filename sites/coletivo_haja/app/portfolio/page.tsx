import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ProjetoCard from '@/components/ProjetoCard';
import Estrela from '@/components/Estrela';
import { projetos } from '@/lib/projetos';

export const metadata: Metadata = {
  title: 'Portfólio — Coletivo Haja',
  description:
    'Conheça os projetos do Coletivo Haja: identidade visual, fotografia e presença de marca para empreendedores potiguares.',
};

export default function PortfolioPage() {
  return (
    <>
      <Nav />
      <main>
        {/* Hero da página de portfólio */}
        <section className="relative bg-verde text-creme pt-32 md:pt-40 pb-20 md:pb-28 overflow-hidden">
          <div className="absolute top-20 right-10 w-24 md:w-32 opacity-30">
            <Estrela color="#E8B43C" />
          </div>
          <div className="absolute bottom-10 left-10 w-16 md:w-20 opacity-20">
            <Estrela color="#E8B43C" />
          </div>

          <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
            <p className="text-amarelo font-sans tracking-[0.3em] text-xs md:text-sm mb-4 uppercase">
              · Portfólio ·
            </p>
            <h1 className="font-display text-6xl md:text-8xl lg:text-9xl leading-[0.95] font-medium max-w-5xl">
              Marcas que <em className="text-amarelo not-italic">caminharam</em> com a gente.
            </h1>
            <p className="mt-8 max-w-2xl text-lg md:text-xl text-creme/85 leading-relaxed">
              Cada projeto é uma história de identidade, propósito e movimento.
              Conheça os trabalhos que ajudamos a colocar de pé.
            </p>
          </div>
        </section>

        {/* Listagem de projetos */}
        <section className="relative bg-creme py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="grid md:grid-cols-2 gap-8 md:gap-10">
              {projetos.map((projeto, i) => (
                <ProjetoCard key={projeto.slug} projeto={projeto} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA pra contato */}
        <section className="bg-verde-escuro text-creme py-20 md:py-28">
          <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
            <h2 className="font-display text-4xl md:text-6xl leading-tight font-medium">
              Sua marca pode ser a próxima.
            </h2>
            <p className="mt-6 text-lg text-creme/80 max-w-xl mx-auto">
              Vamos construir juntos uma identidade que tenha rosto, voz e presença.
            </p>
            <a
              href="/#contato"
              className="inline-block mt-10 px-8 py-4 bg-amarelo text-verde-escuro font-semibold rounded-full hover:bg-creme transition-colors"
            >
              Bora agir?
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
