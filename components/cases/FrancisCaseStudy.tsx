'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export default function FrancisCaseStudy() {
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

            {/* Logo / Badge do Francis Seguros */}
            <a
              href="#foundations"
              className="group flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 hover:bg-[#DE8D47]/15 border border-white/10 hover:border-[#DE8D47]/40 transition-all duration-300"
            >
              <div className="w-2 h-2 rounded-full bg-[#DE8D47] animate-pulse" />
              <span className="font-bold text-xs text-white tracking-wide group-hover:text-[#DE8D47] transition-colors">
                Francis Seguros
              </span>
              <span className="text-[10px] font-mono uppercase text-[#F3E5C8] ml-1">
                [ Brand Equity ]
              </span>
            </a>
          </div>

          <nav className="flex items-center space-x-2 sm:space-x-4 text-xs font-mono text-slate-400">
            <a
              href="#foundations"
              className="px-2 py-1 hover:text-[#DE8D47] transition-colors whitespace-nowrap"
            >
              00. Foundations
            </a>
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
          </nav>
        </div>
      </header>

      {/* HERO SECTION (EDITORIAL BEHANCE STYLE) */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-20">
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
                <span className="block text-slate-500 uppercase">Brand System</span>
                <a
                  href="#foundations"
                  className="text-[#DE8D47] font-bold hover:underline"
                >
                  Ver Fundações de Marca ↓
                </a>
              </div>
            </div>
          </div>

          {/* Hero Image (Edge-to-Edge Editorial Container) */}
          <div className="w-full max-w-6xl mx-auto pt-4">
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

      {/* CONTEÚDO EDITORIAL FLUIDO (SEAMLESS) */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 md:space-y-32 py-16">

        {/* SEÇÃO 00: FUNDAÇÕES DA MARCA & BRAND EQUITY (ABERTA E NATIVA) */}
        <section id="foundations" className="scroll-mt-32 space-y-12">
          {/* Topo da Seção */}
          <div className="space-y-3 max-w-4xl">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#DE8D47] block">
              [ 00 / FOUNDATIONS ] BRAND EQUITY &amp; SISTEMA VISUAL
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Fundações de Marca &amp; Arquitetura Visual
            </h2>
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-3xl">
              Documentação técnica aberta do sistema visual institucional. Padronização de cores, hierarquia tipográfica e área reservada para a matriz de marca.
            </p>
          </div>

          {/* Grid Minimalista de UI / Prancha Técnica Arquitetônica */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 pt-4">
            
            {/* Coluna 1: Paleta Cromática Institucional */}
            <div className="space-y-6">
              <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-[#DE8D47] pb-3 border-b border-white/10 flex items-center justify-between">
                <span>01. PALETA CROMÁTICA</span>
                <span className="text-[10px] text-slate-500">HEX SPECS</span>
              </h3>

              <div className="space-y-6">
                {/* Navy Blue */}
                <div className="space-y-2">
                  <div
                    className="w-full h-20 rounded-lg border border-white/10 shadow-inner"
                    style={{ backgroundColor: '#2B3665' }}
                  />
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-bold text-white">Navy Blue</span>
                    <span className="font-mono text-slate-400">#2B3665</span>
                  </div>
                  <span className="text-xs text-slate-400 block font-normal">
                    Cor Primária Dominante · Transmite segurança institucional e estabilidade no setor financeiro.
                  </span>
                </div>

                {/* Action Orange */}
                <div className="space-y-2">
                  <div
                    className="w-full h-20 rounded-lg border border-white/10 shadow-inner"
                    style={{ backgroundColor: '#DE8D47' }}
                  />
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-bold text-white">Action Orange</span>
                    <span className="font-mono text-[#DE8D47]">#DE8D47</span>
                  </div>
                  <span className="text-xs text-slate-400 block font-normal">
                    Cor de Ação &amp; Conversão · Utilizada em botões de CTA, links ativos e elementos de alta prioridade.
                  </span>
                </div>

                {/* Base Beige */}
                <div className="space-y-2">
                  <div
                    className="w-full h-20 rounded-lg border border-white/10 shadow-inner"
                    style={{ backgroundColor: '#F3E5C8' }}
                  />
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-bold text-white">Base Beige</span>
                    <span className="font-mono text-[#F3E5C8]">#F3E5C8</span>
                  </div>
                  <span className="text-xs text-slate-400 block font-normal">
                    Base Neutra &amp; Contrastes · Suporte a textos de apoio, fundos suaves e detalhes editoriais.
                  </span>
                </div>
              </div>
            </div>

            {/* Coluna 2: Hierarquia Tipográfica & Aplicação de Logo */}
            <div className="space-y-6">
              <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-[#DE8D47] pb-3 border-b border-white/10 flex items-center justify-between">
                <span>02. TIPOGRAFIA &amp; LOGO</span>
                <span className="text-[10px] text-slate-500">HIERARCHY</span>
              </h3>

              <div className="space-y-8">
                {/* Fonte Primária */}
                <div className="space-y-2">
                  <span className="text-xs font-mono text-[#DE8D47] block font-bold uppercase tracking-wider">
                    Fonte Primária (Títulos &amp; Headlines)
                  </span>
                  <h4 className="text-2xl font-extrabold text-white">Baloo Bhai 2</h4>
                  <p className="text-base text-[#F3E5C8]/90 font-bold leading-snug">
                    &quot;Proteção Patrimonial e Engenharia Comercial com Autoridade Instantânea.&quot;
                  </p>
                </div>

                {/* Fonte Secundária */}
                <div className="space-y-2 pt-2 border-t border-white/10">
                  <span className="text-xs font-mono text-[#F3E5C8] block font-bold uppercase tracking-wider">
                    Fonte Secundária (Parágrafos &amp; UI)
                  </span>
                  <h4 className="text-xl font-bold text-white">Reem Kufi Fun</h4>
                  <p className="text-sm text-slate-300 font-normal leading-relaxed">
                    Utilizada em copys de nutrição no WhatsApp Ops, legendas técnicas de imagens e corpos de texto de suporte.
                  </p>
                </div>

                {/* Área de Aplicação de Logo */}
                <div className="pt-2">
                  <div className="border border-dashed border-white/20 rounded-xl p-8 flex flex-col items-center justify-center text-center bg-white/[0.01]">
                    <span className="font-mono text-xs text-[#DE8D47] font-bold uppercase tracking-widest">
                      [ ÁREA RESERVADA · LOGOTIPO DA MARCA ]
                    </span>
                    <p className="text-xs text-slate-400 mt-1 max-w-xs font-normal">
                      Espaço limpo para aplicação vetorial master da marca Francis Pinheiro Seguros.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* LINHA DE DIVISÃO TÉCNICA SWISS GRID */}
        <div className="w-full border-t border-white/10" />

        {/* SEÇÃO 1: TOPO DE FUNIL — AQUISIÇÃO */}
        <section id="aquisicao" className="scroll-mt-32 space-y-8">
          {/* Topo do Bloco */}
          <div className="space-y-3 max-w-4xl">
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

          {/* Base do Bloco (Texto Amarrado à Imagem - mt-4) */}
          <div className="max-w-3xl space-y-4 mt-4">
            <p className="text-lg sm:text-xl text-slate-200 leading-relaxed font-normal">
              A marca enfrentava um gargalo de posicionamento digital. Os canais não transmitiam a proposta de valor corporativa, forçando a captação a depender puramente de abordagem direta comercial, sem uma base de autoridade visual prévia.
            </p>
            
            <div className="border-l-2 border-[#DE8D47] pl-5 py-1 space-y-1">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#F3E5C8] block">
                Entregável Técnico:
              </span>
              <p className="text-sm font-mono text-slate-300 leading-relaxed">
                Matrizes Visuais para Campanhas de Performance (Otimização de Conversão e CTR).
              </p>
            </div>
          </div>
        </section>

        {/* LINHA DE DIVISÃO TÉCNICA SWISS GRID */}
        <div className="w-full border-t border-white/10" />

        {/* SEÇÃO 2: MEIO DE FUNIL — RETENÇÃO */}
        <section id="retencao" className="scroll-mt-32 space-y-8">
          {/* Topo do Bloco */}
          <div className="space-y-3 max-w-4xl">
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

          {/* Base do Bloco (Texto Amarrado à Imagem - mt-4) */}
          <div className="max-w-3xl space-y-4 mt-4">
            <p className="text-lg sm:text-xl text-slate-200 leading-relaxed font-normal">
              Service Design: Integração entre Identidade (Brand Equity), Mídia de Performance (matrizes de criativos focados em conversão e CTR) e Desenho de Serviço (WhatsApp Ops com réguas automatizadas e roteiros de abordagem).
            </p>

            <div className="border-l-2 border-[#DE8D47] pl-5 py-1 space-y-1">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#F3E5C8] block">
                Arquitetura de Conteúdo:
              </span>
              <p className="text-sm font-mono text-slate-300 leading-relaxed">
                Vídeos de Retenção no Feed/Shorts e Educação de Mercado com Quebra de Objeções Prévias.
              </p>
            </div>
          </div>
        </section>

        {/* LINHA DE DIVISÃO TÉCNICA SWISS GRID */}
        <div className="w-full border-t border-white/10" />

        {/* SEÇÃO 3: FUNDO DE FUNIL — CONVERSÃO */}
        <section id="conversao" className="scroll-mt-32 space-y-8">
          {/* Topo do Bloco */}
          <div className="space-y-3 max-w-4xl">
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

          {/* Base do Bloco (Texto Amarrado à Imagem - mt-4) */}
          <div className="max-w-3xl space-y-4 mt-4">
            <p className="text-lg sm:text-xl text-slate-200 leading-relaxed font-normal">
              A entrega consolidou a introdução da corretora no mercado com uma estrutura corporativa madura, escalável e orientada a dados. O alinhamento entre a identidade visual e o fluxo do WhatsApp gerou previsibilidade comercial, otimizou o Custo por Lead (CPL) e blindou a marca com diretrizes prontas para a expansão futura da equipe de vendas.
            </p>

            <div className="border-l-2 border-[#DE8D47] pl-5 py-1 space-y-1">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#F3E5C8] block">
                Engenharia de Vendas:
              </span>
              <p className="text-sm font-mono text-slate-300 leading-relaxed">
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

      {/* Footer Global da Plixel */}
      <Footer />
    </div>
  )
}
