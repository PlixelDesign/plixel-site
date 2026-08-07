import type { Metadata } from 'next'
import EBEscolaDeMusicaCase from '@/components/cases/EBEscolaDeMusicaCase'

export const metadata: Metadata = {
  title: 'EB Escola de Música · Rebranding & Estruturação de Rede de Ensino',
  description:
    'Sistema Visual Escalável e Modular para Expansão de Redes de Ensino Musical de Alto Ticket, Sinalização de Operação e Kit Matrícula.',
}

export default function EBEscolaDeMusicaPage() {
  return <EBEscolaDeMusicaCase />
}
