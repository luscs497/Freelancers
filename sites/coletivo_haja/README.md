# Coletivo Haja — Site institucional

Site institucional do Coletivo Haja construído em **Next.js 14** com **TypeScript**, **Tailwind CSS** e **Framer Motion**, configurado para **export estático** (pronto pra Hostinger).

---

## 🛠 Stack

- **Next.js 14** (App Router) com export estático
- **React 18**
- **TypeScript**
- **Tailwind CSS** com paleta brasileira customizada
- **Framer Motion** para animações
- **Fraunces** (serifa) + **Inter** (sans) via `next/font/google`

---

## 📋 Pré-requisitos

- **Node.js 18.17+** (recomendo 20 LTS)
- **npm**, **yarn** ou **pnpm**

Verifique sua versão:

```bash
node -v
npm -v
```

---

## 🚀 Como rodar localmente

**1. Descompacte o zip**

```bash
unzip coletivo-haja.zip
cd coletivo-haja
```

**2. Instale as dependências**

```bash
npm install
```

(Pode levar 2–3 min na primeira vez.)

**3. Rode o servidor de desenvolvimento**

```bash
npm run dev
```

Abra **http://localhost:3000** no navegador. O site recarrega automaticamente quando você edita os arquivos.

---

## 🏗 Como gerar o build pra produção

```bash
npm run build
```

Isso vai gerar uma pasta chamada **`out/`** com o site 100% estático (HTML, CSS, JS, fontes — tudo pronto pra subir em qualquer hospedagem).

---

## 🌐 Como subir na Hostinger

### Opção 1: File Manager (mais fácil)

1. Rode `npm run build` localmente.
2. Compacte o **conteúdo** da pasta `out/` em um zip (não a pasta `out` em si — entre nela e selecione tudo dentro).
3. Acesse o **hPanel da Hostinger** → **Hospedagem** → **Gerenciador de Arquivos**.
4. Entre na pasta `public_html/` (apague o `default.php` ou `index.html` que vier de fábrica).
5. Faça upload do zip e **descompacte** dentro de `public_html/`.
6. Pronto. Acesse seu domínio.

### Opção 2: FTP

Use FileZilla apontando pra `public_html/` da Hostinger e mande tudo de dentro de `out/` pra lá.

### Sobre o `.htaccess`

Já incluí um `.htaccess` em `public/` que o Next copia pro `out/` no build. Ele:
- Força HTTPS
- Faz cache de imagens, CSS e JS
- Ativa compressão Gzip
- Adiciona headers de segurança

---

## 📁 Estrutura do projeto

```
coletivo-haja/
├── app/
│   ├── globals.css        # estilos globais + textura de papel
│   ├── layout.tsx         # layout raiz + fontes
│   └── page.tsx           # página inicial
├── components/
│   ├── Nav.tsx            # navegação fixa
│   ├── Hero.tsx           # primeira dobra
│   ├── Marquee.tsx        # faixa animada entre seções
│   ├── Sobre.tsx          # "O que somos"
│   ├── QuemSomos.tsx      # equipe (Eduardo + Mariana)
│   ├── Servicos.tsx       # 3 cards de serviços
│   ├── Contato.tsx        # WhatsApp + email
│   ├── Footer.tsx
│   ├── Logo.tsx           # logo SVG inline
│   ├── Sol.tsx            # sol decorativo
│   ├── Estrela.tsx        # estrela de 8 pontas
│   └── AzulejoPattern.tsx # padrão de azulejaria
├── public/
│   └── .htaccess          # config Apache (Hostinger)
├── next.config.js
├── tailwind.config.js     # paleta brasileira
├── tsconfig.json
└── package.json
```

---

## 🎨 Paleta de cores

| Cor | Hex | Uso |
|---|---|---|
| Verde mata | `#1F5132` | Header, hero, accent principal |
| Verde escuro | `#143020` | Backgrounds escuros |
| Amarelo ocre | `#E8B43C` | Highlights, CTAs, sol |
| Azul anil | `#1E3A8A` | Cards, numeração |
| Creme | `#F5EFE0` | Background base, textos sobre escuro |
| Terra | `#C75D2E` | Seção de contato, accents quentes |

Todas configuradas no `tailwind.config.js` — basta usar `bg-verde`, `text-amarelo`, etc.

---

## ✏️ Personalizações comuns

**Trocar o número de WhatsApp**: busque `5584991156767` no projeto (aparece em `Nav.tsx`, `Hero.tsx`, `Contato.tsx`, `Footer.tsx`).

**Trocar o email**: busque `coletivohaja@gmail.com`.

**Adicionar fotos da equipe** (Eduardo e Mariana): em `components/QuemSomos.tsx`, substitua o bloco de iniciais grandes por uma tag `<img src="/eduardo.jpg" />`. Coloque as imagens em `public/`.

**Adicionar seção de portfólio/projetos**: crie `components/Projetos.tsx` e importe em `app/page.tsx` entre `<Servicos />` e `<Contato />`.

**Mudar as cores**: edite o objeto `colors` em `tailwind.config.js`.

---

## 🐛 Problemas comuns

**`npm install` reclama de versão do Node**
→ Atualize pro Node 18.17+ ou 20 LTS. Use o [nvm](https://github.com/nvm-sh/nvm).

**Build quebra com erro de fonte**
→ A primeira vez que roda `npm run build` ele baixa as fontes do Google. Precisa de internet.

**Imagens não aparecem na Hostinger**
→ Confira se subiu o conteúdo de `out/` e não a pasta `out` inteira.

**Rotas internas dão 404 na Hostinger**
→ Confirme que o `.htaccess` foi enviado (arquivos começando com ponto às vezes ficam ocultos).

---

Feito por Haja em 2026.
