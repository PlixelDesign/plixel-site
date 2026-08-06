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
    <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-blue-600 selection:text-white relative overflow-x-hidden antialiased">
      {/* Header Global da Plixel */}
      <Header />

      {/* Sub-header de navegação interna */}
      <header className="sticky top-16 z-40 backdrop-blur-md bg-slate-950/90 border-b border-slate-800/80 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between overflow-x-auto scrollbar-none">
          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/trabalhos"
              className="flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-blue-400 uppercase tracking-wider transition-colors mr-2"
            >
              ← Voltar a Trabalhos
            </Link>
            <div className="h-4 w-px bg-slate-800 hidden sm:block" />

            {/* Logo / Badge Interativa do Francis Seguros */}
            <button
              type="button"
              onClick={() => setIsBrandCenterOpen(true)}
              className="group flex items-center gap-2 px-2.5 py-1 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/30 transition-all duration-300 cursor-pointer text-left"
              title="Clique para abrir a Central da Marca (Brand Equity)"
            >
              <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span className="font-bold text-xs text-white tracking-wide group-hover:text-blue-400 transition-colors">
                Francis Seguros
              </span>
              <span className="text-[10px] font-mono uppercase bg-slate-900 text-blue-400 px-1.5 py-0.5 rounded border border-blue-500/20 ml-1">
                Central da Marca ✨
              </span>
            </button>
          </div>

          <nav className="flex items-center space-x-1 sm:space-x-2 text-xs sm:text-sm text-slate-400">
            <a
              href="#aquisicao"
              className="px-2.5 py-1 rounded hover:text-blue-400 hover:bg-slate-900 transition-colors whitespace-nowrap"
            >
              1. Aquisição
            </a>
            <a
              href="#retencao"
              className="px-2.5 py-1 rounded hover:text-blue-400 hover:bg-slate-900 transition-colors whitespace-nowrap"
            >
              2. Retenção
            </a>
            <a
              href="#conversao"
              className="px-2.5 py-1 rounded hover:text-blue-400 hover:bg-slate-900 transition-colors whitespace-nowrap"
            >
              3. Conversão
            </a>
            <button
              type="button"
              onClick={() => setIsBrandCenterOpen(true)}
              className="px-3 py-1 rounded font-semibold text-xs text-amber-300 bg-amber-500/10 border border-amber-500/30 hover:bg-amber-500/20 transition-all whitespace-nowrap ml-2 cursor-pointer"
            >
              Brand Equity 💎
            </button>
          </nav>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative bg-slate-950 text-white overflow-hidden pt-16 pb-20 md:pt-24 md:pb-28 border-b border-slate-800/60">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 -right-40 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-widest bg-blue-500/10 text-blue-400 border border-blue-500/20">
              <span>Go-To-Market</span> · <span>Service Design</span> · <span>WhatsApp Ops</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white">
              Francis Pinheiro Seguros | Identidade Corporativa e Uniformização de Ativos
            </h1>

            <p className="text-base sm:text-xl text-slate-300 leading-relaxed font-normal max-w-3xl mx-auto">
              Engenharia de funil comercial de ponta a ponta: alinhamento entre posicionamento institucional, tráfego pago e automação de atendimento comercial.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <button
                type="button"
                onClick={() => setIsBrandCenterOpen(true)}
                className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-xl shadow-blue-600/20 border border-blue-400/30 transition-all duration-300 flex items-center gap-2 cursor-pointer"
              >
                <span>Explorar Central da Marca</span>
                <span className="text-amber-300">✨</span>
              </button>
            </div>
          </div>

          {/* Asset Hero: francis-seguros-portfolio-hero (Stacked Editorial Format) */}
          <div className="w-full max-w-6xl mx-auto">
            <div
              className="relative w-full rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border border-blue-500/20 bg-slate-900 group cursor-zoom-in"
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
                className="w-full h-auto object-contain block max-h-[680px] transition-transform duration-500 group-hover:scale-[1.01]"
              />
              <div className="absolute bottom-4 right-4 bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 text-[11px] font-mono text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity">
                🔍 Clique para ampliar (Zoom Fullscreen)
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FUNIL DE VENDAS & NARRATIVA EMPILHADA (STACKED / EDITORIAL) */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 py-20">

        {/* SEÇÃO 1: TOPO DE FUNIL — AQUISIÇÃO (EMPILHADO) */}
        <section id="aquisicao" className="scroll-mt-36">
          <div className="bg-slate-900/90 rounded-3xl p-6 sm:p-12 border border-slate-800 shadow-xl space-y-8 flex flex-col">
            
            {/* 1. Topo do Bloco: Cabeçalho Técnico & Título */}
            <div className="space-y-4 border-b border-slate-800 pb-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-mono font-bold uppercase tracking-wider bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  <span>[ 01 / TOPO DE FUNIL ]</span> AQUISIÇÃO &amp; AWARENESS
                </div>
                <span className="text-xs font-mono text-slate-400">
                  Foco: CTR Elevado &amp; Mitigação de Atrito em Leads Frios
                </span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
                Lançamento de Operação (Go-To-Market) e Campanhas de Performance
              </h2>
            </div>

            {/* 2. Meio do Bloco: A Imagem (100% Widescreen, Full Container) */}
            <div className="w-full max-w-6xl mx-auto">
              <div
                className="relative w-full rounded-2xl overflow-hidden border border-blue-500/20 bg-slate-950 shadow-2xl cursor-zoom-in group"
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
                  className="w-full h-auto object-contain block max-h-[750px] transition-transform duration-500 group-hover:scale-[1.01]"
                />
                <div className="absolute bottom-4 right-4 bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 text-[11px] font-mono text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity">
                  🔍 Clique para ampliar (Zoom Fullscreen)
                </div>
              </div>
            </div>

            {/* 3. Base do Bloco: O Texto (Largura de Leitura Confortável) */}
            <div className="max-w-3xl mx-auto space-y-6 text-slate-300 pt-2">
              <p className="text-base sm:text-lg leading-relaxed text-slate-300 font-normal">
                A marca enfrentava um gargalo de posicionamento digital. Os canais não transmitiam a proposta de valor corporativa, forçando a captação a depender puramente de abordagem direta comercial, sem uma base de autoridade visual prévia.
              </p>
              <div className="p-5 rounded-2xl bg-slate-950/90 border border-blue-500/20 text-xs font-mono text-slate-300 space-y-2">
                <span className="text-blue-400 font-bold block uppercase tracking-wider">
                  ✓ Entregável Técnico de Aquisição:
                </span>
                <p className="leading-relaxed">
                  Matrizes Visuais para Campanhas de Performance (Otimização de Conversão e CTR), estabelecendo hierarquia tipográfica estrita e blocos de contraste para atração imediata.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* SEÇÃO 2: MEIO DE FUNIL — RETENÇÃO (EMPILHADO) */}
        <section id="retencao" className="scroll-mt-36">
          <div className="bg-slate-900/90 rounded-3xl p-6 sm:p-12 border border-slate-800 shadow-xl space-y-8 flex flex-col">
            
            {/* 1. Topo do Bloco: Cabeçalho Técnico & Título */}
            <div className="space-y-4 border-b border-slate-800 pb-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-mono font-bold uppercase tracking-wider bg-amber-500/10 text-amber-400 border border-amber-500/20">
                  <span>[ 02 / MEIO DE FUNIL ]</span> RETENÇÃO &amp; BRAND EQUITY
                </div>
                <span className="text-xs font-mono text-slate-400">
                  Foco: Nutrição, Autoridade &amp; Consistência Multicanal
                </span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
                Service Design: Integração entre Identidade, Mídia e Engajamento
              </h2>
            </div>

            {/* 2. Meio do Bloco: A Imagem (100% Widescreen, Full Container) */}
            <div className="w-full max-w-6xl mx-auto">
              <div
                className="relative w-full rounded-2xl overflow-hidden border border-amber-500/20 bg-slate-950 shadow-2xl cursor-zoom-in group"
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
                  className="w-full h-auto object-contain block max-h-[750px] transition-transform duration-500 group-hover:scale-[1.01]"
                />
                <div className="absolute bottom-4 right-4 bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 text-[11px] font-mono text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity">
                  🔍 Clique para ampliar (Zoom Fullscreen)
                </div>
              </div>
            </div>

            {/* 3. Base do Bloco: O Texto (Largura de Leitura Confortável) */}
            <div className="max-w-3xl mx-auto space-y-6 text-slate-300 pt-2">
              <p className="text-base sm:text-lg leading-relaxed text-slate-300 font-normal">
                Service Design: Integração entre Identidade (Brand Equity), Mídia de Performance (matrizes de criativos focados em conversão e CTR) e Desenho de Serviço (WhatsApp Ops com réguas automatizadas e roteiros de abordagem).
              </p>
              <div className="p-5 rounded-2xl bg-slate-950/90 border border-amber-500/20 text-xs font-mono text-slate-300 space-y-2">
                <span className="text-amber-400 font-bold block uppercase tracking-wider">
                  ✓ Arquitetura de Conteúdo &amp; Retenção:
                </span>
                <p className="leading-relaxed">
                  Vídeos de Retenção no Feed/Shorts e Educação de Mercado com Quebra de Objeções Prévias, garantindo que o usuário compreenda o valor dos produtos de seguros antes da abordagem comercial.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* SEÇÃO 3: FUNDO DE FUNIL — CONVERSÃO (EMPILHADO) */}
        <section id="conversao" className="scroll-mt-36">
          <div className="bg-gradient-to-br from-blue-950/40 via-slate-900 to-slate-950 rounded-3xl p-6 sm:p-12 border border-emerald-500/30 shadow-2xl space-y-8 flex flex-col">
            
            {/* 1. Topo do Bloco: Cabeçalho Técnico & Título */}
            <div className="space-y-4 border-b border-slate-800 pb-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-mono font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <span>[ 03 / FUNDO DE FUNIL ]</span> CONVERSÃO &amp; WHATSAPP OPS
                </div>
                <span className="text-xs font-mono text-slate-400">
                  Foco: Otimização de CPL &amp; Previsibilidade Comercial
                </span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
                Validação Operacional e Funil de Aquisição Previsível
              </h2>
            </div>

            {/* 2. Meio do Bloco: A Imagem (100% Widescreen, Full Container) */}
            <div className="w-full max-w-6xl mx-auto">
              <div
                className="relative w-full rounded-2xl overflow-hidden border border-emerald-500/20 bg-slate-950 shadow-2xl cursor-zoom-in group"
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
                  className="w-full h-auto object-contain block max-h-[750px] transition-transform duration-500 group-hover:scale-[1.01]"
                />
                <div className="absolute bottom-4 right-4 bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 text-[11px] font-mono text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity">
                  🔍 Clique para ampliar (Zoom Fullscreen)
                </div>
              </div>
            </div>

            {/* 3. Base do Bloco: O Texto (Largura de Leitura Confortável) */}
            <div className="max-w-3xl mx-auto space-y-6 text-slate-300 pt-2">
              <p className="text-base sm:text-lg leading-relaxed text-slate-300 font-normal">
                A entrega consolidou a introdução da corretora no mercado com uma estrutura corporativa madura, escalável e orientada a dados. O alinhamento entre a identidade visual e o fluxo do WhatsApp gerou previsibilidade comercial, otimizou o Custo por Lead (CPL) e blindou a marca com diretrizes prontas para a expansão futura da equipe de vendas.
              </p>
              <div className="p-5 rounded-2xl bg-slate-950/90 border border-emerald-500/20 text-xs font-mono text-slate-300 space-y-2">
                <span className="text-emerald-400 font-bold block uppercase tracking-wider">
                  ✓ Engenharia de Vendas &amp; Automação:
                </span>
                <p className="leading-relaxed">
                  Mapeamento de Jornada de Atendimento e Automação de Fluxo Comercial (WhatsApp Ops), permitindo que a credibilidade visual da marca seja mantida intacta até o fechamento de contratos.
                </p>
              </div>
            </div>

          </div>
        </section>

      </main>

      {/* LIGHTBOX FULLSCREEN INTERATIVO (ZOOM DE IMAGEM) */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-lg flex items-center justify-center p-4 sm:p-8 transition-all duration-300 animate-in fade-in"
          onClick={() => setActiveImage(null)}
        >
          <div
            className="relative w-full h-full max-w-7xl max-h-[90vh] flex flex-col items-center justify-center space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar Lightbox */}
            <div className="w-full flex items-center justify-between px-2 text-white">
              <span className="text-xs font-mono text-slate-400 truncate max-w-xl">
                {activeImage.alt}
              </span>
              <button
                type="button"
                onClick={() => setActiveImage(null)}
                className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-mono text-xs transition-colors cursor-pointer border border-white/10"
              >
                ✕ Fechar (ESC)
              </button>
            </div>

            {/* Imagem Ampliada */}
            <div className="relative w-full h-full flex items-center justify-center overflow-hidden rounded-xl bg-slate-950 border border-slate-800">
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

      {/* MODAL ELEGANTE: CENTRAL DA MARCA (BRAND EQUITY) */}
      {isBrandCenterOpen && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 transition-all duration-300"
          onClick={() => setIsBrandCenterOpen(false)}
        >
          <div
            className="bg-slate-900/95 border border-slate-700/80 shadow-2xl rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-8 max-h-[90vh] overflow-y-auto relative text-white transition-all duration-300 animate-in fade-in zoom-in-95"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-slate-800 pb-5">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-amber-400 block mb-1">
                  DOCUMENTAÇÃO TÉCNICA · BRAND EQUITY
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-white">
                  Central da Marca — Francis Seguros
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setIsBrandCenterOpen(false)}
                className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
                aria-label="Fechar Modal"
              >
                ✕
              </button>
            </div>

            {/* SEÇÃO 1: PALETA DE CORES (BRAND EQUITY) */}
            <div className="space-y-4">
              <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-blue-400 flex items-center gap-2">
                <span>🎨</span> Paleta de Cores Institucional
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Navy Blue */}
                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col justify-between space-y-3">
                  <div
                    className="w-full h-16 rounded-xl border border-white/10 shadow-inner"
                    style={{ backgroundColor: '#2B3665' }}
                  />
                  <div>
                    <span className="text-xs font-bold text-white block">Navy Blue</span>
                    <span className="text-xs font-mono text-blue-300 block">#2B3665</span>
                    <span className="text-[10px] text-slate-400 mt-1 block">Cor Primária / Dominante</span>
                  </div>
                </div>

                {/* Action Orange */}
                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col justify-between space-y-3">
                  <div
                    className="w-full h-16 rounded-xl border border-white/10 shadow-inner"
                    style={{ backgroundColor: '#DE8D47' }}
                  />
                  <div>
                    <span className="text-xs font-bold text-white block">Action Orange</span>
                    <span className="text-xs font-mono text-amber-300 block">#DE8D47</span>
                    <span className="text-[10px] text-slate-400 mt-1 block">Cor de Ação &amp; Conversão</span>
                  </div>
                </div>

                {/* Base Beige */}
                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col justify-between space-y-3">
                  <div
                    className="w-full h-16 rounded-xl border border-white/10 shadow-inner"
                    style={{ backgroundColor: '#F3E5C8' }}
                  />
                  <div>
                    <span className="text-xs font-bold text-white block">Base Beige</span>
                    <span className="text-xs font-mono text-amber-200 block">#F3E5C8</span>
                    <span className="text-[10px] text-slate-400 mt-1 block">Base Neutra &amp; Contrastes</span>
                  </div>
                </div>
              </div>
            </div>

            {/* SEÇÃO 2: HIERARQUIA TIPOGRÁFICA (BRAND EQUITY) */}
            <div className="space-y-4 pt-4 border-t border-slate-800">
              <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-blue-400 flex items-center gap-2">
                <span>🔤</span> Hierarquia Tipográfica
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Baloo Bhai 2 */}
                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                  <span className="text-xs font-mono text-amber-400 block font-bold">
                    TITULARES &amp; HEADLINES
                  </span>
                  <h4 className="text-lg font-bold text-white">Baloo Bhai 2</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Utilizada em títulos principais, chamadas de alto impacto e headlines de conversão. Transmite proximidade e autoridade sem rigidez.
                  </p>
                </div>

                {/* Reem Kufi Fun */}
                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                  <span className="text-xs font-mono text-blue-400 block font-bold">
                    SUBTÍTULOS &amp; SUPORTE
                  </span>
                  <h4 className="text-lg font-bold text-white">Reem Kufi Fun</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Utilizada para subtítulos, legendas técnicas, copys do WhatsApp Ops e corpos de texto de suporte.
                  </p>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="pt-4 border-t border-slate-800 flex justify-end">
              <button
                type="button"
                onClick={() => setIsBrandCenterOpen(false)}
                className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs transition-colors cursor-pointer"
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
