'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export default function FrancisCaseStudy() {
  const [isBrandCenterOpen, setIsBrandCenterOpen] = useState(false)
  const [activeImage, setActiveImage] = useState<{ src: string; alt: string } | null>(null)

  // Suporte a fechar modais com a tecla ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsBrandCenterOpen(false)
        setActiveImage(null)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <div className="min-h-screen bg-[#07080a] text-white font-sans selection:bg-[#DE8D47] selection:text-slate-950 relative overflow-x-hidden antialiased">
      {/* Header Global da Plixel */}
      <Header />

      {/* Sub-header de navegação interna (Minimalista Editorial) */}
      <header className="sticky top-16 z-40 backdrop-blur-xl bg-[#07080a]/90 border-b border-white/10 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between overflow-x-auto scrollbar-none">
          <div className="flex items-center gap-4 shrink-0">
            <Link
              href="/trabalhos"
              className="flex items-center gap-2 text-xs font-mono font-bold text-slate-400 hover:text-[#DE8D47] uppercase tracking-wider transition-colors"
            >
              ← Voltar
            </Link>
            <div className="h-4 w-px bg-white/10 hidden sm:block" />

            {/* Logo / Badge Interativa do Francis Seguros */}
            <button
              type="button"
              onClick={() => setIsBrandCenterOpen(true)}
              className="group flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 hover:bg-[#DE8D47]/15 border border-white/10 hover:border-[#DE8D47]/40 transition-all duration-300 cursor-pointer"
              title="Clique para abrir a Central da Marca (Brand Equity)"
            >
              <div className="w-2 h-2 rounded-full bg-[#DE8D47] animate-pulse" />
              <span className="font-bold text-xs text-white tracking-wide group-hover:text-[#DE8D47] transition-colors">
                Francis Seguros
              </span>
              <span className="text-[10px] font-mono uppercase text-[#F3E5C8] ml-1">
                [ Brand Equity ]
              </span>
            </button>
          </div>

          <nav className="flex items-center space-x-2 sm:space-x-4 text-xs font-mono text-slate-400">
            <a
              href="#aquisicao"
              className="px-2 py-1 hover:text-[#DE8D47] transition-colors whitespace-nowrap"
            >
              01. Aquisição
            </a>
            <a
              href="#retencao"
              className="px-2 py-1 hover:text-[#DE8D47] transition-colors whitespace-nowrap"
            >
              02. Retenção
            </a>
            <a
              href="#conversao"
              className="px-2 py-1 hover:text-[#DE8D47] transition-colors whitespace-nowrap"
            >
              03. Conversão
            </a>
            <button
              type="button"
              onClick={() => setIsBrandCenterOpen(true)}
              className="px-3 py-1 rounded-full font-semibold text-xs text-slate-950 bg-[#DE8D47] hover:bg-[#c97b39] transition-all whitespace-nowrap cursor-pointer ml-2"
            >
              Central da Marca
            </button>
          </nav>
        </div>
      </header>

      {/* HERO SECTION (EDITORIAL BEHANCE STYLE) */}
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-4xl space-y-6">
            <span className="inline-block text-xs font-mono font-bold uppercase tracking-widest text-[#DE8D47]">
              [ CASE STUDY · GO-TO-MARKET &amp; SERVICE DESIGN ]
            </span>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] text-white">
              Francis Pinheiro Seguros
            </h1>

            <p className="text-xl sm:text-2xl text-[#F3E5C8]/90 font-light leading-relaxed max-w-3xl">
              Identidade Corporativa, Mídia de Performance e Engenharia de Atendimento Comercial no WhatsApp Ops.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs font-mono text-slate-400">
              <div>
                <span className="block text-slate-500 uppercase">Setor</span>
                <span className="text-white font-semibold">Seguros &amp; Finanças</span>
              </div>
              <div className="h-6 w-px bg-white/10" />
              <div>
                <span className="block text-slate-500 uppercase">Escopo</span>
                <span className="text-white font-semibold">Identidade, Funil &amp; Automação</span>
              </div>
              <div className="h-6 w-px bg-white/10" />
              <div>
                <span className="block text-slate-500 uppercase">Brand Center</span>
                <button
                  type="button"
                  onClick={() => setIsBrandCenterOpen(true)}
                  className="text-[#DE8D47] font-bold hover:underline cursor-pointer"
                >
                  Ver Diretrizes da Marca →
                </button>
              </div>
            </div>
          </div>

          {/* Hero Image (Edge-to-Edge Editorial Container) */}
          <div className="w-full max-w-6xl mx-auto pt-6">
            <div
              className="relative w-full rounded-2xl overflow-hidden bg-slate-950 border border-white/10 cursor-zoom-in group shadow-2xl"
              onClick={() =>
                setActiveImage({
                  src: '/images/Cases/Francis-Seguros/francis-seguros-portfolio-hero.jpg',
                  alt: 'Francis Pinheiro Seguros - Hero Portfolio Widescreen',
                })
              }
            >
              <Image
                src="/images/Cases/Francis-Seguros/francis-seguros-portfolio-hero.jpg"
                alt="Francis Pinheiro Seguros - Hero Portfolio Widescreen"
                width={1920}
                height={1080}
                priority
                className="w-full h-auto object-contain block transition-transform duration-700 group-hover:scale-[1.01]"
              />
              <div className="absolute bottom-4 right-4 bg-[#07080a]/90 backdrop-blur-md px-3 py-1.5 rounded border border-white/10 text-[11px] font-mono text-[#F3E5C8] opacity-0 group-hover:opacity-100 transition-opacity">
                🔍 Expandir Imagem (Zoom)
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* LINHA DE DIVISÃO TÉCNICA SWISS GRID */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full border-t border-white/10" />
      </div>

      {/* CONTEÚDO EDITORIAL FLUIDO (SEAMLESS - SEM CARD CONTAINERS) */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32 md:space-y-40 py-24">

        {/* SEÇÃO 1: TOPO DE FUNIL — AQUISIÇÃO */}
        <section id="aquisicao" className="scroll-mt-32 space-y-10">
          {/* Topo do Bloco */}
          <div className="space-y-4 max-w-4xl">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#DE8D47] block">
              [ 01 / TOPO DE FUNIL — AQUISIÇÃO &amp; AWARENESS ]
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Lançamento de Operação e Mídia de Performance
            </h2>
          </div>

          {/* Meio do Bloco (A Imagem 100% Full Width) */}
          <div className="w-full max-w-6xl mx-auto">
            <div
              className="relative w-full rounded-2xl overflow-hidden bg-slate-950 border border-white/10 cursor-zoom-in group shadow-2xl"
              onClick={() =>
                setActiveImage({
                  src: '/images/Cases/Francis-Seguros/francis-pinheiro-seguros-campanha-criativos-estaticos.jpg',
                  alt: 'Francis Pinheiro Seguros - Campanha Criativos Estáticos (Aquisição)',
                })
              }
            >
              <Image
                src="/images/Cases/Francis-Seguros/francis-pinheiro-seguros-campanha-criativos-estaticos.jpg"
                alt="Francis Pinheiro Seguros - Campanha Criativos Estáticos (Aquisição)"
                width={1920}
                height={1080}
                className="w-full h-auto object-contain block transition-transform duration-700 group-hover:scale-[1.01]"
              />
              <div className="absolute bottom-4 right-4 bg-[#07080a]/90 backdrop-blur-md px-3 py-1.5 rounded border border-white/10 text-[11px] font-mono text-[#F3E5C8] opacity-0 group-hover:opacity-100 transition-opacity">
                🔍 Expandir Imagem (Zoom)
              </div>
            </div>
          </div>

          {/* Base do Bloco (Texto Editorial & Callout Técnico) */}
          <div className="max-w-3xl space-y-6 pt-4">
            <p className="text-lg text-slate-300 leading-relaxed font-normal">
              A marca enfrentava um gargalo de posicionamento digital. Os canais não transmitiam a proposta de valor corporativa, forçando a captação a depender puramente de abordagem direta comercial, sem uma base de autoridade visual prévia.
            </p>
            
            <div className="border-l-2 border-[#DE8D47] pl-6 py-2 space-y-1">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#F3E5C8] block">
                Entregável Técnico:
              </span>
              <p className="text-sm font-mono text-slate-400 leading-relaxed">
                Matrizes Visuais para Campanhas de Performance (Otimização de Conversão e CTR).
              </p>
            </div>
          </div>
        </section>

        {/* LINHA DE DIVISÃO TÉCNICA SWISS GRID */}
        <div className="w-full border-t border-white/10" />

        {/* SEÇÃO 2: MEIO DE FUNIL — RETENÇÃO */}
        <section id="retencao" className="scroll-mt-32 space-y-10">
          {/* Topo do Bloco */}
          <div className="space-y-4 max-w-4xl">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#DE8D47] block">
              [ 02 / MEIO DE FUNIL — RETENÇÃO &amp; BRAND EQUITY ]
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Service Design: Integração entre Identidade, Mídia e Engajamento
            </h2>
          </div>

          {/* Meio do Bloco (A Imagem 100% Full Width) */}
          <div className="w-full max-w-6xl mx-auto">
            <div
              className="relative w-full rounded-2xl overflow-hidden bg-slate-950 border border-white/10 cursor-zoom-in group shadow-2xl"
              onClick={() =>
                setActiveImage({
                  src: '/images/Cases/Francis-Seguros/francis-pinheiro-seguros-engenharia-video-retencao.png',
                  alt: 'Francis Pinheiro Seguros - Engenharia de Vídeo e Retenção (Meio de Funil)',
                })
              }
            >
              <Image
                src="/images/Cases/Francis-Seguros/francis-pinheiro-seguros-engenharia-video-retencao.png"
                alt="Francis Pinheiro Seguros - Engenharia de Vídeo e Retenção (Meio de Funil)"
                width={1920}
                height={1080}
                className="w-full h-auto object-contain block transition-transform duration-700 group-hover:scale-[1.01]"
              />
              <div className="absolute bottom-4 right-4 bg-[#07080a]/90 backdrop-blur-md px-3 py-1.5 rounded border border-white/10 text-[11px] font-mono text-[#F3E5C8] opacity-0 group-hover:opacity-100 transition-opacity">
                🔍 Expandir Imagem (Zoom)
              </div>
            </div>
          </div>

          {/* Base do Bloco (Texto Editorial & Callout Técnico) */}
          <div className="max-w-3xl space-y-6 pt-4">
            <p className="text-lg text-slate-300 leading-relaxed font-normal">
              Service Design: Integração entre Identidade (Brand Equity), Mídia de Performance (matrizes de criativos focados em conversão e CTR) e Desenho de Serviço (WhatsApp Ops com réguas automatizadas e roteiros de abordagem).
            </p>

            <div className="border-l-2 border-[#DE8D47] pl-6 py-2 space-y-1">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#F3E5C8] block">
                Arquitetura de Conteúdo:
              </span>
              <p className="text-sm font-mono text-slate-400 leading-relaxed">
                Vídeos de Retenção no Feed/Shorts e Educação de Mercado com Quebra de Objeções Prévias.
              </p>
            </div>
          </div>
        </section>

        {/* LINHA DE DIVISÃO TÉCNICA SWISS GRID */}
        <div className="w-full border-t border-white/10" />

        {/* SEÇÃO 3: FUNDO DE FUNIL — CONVERSÃO */}
        <section id="conversao" className="scroll-mt-32 space-y-10">
          {/* Topo do Bloco */}
          <div className="space-y-4 max-w-4xl">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#DE8D47] block">
              [ 03 / FUNDO DE FUNIL — CONVERSÃO &amp; WHATSAPP OPS ]
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Validação Operacional e Funil de Aquisição Previsível
            </h2>
          </div>

          {/* Meio do Bloco (A Imagem 100% Full Width) */}
          <div className="w-full max-w-6xl mx-auto">
            <div
              className="relative w-full rounded-2xl overflow-hidden bg-slate-950 border border-white/10 cursor-zoom-in group shadow-2xl"
              onClick={() =>
                setActiveImage({
                  src: '/images/Cases/Francis-Seguros/francis-pinheiro-seguros-engenharia-vendas-whatsapp.jpg',
                  alt: 'Francis Pinheiro Seguros - Engenharia de Vendas WhatsApp Ops (Conversão)',
                })
              }
            >
              <Image
                src="/images/Cases/Francis-Seguros/francis-pinheiro-seguros-engenharia-vendas-whatsapp.jpg"
                alt="Francis Pinheiro Seguros - Engenharia de Vendas WhatsApp Ops (Conversão)"
                width={1920}
                height={1080}
                className="w-full h-auto object-contain block transition-transform duration-700 group-hover:scale-[1.01]"
              />
              <div className="absolute bottom-4 right-4 bg-[#07080a]/90 backdrop-blur-md px-3 py-1.5 rounded border border-white/10 text-[11px] font-mono text-[#F3E5C8] opacity-0 group-hover:opacity-100 transition-opacity">
                🔍 Expandir Imagem (Zoom)
              </div>
            </div>
          </div>

          {/* Base do Bloco (Texto Editorial & Callout Técnico) */}
          <div className="max-w-3xl space-y-6 pt-4">
            <p className="text-lg text-slate-300 leading-relaxed font-normal">
              A entrega consolidou a introdução da corretora no mercado com uma estrutura corporativa madura, escalável e orientada a dados. O alinhamento entre a identidade visual e o fluxo do WhatsApp gerou previsibilidade comercial, otimizou o Custo por Lead (CPL) e blindou a marca com diretrizes prontas para a expansão futura da equipe de vendas.
            </p>

            <div className="border-l-2 border-[#DE8D47] pl-6 py-2 space-y-1">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#F3E5C8] block">
                Engenharia de Vendas:
              </span>
              <p className="text-sm font-mono text-slate-400 leading-relaxed">
                Mapeamento de Jornada de Atendimento e Automação de Fluxo Comercial (WhatsApp Ops).
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
              <span className="text-xs font-mono text-[#F3E5C8] truncate max-w-xl">
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
            <div className="relative w-full h-full flex items-center justify-center overflow-hidden rounded-xl bg-[#07080a] border border-white/10">
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

      {/* MODAL EDITORIAL: CENTRAL DA MARCA (BRAND EQUITY) */}
      {isBrandCenterOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-6 transition-all duration-300"
          onClick={() => setIsBrandCenterOpen(false)}
        >
          <div
            className="bg-[#0c0e12] border border-white/15 shadow-2xl rounded-3xl max-w-2xl w-full p-6 sm:p-10 space-y-8 max-h-[90vh] overflow-y-auto relative text-white transition-all duration-300 animate-in fade-in zoom-in-95"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-white/10 pb-5">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#DE8D47] block mb-1">
                  DOCUMENTAÇÃO TÉCNICA · BRAND EQUITY
                </span>
                <h2 className="text-2xl font-extrabold text-white">
                  Central da Marca — Francis Seguros
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setIsBrandCenterOpen(false)}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer border border-white/10"
                aria-label="Fechar Modal"
              >
                ✕
              </button>
            </div>

            {/* SEÇÃO 1: PALETA DE CORES (BRAND EQUITY) */}
            <div className="space-y-4">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#DE8D47] flex items-center gap-2">
                <span>🎨</span> Paleta Cromática Institucional
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Navy Blue */}
                <div className="p-4 rounded-2xl bg-black/50 border border-white/10 flex flex-col justify-between space-y-3">
                  <div
                    className="w-full h-16 rounded-xl border border-white/10 shadow-inner"
                    style={{ backgroundColor: '#2B3665' }}
                  />
                  <div>
                    <span className="text-xs font-bold text-white block">Navy Blue</span>
                    <span className="text-xs font-mono text-[#F3E5C8] block">#2B3665</span>
                    <span className="text-[10px] text-slate-400 mt-1 block">Cor Primária / Dominante</span>
                  </div>
                </div>

                {/* Action Orange */}
                <div className="p-4 rounded-2xl bg-black/50 border border-white/10 flex flex-col justify-between space-y-3">
                  <div
                    className="w-full h-16 rounded-xl border border-white/10 shadow-inner"
                    style={{ backgroundColor: '#DE8D47' }}
                  />
                  <div>
                    <span className="text-xs font-bold text-white block">Action Orange</span>
                    <span className="text-xs font-mono text-[#DE8D47] block">#DE8D47</span>
                    <span className="text-[10px] text-slate-400 mt-1 block">Cor de Ação &amp; Conversão</span>
                  </div>
                </div>

                {/* Base Beige */}
                <div className="p-4 rounded-2xl bg-black/50 border border-white/10 flex flex-col justify-between space-y-3">
                  <div
                    className="w-full h-16 rounded-xl border border-white/10 shadow-inner"
                    style={{ backgroundColor: '#F3E5C8' }}
                  />
                  <div>
                    <span className="text-xs font-bold text-white block">Base Beige</span>
                    <span className="text-xs font-mono text-[#F3E5C8] block">#F3E5C8</span>
                    <span className="text-[10px] text-slate-400 mt-1 block">Base Neutra &amp; Contrastes</span>
                  </div>
                </div>
              </div>
            </div>

            {/* SEÇÃO 2: HIERARQUIA TIPOGRÁFICA (BRAND EQUITY) */}
            <div className="space-y-4 pt-4 border-t border-white/10">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#DE8D47] flex items-center gap-2">
                <span>🔤</span> Hierarquia Tipográfica
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Baloo Bhai 2 */}
                <div className="p-4 rounded-2xl bg-black/50 border border-white/10 space-y-2">
                  <span className="text-xs font-mono text-[#DE8D47] block font-bold">
                    TITULARES &amp; HEADLINES
                  </span>
                  <h4 className="text-xl font-bold text-white">Baloo Bhai 2</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Utilizada em títulos principais, chamadas de alto impacto e headlines de conversão. Transmite proximidade e autoridade sem rigidez.
                  </p>
                </div>

                {/* Reem Kufi Fun */}
                <div className="p-4 rounded-2xl bg-black/50 border border-white/10 space-y-2">
                  <span className="text-xs font-mono text-[#F3E5C8] block font-bold">
                    SUBTÍTULOS &amp; SUPORTE
                  </span>
                  <h4 className="text-xl font-bold text-white">Reem Kufi Fun</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Utilizada para subtítulos, legendas técnicas, copys do WhatsApp Ops e corpos de texto de suporte.
                  </p>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="pt-4 border-t border-white/10 flex justify-end">
              <button
                type="button"
                onClick={() => setIsBrandCenterOpen(false)}
                className="px-6 py-2.5 rounded-xl bg-[#DE8D47] hover:bg-[#c97b39] text-slate-950 font-bold text-xs transition-colors cursor-pointer"
              >
                Concluir Visualização
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer Global da Plixel */}
      <Footer />
    </div>
  )
}
