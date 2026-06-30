import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import Sobre from '@/components/Sobre';
import QuemSomos from '@/components/QuemSomos';
import Servicos from '@/components/Servicos';
import PortfolioPreview from '@/components/PortfolioPreview';
import Contato from '@/components/Contato';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Sobre />
        <Marquee
          items={['EXPRESSAR', 'CONECTAR', 'COMPARTILHAR', 'CRIAR', 'AGIR']}
          bg="bg-verde-escuro"
          color="text-amarelo"
        />
        <QuemSomos />
        <Servicos />
        <PortfolioPreview />
        <Contato />
      </main>
      <Footer />
    </>
  );
}
