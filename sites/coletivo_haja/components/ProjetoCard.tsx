'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import type { Projeto } from '@/lib/projetos';

type Props = {
  projeto: Projeto;
  index?: number;
};

export default function ProjetoCard({ projeto, index = 0 }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7, delay: index * 0.12 }}
    >
      <Link
        href={`/portfolio/${projeto.slug}`}
        className="group block relative overflow-hidden rounded-sm"
      >
        <div
          className="aspect-[4/3] relative overflow-hidden"
          style={{ backgroundColor: projeto.corFundo }}
        >
          <img
            src={projeto.capa}
            alt={`Capa do projeto ${projeto.nome}`}
            className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />

          {/* Overlay no hover */}
          <div className="absolute inset-0 bg-verde-escuro/0 group-hover:bg-verde-escuro/40 transition-colors duration-500 flex items-center justify-center">
            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-creme font-display text-xl tracking-wide flex items-center gap-2">
              Ver projeto
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H8M17 7v9" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </div>
        </div>

        <div className="mt-5 flex items-start justify-between gap-4">
          <div className="flex-1">
            <p className="text-azul text-xs tracking-[0.25em] uppercase mb-1">
              {projeto.categoria} · {projeto.ano}
            </p>
            <h3 className="font-display text-2xl md:text-3xl text-verde-escuro font-medium">
              {projeto.nome}
            </h3>
            <p className="text-verde-escuro/70 text-sm mt-2 leading-relaxed">
              {projeto.resumo}
            </p>
          </div>
          <div className="mt-2 flex-shrink-0">
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-verde-escuro/30 text-verde-escuro group-hover:bg-verde-escuro group-hover:text-creme group-hover:rotate-45 transition-all duration-500">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H8M17 7v9" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
