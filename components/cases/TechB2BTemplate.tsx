'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import TechnicalSignature from '@/components/layout/TechnicalSignature'
import BrandFontInjector from '@/components/cases/BrandFontInjector'
import { CaseData } from '@/types'

interface TechB2BTemplateProps {
  caseData: CaseData
}

export default function TechB2BTemplate({ caseData }: TechB2BTemplateProps) {
  const [activeImage, setActiveImage] = useState<{ src: string; alt: string } | null>(null)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveImage(null)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const mainCover = caseData.assets.heroCover || caseData.assets.heroSymbol || caseData.imagem_capa || '/images/francis-hero-cover.png'

  return (
    <div className="min-h-screen bg-[#07080a] text-white font-jl-tertiary brand-font-tertiary selection:bg-blue-600 selection:text-white relative overflow-x-hidden antialiased">
      <BrandFontInjector fonts={caseData.brand_fonts} />
      <Header />

      {/* Internal Navigation Sub-header */}
      <header className="sticky top-16 z-40 bg-[#07080a]/90 backdrop-blur-xl border-b border-white/10 font-mono text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between overflow-x-auto scrollbar-none">
          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/trabalhos"
              className="flex items-center gap-2 font-bold text-slate-400 hover:text-blue-400 uppercase tracking-widest transition-colors"
            >
              ← Voltar
            </Link>
            <div className="h-4 w-px bg-white/20 hidden sm:block" />
            <span className="font-bold text-blue-400 tracking-wider uppercase font-jl-primary brand-font-primary">
              {caseData.titulo}
            </span>
          </div>

          <nav className="flex items-center space-x-3 text-slate-400 uppercase tracking-widest">
            <a href="#hero" className="px-2 py-1 hover:text-blue-400 transition-colors">
              01. Hero
            </a>
            <a href="#diagnostico" className="px-2 py-1 hover:text-blue-400 transition-colors">
              02. Design Ops
            </a>
            <a href="#metricas" className="px-2 py-1 hover:text-blue-400 transition-colors">
              03. KPIs
            </a>
          </nav>
        </div>
      </header>

      {/* 01. HERO B2B & TECH */}
      <section id="hero" className="relative pt-20 pb-16 md:pt-28 md:pb-24 border-b border-white/10">
        <TechnicalSignature categoria="DESIGN OPS &amp; BRANDING" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 relative z-10">
          <div className="max-w-4xl space-y-4">
            <span className="inline-block text-xs font-mono font-bold uppercase tracking-widest text-blue-400">
              [ TEMPLATE 03 / TECH, CORPORATE &amp; B2B ]
            </span>

            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] text-white font-jl-primary brand-font-primary">
              {caseData.copywriting.title_line_1 || caseData.titulo}
              {caseData.copywriting.title_line_2 && (
                <span className="block text-blue-400 font-light mt-1">
                  {caseData.copywriting.title_line_2}
                </span>
              )}
            </h1>

            <p className="text-base sm:text-2xl text-slate-300 font-light leading-relaxed max-w-3xl font-jl-secondary brand-font-secondary">
              {caseData.copywriting.subtitle || caseData.diagnostico}
            </p>
          </div>

          {/* Hero Cover Image */}
          <div
            className="relative w-full aspect-[4/3] sm:aspect-video rounded-xl overflow-hidden bg-slate-950 border border-white/10 cursor-zoom-in group shadow-2xl"
            onClick={() => setActiveImage({ src: mainCover, alt: caseData.titulo })}
          >
            <Image
              src={mainCover}
              alt={caseData.titulo}
              fill
              priority
              className="object-cover w-full h-full block transition-transform duration-700 group-hover:scale-[1.01]"
            />
          </div>
        </div>
      </section>

      {/* 02. DIAGNÓSTICO & DESIGN OPS */}
      <section id="diagnostico" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="border-l-2 border-blue-500 pl-6 space-y-4">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-400 block">
            [ DIAGNÓSTICO OPERACIONAL ]
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-white font-jl-primary brand-font-primary">
            Arquitetura de Atendimento &amp; Eficiência Comercial
          </h2>
          <p className="text-lg sm:text-xl text-slate-300 font-light leading-relaxed max-w-4xl font-jl-tertiary brand-font-tertiary">
            {caseData.copywriting.diagnostico || caseData.diagnostico}
          </p>
        </div>

        {/* METRICS & KPIS */}
        <div id="metricas" className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
          <div className="bg-slate-900/60 border border-white/10 p-6 space-y-2 rounded-xl">
            <span className="text-3xl font-mono font-extrabold text-blue-400">100%</span>
            <span className="block text-xs font-mono uppercase text-slate-400 font-bold">Consistência Multicanal</span>
            <p className="text-xs text-slate-400">Padronização de ativos de comunicação de ponta a ponta.</p>
          </div>
          <div className="bg-slate-900/60 border border-white/10 p-6 space-y-2 rounded-xl">
            <span className="text-3xl font-mono font-extrabold text-emerald-400">3x</span>
            <span className="block text-xs font-mono uppercase text-slate-400 font-bold">Velocidade de Onboarding</span>
            <p className="text-xs text-slate-400">Redução de atrito na entrega comercial de alto ticket.</p>
          </div>
          <div className="bg-slate-900/60 border border-white/10 p-6 space-y-2 rounded-xl">
            <span className="text-3xl font-mono font-extrabold text-amber-400">Zero</span>
            <span className="block text-xs font-mono uppercase text-slate-400 font-bold">Falha de Impressão</span>
            <p className="text-xs text-slate-400">Blindagem vetorial contra entupimento de traços em hot stamping.</p>
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4"
          onClick={() => setActiveImage(null)}
        >
          <div className="relative w-full h-full max-w-7xl max-h-[90vh] flex flex-col items-center justify-center space-y-4">
            <div className="w-full flex justify-between px-2 text-white text-xs font-mono">
              <span>{activeImage.alt}</span>
              <button onClick={() => setActiveImage(null)} className="px-3 py-1 bg-white/10 rounded">
                ✕ Fechar
              </button>
            </div>
            <div className="relative w-full h-full overflow-hidden bg-black border border-white/10">
              <Image src={activeImage.src} alt={activeImage.alt} fill className="object-contain" priority />
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}
