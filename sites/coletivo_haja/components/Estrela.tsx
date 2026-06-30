'use client';

interface EstrelaProps {
  className?: string;
  color?: string;
}

export default function Estrela({ className = '', color = '#E8B43C' }: EstrelaProps) {
  const points: string[] = [];
  const outerRadius = 50;
  const innerRadius = 14;
  const spikes = 8;

  for (let i = 0; i < spikes * 2; i++) {
    const radius = i % 2 === 0 ? outerRadius : innerRadius;
    const angle = (i / (spikes * 2)) * Math.PI * 2 - Math.PI / 2;
    const x = (Math.cos(angle) * radius).toFixed(3);
    const y = (Math.sin(angle) * radius).toFixed(3);
    points.push(x + ',' + y);
  }

  return (
    <svg
      viewBox="-55 -55 110 110"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <polygon points={points.join(' ')} fill={color} />
    </svg>
  );
}
