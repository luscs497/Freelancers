'use client';

import { motion } from 'framer-motion';

const servicos = [
  {
    numero: '01',
    titulo: 'Presença de Marca',
    desc: 'Estratégia e gestão da sua presença digital. Conteúdo com intenção, calendário organizado e copy que conecta.',
    items: ['Estratégia digital', 'Calendário editorial', 'Copywriting', 'Gestão de redes'],
    cor: 'bg-azul text-creme',
  },
  {
    numero: '02',
    titulo: 'Identidade Visual',
    desc: 'Construção completa de marca: do conceito ao manual. Logo, paleta, tipografia e sistema de aplicação.',
    items: ['Naming & conceito', 'Logo & símbolo', 'Sistema visual', 'Manual de marca'],
    cor: 'bg-amarelo text-verde-escuro',
  },
  {
    numero: '03',
    titulo: 'Fotografia Profissional',
    desc: 'Imagens que contam a história da sua marca. Ensaios, produtos, ambientes e eventos com direção criativa.',
    items: ['Ensaios de marca', 'Fotografia de produto', 'Cobertura de eventos', 'Direção de arte'],
    cor: 'bg-verde text-creme',
  },
];

export default function Servicos() {
  return (
    <section id="servicos" className="relative bg-creme py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-azul font-sans tracking-[0.3em] text-xs md:text-sm mb-4 uppercase">
            · 03 · E a gente faz o quê?
          </p>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] text-verde-escuro font-medium max-w-4xl">
            O que <em className="text-terra not-italic">a gente faz.</em>
          </h2>
        </motion.div>

        <div className="mt-16 md:mt-20 grid md:grid-cols-3 gap-6">
          {servicos.map((s, i) => (
            <motion.article
              key={s.numero}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              className={`${s.cor} p-8 md:p-10 rounded-sm relative overflow-hidden group cursor-default min-h-[420px] flex flex-col`}
            >
              <span className="font-display text-7xl md:text-8xl font-medium opacity-30">
                {s.numero}
              </span>

              <h3 className="font-display text-3xl md:text-4xl font-medium mt-4">
                {s.titulo}
              </h3>

              <p className="mt-4 text-base leading-relaxed opacity-90 flex-grow">
                {s.desc}
              </p>

              <ul className="mt-6 space-y-2">
                {s.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm">
                    <span className="w-1.5 h-1.5 bg-current rounded-full opacity-60" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Detalhe geométrico no canto */}
              <svg
                className="absolute -bottom-8 -right-8 w-32 h-32 opacity-20"
                viewBox="0 0 100 100"
              >
                <path
                  d="M 50 0 L 100 50 L 50 100 L 0 50 Z"
                  fill="currentColor"
                />
              </svg>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
