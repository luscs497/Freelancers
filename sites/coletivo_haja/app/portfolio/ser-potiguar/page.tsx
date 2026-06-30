import type { Metadata } from 'next';
import CaseProjeto from '@/components/CaseProjeto';
import { getProjeto, getProximoProjeto } from '@/lib/projetos';

const projeto = getProjeto('ser-potiguar')!;
const proximo = getProximoProjeto('ser-potiguar');

export const metadata: Metadata = {
  title: `${projeto.nome} — Portfólio Coletivo Haja`,
  description: projeto.resumo,
};

export default function SerPotiguarPage() {
  return <CaseProjeto projeto={projeto} proximo={proximo} />;
}
