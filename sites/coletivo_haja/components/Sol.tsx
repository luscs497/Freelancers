'use client';

interface SolProps {
  className?: string;
  rays?: number;
  color?: string;
}

export default function Sol({ className = '', rays = 24, color = '#E8B43C' }: SolProps) {
  const lines = [];
  for (let i = 0; i < rays; i++) {
    const angle = (i / rays) * Math.PI * 2;
    lines.push({
      x1: (Math.cos(angle) * 22).toFixed(3),
      y1: (Math.sin(angle) * 22).toFixed(3),
      x2: (Math.cos(angle) * 42).toFixed(3),
      y2: (Math.sin(angle) * 42).toFixed(3),
    });
  }

  return (
    <svg
      viewBox="-50 -50 100 100"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {lines.map((line, i) => (
        <line
          key={i}
          x1={line.x1}
          y1={line.y1}
          x2={line.x2}
          y2={line.y2}
          stroke={color}
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      ))}
      <circle r="20" fill={color} />
    </svg>
  );
}
