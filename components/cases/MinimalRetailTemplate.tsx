'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import BrandFontInjector from '@/components/cases/BrandFontInjector'
import { CaseData } from '@/types'

interface MinimalRetailTemplateProps {
  caseData: CaseData
}

export default function MinimalRetailTemplate({ caseData }: MinimalRetailTemplateProps) {
  const [activeImage, setActiveImage] = useState<{ src: string; alt: string } | null>(null)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveImage(null)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const mainCover = caseData.assets.heroCover || caseData.assets.heroSymbol || caseData.imagem_capa || '/images/jinglong-banner-hero.png'

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-slate-100 font-jl-tertiary brand-font-tertiary selection:bg-slate-200 selection:text-black relative overflow-x-hidden antialiased">
      <BrandFontInjector fonts={caseData.brand_fonts} />
      <Header />

      {/* Internal Navigation Sub-header */}
      <header className="sticky top-16 z-40 bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-white/10 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between overflow-x-auto scrollbar-none">
          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/trabalhos"
              className="flex items-center gap-2 font-bold text-slate-400 hover:text-white uppercase tracking-widest transition-colors"
            >
              ← Voltar
            </Link>
            <div className="h-4 w-px bg-white/20 hidden sm:block" />
            <span className="font-bold text-white tracking-widest uppercase font-jl-primary brand-font-primary">
              {caseData.titulo}
            </span>
          </div>

          <nav className="flex items-center space-x-4 text-slate-400 uppercase tracking-widest">
            <a href="#apresentacao" className="hover:text-white transition-colors">
              Apresentação
            </a>
            <a href="#galeria" className="hover:text-white transition-colors">
              Galeria
            </a>
          </nav>
        </div>
      </header>

      {/* HERO MINIMALISTA */}
      <section id="apresentacao" className="py-20 sm:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="max-w-4xl space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-400 block">
            [ TEMPLATE 04 / MINIMALISTA &amp; VAREJO ]
          </span>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-light tracking-tight text-white font-jl-primary brand-font-primary leading-tight">
            {caseData.copywriting.title_line_1 || caseData.titulo}
            {caseData.copywriting.title_line_2 && (
              <span className="block text-slate-400 font-extralight italic mt-1">
                {caseData.copywriting.title_line_2}
              </span>
            )}
          </h1>

          <p className="text-lg sm:text-2xl text-slate-300 font-light leading-relaxed font-jl-secondary brand-font-secondary max-w-3xl">
            {caseData.copywriting.subtitle || caseData.diagnostico}
          </p>
        </div>

        {/* HERO COVER */}
        <div
          className="relative w-full aspect-video overflow-hidden bg-black border border-white/10 cursor-zoom-in group shadow-2xl rounded-none"
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
      </section>

      {/* DIAGNÓSTICO & GALERIA MINIMALISTA */}
      <section id="galeria" className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 border-t border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-xs uppercase tracking-widest text-slate-400 font-bold">
            [ CONCEITO &amp; EMBALAGENS ]
          </span>
          <p className="text-base sm:text-xl text-slate-300 font-light leading-relaxed font-jl-tertiary brand-font-tertiary">
            {caseData.copywriting.diagnostico || caseData.diagnostico}
          </p>
        </div>

        {caseData.assets.gridBImage && (
          <div
            className="relative w-full aspect-video overflow-hidden bg-black border border-white/10 cursor-zoom-in group shadow-2xl rounded-none"
            onClick={() => setActiveImage({ src: caseData.assets.gridBImage!, alt: caseData.titulo })}
          >
            <Image
              src={caseData.assets.gridBImage}
              alt={caseData.titulo}
              fill
              className="object-cover w-full h-full block transition-transform duration-700 group-hover:scale-[1.01]"
            />
          </div>
        )}
      </section>

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
