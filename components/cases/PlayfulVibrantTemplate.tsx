'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import BrandFontInjector from '@/components/cases/BrandFontInjector'
import { CaseData } from '@/types'

interface PlayfulVibrantTemplateProps {
  caseData: CaseData
}

export default function PlayfulVibrantTemplate({ caseData }: PlayfulVibrantTemplateProps) {
  const [activeImage, setActiveImage] = useState<{ src: string; alt: string } | null>(null)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveImage(null)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const mainCover = caseData.assets.heroCover || caseData.assets.heroSymbol || '/images/ucadis-capa-mascotes.png'

  return (
    <div className="min-h-screen bg-slate-950 text-white font-jl-tertiary brand-font-tertiary selection:bg-amber-400 selection:text-slate-950 relative overflow-x-hidden antialiased">
      <BrandFontInjector fonts={caseData.brand_fonts} />
      <Header />

      {/* Internal Navigation Sub-header */}
      <header className="sticky top-16 z-40 bg-slate-900/90 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between overflow-x-auto scrollbar-none">
          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/trabalhos"
              className="flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-amber-400 uppercase tracking-wider transition-colors"
            >
              ← Voltar
            </Link>
            <div className="h-4 w-px bg-white/20 hidden sm:block" />
            <span className="font-bold text-xs sm:text-sm text-amber-400 tracking-wide font-jl-primary brand-font-primary">
              {caseData.titulo}
            </span>
          </div>

          <nav className="flex items-center space-x-2 text-xs text-slate-300 font-bold uppercase tracking-wider">
            <a href="#visao-geral" className="px-2 py-1 hover:text-amber-400 transition-colors">
              Visão Geral
            </a>
            <a href="#estrategia" className="px-2 py-1 hover:text-amber-400 transition-colors">
              Estratégia
            </a>
            <a href="#sistema" className="px-2 py-1 hover:text-amber-400 transition-colors">
              Sistema Visual
            </a>
          </nav>
        </div>
      </header>

      {/* 01. HERO VIBRANTE */}
      <section id="visao-geral" className="relative overflow-hidden pt-12 pb-16 sm:pt-20 sm:pb-24">
        <div className="absolute top-10 left-10 w-80 h-80 bg-amber-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
          <div className="text-center max-w-4xl mx-auto space-y-4">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-widest bg-amber-400/10 text-amber-400 border border-amber-400/20">
              [ TEMPLATE 02 / VIBRANTE &amp; JOVEM ]
            </span>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white font-jl-primary brand-font-primary">
              {caseData.copywriting.title_line_1 || caseData.titulo}
              {caseData.copywriting.title_line_2 && (
                <span className="block text-amber-400 italic font-light mt-1">
                  {caseData.copywriting.title_line_2}
                </span>
              )}
            </h1>

            <p className="text-base sm:text-xl text-slate-300 leading-relaxed font-light max-w-3xl mx-auto font-jl-secondary brand-font-secondary">
              {caseData.copywriting.subtitle || caseData.diagnostico}
            </p>
          </div>

          {/* Hero Cover Card (Rounded 2XL) */}
          <div
            className="relative w-full aspect-[4/3] sm:aspect-video rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-slate-900 cursor-zoom-in group"
            onClick={() => setActiveImage({ src: mainCover, alt: caseData.titulo })}
          >
            <Image
              src={mainCover}
              alt={caseData.titulo}
              fill
              priority
              className="object-cover w-full h-full block transition-transform duration-700 group-hover:scale-[1.02]"
            />
          </div>
        </div>
      </section>

      {/* 02. ESTRATÉGIA & DIAGNÓSTICO */}
      <section id="estrategia" className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900/80 border border-white/10 rounded-3xl p-6 sm:p-12 space-y-8 backdrop-blur-md">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400 block font-jl-tertiary brand-font-tertiary">
            [ DIAGNÓSTICO &amp; POSICIONAMENTO ]
          </span>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-jl-primary brand-font-primary">
            Arquitetura de Marca &amp; Pertencimento Visual
          </h2>

          <p className="text-lg sm:text-2xl text-slate-300 font-light leading-relaxed font-jl-tertiary brand-font-tertiary">
            {caseData.copywriting.diagnostico || caseData.diagnostico}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-2">
              <span className="text-xs uppercase font-bold text-amber-400">Processo</span>
              <p className="text-sm text-slate-300">{caseData.copywriting.processo || caseData.processo}</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-2">
              <span className="text-xs uppercase font-bold text-emerald-400">Resultado</span>
              <p className="text-sm text-slate-300">{caseData.copywriting.resultado || caseData.resultado}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 03. MATRIZ CROMÁTICA VIBRANTE */}
      {caseData.palette && caseData.palette.length > 0 && (
        <section id="sistema" className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400 block">
              [ MATRIZ CROMÁTICA VIBRANTE ]
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-jl-secondary brand-font-secondary">
              Paleta de Cores &amp; Contraste
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {caseData.palette.map((color, idx) => (
              <div
                key={idx}
                style={{ backgroundColor: color.hex }}
                className="rounded-2xl p-6 min-h-[200px] flex flex-col justify-between shadow-lg border border-white/10 transition-transform hover:scale-[1.02] duration-300"
              >
                <span style={{ color: color.textHex }} className="text-xs font-mono font-bold uppercase">
                  {color.hex}
                </span>
                <div>
                  <span style={{ color: color.textHex }} className="block text-base font-bold uppercase">
                    {color.name}
                  </span>
                  <span style={{ color: color.textHex }} className="block text-xs opacity-75 uppercase">
                    {color.role}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* LIGHTBOX */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4"
          onClick={() => setActiveImage(null)}
        >
          <div className="relative w-full h-full max-w-7xl max-h-[90vh] flex flex-col items-center justify-center space-y-4">
            <div className="w-full flex justify-between px-2 text-white text-xs">
              <span>{activeImage.alt}</span>
              <button onClick={() => setActiveImage(null)} className="px-3 py-1 bg-white/10 rounded">
                ✕ Fechar
              </button>
            </div>
            <div className="relative w-full h-full overflow-hidden bg-black rounded-2xl">
              <Image src={activeImage.src} alt={activeImage.alt} fill className="object-contain" priority />
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}
