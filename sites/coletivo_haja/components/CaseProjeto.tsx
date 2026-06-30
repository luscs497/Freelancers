'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import type { Projeto } from '@/lib/projetos';
import Nav from './Nav';
import Footer from './Footer';

type Props = {
  projeto: Projeto;
  proximo: Projeto;
};

export default function CaseProjeto({ projeto, proximo }: Props) {
  return (
    <>
      <Nav />
      <main>
        {/* Hero do case */}
        <section
          className="relative pt-32 md:pt-40 pb-20 md:pb-28 overflow-hidden"
          style={{ backgroundColor: projeto.corFundo, color: projeto.corTexto }}
        >
          <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-sm tracking-wider uppercase mb-10 hover:opacity-70 transition-opacity"
              style={{ color: projeto.corTexto }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 12H5M5 12L12 19M5 12L12 5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Portfólio
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="font-sans tracking-[0.3em] text-xs md:text-sm mb-4 uppercase opacity-80">
                · {projeto.categoria} · {projeto.ano} ·
              </p>
              <h1 className="font-display text-6xl md:text-8xl lg:text-[10rem] leading-[0.9] font-medium tracking-tight">
                {projeto.nome}
              </h1>
              <p className="mt-8 max-w-2xl text-lg md:text-xl leading-relaxed opacity-90">
                {projeto.resumo}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Capa em destaque */}
        <section className="bg-creme py-12 md:py-20">
          <div className="max-w-6xl mx-auto px-6 md:px-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="aspect-[16/9] overflow-hidden rounded-sm shadow-2xl"
              style={{ backgroundColor: projeto.corFundo }}
            >
              <img
                src={projeto.capa}
                alt={`${projeto.nome} — capa`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </section>

        {/* Sobre o projeto */}
        <section className="bg-creme py-16 md:py-24">
          <div className="max-w-5xl mx-auto px-6 md:px-10">
            <div className="grid md:grid-cols-3 gap-10 md:gap-16">
              <div>
                <p className="text-azul font-sans tracking-[0.3em] text-xs uppercase mb-3">
                  · Sobre ·
                </p>
                <h2 className="font-display text-3xl md:text-4xl text-verde-escuro font-medium leading-tight">
                  O projeto.
                </h2>
              </div>
              <div className="md:col-span-2">
                <p className="text-verde-escuro/90 text-lg md:text-xl leading-relaxed">
                  {projeto.descricao}
                </p>
                <div className="mt-10 grid grid-cols-2 gap-6 text-sm">
                  <div>
                    <p className="text-verde-escuro/50 uppercase tracking-wider text-xs mb-1">Cliente</p>
                    <p className="text-verde-escuro font-medium">{projeto.nome}</p>
                  </div>
                  <div>
                    <p className="text-verde-escuro/50 uppercase tracking-wider text-xs mb-1">Categoria</p>
                    <p className="text-verde-escuro font-medium">{projeto.categoria}</p>
                  </div>
                  <div>
                    <p className="text-verde-escuro/50 uppercase tracking-wider text-xs mb-1">Serviço</p>
                    <p className="text-verde-escuro font-medium">{projeto.tipo}</p>
                  </div>
                  <div>
                    <p className="text-verde-escuro/50 uppercase tracking-wider text-xs mb-1">Ano</p>
                    <p className="text-verde-escuro font-medium">{projeto.ano}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Galeria */}
        <section className="bg-creme pb-16 md:pb-24">
          <div className="max-w-6xl mx-auto px-6 md:px-10">
            <div className="flex flex-col gap-8 md:gap-12">
              {projeto.galeria.slice(1).map((img, i) => (
                <motion.div
                  key={img}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.7 }}
                  className="overflow-hidden rounded-sm shadow-lg"
                  style={{ backgroundColor: projeto.corFundo }}
                >
                  <img
                    src={img}
                    alt={`${projeto.nome} — peça ${i + 1}`}
                    className="w-full h-auto"
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Paleta de cores */}
        <section className="bg-creme-escuro py-16 md:py-24">
          <div className="max-w-5xl mx-auto px-6 md:px-10">
            <div className="grid md:grid-cols-3 gap-10 md:gap-16 mb-10">
              <div>
                <p className="text-azul font-sans tracking-[0.3em] text-xs uppercase mb-3">
                  · Paleta ·
                </p>
                <h2 className="font-display text-3xl md:text-4xl text-verde-escuro font-medium leading-tight">
                  Cores.
                </h2>
              </div>
              <div className="md:col-span-2 text-verde-escuro/80 text-base md:text-lg leading-relaxed">
                <p>
                  Cores escolhidas para traduzir a personalidade da marca e construir
                  uma presença coerente em todas as aplicações.
                </p>
                {projeto.tipografia && (
                  <p className="mt-4 text-sm">
                    <strong className="text-verde-escuro">Tipografia:</strong> {projeto.tipografia}
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {projeto.paleta.map((cor) => (
                <div key={cor.hex} className="group">
                  <div
                    className="aspect-square rounded-sm shadow-md mb-3 border border-verde-escuro/10"
                    style={{ backgroundColor: cor.hex }}
                  />
                  <p className="font-display text-lg text-verde-escuro">{cor.nome}</p>
                  <p className="text-xs uppercase tracking-wider text-verde-escuro/50 mt-1">
                    {cor.hex}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Próximo projeto */}
        <section
          className="relative py-20 md:py-28 overflow-hidden"
          style={{ backgroundColor: proximo.corFundo, color: proximo.corTexto }}
        >
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <Link href={`/portfolio/${proximo.slug}`} className="group block">
              <p className="font-sans tracking-[0.3em] text-xs uppercase mb-4 opacity-70">
                · Próximo projeto ·
              </p>
              <div className="flex items-end justify-between gap-6 flex-wrap">
                <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-medium leading-none">
                  {proximo.nome}
                </h2>
                <span className="inline-flex items-center justify-center w-14 h-14 md:w-20 md:h-20 rounded-full border-2 border-current group-hover:rotate-45 transition-transform duration-500">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17L17 7M17 7H8M17 7v9" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
              <p className="mt-6 text-base md:text-lg opacity-80 max-w-2xl">
                {proximo.resumo}
              </p>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
