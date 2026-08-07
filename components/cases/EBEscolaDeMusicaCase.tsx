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
    <div className="min-h-screen bg-[#1a110b] text-white font-sans selection:bg-[#c48b56] selection:text-[#1a110b] relative overflow-x-hidden antialiased">
      {/* Header Global da Plixel */}
      <Header />

      {/* Sub-header de navegação interna (Estética de Alta Cultura) */}
      <header className="sticky top-16 z-40 backdrop-blur-xl bg-[#1a110b]/90 border-b border-white/10 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between overflow-x-auto scrollbar-none">
          <div className="flex items-center gap-4 shrink-0">
            <Link
              href="/trabalhos"
              className="flex items-center gap-2 text-xs font-mono font-bold text-[#f5ebe0]/70 hover:text-[#c48b56] uppercase tracking-wider transition-colors"
            >
              ← Voltar
            </Link>
            <div className="h-4 w-px bg-white/10 hidden sm:block" />

            {/* Badge EB Escola de Música */}
            <a
              href="#foundations"
              className="group flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 hover:bg-[#c48b56]/15 border border-white/10 hover:border-[#c48b56]/40 transition-all duration-300"
            >
              <div className="w-2 h-2 rounded-full bg-[#c48b56] animate-pulse" />
              <span className="font-bold text-xs text-[#f5ebe0] tracking-wide group-hover:text-[#c48b56] transition-colors">
                EB Escola de Música
              </span>
              <span className="text-[10px] font-mono uppercase text-[#f5ebe0]/60 ml-1">
                [ Brand System ]
              </span>
            </a>
          </div>

          <nav className="flex items-center space-x-2 sm:space-x-4 text-xs font-mono text-[#f5ebe0]/70">
            <a
              href="#foundations"
              className="px-2 py-1 hover:text-[#c48b56] transition-colors whitespace-nowrap"
            >
              00. Foundations
            </a>
            <a
              href="#wayfinding"
              className="px-2 py-1 hover:text-[#c48b56] transition-colors whitespace-nowrap"
            >
              01. Wayfinding
            </a>
            <a
              href="#unboxing"
              className="px-2 py-1 hover:text-[#c48b56] transition-colors whitespace-nowrap"
            >
              02. Unboxing
            </a>
          </nav>
        </div>
      </header>

      {/* HERO SECTION (Abertura Editorial - Capa Estourada) */}
      <section className="relative pt-20 pb-16 md:pt-28 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-4xl space-y-6">
            <span className="inline-block text-xs font-mono font-bold uppercase tracking-widest text-[#c48b56]">
              [ CASE STUDY · REBRANDING &amp; ESTRUTURAÇÃO DE REDE DE ENSINO ]
            </span>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] text-[#f5ebe0]">
              EB Escola de Música
            </h1>

            <p className="text-xl sm:text-2xl text-[#f5ebe0]/80 font-light leading-relaxed max-w-3xl">
              Sistema Visual Escalável e Modular para Expansão de Redes de Ensino Musical de Alto Ticket.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs font-mono text-[#f5ebe0]/60">
              <div>
                <span className="block text-slate-500 uppercase">Setor</span>
                <span className="text-[#f5ebe0] font-semibold">Educação &amp; Alta Cultura</span>
              </div>
              <div className="h-6 w-px bg-white/10" />
              <div>
                <span className="block text-slate-500 uppercase">Escopo</span>
                <span className="text-[#f5ebe0] font-semibold">Identidade, Sinalização &amp; Kit Matrícula</span>
              </div>
              <div className="h-6 w-px bg-white/10" />
              <div>
                <span className="block text-slate-500 uppercase">Arquitetura</span>
                <a
                  href="#foundations"
                  className="text-[#c48b56] font-bold hover:underline"
                >
                  Ver Design System ↓
                </a>
              </div>
            </div>
          </div>

          {/* Hero Cover Image (Estourada em Tela Cheia) */}
          <div className="w-full max-w-6xl mx-auto pt-4">
            <div
              className="relative w-full h-[65vh] md:h-[80vh] rounded-2xl overflow-hidden bg-[#120b07] border border-white/10 cursor-zoom-in group shadow-2xl"
              onClick={() =>
                setActiveImage({
                  src: '/images/Cases/EB-Escola-De-Musica/eb-hero-cover.png',
                  alt: 'EB Escola de Música - Capa Principal Institucional',
                })
              }
            >
              <Image
                src="/images/Cases/EB-Escola-De-Musica/eb-hero-cover.png"
                alt="EB Escola de Música - Capa Principal Institucional"
                fill
                priority
                className="object-cover w-full h-full block transition-transform duration-700 group-hover:scale-[1.01]"
              />
              <div className="absolute bottom-4 right-4 bg-[#1a110b]/90 backdrop-blur-md px-3 py-1.5 rounded border border-white/10 text-[11px] font-mono text-[#f5ebe0] opacity-0 group-hover:opacity-100 transition-opacity">
                🔍 Expandir Capa (Zoom)
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* LINHA DE DIVISÃO TÉCNICA SWISS GRID */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full border-t border-white/10" />
      </div>

      {/* CONTEÚDO EDITORIAL FLUIDO (SEAMLESS) */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-28 md:space-y-36 py-20">

        {/* SEÇÃO 00: FOUNDATIONS (DESIGN TOKENS E SISTEMA ABERTO) */}
        <section id="foundations" className="scroll-mt-32 space-y-12">
          {/* Topo da Seção */}
          <div className="space-y-3 max-w-4xl">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#c48b56] block">
              [ 00 / FOUNDATIONS ] BRAND EQUITY &amp; SISTEMA VISUAL
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#f5ebe0] tracking-tight leading-tight">
              Fundações de Marca &amp; Arquitetura Musical
            </h2>
            <p className="text-lg text-slate-300 font-normal leading-relaxed max-w-3xl">
              Estruturação dos ativos visuais primários. Padronização cromática inspirada em madeiras nobres de instrumentos acústicos e contrastes acolhedores para materiais de ensino.
            </p>
          </div>

          {/* Grid Minimalista de UI / Documentação Técnica */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 pt-4">
            
            {/* Coluna 1: Paleta Cromática Institucional */}
            <div className="space-y-6">
              <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-[#c48b56] pb-3 border-b border-white/10 flex items-center justify-between">
                <span>01. PALETA CROMÁTICA</span>
                <span className="text-[10px] text-[#f5ebe0]/50">COLOR TOKENS</span>
              </h3>

              <div className="space-y-6">
                {/* Marrom Café Profundo */}
                <div className="space-y-2">
                  <div
                    className="w-full h-20 rounded-lg border border-white/10 shadow-inner"
                    style={{ backgroundColor: '#1a110b' }}
                  />
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-bold text-[#f5ebe0]">Marrom Café Profundo</span>
                    <span className="font-mono text-[#c48b56]">#1A110B</span>
                  </div>
                  <span className="text-xs text-slate-400 block font-normal">
                    Fundo Institucional Dominante · Remete à ressonância de instrumentos de corda e sofisticação acadêmica.
                  </span>
                </div>

                {/* Chocolate Claro */}
                <div className="space-y-2">
                  <div
                    className="w-full h-20 rounded-lg border border-white/10 shadow-inner"
                    style={{ backgroundColor: '#8b5a2b' }}
                  />
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-bold text-[#f5ebe0]">Chocolate Claro (Accent)</span>
                    <span className="font-mono text-[#c48b56]">#8B5A2B</span>
                  </div>
                  <span className="text-xs text-slate-400 block font-normal">
                    Tom de Destaque &amp; Selos · Utilizado em indicadores de nível técnico, assinaturas e acabamentos.
                  </span>
                </div>

                {/* Creme Acolhedor */}
                <div className="space-y-2">
                  <div
                    className="w-full h-20 rounded-lg border border-white/10 shadow-inner"
                    style={{ backgroundColor: '#f5ebe0' }}
                  />
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-bold text-[#1a110b] bg-[#f5ebe0] px-2 py-0.5 rounded text-xs">Creme Acolhedor</span>
                    <span className="font-mono text-[#f5ebe0]/80">#F5EBE0</span>
                  </div>
                  <span className="text-xs text-slate-400 block font-normal">
                    Base Neutra &amp; Papelaria · Garante leitura confortável em partituras, certificados e uniformes.
                  </span>
                </div>
              </div>
            </div>

            {/* Coluna 2: Hierarquia Tipográfica & Marcas */}
            <div className="space-y-6">
              <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-[#c48b56] pb-3 border-b border-white/10 flex items-center justify-between">
                <span>02. TIPOGRAFIA &amp; MARCAS</span>
                <span className="text-[10px] text-[#f5ebe0]/50">HIERARCHY</span>
              </h3>

              <div className="space-y-8">
                {/* Fonte Primária */}
                <div className="space-y-2">
                  <span className="text-xs font-mono text-[#c48b56] block font-bold uppercase tracking-wider">
                    Fonte Primária (Títulos &amp; Headlines)
                  </span>
                  <h4 className="text-3xl font-extrabold text-[#f5ebe0]">Baloo Bhai 2</h4>
                  <p className="text-base text-[#f5ebe0]/90 font-bold leading-snug">
                    &quot;Ensino Musical com Rigor Técnico e Acolhimento Humano.&quot;
                  </p>
                </div>

                {/* Fonte Secundária */}
                <div className="space-y-2 pt-2 border-t border-white/10">
                  <span className="text-xs font-mono text-[#f5ebe0]/70 block font-bold uppercase tracking-wider">
                    Fonte Secundária (Parágrafos, Pautas &amp; UI)
                  </span>
                  <h4 className="text-2xl font-bold text-[#f5ebe0]">Reem Kufi Fun</h4>
                  <p className="text-sm text-slate-300 font-normal leading-relaxed">
                    Utilizada nos manuais de alunos, guias de sinalização de salas e módulos pedagógicos digitais.
                  </p>
                </div>

                {/* Aplicação Técnica de Logos (Grid de Variações Reais) */}
                <div className="pt-2 space-y-3">
                  <span className="text-xs font-mono text-[#c48b56] block font-bold uppercase tracking-wider">
                    [ VARIAÇÕES MESTRE DO LOGOTIPO ]
                  </span>
                  <div className="grid grid-cols-2 gap-4">
                    <div
                      className="relative h-28 rounded-xl overflow-hidden bg-[#120b07] border border-white/10 p-3 cursor-zoom-in flex items-center justify-center group"
                      onClick={() =>
                        setActiveImage({
                          src: '/images/Cases/EB-Escola-De-Musica/eb-logo-horizontal-marrom.png',
                          alt: 'EB Escola de Música - Logo Horizontal Com Fundo Marrom',
                        })
                      }
                    >
                      <Image
                        src="/images/Cases/EB-Escola-De-Musica/eb-logo-horizontal-marrom.png"
                        alt="EB Logo Horizontal Marrom"
                        fill
                        className="object-contain p-2 transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    </div>

                    <div
                      className="relative h-28 rounded-xl overflow-hidden bg-[#f5ebe0] border border-white/10 p-3 cursor-zoom-in flex items-center justify-center group"
                      onClick={() =>
                        setActiveImage({
                          src: '/images/Cases/EB-Escola-De-Musica/eb-logo-horizontal-creme.png',
                          alt: 'EB Escola de Música - Logo Horizontal Com Fundo Creme',
                        })
                      }
                    >
                      <Image
                        src="/images/Cases/EB-Escola-De-Musica/eb-logo-horizontal-creme.png"
                        alt="EB Logo Horizontal Creme"
                        fill
                        className="object-contain p-2 transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* LINHA DE DIVISÃO TÉCNICA SWISS GRID */}
        <div className="w-full border-t border-white/10" />

        {/* SEÇÃO 01: WAYFINDING (COMUNICAÇÃO MODULAR E SINALIZAÇÃO) */}
        <section id="wayfinding" className="scroll-mt-32 space-y-8">
          {/* Topo do Bloco */}
          <div className="space-y-3 max-w-4xl">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#c48b56] block">
              [ 01 / WAYFINDING ] COMUNICAÇÃO MODULAR &amp; SINALIZAÇÃO
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#f5ebe0] tracking-tight leading-tight">
              Elasticidade do Símbolo e Sinalização de Operação Real
            </h2>
          </div>

          {/* Grid de Imagens de Wayfinding (100% Full Width Container) */}
          <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#120b07] border border-white/10 cursor-zoom-in group shadow-2xl flex items-center justify-center p-4"
              onClick={() =>
                setActiveImage({
                  src: '/images/Cases/EB-Escola-De-Musica/eb-logo-vertical-creme.png',
                  alt: 'EB Escola de Música - Símbolo e Sinalização Vertical',
                })
              }
            >
              <Image
                src="/images/Cases/EB-Escola-De-Musica/eb-logo-vertical-creme.png"
                alt="EB Escola de Música - Símbolo e Sinalização Vertical"
                fill
                className="object-contain p-4 transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute bottom-3 right-3 bg-[#1a110b]/90 backdrop-blur-md px-2.5 py-1 rounded border border-white/10 text-[10px] font-mono text-[#f5ebe0] opacity-0 group-hover:opacity-100 transition-opacity">
                🔍 Expandir Sinalização
              </div>
            </div>

            <div
              className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#f5ebe0] border border-white/10 cursor-zoom-in group shadow-2xl flex items-center justify-center p-4"
              onClick={() =>
                setActiveImage({
                  src: '/images/Cases/EB-Escola-De-Musica/eb-logo-redondo-marrom.png',
                  alt: 'EB Escola de Música - Emblem Redondo com Fundo Marrom',
                })
              }
            >
              <Image
                src="/images/Cases/EB-Escola-De-Musica/eb-logo-redondo-marrom.png"
                alt="EB Escola de Música - Emblem Redondo com Fundo Marrom"
                fill
                className="object-contain p-4 transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute bottom-3 right-3 bg-[#1a110b]/90 backdrop-blur-md px-2.5 py-1 rounded border border-white/10 text-[10px] font-mono text-[#f5ebe0] opacity-0 group-hover:opacity-100 transition-opacity">
                🔍 Expandir Emblema
              </div>
            </div>
          </div>

          {/* Base do Bloco (Texto Amarrado à Imagem - mt-4) */}
          <div className="max-w-3xl space-y-4 mt-4">
            <p className="text-lg sm:text-xl text-slate-200 leading-relaxed font-normal">
              A fusão simbiótica entre as curvas do violoncelo e as claves de sol/fá resultou em um símbolo de alta elasticidade. O sistema de sinalização foi projetado para orientar alunos e visitantes em ambientes de ensino (salas acústicas, estúdios de ensaio e auditórios), mantendo o rigor técnico da marca.
            </p>
            
            <div className="border-l-2 border-[#c48b56] pl-5 py-1 space-y-1">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#f5ebe0] block">
                Aplicação em Operação Real:
              </span>
              <p className="text-sm font-mono text-slate-300 leading-relaxed">
                Sinalização interna de salas de aula, uniformes corporativos do corpo docente e selos de certificação de exames.
              </p>
            </div>
          </div>
        </section>

        {/* LINHA DE DIVISÃO TÉCNICA SWISS GRID */}
        <div className="w-full border-t border-white/10" />

        {/* SEÇÃO 02: EXPERIÊNCIA DE UNBOXING (KIT MATRÍCULA E PATTERNS) */}
        <section id="unboxing" className="scroll-mt-32 space-y-8">
          {/* Topo do Bloco */}
          <div className="space-y-3 max-w-4xl">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#c48b56] block">
              [ 02 / UNBOXING ] KIT MATRÍCULA &amp; PATTERNS GRÁFICOS
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#f5ebe0] tracking-tight leading-tight">
              Tangibilização do Valor Percebido e Experiência de Matrícula
            </h2>
          </div>

          {/* Grid de Imagens de Patterns e Unboxing */}
          <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#120b07] border border-white/10 cursor-zoom-in group shadow-2xl flex items-center justify-center p-4"
              onClick={() =>
                setActiveImage({
                  src: '/images/Cases/EB-Escola-De-Musica/eb-simbolo-marrom.png',
                  alt: 'EB Escola de Música - Pattern Vetorial e Símbolo Marrom',
                })
              }
            >
              <Image
                src="/images/Cases/EB-Escola-De-Musica/eb-simbolo-marrom.png"
                alt="EB Escola de Música - Pattern Vetorial e Símbolo Marrom"
                fill
                className="object-contain p-4 transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute bottom-3 right-3 bg-[#1a110b]/90 backdrop-blur-md px-2.5 py-1 rounded border border-white/10 text-[10px] font-mono text-[#f5ebe0] opacity-0 group-hover:opacity-100 transition-opacity">
                🔍 Expandir Pattern
              </div>
            </div>

            <div
              className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#f5ebe0] border border-white/10 cursor-zoom-in group shadow-2xl flex items-center justify-center p-4"
              onClick={() =>
                setActiveImage({
                  src: '/images/Cases/EB-Escola-De-Musica/eb-simbolo-creme.png',
                  alt: 'EB Escola de Música - Pattern Vetorial Creme',
                })
              }
            >
              <Image
                src="/images/Cases/EB-Escola-De-Musica/eb-simbolo-creme.png"
                alt="EB Escola de Música - Pattern Vetorial Creme"
                fill
                className="object-contain p-4 transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute bottom-3 right-3 bg-[#1a110b]/90 backdrop-blur-md px-2.5 py-1 rounded border border-white/10 text-[10px] font-mono text-[#f5ebe0] opacity-0 group-hover:opacity-100 transition-opacity">
                🔍 Expandir Pattern Creme
              </div>
            </div>
          </div>

          {/* Base do Bloco (Texto Amarrado à Imagem - mt-4) */}
          <div className="max-w-3xl space-y-4 mt-4">
            <p className="text-lg sm:text-xl text-slate-200 leading-relaxed font-normal">
              A experiência do novo aluno começa no primeiro contato físico com a escola. O kit de matrícula foi desenhado utilizando padrões gráficos repetitivos em contraste marrom e creme, criando um ritual de unboxing memorável em pastas de partitura, cadernos de teoria e bags institucionais.
            </p>

            <div className="border-l-2 border-[#c48b56] pl-5 py-1 space-y-1">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#f5ebe0] block">
                Impacto no LTV &amp; Valor Percebido:
              </span>
              <p className="text-sm font-mono text-slate-300 leading-relaxed">
                Fortalecimento do orgulho de pertencer à instituição, aumentando a retenção de alunos e justificando o posicionamento de ticket premium.
              </p>
            </div>
          </div>
        </section>

      </main>

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
            <div className="relative w-full h-full flex items-center justify-center overflow-hidden rounded-xl bg-[#120b07] border border-white/10">
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
