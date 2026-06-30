'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { projetos } from '@/lib/projetos';
import ProjetoCard from './ProjetoCard';

export default function PortfolioPreview() {
  return (
    <section id="portfolio" className="relative bg-creme py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16"
        >
          <div>
            <p className="text-azul font-sans tracking-[0.3em] text-xs md:text-sm mb-4 uppercase">
              · Trabalhos ·
            </p>
            <h2 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] text-verde-escuro font-medium">
              Projetos que <em className="text-terra not-italic">deram certo.</em>
            </h2>
          </div>

          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-verde-escuro font-medium link-underline whitespace-nowrap"
          >
            Ver todos os projetos
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M17 7H8M17 7v9" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-10">
          {projetos.map((projeto, i) => (
            <ProjetoCard key={projeto.slug} projeto={projeto} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
