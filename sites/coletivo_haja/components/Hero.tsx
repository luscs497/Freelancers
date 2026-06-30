'use client';

import { motion } from 'framer-motion';
import Sol from './Sol';
import Estrela from './Estrela';

export default function Hero() {
  return (
    <section
      id="topo"
      className="relative min-h-screen bg-verde text-creme overflow-hidden flex items-center pt-24 pb-12"
    >
      {/* Sol decorativo */}
      <div className="absolute -top-20 -right-20 md:-top-32 md:-right-32 w-[400px] md:w-[600px] opacity-90 animate-spin-slow">
        <Sol rays={32} />
      </div>

      {/* Estrela no canto */}
      <div className="absolute bottom-10 left-6 md:bottom-20 md:left-20 w-20 md:w-28 opacity-90">
        <Estrela color="#E8B43C" />
      </div>

      {/* Marquee de fundo no topo */}
      <div className="absolute top-20 left-0 right-0 overflow-hidden opacity-10 pointer-events-none">
        <div className="flex marquee-track whitespace-nowrap">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex">
              {Array.from({ length: 8 }).map((_, i) => (
                <span
                  key={i}
                  className="font-display text-[120px] leading-none px-6 text-creme"
                >
                  HAJA · LUZ ·
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-amarelo font-sans tracking-[0.3em] text-xs md:text-sm mb-6 uppercase">
            · Coletivo criativo · Natal / RN ·
          </p>

          <h1 className="font-display text-[14vw] md:text-[10vw] leading-[0.9] font-medium tracking-tight max-w-6xl">
            Damos <em className="text-amarelo not-italic">direção</em>
            <br />
            e vida à <br />
            sua <span className="text-amarelo">marca</span>.
          </h1>

          <div className="mt-12 md:mt-16 max-w-2xl">
            <p className="text-creme/90 text-lg md:text-xl leading-relaxed font-light">
              Mais do que presença, buscamos <strong className="font-semibold text-amarelo">posicionamento</strong>.
              Construímos sua marca com personalidade, coerência e conexão.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="#sobre"
                className="px-8 py-4 bg-amarelo text-verde-escuro font-semibold rounded-full hover:bg-creme transition-colors text-center"
              >
                Conhecer o Coletivo
              </a>
              <a
                href="#contato"
                className="px-8 py-4 border border-creme/40 text-creme font-medium rounded-full hover:bg-creme hover:text-verde-escuro transition-colors text-center"
              >
                Falar com a gente
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 right-6 md:right-10 hidden md:flex items-center gap-3 text-creme/60 text-xs uppercase tracking-widest">
        <span>role para baixo</span>
        <div className="w-12 h-px bg-creme/40 relative overflow-hidden">
          <div className="absolute inset-0 bg-amarelo animate-pulse" />
        </div>
      </div>
    </section>
  );
}
