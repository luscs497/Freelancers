export const PROBLEMS = [
  { t: "Falhas na rotina", d: "Horas extras mal controladas, desvio de função, banco de horas sem clareza e documentação incompleta se transformam em passivos relevantes." },
  { t: "Gestores despreparados", d: "Muitas ações nascem da forma como líderes conduzem advertências, cobranças, desligamentos e relações internas." },
  { t: "Risco acumulado", d: "Quando a empresa cresce sem revisar sua estrutura trabalhista, pequenas fragilidades passam a representar grandes prejuízos." },
];

export const SIGNALS = [
  "Há funcionários exercendo funções diferentes da contratação.",
  "As horas extras não possuem controle adequado.",
  "A empresa nunca revisou seus contratos trabalhistas.",
  "Gestores conduzem advertências e desligamentos sem orientação jurídica.",
  "O RH resolve situações sensíveis apenas com base no costume interno.",
  "Existem dúvidas sobre banco de horas, jornada ou adicionais.",
  "A empresa cresceu, mas os processos internos seguem informais.",
  "Nunca houve uma auditoria trabalhista preventiva.",
];

export const SERVICES = [
  { t: "Análise preventiva", d: "Mapeamento de vulnerabilidades trabalhistas conforme a realidade da empresa." },
  { t: "Revisão contratual", d: "Adequação de contratos, políticas internas e documentos essenciais." },
  { t: "Auditoria documental", d: "Verificação de registros, procedimentos, controles e histórico trabalhista." },
  { t: "Orientação para gestores", d: "Direcionamento para lideranças reduzirem erros que costumam gerar ações." },
  { t: "Compliance trabalhista", d: "Construção de rotinas mais seguras, claras e alinhadas à legislação." },
  { t: "Defesa estratégica", d: "Quando o litígio acontece, atuamos com estratégia, documentação e visão de negócio." },
];

export const AUDIENCE = [
  ["Empresas com CLT", "Negócios que precisam estruturar relações de trabalho com segurança."],
  ["Empresas em crescimento", "Operações que aumentaram equipe, faturamento ou complexidade."],
  ["Empresas familiares", "Negócios que precisam profissionalizar rotinas, liderança e gestão de pessoas."],
  ["Clínicas e escritórios", "Equipes administrativas, comerciais, técnicas ou assistenciais."],
  ["Comércios e serviços", "Jornada, escala, metas, atendimento e rotinas operacionais intensas."],
  ["Indústrias e construtoras", "Ambientes que exigem atenção a documentação, segurança e risco."],
];

export const REASONS = [
  { t: "Visão empresarial", d: "Tratamos o risco trabalhista como questão de gestão, patrimônio e continuidade do negócio." },
  { t: "Atuação estratégica", d: "Unimos clareza jurídica, leitura de cenário e orientação prática para decidir." },
  { t: "Prevenção e defesa", d: "Atuamos antes do conflito e na condução estratégica de processos já existentes." },
  { t: "Comunicação clara", d: "Traduzimos temas complexos em caminhos objetivos, com postura institucional." },
];

export const FAQ = [
  ["Minha empresa nunca foi processada. Vale a pena?", "Sim. A prevenção normalmente custa menos do que enfrentar uma condenação ou uma rotina de litígios recorrentes."],
  ["Minha empresa é pequena. Ainda assim existe risco?", "Sim. O porte não elimina o risco. Pequenas empresas também sofrem impactos financeiros relevantes com falhas trabalhistas."],
  ["Vocês apenas defendem processos?", "Não. Nossa atuação é preventiva, consultiva e contenciosa: reduzir riscos antes do prejuízo e atuar com estratégia quando o processo já existe."],
  ["A análise interfere na rotina da empresa?", "Não. O trabalho é conduzido de forma organizada, com solicitação objetiva de informações e foco no menor impacto possível à operação."],
];

export function verdict(n) {
  if (n === 0) return { label: "Sem sinais marcados", tone: "min", copy: "Mesmo sem sinais aparentes, uma revisão confirma que a estrutura está realmente protegida — e documenta isso." };
  if (n <= 2) return { label: "Exposição baixa", tone: "low", copy: "Há pontos isolados de atenção. Ajustes simples agora evitam que virem padrão." };
  if (n <= 4) return { label: "Exposição moderada", tone: "mid", copy: "Já existe um conjunto de fragilidades que costuma anteceder ações trabalhistas. Vale uma análise preventiva." };
  if (n <= 6) return { label: "Exposição elevada", tone: "high", copy: "O acúmulo de sinais indica passivo em formação. Quanto antes for mapeado, menor o custo de corrigir." };
  return { label: "Exposição crítica", tone: "crit", copy: "A maioria dos sinais está presente. Recomendamos uma conversa estratégica com prioridade." };
}
