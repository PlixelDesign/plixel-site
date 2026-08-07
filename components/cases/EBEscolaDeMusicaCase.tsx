'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export default function EBEscolaDeMusicaCase() {
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
    <div className="min-h-screen bg-black text-white font-sans selection:bg-[#c48b56] selection:text-black relative overflow-x-hidden antialiased">
      {/* Header Global da Plixel */}
      <Header />

      {/* Sub-header de navegação interna (Estética Editorial de Vanguarda) */}
      <header className="sticky top-16 z-40 backdrop-blur-2xl bg-black/85 border-b border-white/10 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between overflow-x-auto scrollbar-none">
          <div className="flex items-center gap-4 shrink-0">
            <Link
              href="/trabalhos"
              className="flex items-center gap-2 text-xs font-mono font-bold text-slate-400 hover:text-[#c48b56] uppercase tracking-wider transition-colors"
            >
              ← Voltar
            </Link>
            <div className="h-4 w-px bg-white/10 hidden sm:block" />

            {/* Badge EB Marca */}
            <a
              href="#theme"
              className="group flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 hover:bg-[#c48b56]/20 border border-white/10 hover:border-[#c48b56]/40 transition-all duration-300"
            >
              <div className="w-2 h-2 rounded-full bg-[#c48b56] animate-pulse" />
              <span className="font-bold text-xs text-[#f5ebe0] tracking-wide group-hover:text-[#c48b56] transition-colors">
                EB Escola de Música
              </span>
              <span className="text-[10px] font-mono uppercase text-[#f5ebe0]/50 ml-1">
                [ Avant-Garde ]
              </span>
            </a>
          </div>

          <nav className="flex items-center space-x-3 sm:space-x-6 text-xs font-mono text-slate-400">
            <a
              href="#ouverture"
              className="px-1 py-1 hover:text-[#c48b56] transition-colors whitespace-nowrap"
            >
              01. Ouverture
            </a>
            <a
              href="#theme"
              className="px-1 py-1 hover:text-[#c48b56] transition-colors whitespace-nowrap"
            >
              02. Theme
            </a>
            <a
              href="#harmonics"
              className="px-1 py-1 hover:text-[#c48b56] transition-colors whitespace-nowrap"
            >
              03. Harmonics
            </a>
            <a
              href="#modulation"
              className="px-1 py-1 hover:text-[#c48b56] transition-colors whitespace-nowrap"
            >
              04. Modulation
            </a>
            <a
              href="#resonance"
              className="px-1 py-1 hover:text-[#c48b56] transition-colors whitespace-nowrap"
            >
              05. Resonance
            </a>
          </nav>
        </div>
      </header>

      {/* [OUVERTURE / ABERTURA] - HERO DE IMPACTO BRUTAL */}
      <section id="ouverture" className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-black pt-12 pb-16">
        
        {/* Imagem Capa EB Estourada em Tela Cheia */}
        <div className="relative w-full h-[70vh] md:h-[82vh] max-w-[95vw] mx-auto rounded-3xl overflow-hidden border border-white/10 shadow-2xl cursor-zoom-in group">
          <Image
            src="/images/Cases/EB-Escola-De-Musica/eb-hero-cover.png"
            alt="EB Escola de Música - Ouverture Hero Cover"
            fill
            priority
            className="object-cover w-full h-full block transition-transform duration-1000 group-hover:scale-[1.02]"
            onClick={() =>
              setActiveImage({
                src: '/images/Cases/EB-Escola-De-Musica/eb-hero-cover.png',
                alt: 'EB Escola de Música - Ouverture Hero Cover Fullscreen',
              })
            }
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent pointer-events-none" />

          <div className="absolute bottom-6 left-6 md:bottom-12 md:left-12 z-20 space-y-2 pointer-events-none">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#c48b56] block">
              [ OUVERTURE · REBRANDING &amp; ESTRUTURAÇÃO DE REDE DE ENSINO ]
            </span>
            <p className="text-sm md:text-base font-mono text-[#f5ebe0]/80 max-w-lg">
              Sistema Visual Escalável e Modular para Expansão de Redes de Ensino Musical Premium.
            </p>
          </div>
        </div>

        {/* Tipografia Massiva e Assimétrica (Sobrevos) */}
        <div className="relative max-w-[95vw] mx-auto w-full pt-6 md:-mt-16 z-30">
          <h1 className="text-5xl sm:text-7xl md:text-9xl lg:text-[10.5rem] font-extrabold tracking-tighter text-[#f5ebe0] leading-none uppercase select-none drop-shadow-2xl">
            EB ESCOLA <span className="text-[#c48b56] italic font-light">DE MÚSICA</span>
          </h1>
        </div>

      </section>

      {/* LINHAS DE COMPASSO VERTICAIS ASSÍNCRONAS (VISUAL GLOBAL) */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-l border-white/10">

        {/* [THEME / O TOM DE NEGÓCIO] - O MANIFESTO */}
        <section id="theme" className="scroll-mt-32 py-28 md:py-40 relative">
          <div className="border-l-2 border-[#c48b56] pl-6 md:pl-12 max-w-5xl space-y-8">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#c48b56] block">
              [ 02. THEME / O MANIFESTO DE NEGÓCIO ]
            </span>

            <p className="text-2xl sm:text-4xl md:text-5xl font-light italic text-slate-400 tracking-tight leading-[1.25]">
              &quot;Construímos um <span className="text-[#f5ebe0] font-normal not-italic underline decoration-[#c48b56] underline-offset-8">Sistema Visual Escalável</span> projetado para elevar a <span className="text-[#f5ebe0] font-normal not-italic">Alta Percepção de Valor</span> da EB Escola de Música. O resultado é a <span className="text-[#f5ebe0] font-normal not-italic">Consistência Operacional</span> e a capacidade de replicação acelerada para <span className="text-[#f5ebe0] font-normal not-italic">Redes de Ensino de Ticket Premium</span>.&quot;
            </p>

            <div className="pt-6 flex flex-wrap items-center gap-8 text-xs font-mono text-[#f5ebe0]/60">
              <div>
                <span className="block text-slate-500 uppercase">Posicionamento</span>
                <span className="text-[#f5ebe0] font-bold">Educação Musical de Alto Ticket</span>
              </div>
              <div className="h-6 w-px bg-white/10" />
              <div>
                <span className="block text-slate-500 uppercase">Modularidade</span>
                <span className="text-[#f5ebe0] font-bold">Sinalização, Kit Matrícula &amp; Diplomas</span>
              </div>
            </div>
          </div>
        </section>

        {/* [HARMONICS / DESIGN SYSTEM] - A PRANCHA TÉCNICA ABERTA */}
        <section id="harmonics" className="scroll-mt-32 py-28 md:py-40 relative space-y-20 border-t border-white/10">
          
          <div className="space-y-4 max-w-4xl border-l-2 border-[#c48b56] pl-6">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#c48b56] block">
              [ 03. HARMONICS / TECLAS &amp; TOKENS ]
            </span>
            <h2 className="text-4xl sm:text-6xl font-extrabold text-[#f5ebe0] tracking-tight">
              Design System &amp; Prancha Técnica Aberta
            </h2>
            <p className="text-lg text-slate-300 font-normal leading-relaxed max-w-2xl">
              Os tokens visuais organizados como uma exposição de arte contemporânea. Teclas monocromáticas e o alfabeto completo testando a elasticidade do sistema.
            </p>
          </div>

          {/* COLOR SWATCHES COMO TECLAS DE PIANO */}
          <div className="space-y-6">
            <span className="text-xs font-mono text-[#c48b56] font-bold uppercase tracking-wider block">
              [ TECLAS CROMÁTICAS · PIANO KEY SWATCHES ]
            </span>
            
            <div className="flex items-start gap-4 md:gap-8 overflow-x-auto pb-6 scrollbar-none">
              {/* Tecla 1: Marrom Café */}
              <div className="flex flex-col items-center space-y-3 group">
                <div
                  className="h-72 md:h-96 w-20 md:w-28 rounded-b-2xl border border-white/20 shadow-2xl relative flex items-end justify-center pb-6 transition-transform duration-500 group-hover:translate-y-2"
                  style={{ backgroundColor: '#1a110b' }}
                >
                  <span className="font-mono text-xs text-[#f5ebe0]/80 tracking-widest uppercase rotate-180 [writing-mode:vertical-lr]">
                    #1A110B · CAFÉ PROFUNDO
                  </span>
                </div>
              </div>

              {/* Tecla 2: Chocolate Profundo */}
              <div className="flex flex-col items-center space-y-3 group">
                <div
                  className="h-72 md:h-96 w-20 md:w-28 rounded-b-2xl border border-white/20 shadow-2xl relative flex items-end justify-center pb-6 transition-transform duration-500 group-hover:translate-y-2"
                  style={{ backgroundColor: '#3d2516' }}
                >
                  <span className="font-mono text-xs text-[#f5ebe0]/80 tracking-widest uppercase rotate-180 [writing-mode:vertical-lr]">
                    #3D2516 · CHOCOLATE ESCURO
                  </span>
                </div>
              </div>

              {/* Tecla 3: Chocolate Claro Accent */}
              <div className="flex flex-col items-center space-y-3 group">
                <div
                  className="h-72 md:h-96 w-20 md:w-28 rounded-b-2xl border border-white/20 shadow-2xl relative flex items-end justify-center pb-6 transition-transform duration-500 group-hover:translate-y-2"
                  style={{ backgroundColor: '#8b5a2b' }}
                >
                  <span className="font-mono text-xs text-[#f5ebe0] tracking-widest uppercase rotate-180 [writing-mode:vertical-lr]">
                    #8B5A2B · CHOCOLATE ACCENT
                  </span>
                </div>
              </div>

              {/* Tecla 4: Creme Acolhedor */}
              <div className="flex flex-col items-center space-y-3 group">
                <div
                  className="h-72 md:h-96 w-20 md:w-28 rounded-b-2xl border border-white/20 shadow-2xl relative flex items-end justify-center pb-6 transition-transform duration-500 group-hover:translate-y-2"
                  style={{ backgroundColor: '#f5ebe0' }}
                >
                  <span className="font-mono text-xs text-[#1a110b] font-bold tracking-widest uppercase rotate-180 [writing-mode:vertical-lr]">
                    #F5EBE0 · CREME ACOLHEDOR
                  </span>
                </div>
              </div>

              {/* Tecla 5: Branco Puro */}
              <div className="flex flex-col items-center space-y-3 group">
                <div
                  className="h-72 md:h-96 w-20 md:w-28 rounded-b-2xl border border-white/20 shadow-2xl relative flex items-end justify-center pb-6 transition-transform duration-500 group-hover:translate-y-2"
                  style={{ backgroundColor: '#ffffff' }}
                >
                  <span className="font-mono text-xs text-[#1a110b] font-bold tracking-widest uppercase rotate-180 [writing-mode:vertical-lr]">
                    #FFFFFF · BRANCO PURO
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* HIERARQUIA TIPOGRÁFICA COM ALFABETO COMPLETO A-Z AO FUNDO */}
          <div className="relative pt-12 space-y-12 overflow-hidden rounded-3xl border border-white/10 bg-[#120b07] p-8 md:p-14">
            
            {/* Alfabeto de Fundo em Escala Brutal */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden opacity-10">
              <span className="font-mono text-7xl sm:text-9xl md:text-[14rem] font-bold text-white tracking-widest leading-none">
                ABCDEFGHIJKLMNOPQRSTUVWXYZ
              </span>
            </div>

            <div className="relative z-10 space-y-10">
              <div className="space-y-2">
                <span className="text-xs font-mono text-[#c48b56] font-bold uppercase tracking-widest block">
                  [ FONTE PRIMÁRIA · BALOO BHAI 2 ]
                </span>
                <h3 className="text-4xl md:text-7xl font-extrabold text-[#f5ebe0]">
                  Baloo Bhai 2
                </h3>
                <p className="text-xl md:text-2xl text-[#f5ebe0]/90 font-bold max-w-2xl">
                  &quot;Harmonia entre o Rigor Clássico e a Acolhida Pedagógica.&quot;
                </p>
              </div>

              <div className="space-y-2 pt-6 border-t border-white/10">
                <span className="text-xs font-mono text-[#f5ebe0]/60 font-bold uppercase tracking-widest block">
                  [ FONTE SECUNDÁRIA · REEM KUFI FUN ]
                </span>
                <h3 className="text-3xl md:text-5xl font-bold text-[#f5ebe0]">
                  Reem Kufi Fun
                </h3>
                <p className="text-base text-slate-300 max-w-2xl font-normal leading-relaxed">
                  Tipografia para materiais pedagógicos, partituras, comunicação no WhatsApp e módulos de ensino digital.
                </p>
              </div>
            </div>

          </div>

        </section>

        {/* [MODULATION / WAYFINDING] - RITMO FÍSICO E SELOS */}
        <section id="modulation" className="scroll-mt-32 py-28 md:py-40 relative space-y-20 border-t border-white/10">
          
          <div className="space-y-4 max-w-4xl border-l-2 border-[#c48b56] pl-6">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#c48b56] block">
              [ 04. MODULATION / SINALIZAÇÃO &amp; COMPASSO ]
            </span>
            <h2 className="text-4xl sm:text-6xl font-extrabold text-[#f5ebe0] tracking-tight">
              Ritmo Físico &amp; Sinalização de Conservatório
            </h2>
            <p className="text-lg text-slate-300 font-normal leading-relaxed max-w-2xl">
              Um grid que simula o tempo musical. Aplicação minimalista do símbolo da fusão violoncelo + claves nos corredores e salas da escola.
            </p>
          </div>

          {/* GRID RÍTMICO ASSÍNMERICO (1 GRANDE, 2 PEQUENAS, SILÊNCIO, 1 GIGANTE) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
            
            {/* Bloco 1: Imagem Grande (Col-7) */}
            <div
              className="md:col-span-7 relative h-96 md:h-[500px] rounded-3xl overflow-hidden bg-[#120b07] border border-white/10 p-6 cursor-zoom-in group flex items-center justify-center"
              onClick={() =>
                setActiveImage({
                  src: '/images/Cases/EB-Escola-De-Musica/eb-logo-redondo-marrom.png',
                  alt: 'EB Escola de Música - Logo Redondo Emblemático Marrom',
                })
              }
            >
              <Image
                src="/images/Cases/EB-Escola-De-Musica/eb-logo-redondo-marrom.png"
                alt="EB Logo Redondo Marrom"
                fill
                className="object-contain p-8 transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-md px-3 py-1 rounded border border-white/10 text-[10px] font-mono text-[#f5ebe0]">
                01 / EMBLEMA REDONDO CONSERVATÓRIO
              </div>
            </div>

            {/* Bloco 2: Duas Imagens Pequenas Empilhadas (Col-5) */}
            <div className="md:col-span-5 flex flex-col gap-8">
              <div
                className="relative h-44 md:h-56 rounded-2xl overflow-hidden bg-[#f5ebe0] border border-white/10 p-4 cursor-zoom-in group flex items-center justify-center"
                onClick={() =>
                  setActiveImage({
                    src: '/images/Cases/EB-Escola-De-Musica/eb-logo-horizontal-marrom.png',
                    alt: 'EB Logo Horizontal Fundo Creme',
                  })
                }
              >
                <Image
                  src="/images/Cases/EB-Escola-De-Musica/eb-logo-horizontal-marrom.png"
                  alt="EB Logo Horizontal Fundo Creme"
                  fill
                  className="object-contain p-4 transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>

              <div
                className="relative h-44 md:h-56 rounded-2xl overflow-hidden bg-[#120b07] border border-white/10 p-4 cursor-zoom-in group flex items-center justify-center"
                onClick={() =>
                  setActiveImage({
                    src: '/images/Cases/EB-Escola-De-Musica/eb-logo-vertical-creme.png',
                    alt: 'EB Logo Vertical Fundo Marrom Escuro',
                  })
                }
              >
                <Image
                  src="/images/Cases/EB-Escola-De-Musica/eb-logo-vertical-creme.png"
                  alt="EB Logo Vertical Fundo Marrom Escuro"
                  fill
                  className="object-contain p-4 transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
            </div>

            {/* Espaço em Branco de Silêncio Musical (Col-3) */}
            <div className="hidden md:flex md:col-span-3 items-center justify-center border-l border-white/10 pl-6">
              <span className="font-mono text-xs text-slate-500 rotate-90 tracking-widest uppercase">
                [ PAUSA / SILÊNCIO TÁTICO ]
              </span>
            </div>

            {/* Bloco 3: Imagem Gigante de Sinalização de Salas (Col-9) */}
            <div className="md:col-span-9 space-y-4">
              <div
                className="relative h-96 md:h-[550px] rounded-3xl overflow-hidden bg-[#120b07] border border-white/10 p-8 cursor-zoom-in group flex items-center justify-center"
                onClick={() =>
                  setActiveImage({
                    src: '/images/Cases/EB-Escola-De-Musica/eb-logo-redondo-creme-transparent.png',
                    alt: 'EB Sinalização de Salas de Aula',
                  })
                }
              >
                <Image
                  src="/images/Cases/EB-Escola-De-Musica/eb-logo-redondo-creme-transparent.png"
                  alt="EB Sinalização de Salas de Aula"
                  fill
                  className="object-contain p-12 transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute top-6 left-6 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded border border-white/10 text-xs font-mono text-[#c48b56]">
                  SINALIZAÇÃO: SALA 01 · PIANO &amp; TECLAS
                </div>
              </div>
            </div>

          </div>

        </section>

        {/* [RESONANCE / UNBOXING] - OS PADRÕES VISUAIS PATTERNS */}
        <section id="resonance" className="scroll-mt-32 py-28 md:py-40 relative space-y-16 border-t border-white/10">
          
          <div className="space-y-4 max-w-4xl border-l-2 border-[#c48b56] pl-6">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#c48b56] block">
              [ 05. RESONANCE / TEXTURAS &amp; UNBOXING ]
            </span>
            <h2 className="text-4xl sm:text-6xl font-extrabold text-[#f5ebe0] tracking-tight">
              Padrões Visuais &amp; Experiência de Matrícula
            </h2>
            <p className="text-lg text-slate-300 font-normal leading-relaxed max-w-2xl">
              Patterns repetitivos aplicados de ponta a ponta. Tangibilização da marca em sacolas institucionais, pastas de partituras e kits de exames.
            </p>
          </div>

          {/* LAYOUT EDGE-TO-EDGE FULL-BLEED DOS PATTERNS */}
          <div className="space-y-12">
            
            {/* Pattern 1: Padrão Creme Edge-to-Edge */}
            <div className="space-y-3">
              <span className="text-xs font-mono text-[#c48b56] font-bold uppercase tracking-wider block">
                [ PATTERN CREME · PASTA DE PARTITURAS &amp; UNBOXING ]
              </span>
              <div
                className="relative w-full h-[50vh] md:h-[65vh] rounded-3xl overflow-hidden bg-[#f5ebe0] border border-white/10 cursor-zoom-in group shadow-2xl"
                onClick={() =>
                  setActiveImage({
                    src: '/images/Cases/EB-Escola-De-Musica/eb-padrao-creme.png',
                    alt: 'EB Padrão Creme Full Bleed',
                  })
                }
              >
                <Image
                  src="/images/Cases/EB-Escola-De-Musica/eb-padrao-creme.png"
                  alt="EB Padrão Creme Full Bleed"
                  fill
                  className="object-cover w-full h-full block transition-transform duration-1000 group-hover:scale-[1.02]"
                />
              </div>
            </div>

            {/* Pattern 2: Padrão Marrom Edge-to-Edge */}
            <div className="space-y-3 pt-6">
              <span className="text-xs font-mono text-[#c48b56] font-bold uppercase tracking-wider block">
                [ PATTERN MARROM · BAGS &amp; UNIFORMES DOCENTES ]
              </span>
              <div
                className="relative w-full h-[50vh] md:h-[65vh] rounded-3xl overflow-hidden bg-[#120b07] border border-white/10 cursor-zoom-in group shadow-2xl"
                onClick={() =>
                  setActiveImage({
                    src: '/images/Cases/EB-Escola-De-Musica/eb-padrao-marrom.png',
                    alt: 'EB Padrão Marrom Full Bleed',
                  })
                }
              >
                <Image
                  src="/images/Cases/EB-Escola-De-Musica/eb-padrao-marrom.png"
                  alt="EB Padrão Marrom Full Bleed"
                  fill
                  className="object-cover w-full h-full block transition-transform duration-1000 group-hover:scale-[1.02]"
                />
              </div>
            </div>

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
            className="relative w-full h-full max-w-7xl max-h-[90vh] flex flex-col items-center justify-center space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar Lightbox */}
            <div className="w-full flex items-center justify-between px-2 text-white">
              <span className="text-xs font-mono text-[#f5ebe0] truncate max-w-xl">
                {activeImage.alt}
              </span>
              <button
                type="button"
                onClick={() => setActiveImage(null)}
                className="px-3.5 py-1.5 rounded bg-white/10 hover:bg-white/20 text-white font-mono text-xs transition-colors cursor-pointer border border-white/20"
              >
                ✕ Fechar (ESC)
              </button>
            </div>

            {/* Imagem Ampliada */}
            <div className="relative w-full h-full flex items-center justify-center overflow-hidden rounded-xl bg-black border border-white/10">
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
