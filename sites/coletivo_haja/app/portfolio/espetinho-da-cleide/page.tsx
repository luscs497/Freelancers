import type { Metadata } from 'next';
import CaseProjeto from '@/components/CaseProjeto';
import { getProjeto, getProximoProjeto } from '@/lib/projetos';

const projeto = getProjeto('espetinho-da-cleide')!;
const proximo = getProximoProjeto('espetinho-da-cleide');

export const metadata: Metadata = {
  title: `${projeto.nome} — Portfólio Coletivo Haja`,
  description: projeto.resumo,
};

export default function EspetinhoPage() {
  return <CaseProjeto projeto={projeto} proximo={proximo} />;
}
