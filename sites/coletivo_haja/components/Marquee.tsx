'use client';

import Estrela from './Estrela';

type Props = {
  items?: string[];
  bg?: string;
  color?: string;
};

export default function Marquee({
  items = ['DIREÇÃO', 'CRIAÇÃO', 'PRESENÇA', 'IDENTIDADE', 'POSICIONAMENTO', 'BRASILIDADE'],
  bg = 'bg-amarelo',
  color = 'text-verde-escuro',
}: Props) {
  const fullSet = [...items, ...items, ...items, ...items];

  return (
    <div className={`${bg} ${color} py-6 overflow-hidden border-y-2 border-verde-escuro/20`}>
      <div className="flex marquee-track whitespace-nowrap items-center">
        {fullSet.map((item, i) => (
          <div key={i} className="flex items-center gap-8 px-8">
            <span className="font-display text-3xl md:text-5xl font-semibold tracking-tight">
              {item}
            </span>
            <Estrela className="w-6 md:w-8 flex-shrink-0" color="currentColor" />
          </div>
        ))}
      </div>
    </div>
  );
}
