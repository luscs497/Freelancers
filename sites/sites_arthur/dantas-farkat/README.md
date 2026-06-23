# Dantas &amp; Farkat Advogados — Landing Page

Landing page de **Direito Trabalhista para Empresas**. React + Vite.

## Rodar localmente

Pré-requisito: Node.js 18+.

```bash
npm install
npm run dev
```

Abre em `http://localhost:5173`.

## Build de produção

```bash
npm run build      # gera a pasta dist/
npm run preview    # serve o build para conferência
```

A pasta `dist/` é estática e pode ser publicada em qualquer host (Vercel, Netlify, Hostinger, S3, etc.).

## Configurar o WhatsApp

O número fica em **um único lugar**: `src/config.js`.

```js
export const WHATSAPP = "https://wa.me/5500000000000";
```

Troque `5500000000000` pelo número real no formato `55` + DDD + número (só dígitos).
Ex.: `https://wa.me/5584999998888`.

## Trocar textos

Todo o conteúdo (problemas, sinais do diagnóstico, serviços, público, FAQ etc.)
está em `src/data.js`. Edite lá, sem mexer no layout.

## Trocar fotos e logo

Os arquivos ficam em `src/assets/`:

- `logo-white.png` — logo (ícone dourado + texto branco), usada no topo e no rodapé escuros.
- `hero.webp`, `about.webp`, `office.webp`, `cta.webp` — fotos das seções.

Para trocar, substitua o arquivo mantendo o mesmo nome, ou ajuste o `import` no
componente correspondente em `src/components/`.

## Estrutura

```
src/
  main.jsx              ponto de entrada
  App.jsx               compõe as seções
  index.css             todo o estilo (design system + responsivo)
  config.js             WhatsApp e configs
  data.js               textos do site
  hooks/useReveal.js    animação de revelar ao rolar
  components/
    Topbar.jsx  Hero.jsx  Problem.jsx  Cost.jsx
    Diagnostic.jsx  Services.jsx  Audience.jsx
    Why.jsx  Faq.jsx  FinalCta.jsx  Footer.jsx  WhatsappButton.jsx
    ui/Reveal.jsx  ui/Arrow.jsx
  assets/               logo + fotos
```

## Observação jurídica

O diagnóstico interativo é uma leitura inicial orientativa. A análise do caso
concreto deve ser feita por advogado — aviso já presente no rodapé e na seção
de diagnóstico.
