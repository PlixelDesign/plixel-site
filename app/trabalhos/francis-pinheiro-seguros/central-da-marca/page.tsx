import type { Metadata } from 'next'
import FrancisCaseStudy from '@/components/cases/FrancisCaseStudy'

export const metadata: Metadata = {
  title: 'Francis Pinheiro Seguros · Estudo de Caso & Central da Marca',
  description:
    'Lançamento de Operação, Engenharia de Funil Comercial, Mídia de Performance, Automação de Atendimento (WhatsApp Ops) e Brand Equity.',
}

export default function FrancisPinheiroBrandPage() {
  return <FrancisCaseStudy />
}
