'use client';

import { motion } from 'framer-motion';
import Sol from './Sol';
import AzulejoPattern from './AzulejoPattern';

export default function Contato() {
  return (
    <section
      id="contato"
      className="relative bg-terra text-creme py-24 md:py-32 overflow-hidden"
    >
      {/* Faixa de azulejaria no topo — bgTransparent pra não clarear a borda */}
      <div className="absolute top-0 left-0 right-0 h-16 md:h-24 opacity-40 pointer-events-none">
        <AzulejoPattern variant="amarelo" bgTransparent />
      </div>

      {/* Faixa de azulejaria no fim */}
      <div className="absolute bottom-0 left-0 right-0 h-16 md:h-24 opacity-40 pointer-events-none">
        <AzulejoPattern variant="amarelo" bgTransparent />
      </div>

      {/* Sol grande no canto direito */}
      <div className="absolute top-1/2 -right-16 md:right-4 -translate-y-1/2 w-40 md:w-56 opacity-30 animate-spin-slow pointer-events-none">
        <Sol rays={28} color="#F5EFE0" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-creme font-sans tracking-[0.3em] text-xs md:text-sm mb-4 uppercase font-semibold">
            · 04 · Como falar c'ocês
          </p>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] font-medium max-w-4xl text-creme">
            Bora <em className="not-italic underline decoration-2 underline-offset-8">agir</em>?
          </h2>

          <p className="mt-8 max-w-2xl text-lg md:text-xl text-creme leading-relaxed font-medium">
            Mais do que expressar, nossa missão é desenvolver clareza, posicionamento e autoridade.
            Tanto no digital quanto fora dele.
          </p>
        </motion.div>

        <div className="mt-16 grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl">
          {/* WhatsApp */}
          <motion.a
            href="https://wa.me/5584991156767"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group bg-creme text-verde-escuro p-8 md:p-10 rounded-sm hover:bg-amarelo transition-colors block shadow-xl"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs uppercase tracking-widest text-verde-escuro/60 mb-2">
                  WhatsApp
                </p>
                <p className="font-display text-3xl md:text-4xl font-medium">
                  (84) 9 9115-6767
                </p>
              </div>
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform"
              >
                <path d="M7 17L17 7M17 7H8M17 7v9" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <p className="mt-6 text-sm text-verde-escuro/70">
              Manda um oi por lá. Respondemos rapidinho.
            </p>
          </motion.a>

          {/* Email */}
          <motion.a
            href="mailto:coletivohaja@gmail.com"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="group bg-verde-escuro text-creme p-8 md:p-10 rounded-sm hover:bg-verde transition-colors block shadow-xl"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs uppercase tracking-widest text-creme/60 mb-2">
                  Email
                </p>
                <p className="font-display text-2xl md:text-3xl font-medium break-all">
                  coletivohaja@gmail.com
                </p>
              </div>
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform flex-shrink-0 ml-4"
              >
                <path d="M7 17L17 7M17 7H8M17 7v9" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <p className="mt-6 text-sm text-creme/70">
              Pra propostas mais detalhadas, conta tudo por email.
            </p>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
