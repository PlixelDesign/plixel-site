import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { DynaPuff, Nunito } from 'next/font/google'

const dynaPuff = DynaPuff({
  subsets: ['latin'],
  variable: '--font-dynapuff',
  display: 'swap',
})

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Central da Marca UCADIS · Manual de Identidade Visual',
  description:
    'Manual de identidade visual, diretrizes de marca, matriz técnica de cores, tipografia e aplicações da UCADIS.',
}

interface ScopeTagProps {
  label: string
}

const ScopeTag: React.FC<ScopeTagProps> = ({ label }) => (
  <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-500/10 text-blue-400 border border-blue-500/20 backdrop-blur-sm">
    {label}
  </span>
)

interface ColorCardProps {
  name: string
  hex: string
  rgb: string
  role: string
  bgClass: string
  textColor?: string
}

const ColorCard: React.FC<ColorCardProps> = ({ name, hex, rgb, role, bgClass, textColor = 'text-slate-800' }) => (
  <div className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
    <div className={`h-24 ${bgClass}`} />
    <div className="p-4">
      <div className={`font-bold text-sm ${textColor}`}>{name}</div>
      <div className="font-mono text-xs font-semibold text-slate-500 mt-0.5">{hex}</div>
      <div className="font-sans text-[10px] text-slate-400 mt-0.5">{rgb}</div>
      <span className="inline-block mt-2 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-600">
        {role}
      </span>
    </div>
  </div>
)

export default function CentralDaMarcaUcadisPage() {
  const scopeTags = [
    'Estratégia de Marca',
    'Arquitetura de Portfólio',
    'Design Ops (Manuais e Diretrizes)',
    'Sinalização e Suportes Físicos',
  ]

  const merchItems = [
    {
      src: '/images/ucadis-aplicacao-camisetas.jpg',
      title: 'Camisetas Institucionais',
      desc: 'Uniformização elástica para equipes, voluntários e eventos infantis.',
      category: 'Vestuário & Staff',
    },
    {
      src: '/images/ucadis-aplicacao-crachas.jpg',
      title: 'Crachás de Identificação',
      desc: 'Segurança, controle de fluxo e hierarquia de acesso em múltiplos departamentos.',
      category: 'Identificação Físico-Digital',
    },
    {
      src: '/images/ucadis-aplicacao-garrafinhas.jpg',
      title: 'Utilitários & Merchandising',
      desc: 'Presença de marca cotidiana com foco em sustentabilidade e engajamento.',
      category: 'Produtos Físicos',
    },
  ]

  const navItems = [
    { id: 'visao-geral', label: '01. Visão Geral' },
    { id: 'estrategia', label: '02. Diagnóstico & Estratégia' },
    { id: 'design-ops', label: '03. Design Ops & Diretrizes' },
    { id: 'suportes-fisicos', label: '04. Suportes Físicos' },
    { id: 'matriz-tecnica', label: '05. Matriz Técnica' },
    { id: 'mascotes', label: '06. Mascotes' },
  ]

  return (
    <div className={`min-h-screen bg-slate-50 text-slate-900 ${nunito.className} font-nunito selection:bg-blue-500 selection:text-white ${dynaPuff.variable} ${nunito.variable}`}>
      {/* Header Global da Plixel */}
      <Header />

      {/* Bar de navegação interna da UCADIS (Fixado em top-16 abaixo do Header da Plixel) */}
      <nav className="sticky top-16 z-40 bg-slate-950/95 backdrop-blur-md border-b border-white/10 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between overflow-x-auto scrollbar-none">
          <div className="flex items-center gap-3 shrink-0">
            <Link href="/trabalhos" className="flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-amber-400 uppercase tracking-wider transition-colors mr-2">
              ← Voltar a Trabalhos
            </Link>
            <div className="h-4 w-px bg-white/20 hidden sm:block" />
            <div className="relative h-7 w-7 shrink-0 hidden sm:block">
              <Image
                src="/images/Simbolo-UCADIS.png"
                alt="Símbolo UCADIS"
                width={28}
                height={28}
                className="h-7 w-auto object-contain"
              />
            </div>
            <span className="font-bold text-sm text-amber-400 tracking-wide hidden sm:inline-block font-dynapuff">
              UCADIS · Central da Marca
            </span>
          </div>

          <div className="flex items-center space-x-1 sm:space-x-2">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="px-2.5 py-1 rounded-lg text-[11px] font-bold uppercase tracking-wider text-slate-300 hover:text-white hover:bg-white/10 transition-colors whitespace-nowrap"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <main className="pb-24">
        {/* 1. HERO SECTION */}
        <section id="visao-geral" className="relative bg-slate-950 text-white overflow-hidden pt-16 pb-20 md:pt-24 md:pb-28">
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-1/2 -right-40 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <span className="inline-block px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-widest bg-amber-400/10 text-amber-400 border border-amber-400/20 mb-6">
                Manual de Identidade Visual & Design System
              </span>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white mb-6 font-dynapuff">
                UCADIS — Arquitetura de Marca e Padronização de Sistema Visual para Larga Escala.
              </h1>

              <p className="text-base sm:text-xl text-slate-300 leading-relaxed font-normal mb-8 max-w-3xl mx-auto">
                Como transformar uma comunicação fragmentada em um ecossistema visual autoinstrutivo, garantindo consistência de marca e autonomia para equipes descentralizadas.
              </p>

              <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
                {scopeTags.map((tag, idx) => (
                  <ScopeTag key={idx} label={tag} />
                ))}
              </div>
            </div>

            <div className="relative w-full rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-slate-900 aspect-video md:aspect-[21/9]">
              <Image
                src="/images/ucadis-capa-mascotes.png"
                alt="UCADIS - Capa Principal e Mascotes"
                fill
                priority
                className="object-cover object-center"
                sizes="(max-width: 1280px) 100vw, 1280px"
              />
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 pt-16 sm:pt-24">

          {/* 2. BUSINESS NARRATIVE SECTION */}
          <section id="estrategia" className="scroll-mt-36">
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600">01 — Diagnóstico & Estratégia</span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-2 font-dynapuff">
                Narrativa de Negócio e Impacto Operacional
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-3">
                Mapeamento de gargalos e desenvolvimento da solução modular de design.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-sm border border-slate-200/80 border-t-4 border-t-red-500 hover:shadow-md transition-shadow">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-red-50 text-red-600 mb-6">
                  <span>⚠️</span> Bloco A · O Cenário de Negócio e o Gargalo Operacional
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 font-dynapuff">
                  O Problema da Descentralização
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  &ldquo;A instituição enfrentava um sério desafio de descentralização: sub-departamentos (infantil, juvenil, eventos e mídias sociais) operavam de forma visualmente isolada, gerando severo ruído na percepção da marca mãe e enfraquecendo a unidade institucional. Sem diretrizes claras, a criação de peças dependia de voluntários rotativos sem treinamento técnico, resultando em refações constantes, desalinhamento cromático e ineficiência operacional na esteira de produção diária.&rdquo;
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-sm border border-slate-200/80 border-t-4 border-t-blue-600 hover:shadow-md transition-shadow">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-blue-50 text-blue-600 mb-6">
                  <span>⚡</span> Bloco B · A Solução Sistêmica e Estratégia de Design
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 font-dynapuff">
                  Arquitetura Monolítica Endossada
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  &ldquo;Desenvolvimento de uma Identidade Visual modular sob o conceito de Arquitetura Monolítica Endossada. O sistema visual foi projetado para ser elástico: a estrutura do símbolo âncora permanece rígida, enquanto as assinaturas e cores de suporte variam conforme o segmento de atuação. Criou-se um ecossistema visual autoinstrutivo que blindou a integridade da marca e reduziu drasticamente o atrito na ponta da operação.&rdquo;
                </p>
              </div>
            </div>
          </section>

          {/* 3. DESIGN OPS FEATURE SECTIONS */}
          <section id="design-ops" className="scroll-mt-36 space-y-20 sm:space-y-28">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600">02 — Design Ops em Ação</span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-2 font-dynapuff">
                Governança, Espaço e Escala Logística
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-7">
                <div className="relative w-full rounded-2xl overflow-hidden shadow-lg border border-slate-100 bg-white aspect-[16/9] group">
                  <Image
                    src="/images/ucadis-mockup-manual-marca.png"
                    alt="Design Ops - Manual da Marca UCADIS"
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 1024px) 100vw, 58vw"
                  />
                </div>
              </div>
              <div className="lg:col-span-5 space-y-4">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 text-blue-700">
                  Design Ops & Diretrizes
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-dynapuff">
                  Manual da Marca & Governança Sistêmica
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Área reservada para demonstração visual das regras de proteção, proibições e consistência do sistema (Design Ops), comprovando a entrega de um projeto pronto para ser desdobrado de forma totalmente autônoma por equipes locais.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-5 order-2 lg:order-1 space-y-4">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-50 text-amber-700">
                  Wayfinding & Espaço Físico
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-dynapuff">
                  Sinalização de Ambientes & UX do Espaço Físico
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Demonstração de sinalização interna, placas de fluxo e totens direcionais. Prova técnica de design voltado à experiência do usuário, organizando a circulação e o controle de movimentação com alta visibilidade no espaço físico.
                </p>
              </div>
              <div className="lg:col-span-7 order-1 lg:order-2">
                <div className="relative w-full rounded-2xl overflow-hidden shadow-lg border border-slate-100 bg-white aspect-[16/9] group">
                  <Image
                    src="/images/ucadis-mockup-wayfinding.png"
                    alt="Wayfinding e Sinalização Ambiental UCADIS"
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 1024px) 100vw, 58vw"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-7">
                <div className="relative w-full rounded-2xl overflow-hidden shadow-lg border border-slate-100 bg-white aspect-[16/9] group">
                  <Image
                    src="/images/ucadis-mockup-logistica-eventos.png"
                    alt="Sinalização Veicular e Frota Logística UCADIS"
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 1024px) 100vw, 58vw"
                  />
                </div>
              </div>
              <div className="lg:col-span-5 space-y-4">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700">
                  Design em Movimento
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-dynapuff">
                  Sinalização Veicular & Frota Logística
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Aplicação do ecossistema visual em veículos utilitários e de transporte, validando o comportamento da identidade em grandes formatos, alta velocidade e canais de logística externa durante grandes eventos.
                </p>
              </div>
            </div>
          </section>

          {/* 4. APPLICATIONS GALLERY (MERCHANDISING) */}
          <section id="suportes-fisicos" className="scroll-mt-36">
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600">03 — Suportes Físicos</span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-2 font-dynapuff">
                Galeria de Aplicações e Merchandising
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-3">
                Validação do sistema visual aplicado a suportes físicos institucionais cotidianos.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {merchItems.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-md hover:shadow-xl transition-all duration-300 group flex flex-col"
                >
                  <div className="relative w-full aspect-square overflow-hidden bg-slate-100">
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-[11px] font-extrabold uppercase tracking-wider text-blue-600 block mb-1">
                        {item.category}
                      </span>
                      <h4 className="text-lg font-bold text-slate-900 mb-2">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 5. TECHNICAL SYSTEM, COLOR MATRIX & TYPOGRAPHY */}
          <section id="matriz-tecnica" className="scroll-mt-36 bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-sm space-y-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600">04 — Matriz Técnica</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1 font-dynapuff">
                Especificações Cromáticas & Tipografia
              </h2>

              <div className="mt-4 p-4 rounded-xl bg-blue-50/60 border-l-4 border-l-blue-600 text-blue-900 text-sm font-semibold flex items-center gap-3">
                <span className="text-lg">📐</span>
                <span>&ldquo;Matriz cromática e regras tipográficas estritas para garantir alta fidelidade de reprodução em múltiplos suportes.&rdquo;</span>
              </div>
            </div>

            {/* PALETA DE CORES INSTITUCIONAL */}
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-4 font-dynapuff">Paleta de Cores Institucional</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                <ColorCard name="Azul Vital" hex="#2563EB" rgb="RGB 37·99·235" role="Primária" bgClass="bg-[#2563EB]" />
                <ColorCard name="Amarelo Luz" hex="#F4B400" rgb="RGB 244·180·0" role="Destaque" bgClass="bg-[#F4B400]" />
                <ColorCard name="Turquesa" hex="#14B8E6" rgb="RGB 20·184·230" role="Secundária" bgClass="bg-[#14B8E6]" />
                <ColorCard name="Coral" hex="#FF6B6B" rgb="RGB 255·107·107" role="Acento" bgClass="bg-[#FF6B6B]" />
                <ColorCard name="Azul Marinho" hex="#0B1D3A" rgb="RGB 11·29·58" role="Base / Texto" bgClass="bg-[#0B1D3A]" />
                <ColorCard name="Cinza Claro" hex="#F5F6F8" rgb="RGB 245·246·248" role="Fundos" bgClass="bg-[#F5F6F8]" />
              </div>
            </div>

            {/* SUBSEÇÃO: HIERARQUIA E PROPORÇÃO DE USO */}
            <div className="pt-8 border-t border-slate-100 space-y-6">
              <div>
                <h3 className="text-lg font-bold text-slate-900 font-dynapuff">
                  Proporção de Aplicação (Regra 60-30-10)
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Distribuição cromática estratégica para garantir equilíbrio visual, respiro e direcionamento do olhar.
                </p>
              </div>

              <div className="w-full h-8 rounded-xl overflow-hidden flex shadow-inner border border-slate-200/80 p-0.5 bg-slate-100">
                <div className="w-[60%] h-full bg-gradient-to-r from-[#F5F6F8] to-[#2563EB] rounded-l-lg flex items-center justify-center text-[10px] font-black text-slate-800 uppercase tracking-widest px-2 overflow-hidden">
                  60% Base / Fundos
                </div>
                <div className="w-[30%] h-full bg-gradient-to-r from-[#14B8E6] to-[#0B1D3A] flex items-center justify-center text-[10px] font-black text-white uppercase tracking-widest px-2 overflow-hidden">
                  30% Estrutura
                </div>
                <div className="w-[10%] h-full bg-gradient-to-r from-[#F4B400] to-[#FF6B6B] rounded-r-lg flex items-center justify-center text-[10px] font-black text-slate-900 uppercase tracking-widest px-1 overflow-hidden">
                  10% CTA
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-3 h-3 rounded-full bg-[#2563EB]" />
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-900">60% Base & Fundos</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    <strong>Cinza Claro (#F5F6F8) e Azul Vital (#2563EB):</strong> Dominam áreas de fundo e contêineres primários para garantir alto contraste, legibilidade e respiro visual.
                  </p>
                </div>

                <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-3 h-3 rounded-full bg-[#14B8E6]" />
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-900">30% Apoio & Estrutura</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    <strong>Turquesa (#14B8E6) e Azul Marinho (#0B1D3A):</strong> Aplicados em elementos estruturais, cartões e divisórias secundárias para estruturar a hierarquia de leitura.
                  </p>
                </div>

                <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-3 h-3 rounded-full bg-[#F4B400]" />
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-900">10% Acento & CTA</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    <strong>Amarelo Luz (#F4B400) e Coral (#FF6B6B):</strong> Reservados pontualmente para botões de ação, badges e focos de alta atenção. Nunca usados como cor dominante.
                  </p>
                </div>
              </div>
            </div>

            {/* SUBSEÇÃO: SISTEMA TIPOGRÁFICO */}
            <div className="pt-8 border-t border-slate-100 space-y-6">
              <div>
                <h3 className="text-lg font-bold text-slate-900 font-dynapuff">
                  Famílias Tipográficas
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Voz expressiva para títulos e alta legibilidade para interfaces e corpo de texto.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Card 1: DynaPuff */}
                <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-100 shadow-sm flex flex-col justify-between space-y-6">
                  <div>
                    <div className="flex items-center justify-between gap-4 mb-4">
                      <span className="inline-block px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-amber-100 text-amber-800">
                        Display & Títulos
                      </span>
                      <span className="text-xs font-mono text-slate-400">Peso: Bold (700)</span>
                    </div>

                    <div className="font-bold text-4xl sm:text-5xl text-slate-900 tracking-tight leading-none mb-4 font-dynapuff">
                      DynaPuff
                    </div>

                    <p className="text-xs text-slate-500 leading-relaxed mb-6 font-sans">
                      Fonte arredondada e expressiva criada para comunicar a alegria, luz e dinamismo do público infantil. Usada em títulos, nomes de eventos e logos.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block font-sans">Demonstração Geométrica</span>
                    <div className="font-bold text-lg sm:text-xl text-blue-600 leading-snug font-dynapuff">
                      A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
                    </div>
                    <div className="font-bold text-sm text-slate-700 font-dynapuff">
                      a b c d e f g h i j k l m n o p q r s t u v w x y z · 0 1 2 3 4 5 6 7 8 9
                    </div>
                  </div>
                </div>

                {/* Card 2: Nunito */}
                <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-100 shadow-sm flex flex-col justify-between space-y-6 font-nunito">
                  <div>
                    <div className="flex items-center justify-between gap-4 mb-4">
                      <span className="inline-block px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-blue-100 text-blue-800">
                        Corpo de Texto & UI
                      </span>
                      <span className="text-xs font-mono text-slate-400">Pesos: Regular, Medium, Bold</span>
                    </div>

                    <div className="font-extrabold text-4xl sm:text-5xl text-slate-900 tracking-tight leading-none mb-4">
                      Nunito
                    </div>

                    <p className="text-xs text-slate-500 leading-relaxed mb-6">
                      Família tipográfica sem serifa balanceada com remates arredondados. Oferece máxima legibilidade para blocos de leitura, formulários e interfaces.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">Exemplo de Legibilidade & Leitura</span>
                    <p className="font-bold text-base sm:text-lg text-slate-900 leading-relaxed">
                      &ldquo;Crianças cheias do Espírito, vivendo o amor de Deus e espalhando luz por onde passam. Um ecossistema de aprendizado e comunhão.&rdquo;
                    </p>
                    <div className="text-xs text-slate-500 pt-1 border-t border-slate-200/60">
                      ABCDEFGHIJKLMNOPQRSTUVWXYZ · abcdefghijklmnopqrstuvwxyz · 0123456789
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 6. SEÇÃO: SISTEMA DE MASCOTES */}
          <section id="mascotes" className="scroll-mt-36 py-12 sm:py-16">
            <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
                05 — Mascotes & Diretrizes
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-2 font-dynapuff">
                Sistema de Mascotes & Comunicação
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
                Arquétipos, psicologia das cores e diretrizes práticas para aplicação de cada personagem.
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="relative w-full rounded-2xl md:rounded-3xl overflow-hidden shadow-xl border border-slate-200/80 bg-white group">
                <Image
                  src="/images/Apresentação-dos-personagens.png"
                  alt="Diretrizes de uso dos mascotes Carol, Bruno, Mel e Tuco"
                  width={1920}
                  height={1080}
                  className="w-full h-auto object-cover object-center group-hover:scale-[1.01] transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 1024px"
                  priority
                />
              </div>
            </div>
          </section>

        </div>
      </main>

      {/* Footer Global da Plixel */}
      <Footer />
    </div>
  )
}
