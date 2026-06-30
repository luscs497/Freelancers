'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Estrela from './Estrela';

const time = [
  {
    nome: 'Eduardo Erick',
    cargo: 'Fundador & Diretor de Imagem',
    desc: 'Fotógrafo profissional, responsável pela criação de imagens do Coletivo.',
    iniciais: 'EE',
    foto: '/team/eduardo.jpg',
  },
  {
    nome: 'Mariana Esmeralda',
    cargo: 'Mentora Criativa & Designer',
    desc: 'Designer gráfico, diretora do setor criativo do Coletivo.',
    iniciais: 'ME',
    foto: '/team/mariana.jpg',
  },
];

export default function QuemSomos() {
  return (
    <section id="quem-somos" className="relative bg-verde-escuro text-creme py-24 md:py-32 overflow-hidden">
      <div className="absolute top-10 right-10 w-32 md:w-48 opacity-20">
        <Estrela color="#E8B43C" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-amarelo font-sans tracking-[0.3em] text-xs md:text-sm mb-4 uppercase">
            · 02 · Quem é esse povo
          </p>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] font-medium max-w-4xl">
            Nós do <em className="text-amarelo not-italic">Haja</em>.
          </h2>

          <p className="mt-10 max-w-3xl text-lg md:text-xl text-creme/80 leading-relaxed">
            Unimos visão, criatividade e estratégia para ajudar marcas a saírem da ideia
            e entrarem em movimento. Nosso convite é simples: <strong className="text-amarelo">agir</strong>, <strong className="text-amarelo">criar</strong>, dar vida, rosto e presença ao seu empreendimento.
          </p>
        </motion.div>

        <div className="mt-20 grid md:grid-cols-2 gap-6 md:gap-10">
          {time.map((p, i) => (
            <motion.div
              key={p.nome}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="group relative"
            >
              <div className="aspect-[4/5] bg-gradient-to-br from-verde to-verde-escuro border border-amarelo/20 relative overflow-hidden flex items-center justify-center">
                {/* Foto do membro */}
                <Image
                  src={p.foto}
                  alt={p.nome}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />

                {/* Padrão decorativo */}
                <div className="absolute inset-0 opacity-20">
                  <svg viewBox="0 0 200 200" className="w-full h-full">
                    <defs>
                      <pattern id={`dots-${i}`} x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                        <circle cx="10" cy="10" r="1" fill="#E8B43C" />
                      </pattern>
                    </defs>
                    <rect width="200" height="200" fill={`url(#dots-${i})`} />
                  </svg>
                </div>

                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-verde-escuro/95 via-verde-escuro/60 to-transparent pt-16 pb-6 px-6">
                  <h3 className="font-display text-3xl md:text-4xl text-creme font-medium">
                    {p.nome}
                  </h3>
                  <p className="text-amarelo text-sm tracking-wide uppercase mt-1">
                    {p.cargo}
                  </p>
                </div>
              </div>
              <p className="mt-4 text-creme/70 text-sm leading-relaxed">
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 text-center"
        >
          <p className="font-display text-3xl md:text-5xl text-amarelo italic">
            "Caminhar com você será um prazer."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
