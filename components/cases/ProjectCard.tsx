import Link from 'next/link'
import Image from 'next/image'
import { Projeto } from '@/types'

// One-Liners Técnicos Comerciais de Engenharia por Case
const ONE_LINERS_TECNICOS: Record<string, string> = {
  ucadis:
    'Implementação de Sistema Visual e Design Ops: Unificação de ecossistema descentralizado, aplicação prática de regras cromáticas estruturadas e padronização de ativos para alta escala operacional.',
  francis:
    'Service Design e Estrutura Comercial: Engenharia de marca corporativa criada do zero e totalmente integrada a matrizes de tráfego pago (mídia de performance) e automação de fluxo de atendimento comercial (WhatsApp Ops).',
  'jing-long':
    'Redesign de Suporte e Gestão de Portfólio: Otimização geométrica e vetorial de ativo histórico preservando o Brand Equity, com estruturação de Design Tokens atômicos para marcas híbridas multidisciplinares.',
  eb:
    'Posicionamento de Mercado e Atração: Desenvolvimento de arquitetura modular de identidade voltada para o aumento de valor percebido do serviço e aceleração do ciclo de tomada de decisão do cliente.',
  jennifer:
    'Responsive Brand System e Posicionamento Premium: Engenharia vetorial de redução do símbolo para alta performance em micromídias digitais e desdobramento voltado à experiência física de unboxing de luxo.',
}

export default function ProjectCard({
  projeto,
  index,
  isFeatured = false,
}: {
  projeto: Projeto
  index?: number
  isFeatured?: boolean
}) {
  const titleLower = (projeto.titulo || '').toLowerCase()
  const slugLower = (projeto.slug || '').toLowerCase()

  const isUcadis = slugLower.includes('ucadis') || titleLower.includes('ucadis')
  const isJingLong = slugLower.includes('jing-long') || titleLower.includes('jing long')
  const isFrancis = slugLower.includes('francis') || titleLower.includes('francis')
  const isEb = slugLower.includes('eb') || titleLower.includes('eb') || titleLower.includes('musica') || slugLower.includes('ester')
  const isJennifer = slugLower.includes('jennifer') || titleLower.includes('jennifer')

  const href = isUcadis
    ? '/trabalhos/central-da-marca'
    : isJingLong
    ? '/trabalhos/jing-long/central-da-marca'
    : isFrancis
    ? '/trabalhos/francis-pinheiro-seguros/central-da-marca'
    : isEb
    ? '/trabalhos/eb-escola-de-musica'
    : `/trabalhos/${projeto.slug}`

  // Resoluções de Copywriting Técnico por Case
  let oneLiner = ''
  if (isUcadis) oneLiner = ONE_LINERS_TECNICOS.ucadis
  else if (isFrancis) oneLiner = ONE_LINERS_TECNICOS.francis
  else if (isJingLong) oneLiner = ONE_LINERS_TECNICOS['jing-long']
  else if (isEb) oneLiner = ONE_LINERS_TECNICOS.eb
  else if (isJennifer) oneLiner = ONE_LINERS_TECNICOS.jennifer
  else {
    oneLiner = projeto.diagnostico || 'Engenharia de marca e sistemas visuais aplicados a negócios.'
  }

  // Saneamento de travessões '—' nos títulos
  const tituloLimpo = (projeto.titulo || '').replace(/—/g, '|').trim()

  return (
    <Link
      href={href}
      className={`group relative flex flex-col bg-navy-mid border border-blue-neon/10 overflow-hidden hover:border-blue-neon/40 hover:-translate-y-1 transition-all duration-300 ${
        isFeatured ? 'md:col-span-2 lg:col-span-2' : 'col-span-1'
      }`}
    >
      {/* 1. Imagem Principal do Projeto (Limpa no Topo, sem overlay de diagnóstico ou nome de cliente) */}
      <div className={`bg-navy-deep relative overflow-hidden ${isFeatured ? 'aspect-[21/9] sm:aspect-[16/8]' : 'aspect-[4/3]'}`}>
        {projeto.imagem_capa ? (
          <Image
            src={projeto.imagem_capa}
            alt={tituloLimpo}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes={isFeatured ? '(max-width: 768px) 100vw, 66vw' : '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-navy-mid">
            <span className="label-tech text-white/70">Imagem em breve</span>
          </div>
        )}
        <div className="absolute inset-0 bg-navy-deep/0 group-hover:bg-navy-deep/15 transition-colors duration-300" />

        {/* Badge de Featured Case para UCADIS e Jing Long */}
        {isFeatured && (
          <span className="absolute top-3 right-3 bg-yellow-neon text-navy-deep font-poppins text-[10px] font-extrabold tracking-widest uppercase px-3 py-1 rounded-sm shadow-md">
            Featured Case
          </span>
        )}
      </div>

      {/* Conteúdo Abaixo da Imagem: Título -> Texto Técnico em Negrito -> Botão */}
      <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
        <div className="space-y-3">
          {/* 2. Título Principal (<h3>) sem travessões */}
          <h3 className={`title-impact text-white tracking-wide leading-tight ${isFeatured ? 'text-3xl sm:text-4xl' : 'text-2xl'}`}>
            {tituloLimpo}
          </h3>

          {/* 3. Texto de Impacto Técnico Comercial (<p>) com Pilares em Negrito */}
          <p className="body-text text-white/80 text-xs sm:text-sm leading-relaxed font-light">
            <strong className="font-semibold text-white">{oneLiner}</strong>
          </p>
        </div>

        {/* 4. Botão de Ação: Ver Projeto → */}
        <div className="pt-4 border-t border-blue-neon/10 flex items-center justify-between text-white/50 group-hover:text-yellow-neon transition-colors duration-300">
          <span className="font-poppins text-xs tracking-widest uppercase font-bold">Ver Projeto</span>
          <span className="text-xs transform group-hover:translate-x-1.5 transition-transform duration-200 font-bold">→</span>
        </div>
      </div>
    </Link>
  )
}
