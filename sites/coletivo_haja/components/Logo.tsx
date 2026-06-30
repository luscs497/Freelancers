'use client';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'compact';
}

export default function Logo({ className = '', variant = 'full' }: LogoProps) {
  if (variant === 'compact') {
    const compactRays = [];
    for (let i = 0; i < 16; i++) {
      const angle = (i / 16) * Math.PI * 2;
      compactRays.push({
        x1: (Math.cos(angle) * 8).toFixed(3),
        y1: (Math.sin(angle) * 8).toFixed(3),
        x2: (Math.cos(angle) * 14).toFixed(3),
        y2: (Math.sin(angle) * 14).toFixed(3),
      });
    }

    return (
      <svg
        viewBox="0 0 80 40"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Coletivo Haja"
      >
        <g fill="currentColor">
          <text x="0" y="32" fontFamily="var(--font-display)" fontSize="32" fontWeight="600" className="fill-creme">H</text>
        </g>
        <g transform="translate(40 22)">
          {compactRays.map((ray, i) => (
            <line
              key={i}
              x1={ray.x1}
              y1={ray.y1}
              x2={ray.x2}
              y2={ray.y2}
              stroke="#E8B43C"
              strokeWidth="2"
              strokeLinecap="round"
            />
          ))}
          <circle r="7" fill="#E8B43C" />
        </g>
      </svg>
    );
  }

  const fullRays = [];
  for (let i = 0; i < 18; i++) {
    const angle = (i / 18) * Math.PI;
    fullRays.push({
      x1: (Math.cos(angle) * 14).toFixed(3),
      y1: (-Math.sin(angle) * 14).toFixed(3),
      x2: (Math.cos(angle) * 26).toFixed(3),
      y2: (-Math.sin(angle) * 26).toFixed(3),
    });
  }

  return (
    <svg
      viewBox="0 0 320 80"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Coletivo Haja"
    >
      <text x="180" y="22" fontFamily="var(--font-sans)" fontSize="11" letterSpacing="4" className="fill-creme">
        COLETIVO
      </text>

      <text x="20" y="68" fontFamily="var(--font-display)" fontSize="64" fontWeight="500" className="fill-creme">H</text>

      <g transform="translate(110 52)">
        {fullRays.map((ray, i) => (
          <line
            key={i}
            x1={ray.x1}
            y1={ray.y1}
            x2={ray.x2}
            y2={ray.y2}
            stroke="#E8B43C"
            strokeWidth="3"
            strokeLinecap="round"
          />
        ))}
        <path d="M -14 0 A 14 14 0 0 1 14 0 Z" fill="#E8B43C" />
      </g>

      <text x="170" y="68" fontFamily="var(--font-display)" fontSize="64" fontWeight="500" className="fill-verde-claro">J</text>

      <text x="220" y="68" fontFamily="var(--font-display)" fontSize="64" fontWeight="500" className="fill-azul">A</text>
    </svg>
  );
}
