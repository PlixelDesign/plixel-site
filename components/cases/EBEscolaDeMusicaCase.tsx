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
    <div className="min-h-screen bg-black text-white font-plus-jakarta selection:bg-[#c48b56] selection:text-black relative overflow-x-hidden antialiased">
      {/* Header Global da Plixel */}
      <Header />

      {/* Sub-header de navegação interna (Estética Editorial de Vanguarda - Plus Jakarta Sans) */}
      <header className="sticky top-16 z-40 backdrop-blur-2xl bg-black/85 border-b border-white/10 transition-all font-plus-jakarta">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between overflow-x-auto scrollbar-none">
          <div className="flex items-center gap-4 shrink-0">
            <Link
              href="/trabalhos"
              className="flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-[#c48b56] uppercase tracking-wider transition-colors"
            >
              ← Voltar
            </Link>
            <div className="h-4 w-px bg-white/10 hidden sm:block" />

            {/* Badge EB Marca */}
            <a
              href="#theme"
              className="group flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 hover:bg-[#c48b56]/20 border border-white/10 hover:border-[#c48b56]/40 transition-all duration-300"
            >
              <div className="w-2 h-2 rounded-full bg-[#c48b56] animate-pulse" />
              <span className="font-bold text-xs text-[#f5ebe0] tracking-wide group-hover:text-[#c48b56] transition-colors">
                EB Escola de Música
              </span>
              <span className="text-[10px] uppercase text-[#f5ebe0]/60 ml-1">
                [ Full-Bleed Editorial ]
              </span>
            </a>
          </div>

          <nav className="flex items-center space-x-3 sm:space-x-6 text-xs text-slate-400">
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

      {/* [OUVERTURE / ABERTURA] - HERO MONUMENTAL RESPONSIVO */}
      <section id="ouverture" className="relative w-full min-h-[55vh] sm:min-h-[75vh] md:h-screen flex flex-col justify-between overflow-hidden bg-black">
        
        {/* Imagem de Fundo eb-hero-monumental.jpg Estourada em Tela Cheia (w-full h-full object-cover) */}
        <div className="absolute inset-0 w-full h-full cursor-zoom-in group">
          <Image
            src="/images/Cases/EB-Escola-De-Musica/eb-hero-monumental.jpg"
            alt="EB Escola de Música - Hero Monumental"
            fill
            priority
            className="object-cover object-center w-full h-full block transition-transform duration-1000 group-hover:scale-[1.02]"
            onClick={() =>
              setActiveImage({
                src: '/images/Cases/EB-Escola-De-Musica/eb-hero-monumental.jpg',
                alt: 'EB Escola de Música - Hero Monumental Fullscreen',
              })
            }
          />
          {/* Sobreposição de gradiente escuro na base para legibilidade cirúrgica */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none" />
        </div>

        {/* Tag Superior */}
        <div className="relative z-20 pt-20 md:pt-24 px-6 md:px-12 pointer-events-none font-plus-jakarta">
          <span className="text-xs font-bold uppercase tracking-widest text-[#c48b56] block drop-shadow-md">
            [ OUVERTURE · REBRANDING &amp; ESTRUTURAÇÃO DE REDE DE ENSINO ]
          </span>
        </div>

        {/* Tipografia Monumental em DM Serif Display Sobreposta */}
        <div className="relative z-30 pb-8 md:pb-16 px-6 md:px-12 font-dm-serif max-w-[95vw]">
          <h1 className="text-5xl sm:text-7xl md:text-9xl lg:text-[11.5rem] font-normal tracking-tight text-[#f5ebe0] leading-none select-none drop-shadow-2xl">
            EB Escola <span className="text-[#c48b56] italic font-light">de Música</span>
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-[#f5ebe0]/90 max-w-lg font-plus-jakarta font-light mt-2 md:mt-4 drop-shadow">
            Sistema Visual Escalável e Modular para Expansão de Redes de Ensino Musical Premium.
          </p>
        </div>

      </section>

      {/* LINHAS DE COMPASSO VERTICAIS ASSÍNCRONAS (VISUAL GLOBAL) */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-l border-white/10">

        {/* [THEME / O TOM DE NEGÓCIO] - O MANIFESTO */}
        <section id="theme" className="scroll-mt-32 py-20 md:py-36 relative">
          <div className="border-l-2 border-[#c48b56] pl-6 md:pl-12 max-w-5xl space-y-8">
            <span className="text-xs font-bold uppercase tracking-widest text-[#c48b56] block font-plus-jakarta">
              [ 02. THEME / O MANIFESTO DE NEGÓCIO ]
            </span>

            <p className="text-2xl sm:text-4xl md:text-5xl font-light text-slate-400 tracking-tight leading-[1.25] font-plus-jakarta">
              &quot;Desenvolvemos um <span className="text-[#f5ebe0] font-normal underline decoration-[#c48b56] underline-offset-8">Sistema Visual Escalável</span> projetado para elevar a <span className="text-[#f5ebe0] font-normal">Alta Percepção de Valor</span> da EB Escola de Música. O resultado é a <span className="text-[#f5ebe0] font-normal">Consistência Operacional</span> e a capacidade de replicação acelerada para <span className="text-[#f5ebe0] font-normal">Redes de Ensino de Ticket Premium</span>.&quot;
            </p>

            <div className="pt-6 flex flex-wrap items-center gap-8 text-xs font-plus-jakarta text-[#f5ebe0]/70">
              <div>
                <span className="block text-slate-500 uppercase font-semibold">Posicionamento</span>
                <span className="text-[#f5ebe0] font-bold">Educação Musical de Alto Ticket</span>
              </div>
              <div className="h-6 w-px bg-white/10 hidden sm:block" />
              <div>
                <span className="block text-slate-500 uppercase font-semibold">Modularidade</span>
                <span className="text-[#f5ebe0] font-bold">Sinalização, Kit Matrícula &amp; Diplomas</span>
              </div>
            </div>
          </div>
        </section>

        {/* [HARMONICS / DESIGN SYSTEM] - A PRANCHA TÉCNICA ABERTA */}
        <section id="harmonics" className="scroll-mt-32 py-20 md:py-36 relative space-y-16 border-t border-white/10">
          
          <div className="space-y-4 max-w-4xl border-l-2 border-[#c48b56] pl-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#c48b56] block font-plus-jakarta">
              [ 03. HARMONICS / TECLAS &amp; TOKENS ]
            </span>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-normal text-[#f5ebe0] tracking-tight font-dm-serif">
              Design System &amp; Prancha Técnica Aberta
            </h2>
            <p className="text-base md:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl font-plus-jakarta">
              Os tokens visuais organizados como um teclado de piano completo ocupando 100% da largura. Teclas cromáticas monocromáticas e o alfabeto completo em DM Serif Display e Plus Jakarta Sans.
            </p>
          </div>

          {/* TECLAS CROMÁTICAS - PIANO KEYBOARD SWATCHES (FULL WIDTH 10 TECLAS + TECLAS PRETAS SUSTENIDO) */}
          <div className="space-y-4 w-full">
            <span className="text-xs font-bold uppercase tracking-wider text-[#c48b56] block font-plus-jakarta">
              [ TECLAS CROMÁTICAS · GRAND PIANO KEYBOARD SWATCHES ]
            </span>
            
            {/* Teclado de Piano de 10 Teclas Horizontais (Full Width) */}
            <div className="relative w-full h-[400px] md:h-[500px] bg-black border-y border-white/10 grid grid-cols-10 gap-0.5 overflow-hidden">
              
              {/* TECLAS PRETAS DE SUSTENIDO / ACCIDENTALS (TECLAS PRETAS DO PIANO) */}
              <div className="absolute top-0 inset-x-0 h-32 md:h-44 z-20 pointer-events-none grid grid-cols-10 px-0">
                {/* Sustenido 1 (entre cor 1 e 2) */}
                <div className="col-start-2 -ml-3 md:-ml-4 w-6 md:w-8 h-full bg-[#120b07] border-x border-b border-white/20 shadow-2xl rounded-b-sm" />
                {/* Sustenido 2 (entre cor 2 e 3) */}
                <div className="col-start-4 -ml-3 md:-ml-4 w-6 md:w-8 h-full bg-[#120b07] border-x border-b border-white/20 shadow-2xl rounded-b-sm" />
                {/* Sustenido 3 (entre cor 3 e 4) */}
                <div className="col-start-6 -ml-3 md:-ml-4 w-6 md:w-8 h-full bg-[#120b07] border-x border-b border-white/20 shadow-2xl rounded-b-sm" />
                {/* Sustenido 4 (entre cor 4 e 5) */}
                <div className="col-start-8 -ml-3 md:-ml-4 w-6 md:w-8 h-full bg-[#120b07] border-x border-b border-white/20 shadow-2xl rounded-b-sm" />
                {/* Sustenido 5 (entre tecla 9 e 10) */}
                <div className="col-start-10 -ml-3 md:-ml-4 w-6 md:w-8 h-full bg-[#120b07] border-x border-b border-white/20 shadow-2xl rounded-b-sm" />
              </div>

              {/* COR 1: CAFÉ PROFUNDA (#1A110B) - TECLAS 1 & 2 */}
              <div className="relative h-full flex flex-col justify-end p-3 transition-colors" style={{ backgroundColor: '#1a110b' }}>
                <span className="text-[10px] md:text-xs text-[#f5ebe0]/80 tracking-widest uppercase rotate-180 [writing-mode:vertical-rl] font-plus-jakarta font-semibold select-none">
                  #1A110B · CAFÉ
                </span>
              </div>
              <div className="relative h-full flex flex-col justify-end p-3 transition-colors" style={{ backgroundColor: '#1a110b' }}>
                <span className="text-[10px] md:text-xs text-[#f5ebe0]/80 tracking-widest uppercase rotate-180 [writing-mode:vertical-rl] font-plus-jakarta font-semibold select-none">
                  TECLA 02
                </span>
              </div>

              {/* COR 2: CHOCOLATE ESCURO (#3D2516) - TECLAS 3 & 4 */}
              <div className="relative h-full flex flex-col justify-end p-3 transition-colors" style={{ backgroundColor: '#3d2516' }}>
                <span className="text-[10px] md:text-xs text-[#f5ebe0]/80 tracking-widest uppercase rotate-180 [writing-mode:vertical-rl] font-plus-jakarta font-semibold select-none">
                  #3D2516 · CHOCOLATE
                </span>
              </div>
              <div className="relative h-full flex flex-col justify-end p-3 transition-colors" style={{ backgroundColor: '#3d2516' }}>
                <span className="text-[10px] md:text-xs text-[#f5ebe0]/80 tracking-widest uppercase rotate-180 [writing-mode:vertical-lr] font-plus-jakarta font-semibold select-none">
                  TECLA 04
                </span>
              </div>

              {/* COR 3: CHOCOLATE ACCENT (#8B5A2B) - TECLAS 5 & 6 */}
              <div className="relative h-full flex flex-col justify-end p-3 transition-colors" style={{ backgroundColor: '#8b5a2b' }}>
                <span className="text-[10px] md:text-xs text-[#f5ebe0] tracking-widest uppercase rotate-180 [writing-mode:vertical-rl] font-plus-jakarta font-semibold select-none">
                  #8B5A2B · ACCENT
                </span>
              </div>
              <div className="relative h-full flex flex-col justify-end p-3 transition-colors" style={{ backgroundColor: '#8b5a2b' }}>
                <span className="text-[10px] md:text-xs text-[#f5ebe0] tracking-widest uppercase rotate-180 [writing-mode:vertical-rl] font-plus-jakarta font-semibold select-none">
                  TECLA 06
                </span>
              </div>

              {/* COR 4: CREME ACOLHEDOR (#F5EBE0) - TECLAS 7 & 8 */}
              <div className="relative h-full flex flex-col justify-end p-3 transition-colors" style={{ backgroundColor: '#f5ebe0' }}>
                <span className="text-[10px] md:text-xs text-[#1a110b] font-bold tracking-widest uppercase rotate-180 [writing-mode:vertical-rl] font-plus-jakarta select-none">
                  #F5EBE0 · CREME
                </span>
              </div>
              <div className="relative h-full flex flex-col justify-end p-3 transition-colors" style={{ backgroundColor: '#f5ebe0' }}>
                <span className="text-[10px] md:text-xs text-[#1a110b] font-bold tracking-widest uppercase rotate-180 [writing-mode:vertical-rl] font-plus-jakarta select-none">
                  TECLA 08
                </span>
              </div>

              {/* COR 5: BRANCO PURO (#FFFFFF) - TECLAS 9 & 10 */}
              <div className="relative h-full flex flex-col justify-end p-3 transition-colors" style={{ backgroundColor: '#ffffff' }}>
                <span className="text-[10px] md:text-xs text-[#1a110b] font-bold tracking-widest uppercase rotate-180 [writing-mode:vertical-rl] font-plus-jakarta select-none">
                  #FFFFFF · BRANCO
                </span>
              </div>
              <div className="relative h-full flex flex-col justify-end p-3 transition-colors" style={{ backgroundColor: '#ffffff' }}>
                <span className="text-[10px] md:text-xs text-[#1a110b] font-bold tracking-widest uppercase rotate-180 [writing-mode:vertical-rl] font-plus-jakarta select-none">
                  TECLA 10
                </span>
              </div>

            </div>
          </div>

          {/* HIERARQUIA TIPOGRÁFICA COM ALFABETO COMPLETO A-Z EM DM SERIF DISPLAY AO FUNDO */}
          <div className="relative pt-12 space-y-12 overflow-hidden border border-white/10 bg-[#120b07] p-6 sm:p-8 md:p-14">
            
            {/* Alfabeto de Fundo em Escala Brutal (DM Serif Display) */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden opacity-10">
              <span className="font-dm-serif text-6xl sm:text-9xl md:text-[15rem] font-normal text-white tracking-widest leading-none">
                ABCDEFGHIJKLMNOPQRSTUVWXYZ
              </span>
            </div>

            <div className="relative z-10 space-y-10">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-[#c48b56] block font-plus-jakarta">
                  [ FONTE PRIMÁRIA · DM SERIF DISPLAY ]
                </span>
                <h3 className="text-4xl sm:text-6xl md:text-8xl font-normal text-[#f5ebe0] font-dm-serif">
                  DM Serif Display
                </h3>
                <p className="text-lg md:text-2xl text-[#f5ebe0]/90 font-light font-dm-serif max-w-2xl">
                  &quot;Harmonia entre o Rigor Clássico e a Acolhida Pedagógica.&quot;
                </p>
              </div>

              <div className="space-y-2 pt-6 border-t border-white/10">
                <span className="text-xs font-bold uppercase tracking-widest text-[#f5ebe0]/70 block font-plus-jakarta">
                  [ FONTE SECUNDÁRIA · PLUS JAKARTA SANS ]
                </span>
                <h3 className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#f5ebe0] font-plus-jakarta">
                  Plus Jakarta Sans
                </h3>
                <p className="text-sm md:text-base text-slate-300 max-w-2xl font-normal leading-relaxed font-plus-jakarta">
                  Tipografia para materiais pedagógicos, partituras, comunicação no WhatsApp e módulos de ensino digital.
                </p>
              </div>
            </div>

          </div>

        </section>

        {/* [MODULATION / WAYFINDING] - GRID RÍTMICO / CORTE LIMPO DE FOTOGRAFIA EDITORIAL */}
        <section id="modulation" className="scroll-mt-32 py-20 md:py-36 relative space-y-16 border-t border-white/10">
          
          <div className="space-y-4 max-w-4xl border-l-2 border-[#c48b56] pl-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#c48b56] block font-plus-jakarta">
              [ 04. MODULATION / SINALIZAÇÃO &amp; PONTOS DE CONTACTO FÍSICOS ]
            </span>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-normal text-[#f5ebe0] tracking-tight font-dm-serif">
              Ritmo Físico &amp; Operação
            </h2>
            <p className="text-base md:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl font-plus-jakarta">
              Fotografia quente em contraste com o fundo negro absoluto. Tangibilização de cartões institucionais, uniformes docentes e kits de boas-vindas.
            </p>
          </div>

          {/* GRID RÍTMICO FOTOGRÁFICO RESPONSIVO (GRID-COLS-1 EM MOBILE / GRID-COLS-12 EM DESKTOP) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch font-plus-jakarta">
            
            {/* Bloco Maior (Esquerda - Col-7): eb-operacao-uniforme.jpg */}
            <div
              className="md:col-span-7 relative h-[60vh] md:h-[560px] w-full overflow-hidden bg-black border border-white/10 cursor-zoom-in group"
              onClick={() =>
                setActiveImage({
                  src: '/images/Cases/EB-Escola-De-Musica/eb-operacao-uniforme.jpg',
                  alt: 'EB Escola de Música - Operação e Acolhimento Uniforme',
                })
              }
            >
              <Image
                src="/images/Cases/EB-Escola-De-Musica/eb-operacao-uniforme.jpg"
                alt="EB Escola de Música - Operação e Acolhimento"
                fill
                className="object-cover w-full h-full block transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute bottom-4 left-4 bg-black/85 backdrop-blur-md px-3 py-1 text-[10px] font-semibold text-[#f5ebe0] border border-white/10">
                01 / OPERAÇÃO &amp; ACOLHIMENTO DOCENTE
              </div>
            </div>

            {/* Duas Imagens Empilhadas (Direita - Col-5): eb-mockup-cartoes.jpg & eb-mockup-caneca.jpg */}
            <div className="md:col-span-5 flex flex-col gap-8">
              {/* Bloco Menor Superior: eb-mockup-cartoes.jpg */}
              <div
                className="relative h-64 md:h-[264px] w-full overflow-hidden bg-black border border-white/10 cursor-zoom-in group"
                onClick={() =>
                  setActiveImage({
                    src: '/images/Cases/EB-Escola-De-Musica/eb-mockup-cartoes.jpg',
                    alt: 'EB Escola de Música - Cartões Institucionais',
                  })
                }
              >
                <Image
                  src="/images/Cases/EB-Escola-De-Musica/eb-mockup-cartoes.jpg"
                  alt="EB Cartões Institucionais"
                  fill
                  className="object-cover w-full h-full block transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute bottom-3 left-3 bg-black/85 backdrop-blur-md px-2.5 py-0.5 text-[10px] font-semibold text-[#f5ebe0] border border-white/10">
                  02 / CARTÕES INSTITUCIONAIS
                </div>
              </div>

              {/* Bloco Menor Inferior: eb-mockup-caneca.jpg */}
              <div
                className="relative h-64 md:h-[264px] w-full overflow-hidden bg-black border border-white/10 cursor-zoom-in group"
                onClick={() =>
                  setActiveImage({
                    src: '/images/Cases/EB-Escola-De-Musica/eb-mockup-caneca.jpg',
                    alt: 'EB Escola de Música - Merchandising &amp; Kit Boas-Vindas',
                  })
                }
              >
                <Image
                  src="/images/Cases/EB-Escola-De-Musica/eb-mockup-caneca.jpg"
                  alt="EB Merchandising &amp; Kit Boas-Vindas"
                  fill
                  className="object-cover w-full h-full block transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute bottom-3 left-3 bg-black/85 backdrop-blur-md px-2.5 py-0.5 text-[10px] font-semibold text-[#f5ebe0] border border-white/10">
                  03 / KIT BOAS-VINDAS &amp; MERCHANDISING
                </div>
              </div>
            </div>

          </div>

        </section>

        {/* [RESONANCE / UNBOXING] - NOVOS ASSETS FULL-BLEED (KIT BOAS-VINDAS & KIT TRANSPORTE) */}
        <section id="resonance" className="scroll-mt-32 py-20 md:py-36 relative space-y-16 border-t border-white/10">
          
          <div className="space-y-4 max-w-4xl border-l-2 border-[#c48b56] pl-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#c48b56] block font-plus-jakarta">
              [ 05. RESONANCE / TEXTURAS &amp; UNBOXING ]
            </span>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-normal text-[#f5ebe0] tracking-tight font-dm-serif">
              Padrões Visuais &amp; Experiência de Matrícula
            </h2>
            <p className="text-base md:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl font-plus-jakarta">
              Assets fotográficos em resolução máxima. Tangibilização da marca em sacolas institucionais, pastas de partituras e kits de exames.
            </p>
          </div>

          {/* LAYOUT FULL-BLEED EDGE-TO-EDGE DOS NOVOS MOCKUPS FOTOGRÁFICOS EM PROPORÇÃO 16:9 */}
          <div className="space-y-12 font-plus-jakarta w-full">
            
            {/* Imagem Principal (Destaque): eb-mockup-kit-boas-vindas.jpg em 16:9 */}
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#c48b56] block">
                [ KIT MATRÍCULA &amp; BOAS-VINDAS · DESTAQUE UNBOXING 16:9 ]
              </span>
              <div
                className="relative w-full aspect-video overflow-hidden bg-black border border-white/10 cursor-zoom-in group shadow-2xl"
                onClick={() =>
                  setActiveImage({
                    src: '/images/Cases/EB-Escola-De-Musica/eb-mockup-kit-boas-vindas.jpg',
                    alt: 'EB Kit Matrícula &amp; Boas-Vindas 16:9',
                  })
                }
              >
                <Image
                  src="/images/Cases/EB-Escola-De-Musica/eb-mockup-kit-boas-vindas.jpg"
                  alt="EB Kit Matrícula &amp; Boas-Vindas 16:9"
                  fill
                  className="object-cover w-full h-full block transition-transform duration-1000 group-hover:scale-[1.02]"
                />
              </div>
            </div>

            {/* Imagem Secundária (Apoio): eb-mockup-kit-transporte.jpg em 16:9 */}
            <div className="space-y-3 pt-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#c48b56] block">
                [ ECO-BAGS &amp; TRANSPORTE INSTITUCIONAL · APOIO OPERACIONAL 16:9 ]
              </span>
              <div
                className="relative w-full aspect-video overflow-hidden bg-black border border-white/10 cursor-zoom-in group shadow-2xl"
                onClick={() =>
                  setActiveImage({
                    src: '/images/Cases/EB-Escola-De-Musica/eb-mockup-kit-transporte.jpg',
                    alt: 'EB Eco-Bags &amp; Kit Transporte 16:9',
                  })
                }
              >
                <Image
                  src="/images/Cases/EB-Escola-De-Musica/eb-mockup-kit-transporte.jpg"
                  alt="EB Eco-Bags &amp; Kit Transporte 16:9"
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
            className="relative w-full h-full max-w-7xl max-h-[90vh] flex flex-col items-center justify-center space-y-4 font-plus-jakarta"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar Lightbox */}
            <div className="w-full flex items-center justify-between px-2 text-white">
              <span className="text-xs text-[#f5ebe0] truncate max-w-xl font-semibold">
                {activeImage.alt}
              </span>
              <button
                type="button"
                onClick={() => setActiveImage(null)}
                className="px-3.5 py-1.5 rounded bg-white/10 hover:bg-white/20 text-white text-xs transition-colors cursor-pointer border border-white/20 font-semibold"
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
