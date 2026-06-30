import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-verde-escuro text-creme py-12 md:py-16 border-t border-amarelo/20">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <Logo className="h-14 w-auto" />
            <p className="mt-4 text-sm text-creme/70 leading-relaxed max-w-xs">
              Damos direção e vida à sua marca. Natal, Rio Grande do Norte — Brasil.
            </p>
          </div>

          <div>
            <p className="font-display text-xl text-amarelo mb-4">Navegação</p>
            <ul className="space-y-2 text-sm text-creme/80">
              <li><a href="/#sobre" className="link-underline">O Coletivo</a></li>
              <li><a href="/#quem-somos" className="link-underline">Quem somos</a></li>
              <li><a href="/portfolio" className="link-underline">Portfólio</a></li>
              <li><a href="/#servicos" className="link-underline">Serviços</a></li>
              <li><a href="/#contato" className="link-underline">Contato</a></li>
            </ul>
          </div>

          <div>
            <p className="font-display text-xl text-amarelo mb-4">Fale com a gente</p>
            <ul className="space-y-2 text-sm text-creme/80">
              <li>
                <a
                  href="https://wa.me/5584991156767"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline"
                >
                  (84) 9 9115-6767
                </a>
              </li>
              <li>
                <a href="mailto:coletivohaja@gmail.com" className="link-underline break-all">
                  coletivohaja@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/coletivohaja/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline"
                >
                  @coletivohaja
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-creme/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-creme/50">
          <p>© {new Date().getFullYear()} Coletivo Haja. Todos os direitos reservados.</p>
          <p className="font-display tracking-wide">
            HAJA — Luz, o primeiro ato da criação.
          </p>
        </div>
      </div>
    </footer>
  );
}
