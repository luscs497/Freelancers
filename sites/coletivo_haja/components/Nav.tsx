'use client';

import { useEffect, useState } from 'react';
import Logo from './Logo';

const links = [
  { href: '/#sobre', label: 'O Coletivo' },
  { href: '/#quem-somos', label: 'Quem somos' },
  { href: '/portfolio', label: 'Portfólio' },
  { href: '/#servicos', label: 'Serviços' },
  { href: '/#contato', label: 'Contato' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-verde shadow-lg' : 'bg-verde/95'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3" aria-label="Início">
          <Logo className="h-10 md:h-12 w-auto" />
        </a>

        <ul className="hidden md:flex items-center gap-8 text-creme text-sm tracking-wide">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="link-underline font-medium uppercase">
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="https://wa.me/5584991156767"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 bg-amarelo text-verde-escuro font-semibold rounded-full hover:bg-creme transition-colors"
            >
              Bora agir?
            </a>
          </li>
        </ul>

        <button
          className="md:hidden text-creme p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <>
                <path d="M18 6L6 18" />
                <path d="M6 6l12 12" />
              </>
            ) : (
              <>
                <path d="M3 6h18M3 12h18M3 18h18" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* Menu mobile */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <ul className="px-6 pb-6 flex flex-col gap-4 text-creme">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-2 text-lg font-display"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="https://wa.me/5584991156767"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 py-2 bg-amarelo text-verde-escuro font-semibold rounded-full"
            >
              Bora agir?
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
