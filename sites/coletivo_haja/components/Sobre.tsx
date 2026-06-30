'use client';

import { motion } from 'framer-motion';
import AzulejoPattern from './AzulejoPattern';

const pontos = [
  {
    titulo: 'Estratégia',
    texto:
      'Identificamos pontos de melhoria na sua presença digital e desenvolvemos uma comunicação estratégica e intencional.',
  },
  {
    titulo: 'Identidade',
    texto:
      'Criamos um visual que expressa sua identidade e desperta atenção. Construímos sua marca com personalidade, coerência e conexão.',
  },
  {
    titulo: 'Análise',
    texto:
      'Analisamos tendências, concorrência e oportunidades reais de crescimento.',
  },
  {
    titulo: 'Conteúdo',
    texto:
      'Estruturamos um calendário editorial com pautas e direcionamento claro. Copy com legendas e roteiros que geram ação e relacionamento.',
  },
];

export default function Sobre() {
  return (
    <section id="sobre" className="relative bg-creme py-24 md:py-32 overflow-hidden">
      {/* Padrão de azulejo decorativo nas laterais */}
      <div className="absolute top-0 right-0 w-32 md:w-56 h-full opacity-30 pointer-events-none">
        <AzulejoPattern variant="mixed" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-azul font-sans tracking-[0.3em] text-xs md:text-sm mb-4 uppercase">
            · 01 · O que somos
          </p>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] text-verde-escuro font-medium max-w-4xl">
            O Coletivo Haja nasce para <em className="text-terra not-italic">dar forma</em> à sua marca.
          </h2>

          <div className="mt-12 grid md:grid-cols-2 gap-8 md:gap-16 max-w-5xl">
            <p className="text-verde-escuro/90 text-lg md:text-xl leading-relaxed">
              Nosso trabalho começa entendendo <strong>quem você é</strong>, <strong>quem é o seu público</strong> e <strong>onde você quer chegar</strong>.
            </p>
            <p className="text-verde-escuro/80 text-base md:text-lg leading-relaxed">
              A partir disso, criamos uma comunicação intencional, com visual próprio e personalidade. Mais do que presença, buscamos posicionamento.
            </p>
          </div>
        </motion.div>

        {/* Grid de pontos */}
        <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pontos.map((p, i) => (
            <motion.div
              key={p.titulo}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-creme-claro border border-verde-escuro/10 p-6 md:p-8 rounded-sm hover:border-verde-escuro transition-colors group"
            >
              <span className="text-azul font-display text-3xl font-semibold">
                0{i + 1}
              </span>
              <h3 className="font-display text-2xl md:text-3xl text-verde-escuro mt-3 mb-3">
                {p.titulo}
              </h3>
              <p className="text-verde-escuro/70 text-sm leading-relaxed">
                {p.texto}
              </p>
              <div className="mt-4 h-px w-12 bg-amarelo group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
