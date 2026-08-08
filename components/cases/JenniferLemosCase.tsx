'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export default function JenniferLemosCase() {
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
    <div className="min-h-screen bg-black text-white font-jl-tertiary selection:bg-[#c48b56] selection:text-black relative overflow-x-hidden antialiased tracking-wide">
      {/* Header Global da Plixel */}
      <Header />

      {/* Sub-header de navegação interna (Jennifer Lemmos - Font System Proprietário) */}
      <header className="sticky top-16 z-40 backdrop-blur-2xl bg-black/85 border-b border-white/10 transition-all font-jl-tertiary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between overflow-x-auto scrollbar-none">
          <div className="flex items-center gap-4 shrink-0">
            <Link
              href="/trabalhos"
              className="flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-[#c48b56] uppercase tracking-widest transition-colors"
            >
              ← Voltar
            </Link>
            <div className="h-4 w-px bg-white/10 hidden sm:block" />

            {/* Badge Marca Jennifer Lemmos */}
            <a
              href="#diagnostico"
              className="group flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 hover:bg-[#c48b56]/20 border border-white/10 hover:border-[#c48b56]/40 transition-all duration-300"
            >
              <div className="w-2 h-2 rounded-full bg-[#c48b56] animate-pulse" />
              <span className="font-bold text-xs text-[#f5ebe0] tracking-widest uppercase group-hover:text-[#c48b56] transition-colors font-jl-secondary">
                Jennifer Lemmos
              </span>
              <span className="text-[10px] uppercase text-[#f5ebe0]/60 ml-1 font-jl-tertiary">
                [ Sinera · Bontias · Julius ]
              </span>
            </a>
          </div>

          <nav className="flex items-center space-x-3 sm:space-x-6 text-xs text-slate-400 font-jl-tertiary tracking-widest uppercase">
            <a
              href="#hero"
              className="px-1 py-1 hover:text-[#c48b56] transition-colors whitespace-nowrap"
            >
              01. Abertura
            </a>
            <a
              href="#diagnostico"
              className="px-1 py-1 hover:text-[#c48b56] transition-colors whitespace-nowrap"
            >
              02. Diagnóstico
            </a>
            <a
              href="#engenharia-vetorial"
              className="px-1 py-1 hover:text-[#c48b56] transition-colors whitespace-nowrap"
            >
              03. Engenharia Vetorial
            </a>
            <a
              href="#unboxing"
              className="px-1 py-1 hover:text-[#c48b56] transition-colors whitespace-nowrap"
            >
              04. Unboxing 8K
            </a>
          </nav>
        </div>
      </header>

      {/* 01. HERO SECTION (ABERTURA DE DIAGNÓSTICO) */}
      <section id="hero" className="relative w-full min-h-[60vh] sm:min-h-[75vh] md:h-screen flex flex-col justify-between overflow-hidden bg-black">
        
        {/* Imagem Fotorrealista JLS-1 banhada por luz dramática (Full-Bleed) */}
        <div className="absolute inset-0 w-full h-full cursor-zoom-in group">
          <Image
            src="/images/Cases/Jennifer-Lemos/JLS-1.jpg"
            alt="Jennifer Lemmos — Identidade Visual de Luxo (JLS-1)"
            fill
            priority
            className="object-cover object-center w-full h-full block transition-transform duration-1000 group-hover:scale-[1.02]"
            onClick={() =>
              setActiveImage({
                src: '/images/Cases/Jennifer-Lemos/JLS-1.jpg',
                alt: 'Jennifer Lemmos — Identidade Visual de Luxo Fullscreen',
              })
            }
          />
          {/* Gradiente escuro para legibilidade da tipografia monumental */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none" />
        </div>

        {/* Tag Superior */}
        <div className="relative z-20 pt-20 md:pt-24 px-6 md:px-12 pointer-events-none font-jl-tertiary">
          <span className="text-xs font-bold uppercase tracking-widest text-[#c48b56] block drop-shadow-md">
            [ BRAND EQUITY · SISTEMA IDENTITÁRIO HÍBRIDO DE LUXO ]
          </span>
        </div>

        {/* Título Monumental em Sinera (font-jl-primary) & Headline em Bontias (font-jl-secondary) */}
        <div className="relative z-30 pb-8 md:pb-16 px-6 md:px-12 max-w-[95vw] space-y-4">
          <h1 className="text-4xl sm:text-7xl md:text-8xl lg:text-[9.5rem] font-normal tracking-tight text-[#f5ebe0] leading-none select-none drop-shadow-2xl font-jl-primary">
            Jennifer Lemmos <span className="text-[#c48b56] italic font-light">— Posicionamento de Luxo</span>
          </h1>
          <p className="text-base sm:text-xl md:text-2xl text-[#f5ebe0]/90 max-w-4xl font-jl-secondary font-light drop-shadow leading-relaxed italic">
            Romper a barreira de precificação do mercado premium através da engenharia de design e da usabilidade de marca.
          </p>
        </div>

      </section>

      {/* COMPASSO DE LINHAS VERTICAIS ASSÍNCRONAS */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-l border-white/10">

        {/* 02. SEÇÃO TÉCNICA 01: O GARGALO DE ESCALA E REPRODUÇÃO (COPYWRITING SÊNIOR) */}
        <section id="diagnostico" className="scroll-mt-32 py-20 md:py-36 relative">
          <div className="border-l-2 border-[#c48b56] pl-6 md:pl-12 max-w-5xl space-y-8">
            <span className="text-xs font-bold uppercase tracking-widest text-[#c48b56] block font-jl-tertiary">
              [ 01. DIAGNÓSTICO: O GARGALO DE ESCALA E REPRODUÇÃO ]
            </span>

            <h2 className="text-4xl sm:text-6xl font-normal text-[#f5ebe0] tracking-tight font-jl-primary">
              O Gargalo de Escala e Reprodução
            </h2>

            <p className="text-lg sm:text-2xl text-slate-300 font-light leading-relaxed font-jl-tertiary tracking-wide">
              O mercado premium de fotografia exige um ecossistema de marca elástico, capaz de trafegar entre mídias físicas de alta sofisticação (álbuns de luxo, papelaria de fina gramatura) e ambientes digitais de alta saturação visual. O desafio central consistia em romper a barreira da precificação comum através do design, resolvendo um problema crítico de usabilidade: criar uma identidade que mantivesse o peso institucional em grandes formatos sem perder a legibilidade matemática ou entupir traços vetoriais ao ser reduzida para micromídias, favicons e marcas d’água estruturais.
            </p>

            <div className="pt-6 flex flex-wrap items-center gap-8 text-xs font-jl-tertiary text-[#f5ebe0]/70 tracking-widest uppercase">
              <div>
                <span className="block text-slate-500 font-semibold">Segmento</span>
                <span className="text-[#f5ebe0] font-bold">Fotografia de Alta Cultura &amp; Luxo</span>
              </div>
              <div className="h-6 w-px bg-white/10 hidden sm:block" />
              <div>
                <span className="block text-slate-500 font-semibold">Engenharia</span>
                <span className="text-[#f5ebe0] font-bold">Blindagem Vetorial &amp; Responsividade</span>
              </div>
            </div>
          </div>
        </section>

        {/* 03. SEÇÃO TÉCNICA 02: MATRIZ CROMÁTICA E ENGENHARIA VETORIAL (GRIDS VISUAIS) */}
        <section id="engenharia-vetorial" className="scroll-mt-32 py-20 md:py-36 relative space-y-24 border-t border-white/10">
          
          {/* Header da Seção */}
          <div className="space-y-4 max-w-4xl border-l-2 border-[#c48b56] pl-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#c48b56] block font-jl-tertiary">
              [ 02. ENGENHARIA &amp; MATRIZES IDENTITÁRIAS ]
            </span>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-normal text-[#f5ebe0] tracking-tight font-jl-primary">
              Matriz Cromática &amp; Blindagem Vetorial
            </h2>
            <p className="text-base md:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl font-jl-tertiary tracking-wide">
              Testes rigorosos de contraste e escalabilidade vetorial projetados para anular qualquer falha de impressão em hot stamping ou micropixels.
            </p>
          </div>

          {/* GRID A: MATRIZ CROMÁTICA CONTROLADA (PASSO B) */}
          <div className="space-y-6 w-full">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#c48b56] block font-jl-tertiary">
                [ GRID A · COMPORTAMENTO CROMÁTICO ]
              </span>
              <h3 className="text-2xl sm:text-4xl md:text-5xl font-normal text-[#f5ebe0] font-jl-secondary tracking-wide">
                Matriz de Comportamento Cromático e Responsividade Controlada
              </h3>
            </div>

            {/* Container da Imagem Full-Bleed 16:9 */}
            <div
              className="relative w-full aspect-video overflow-hidden bg-black border border-white/10 cursor-zoom-in group shadow-2xl rounded-none"
              onClick={() =>
                setActiveImage({
                  src: '/images/Cases/Jennifer-Lemos/image_d6a975.jpg',
                  alt: 'Jennifer Lemmos — Matriz de Comportamento Cromático',
                })
              }
            >
              <Image
                src="/images/Cases/Jennifer-Lemos/image_d6a975.jpg"
                alt="Jennifer Lemmos — Matriz de Comportamento Cromático"
                fill
                className="object-cover w-full h-full block transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </div>

            <p className="text-sm md:text-base text-slate-300 font-light leading-relaxed max-w-4xl font-jl-tertiary tracking-wide border-l border-white/20 pl-4 py-1">
              Paleta cromática desenvolvida sob rigorosos testes de contraste. A alternância entre o Marinho Institucional, o Creme Corporativo e o Nude de Suporte permite que a marca transite entre a sobriedade corporativa (contratos) e o acolhimento editorial (álbuns), sem perder o reconhecimento imediato.
            </p>
          </div>

          {/* GRID B: ENGENHARIA VETORIAL E REDUÇÕES (PASSO C) */}
          <div className="space-y-6 w-full pt-12 border-t border-white/10">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#c48b56] block font-jl-tertiary">
                [ GRID B · TESTES VETORIAIS E REDUÇÃO ]
              </span>
              <h3 className="text-2xl sm:text-4xl md:text-5xl font-normal text-[#f5ebe0] font-jl-secondary tracking-wide">
                Engenharia Vetorial e Blindagem de Redução
              </h3>
            </div>

            {/* Container da Imagem Full-Bleed 16:9 */}
            <div
              className="relative w-full aspect-video overflow-hidden bg-black border border-white/10 cursor-zoom-in group shadow-2xl rounded-none"
              onClick={() =>
                setActiveImage({
                  src: '/images/Cases/Jennifer-Lemos/JLS-2.jpg',
                  alt: 'Jennifer Lemmos — Engenharia Vetorial e Blindagem de Redução',
                })
              }
            >
              <Image
                src="/images/Cases/Jennifer-Lemos/JLS-2.jpg"
                alt="Jennifer Lemmos — Engenharia Vetorial e Blindagem de Redução"
                fill
                className="object-cover w-full h-full block transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </div>

            <p className="text-sm md:text-base text-slate-300 font-light leading-relaxed max-w-4xl font-jl-tertiary tracking-wide border-l border-white/20 pl-4 py-1">
              Mapeamento e desenvolvimento de variações vetoriais do símbolo âncora (lente/estrela guia). Cada versão foi milimetricamente ajustada para responder a diferentes tecnologias de reprodução física (hot stamping, relevo seco), anulando o risco de entupimento de traços.
            </p>
          </div>

        </section>

        {/* 04. SEÇÃO TÉCNICA 03: ATIVOS DE RETENÇÃO E EXPERIÊNCIA FÍSICA (PATTERNS E UNBOXING 8K) */}
        <section id="unboxing" className="scroll-mt-32 py-20 md:py-36 relative space-y-24 border-t border-white/10">
          
          {/* Header da Seção */}
          <div className="space-y-4 max-w-4xl border-l-2 border-[#c48b56] pl-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#c48b56] block font-jl-tertiary">
              [ 03. TANGIBILIZAÇÃO &amp; SERVICE DESIGN ]
            </span>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-normal text-[#f5ebe0] tracking-tight font-jl-primary">
              Experiência Física &amp; Unboxing 8K
            </h2>
            <p className="text-base md:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl font-jl-tertiary tracking-wide">
              Materialização do ecossistema visual na papelaria corporativa premium e caixas de linho, consolidando a percepção de alto ticket no onboarding.
            </p>
          </div>

          {/* GRID C: GRAFISMOS SECUNDÁRIOS / PATTERNS (PASSO D) */}
          <div className="space-y-6 w-full">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#c48b56] block font-jl-tertiary">
                [ GRID C · GRAFISMOS E TEXTURAS ]
              </span>
              <h3 className="text-2xl sm:text-4xl md:text-5xl font-normal text-[#f5ebe0] font-jl-secondary tracking-wide">
                Grafismos Secundários e Texturas de Fixação de Marca
              </h3>
            </div>

            {/* Container da Imagem Full-Bleed 16:9 */}
            <div
              className="relative w-full aspect-video overflow-hidden bg-black border border-white/10 cursor-zoom-in group shadow-2xl rounded-none"
              onClick={() =>
                setActiveImage({
                  src: '/images/Cases/Jennifer-Lemos/JLS-3.jpg',
                  alt: 'Jennifer Lemmos — Grafismos Secundários e Texturas',
                })
              }
            >
              <Image
                src="/images/Cases/Jennifer-Lemos/JLS-3.jpg"
                alt="Jennifer Lemmos — Grafismos Secundários e Texturas"
                fill
                className="object-cover w-full h-full block transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </div>

            <p className="text-sm md:text-base text-slate-300 font-light leading-relaxed max-w-4xl font-jl-tertiary tracking-wide border-l border-white/20 pl-4 py-1">
              A fragmentação geométrica da matriz do símbolo gerou uma padronagem proprietária. Este ativo atua na experiência de unboxing e tangibilização física da marca (guardas de álbuns, papéis de seda, fitas), construindo uma jornada de consumo memorável.
            </p>
          </div>

          {/* GRID D: SERVICE DESIGN E UNBOXING 8K (PASSO E) */}
          <div className="space-y-6 w-full pt-12 border-t border-white/10">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#c48b56] block font-jl-tertiary">
                [ GRID D · SERVICE DESIGN UNBOXING 8K ]
              </span>
              <h3 className="text-2xl sm:text-4xl md:text-5xl font-normal text-[#f5ebe0] font-jl-secondary tracking-wide">
                Service Design: Consistência na Jornada do Cliente e Onboarding de Alto Ticket
              </h3>
            </div>

            {/* Container da Imagem Monumental Full-Bleed 16:9 */}
            <div
              className="relative w-full aspect-video overflow-hidden bg-black border border-white/10 cursor-zoom-in group shadow-2xl rounded-none"
              onClick={() =>
                setActiveImage({
                  src: '/images/Cases/Jennifer-Lemos/JLS-4.jpg',
                  alt: 'Jennifer Lemmos — Service Design Onboarding de Alto Ticket',
                })
              }
            >
              <Image
                src="/images/Cases/Jennifer-Lemos/JLS-4.jpg"
                alt="Jennifer Lemmos — Service Design Onboarding de Alto Ticket"
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
              <span className="text-xs text-[#f5ebe0] truncate max-w-xl font-semibold tracking-wider uppercase">
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
