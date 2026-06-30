import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Coletivo Haja — Damos direção e vida à sua marca',
  description:
    'Coletivo Haja: fotografia profissional, identidade visual e presença de marca. Construímos marcas com personalidade, coerência e conexão. Natal, Rio Grande do Norte.',
  keywords: [
    'Coletivo Haja',
    'identidade visual',
    'fotografia',
    'branding',
    'design Natal RN',
    'marca',
    'agência criativa',
  ],
  authors: [{ name: 'Coletivo Haja' }],
  openGraph: {
    title: 'Coletivo Haja',
    description: 'Damos direção e vida à sua marca.',
    type: 'website',
    locale: 'pt_BR',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;0,9..144,800;1,9..144,400;1,9..144,500&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
