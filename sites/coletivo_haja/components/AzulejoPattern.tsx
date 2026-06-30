type Props = {
  className?: string;
  variant?: 'verde' | 'amarelo' | 'azul' | 'mixed';
  opacity?: number;
  bgTransparent?: boolean;
};

export default function AzulejoPattern({
  className = '',
  variant = 'mixed',
  opacity = 1,
  bgTransparent = false,
}: Props) {
  const colors = {
    verde: { a: '#1F5132', b: '#2D7A4A', c: '#E8B43C', d: '#F5EFE0' },
    amarelo: { a: '#E8B43C', b: '#C99428', c: '#1F5132', d: '#F5EFE0' },
    azul: { a: '#1E3A8A', b: '#2E4FAF', c: '#E8B43C', d: '#F5EFE0' },
    mixed: { a: '#1F5132', b: '#1E3A8A', c: '#E8B43C', d: '#F5EFE0' },
  }[variant];

  return (
    <svg
      className={className}
      viewBox="0 0 400 400"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
      style={{ opacity }}
      aria-hidden="true"
    >
      <defs>
        <pattern id={`azulejo-${variant}`} x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
          {/* Quadrado base — pode ser transparente pra integrar com fundo da seção */}
          {!bgTransparent && <rect width="100" height="100" fill={colors.d} />}

          {/* Quatro pétalas formando flor central */}
          <path d="M 50 10 Q 70 30 50 50 Q 30 30 50 10 Z" fill={colors.a} />
          <path d="M 90 50 Q 70 70 50 50 Q 70 30 90 50 Z" fill={colors.b} />
          <path d="M 50 90 Q 30 70 50 50 Q 70 70 50 90 Z" fill={colors.a} />
          <path d="M 10 50 Q 30 30 50 50 Q 30 70 10 50 Z" fill={colors.b} />

          {/* Miolo */}
          <circle cx="50" cy="50" r="6" fill={colors.c} />

          {/* Cantos */}
          <path d="M 0 0 L 15 0 L 0 15 Z" fill={colors.a} />
          <path d="M 100 0 L 85 0 L 100 15 Z" fill={colors.a} />
          <path d="M 0 100 L 15 100 L 0 85 Z" fill={colors.a} />
          <path d="M 100 100 L 85 100 L 100 85 Z" fill={colors.a} />
        </pattern>
      </defs>
      <rect width="400" height="400" fill={`url(#azulejo-${variant})`} />
    </svg>
  );
}
