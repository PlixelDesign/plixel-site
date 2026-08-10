'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { JenniferCaseData } from '@/types'

export const DEFAULT_JENNIFER_CASE_DATA: JenniferCaseData = {
  heroSymbol: '/images/Cases/Jennifer-Lemos/jl-hero-capa.png',
  heroTitleLine1: 'Jennifer Lemos',
  heroTitleLine2: 'Posicionamento de Luxo',
  heroSubtitle:
    'Romper a barreira de precificação do mercado premium através da engenharia de design e da usabilidade de marca.',
  paletteColors: [
    {
      hex: '#001c4a',
      name: 'Marinho Institucional',
      role: 'Corpo de Sobriedade & Contratos',
      textHex: '#F5F5F5',
      verticalLabel: 'Azul Ultramarino / Real',
    },
    {
      hex: '#ffd2a9',
      name: 'Nude de Suporte',
      role: 'Acento de Marca & Hot Stamping',
      textHex: '#001c4a',
      verticalLabel: 'Creme Salmão / Nude',
    },
    {
      hex: '#F5F5F5',
      name: 'Branco Puro',
      role: 'Acolhimento Editorial & Álbuns',
      textHex: '#001c4a',
      verticalLabel: 'Off-White Acetinado',
    },
    {
      hex: '#001130',
      name: 'Variante de Contraste',
      role: 'Profundidade de Leitura Noturna',
      textHex: '#F5F5F5',
      verticalLabel: 'Marinho Sólido Noturno',
    },
  ],
  gridBImage: '/images/Cases/Jennifer-Lemos/jl-engenharia-logos-responsivos.png',
  gridCImage: '/images/Cases/Jennifer-Lemos/jl-mockup-pattern.png',
  gridCLegend:
    'Grafismos Proprietários e Brand Equity: Fragmentação geométrica da matriz do símbolo gerando padronagem focada em experiências físicas de luxo (guardas de álbuns e fitas de cetim).',
  gridDImage: '/images/Cases/Jennifer-Lemos/jl-mockup-unboxing-luxo.png',
}

interface JenniferLemosCaseProps {
  data?: Partial<JenniferCaseData>
}

export default function JenniferLemosCase({ data }: JenniferLemosCaseProps) {
  const caseData: JenniferCaseData = {
    ...DEFAULT_JENNIFER_CASE_DATA,
    ...data,
  }

  const [activeImage, setActiveImage] = useState<{ src: string; alt: string } | null>(null)

  // Suporte a fechar modal de Lightbox com a tecla ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveImage(null)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white font-jl-tertiary selection:bg-[#ffd2a9] selection:text-[#001c4a] relative overflow-x-hidden antialiased tracking-wide">
      {/* Header Global da Plixel */}
      <Header />

      {/* Sub-header de navegação interna (Jennifer Lemos - Font System Proprietário) */}
      <header className="sticky top-16 z-40 backdrop-blur-2xl bg-black/85 border-b border-white/10 transition-all font-jl-tertiary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between overflow-x-auto scrollbar-none">
          <div className="flex items-center gap-4 shrink-0">
            <Link
              href="/trabalhos"
              className="flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-[#ffd2a9] uppercase tracking-widest transition-colors"
            >
              ← Voltar
            </Link>
            <div className="h-4 w-px bg-white/10 hidden sm:block" />

            {/* Badge Marca Jennifer Lemos */}
            <a
              href="#diagnostico"
              className="group flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 hover:bg-[#ffd2a9]/20 border border-white/10 hover:border-[#ffd2a9]/40 transition-all duration-300"
            >
              <div className="w-2 h-2 rounded-full bg-[#ffd2a9] animate-pulse" />
              <span className="font-bold text-xs text-[#F5F5F5] tracking-widest uppercase group-hover:text-[#ffd2a9] transition-colors font-jl-secondary">
                {caseData.heroTitleLine1}
              </span>
              <span className="text-[10px] uppercase text-[#F5F5F5]/60 ml-1 font-jl-tertiary">
                [ Sinera / Bontias / Julius ]
              </span>
            </a>
          </div>

          <nav className="flex items-center space-x-3 sm:space-x-6 text-xs text-slate-400 font-jl-tertiary tracking-widest uppercase">
            <a
              href="#hero"
              className="px-1 py-1 hover:text-[#ffd2a9] transition-colors whitespace-nowrap"
            >
              01. Abertura
            </a>
            <a
              href="#diagnostico"
              className="px-1 py-1 hover:text-[#ffd2a9] transition-colors whitespace-nowrap"
            >
              02. Diagnóstico
            </a>
            <a
              href="#engenharia-vetorial"
              className="px-1 py-1 hover:text-[#ffd2a9] transition-colors whitespace-nowrap"
            >
              03. Engenharia Vetorial
            </a>
            <a
              href="#unboxing"
              className="px-1 py-1 hover:text-[#ffd2a9] transition-colors whitespace-nowrap"
            >
              04. Unboxing 8K
            </a>
          </nav>
        </div>
      </header>

      {/* 01. HERO SECTION RESPONSIVO (HOT STAMPING METALICO COM RESPIRO DE TIPOGRAFIA EM 2 LINHAS) */}
      <section id="hero" className="relative w-full min-h-[85vh] sm:min-h-[90vh] md:min-h-screen flex flex-col justify-between overflow-hidden bg-black py-8 sm:py-16 md:py-24">
        
        {/* Imagem de Fundo Hot Stamping Metálico (heroSymbol) */}
        <div className="absolute inset-0 w-full h-full cursor-zoom-in group">
          <Image
            src={caseData.heroSymbol}
            alt={`${caseData.heroTitleLine1} / Símbolo Âncora Hot Stamping Dourado`}
            fill
            priority
            className="object-cover object-center w-full h-full block transition-transform duration-1000 group-hover:scale-[1.02]"
            onClick={() =>
              setActiveImage({
                src: caseData.heroSymbol,
                alt: `${caseData.heroTitleLine1} / Símbolo Âncora Hot Stamping Dourado Fullscreen`,
              })
            }
          />
          {/* Gradiente escuro reforçado para legibilidade cirúrgica sem encavalar o texto no símbolo central */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30 pointer-events-none" />
        </div>

        {/* Tag Superior */}
        <div className="relative z-20 pt-16 sm:pt-20 md:pt-24 px-4 sm:px-8 md:px-12 pointer-events-none font-jl-tertiary">
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#ffd2a9] block drop-shadow-md">
            [ BRAND EQUITY / SISTEMA IDENTITÁRIO HÍBRIDO DE LUXO ]
          </span>
        </div>

        {/* Título Monumental em 2 Linhas Limpas Posicionado Perfeitamente Abaixo do Símbolo Central */}
        <div className="relative z-30 pt-40 sm:pt-56 md:pt-72 pb-8 sm:pb-14 md:pb-16 px-4 sm:px-8 md:px-12 max-w-[95vw] space-y-4">
          <h1 className="text-3xl xs:text-4xl sm:text-6xl md:text-8xl lg:text-[8.5rem] font-normal tracking-tight text-[#F5F5F5] leading-[1.05] select-none drop-shadow-2xl font-jl-primary space-y-1 sm:space-y-2">
            <span className="block text-[#F5F5F5]">{caseData.heroTitleLine1}</span>
            <span className="block text-[#ffd2a9] italic font-light">{caseData.heroTitleLine2}</span>
          </h1>
          <p className="text-xs sm:text-lg md:text-2xl text-[#F5F5F5]/95 max-w-4xl font-jl-secondary font-light drop-shadow leading-relaxed italic">
            {caseData.heroSubtitle}
          </p>
        </div>

      </section>

      {/* COMPASSO DE LINHAS VERTICAIS ASSÍNCRONAS */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-l border-white/10">

        {/* 02. SEÇÃO TÉCNICA 01: O GARGALO DE ESCALA E REPRODUÇÃO (COPYWRITING SÊNIOR) */}
        <section id="diagnostico" className="scroll-mt-32 py-20 md:py-36 relative">
          <div className="border-l-2 border-[#ffd2a9] pl-6 md:pl-12 max-w-5xl space-y-8">
            <span className="text-xs font-bold uppercase tracking-widest text-[#ffd2a9] block font-jl-tertiary">
              [ 01. DIAGNÓSTICO: O GARGALO DE ESCALA E REPRODUÇÃO ]
            </span>

            <h2 className="text-4xl sm:text-6xl font-normal text-[#F5F5F5] tracking-tight font-jl-primary">
              O Gargalo de Escala e Reprodução
            </h2>

            <p className="text-lg sm:text-2xl text-slate-300 font-light leading-relaxed font-jl-tertiary tracking-wide">
              O mercado premium de fotografia exige um ecossistema de marca elástico, capaz de trafegar entre mídias físicas de alta sofisticação (álbuns de luxo, papelaria de fina gramatura) e ambientes digitais de alta saturação visual. O desafio central consistia em romper a barreira da precificação comum através do design, resolvendo um problema crítico de usabilidade: criar uma identidade que mantivesse o peso institucional em grandes formatos sem perder a legibilidade matemática ou entupir traços vetoriais ao ser reduzida para micromídias, favicons e marcas d’água estruturais.
            </p>

            <div className="pt-6 flex flex-wrap items-center gap-8 text-xs font-jl-tertiary text-[#F5F5F5]/70 tracking-widest uppercase">
              <div>
                <span className="block text-slate-500 font-semibold">Segmento</span>
                <span className="text-[#F5F5F5] font-bold">Fotografia de Alta Cultura &amp; Luxo</span>
              </div>
              <div className="h-6 w-px bg-white/10 hidden sm:block" />
              <div>
                <span className="block text-slate-500 font-semibold">Engenharia</span>
                <span className="text-[#F5F5F5] font-bold">Blindagem Vetorial &amp; Responsividade</span>
              </div>
            </div>
          </div>
        </section>

        {/* 03. SEÇÃO TÉCNICA 02: MATRIZ CROMÁTICA E ENGENHARIA VETORIAL (GRIDS VISUAIS) */}
        <section id="engenharia-vetorial" className="scroll-mt-32 py-20 md:py-36 relative space-y-24 border-t border-white/10">
          
          {/* Header da Seção */}
          <div className="space-y-4 max-w-4xl border-l-2 border-[#ffd2a9] pl-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#ffd2a9] block font-jl-tertiary">
              [ 02. ENGENHARIA &amp; MATRIZES IDENTITÁRIAS ]
            </span>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-normal text-[#F5F5F5] tracking-tight font-jl-primary">
              Matriz Cromática &amp; Blindagem Vetorial
            </h2>
            <p className="text-base md:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl font-jl-tertiary tracking-wide">
              Testes rigorosos de contraste e escalabilidade vetorial projetados para anular qualquer falha de impressão em hot stamping ou micropixels.
            </p>
          </div>

          {/* GRID A: MATRIZ CROMÁTICA NO CÓDIGO (4 AMOSTRAS FÍSICAS DYNAMICAS COM WRITING-MODE VERTICAL-RL) */}
          <div className="space-y-6 w-full">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#ffd2a9] block font-jl-tertiary">
                [ GRID A / MATRIZ DE COMPORTAMENTO CROMÁTICO E RESPONSIVIDADE CONTROLADA ]
              </span>
              <h3 className="text-2xl sm:text-4xl md:text-5xl font-normal text-[#F5F5F5] font-jl-secondary tracking-wide">
                Matriz de Comportamento Cromático
              </h3>
            </div>

            {/* COMPONENTE TAILWIND PURO: 4 AMOSTRAS FÍSICAS DINÂMICAS */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 font-jl-tertiary w-full">
              {caseData.paletteColors.map((color, idx) => (
                <div
                  key={idx}
                  style={{ backgroundColor: color.hex }}
                  className="border border-white/10 rounded-none p-6 md:p-8 min-h-[260px] flex justify-between shadow-2xl transition-transform hover:scale-[1.01] duration-300 relative overflow-hidden"
                >
                  <div className="flex flex-col justify-between h-full z-10">
                    <span
                      style={{ color: color.textHex === '#F5F5F5' ? '#ffd2a9' : '#001c4a' }}
                      className="text-[10px] font-mono font-bold tracking-widest uppercase"
                    >
                      {color.hex}
                    </span>
                    <div className="space-y-1">
                      <span
                        style={{ color: color.textHex }}
                        className="block text-sm md:text-base font-bold uppercase tracking-widest"
                      >
                        {color.name}
                      </span>
                      <span
                        style={{ color: color.textHex }}
                        className="block text-[11px] opacity-75 uppercase tracking-wider font-light"
                      >
                        {color.role}
                      </span>
                    </div>
                  </div>
                  {/* Legenda Técnica Vertical */}
                  <div
                    style={{ color: color.textHex === '#F5F5F5' ? '#ffd2a9' : '#001c4a' }}
                    className="[writing-mode:vertical-rl] rotate-180 text-[10px] uppercase font-bold tracking-widest opacity-60 select-none"
                  >
                    {color.verticalLabel}
                  </div>
                </div>
              ))}
            </div>

            <p className="text-sm md:text-base text-slate-300 font-light leading-relaxed max-w-4xl font-jl-tertiary tracking-wide border-l border-white/20 pl-4 py-1">
              Paleta cromática desenvolvida sob rigorosos testes de contraste. A alternância entre o Marinho Institucional (#001c4a), o Nude de Suporte (#ffd2a9) e o Branco Puro (#F5F5F5) permite que a marca transite entre a sobriedade corporativa (contratos) e o acolhimento editorial (álbuns), sem perder o reconhecimento imediato.
            </p>
          </div>

          {/* GRID B: ENGENHARIA VETORIAL E REDUÇÕES (gridBImage) */}
          <div className="space-y-6 w-full pt-12 border-t border-white/10">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#ffd2a9] block font-jl-tertiary">
                [ GRID B / TESTES VETORIAIS E REDUÇÃO ]
              </span>
              <h3 className="text-2xl sm:text-4xl md:text-5xl font-normal text-[#F5F5F5] font-jl-secondary tracking-wide">
                Engenharia Vetorial e Blindagem de Redução
              </h3>
            </div>

            {/* Container da Imagem Full-Bleed 16:9 */}
            <div
              className="relative w-full aspect-video overflow-hidden bg-black border border-white/10 cursor-zoom-in group shadow-2xl rounded-none"
              onClick={() =>
                setActiveImage({
                  src: caseData.gridBImage,
                  alt: `${caseData.heroTitleLine1} / Engenharia Vetorial e Blindagem de Redução`,
                })
              }
            >
              <Image
                src={caseData.gridBImage}
                alt={`${caseData.heroTitleLine1} / Engenharia Vetorial e Blindagem de Redução`}
                fill
                className="object-cover w-full h-full block transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </div>

            <p className="text-sm md:text-base text-slate-300 font-light leading-relaxed max-w-4xl font-jl-tertiary tracking-wide border-l border-white/20 pl-4 py-1">
              Mapeamento e desenvolvimento de variações vetoriais do símbolo âncora (lente / estrela guia). Cada versão foi milimetricamente ajustada para responder a diferentes tecnologias de reprodução física (hot stamping, relevo seco), anulando o risco de entupimento de traços.
            </p>
          </div>

        </section>

        {/* 04. SEÇÃO TÉCNICA 03: ATIVOS DE RETENÇÃO E EXPERIÊNCIA FÍSICA (PATTERNS E UNBOXING 8K) */}
        <section id="unboxing" className="scroll-mt-32 py-20 md:py-36 relative space-y-24 border-t border-white/10">
          
          {/* Header da Seção */}
          <div className="space-y-4 max-w-4xl border-l-2 border-[#ffd2a9] pl-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#ffd2a9] block font-jl-tertiary">
              [ 03. TANGIBILIZAÇÃO &amp; SERVICE DESIGN ]
            </span>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-normal text-[#F5F5F5] tracking-tight font-jl-primary">
              Experiência Física &amp; Unboxing 8K
            </h2>
            <p className="text-base md:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl font-jl-tertiary tracking-wide">
              Materialização do ecossistema visual na papelaria corporativa premium e caixas de linho, consolidando a percepção de alto ticket no onboarding.
            </p>
          </div>

          {/* GRID C: GRAFISMOS SECUNDÁRIOS / PATTERNS (gridCImage) */}
          <div className="space-y-6 w-full">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#ffd2a9] block font-jl-tertiary">
                [ GRID C / GRAFISMOS PROPRIETÁRIOS E BRAND EQUITY ]
              </span>
              <h3 className="text-2xl sm:text-4xl md:text-5xl font-normal text-[#F5F5F5] font-jl-secondary tracking-wide">
                Grafismos Secundários e Texturas de Fixação de Marca
              </h3>
            </div>

            {/* Container da Imagem Full-Bleed 16:9 */}
            <div
              className="relative w-full aspect-video overflow-hidden bg-black border border-white/10 cursor-zoom-in group shadow-2xl rounded-none"
              onClick={() =>
                setActiveImage({
                  src: caseData.gridCImage,
                  alt: `${caseData.heroTitleLine1} / Grafismos Proprietários e Brand Equity`,
                })
              }
            >
              <Image
                src={caseData.gridCImage}
                alt={`${caseData.heroTitleLine1} / Grafismos Proprietários e Brand Equity`}
                fill
                className="object-cover w-full h-full block transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </div>

            <p className="text-sm md:text-base text-slate-300 font-light leading-relaxed max-w-4xl font-jl-tertiary tracking-wide border-l border-white/20 pl-4 py-1">
              {caseData.gridCLegend}
            </p>
          </div>

          {/* GRID D: SERVICE DESIGN E UNBOXING 8K (gridDImage) */}
          <div className="space-y-6 w-full pt-12 border-t border-white/10">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#ffd2a9] block font-jl-tertiary">
                [ GRID D / SERVICE DESIGN UNBOXING 8K ]
              </span>
              <h3 className="text-2xl sm:text-4xl md:text-5xl font-normal text-[#F5F5F5] font-jl-secondary tracking-wide">
                Service Design: Consistência na Jornada do Cliente e Onboarding de Alto Ticket
              </h3>
            </div>

            {/* Container da Imagem Monumental Full-Bleed 16:9 */}
            <div
              className="relative w-full aspect-video overflow-hidden bg-black border border-white/10 cursor-zoom-in group shadow-2xl rounded-none"
              onClick={() =>
                setActiveImage({
                  src: caseData.gridDImage,
                  alt: `${caseData.heroTitleLine1} / Service Design Onboarding de Alto Ticket`,
                })
              }
            >
              <Image
                src={caseData.gridDImage}
                alt={`${caseData.heroTitleLine1} / Service Design Onboarding de Alto Ticket`}
                fill
                className="object-cover w-full h-full block transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </div>

            <p className="text-sm md:text-base text-slate-300 font-light leading-relaxed max-w-4xl font-jl-tertiary tracking-wide border-l border-white/20 pl-4 py-1">
              A materialização do ecossistema visual na papelaria corporativa premium consolida a transição do digital para o físico, eliminando o atrito na entrega do produto de alto ticket.
            </p>
          </div>

        </section>

      </div>

      {/* LIGHTBOX FULLSCREEN INTERATIVO (ZOOM DE IMAGEM EDITORIAL) */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-8 transition-all duration-300 animate-in fade-in"
          onClick={() => setActiveImage(null)}
        >
          <div
            className="relative w-full h-full max-w-7xl max-h-[90vh] flex flex-col items-center justify-center space-y-4 font-jl-tertiary"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar Lightbox */}
            <div className="w-full flex items-center justify-between px-2 text-white font-jl-tertiary">
              <span className="text-xs text-[#F5F5F5] truncate max-w-xl font-semibold tracking-wider uppercase">
                {activeImage.alt}
              </span>
              <button
                type="button"
                onClick={() => setActiveImage(null)}
                className="px-3.5 py-1.5 rounded bg-white/10 hover:bg-white/20 text-white text-xs transition-colors cursor-pointer border border-white/20 font-semibold tracking-widest uppercase"
              >
                ✕ Fechar (ESC)
              </button>
            </div>

            {/* Imagem Ampliada */}
            <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-black border border-white/10">
              <Image
                src={activeImage.src}
                alt={activeImage.alt}
                fill
                className="object-contain"
                sizes="95vw"
                priority
              />
            </div>
          </div>
        </div>
      )}

      {/* Footer Global da Plixel */}
      <Footer />
    </div>
  )
}
