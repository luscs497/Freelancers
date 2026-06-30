export type Projeto = {
  slug: string;
  nome: string;
  categoria: string;
  tipo: string;
  ano: string;
  resumo: string;
  descricao: string;
  capa: string;
  galeria: string[];
  paleta: { nome: string; hex: string }[];
  tipografia?: string;
  corFundo: string;
  corTexto: string;
  corDestaque: string;
};

export const projetos: Projeto[] = [
  {
    slug: 'espetinho-da-cleide',
    nome: 'Espetinho da Cleide',
    categoria: 'Bar & Restaurante',
    tipo: 'Identidade Visual',
    ano: '2025',
    resumo:
      'Identidade visual completa para um bar tradicional de Ponta Negra, Natal/RN.',
    descricao:
      'O Espetinho da Cleide é um clássico de Ponta Negra. A identidade construída tem o desafio de elevar a estética sem perder o jeito de boteco — uma tipografia serifada rebuscada se entrelaça em torno do ícone do espetinho desenhado à mão, e a paleta amarelo/bordô traduz o calor do bar.',
    capa: '/portfolio/espetinho/page-1.jpg',
    galeria: [
      '/portfolio/espetinho/page-1.jpg',
      '/portfolio/espetinho/page-2.jpg',
      '/portfolio/espetinho/page-3.jpg',
      '/portfolio/espetinho/page-4.jpg',
      '/portfolio/espetinho/page-5.jpg',
    ],
    paleta: [
      { nome: 'Amarelo Cleide', hex: '#E8B43C' },
      { nome: 'Bordô', hex: '#6B1F1F' },
      { nome: 'Marrom', hex: '#8B4513' },
      { nome: 'Creme', hex: '#F5EFE0' },
    ],
    tipografia: 'Fraunces · serifa rebuscada com entrelaçamento de letras',
    corFundo: '#E8B43C',
    corTexto: '#6B1F1F',
    corDestaque: '#6B1F1F',
  },
  {
    slug: 'ser-potiguar',
    nome: 'Ser Potiguar',
    categoria: 'Evento Cultural',
    tipo: 'Identidade & Materiais',
    ano: '2026',
    resumo:
      'Identidade e materiais para um evento que celebra arte, cultura e culinária potiguar.',
    descricao:
      'O Ser Potiguar é uma exposição de três dias que tira a arte e a culinária norte-rio-grandense das quatro paredes pras ruas. O nome remete a "poti\'war" (do tupi, "comedor de camarão"), e o símbolo do camarão no garfo serve como assinatura. A paleta laranja-terra com padrões de azulejaria portuguesa amarra a brasilidade ao histórico.',
    capa: '/portfolio/serpotiguar/page-1.jpg',
    galeria: [
      '/portfolio/serpotiguar/page-1.jpg',
      '/portfolio/serpotiguar/page-2.jpg',
      '/portfolio/serpotiguar/page-3.jpg',
      '/portfolio/serpotiguar/page-4.jpg',
      '/portfolio/serpotiguar/page-5.jpg',
    ],
    paleta: [
      { nome: 'Laranja Camarão', hex: '#E5733D' },
      { nome: 'Terra', hex: '#C75D2E' },
      { nome: 'Azul Marinho', hex: '#1E3A8A' },
      { nome: 'Creme', hex: '#F5EFE0' },
    ],
    tipografia: 'Fraunces · entrelaçamento histórico, com ar antigo e refinado',
    corFundo: '#E5733D',
    corTexto: '#F5EFE0',
    corDestaque: '#1E3A8A',
  },
];

export function getProjeto(slug: string): Projeto | undefined {
  return projetos.find((p) => p.slug === slug);
}

export function getProximoProjeto(slug: string): Projeto {
  const idx = projetos.findIndex((p) => p.slug === slug);
  return projetos[(idx + 1) % projetos.length];
}
