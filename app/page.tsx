import Link from 'next/link'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/home/Hero'
import MethodologySection from '@/components/home/MethodologySection'
import ProjectsPreview from '@/components/home/ProjectsPreview'
import TechnicalSignature from '@/components/layout/TechnicalSignature'

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="bg-black text-white selection:bg-yellow-neon selection:text-navy-deep antialiased">
        {/* 01. Hero Section (Headline B2B & CTA #cases) */}
        <Hero />

        {/* 02. Nova Seção: Metodologia Plixel (Autoridade Imediata - 3 Colunas Awwwards) */}
        <MethodologySection />

        {/* 03. Seção 'Selected Work' (Vitrine Estratégica B2B - 3 Projects) */}
        <ProjectsPreview />

        {/* 04. Rodapé de Conversão B2B Awwwards (com Tipografia Parisienne no Destaque) */}
        <section className="relative section-mid section-y overflow-hidden border-t border-white/10">
          <TechnicalSignature categoria="DIAGNÓSTICO TÉCNICO" />

          <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center relative z-10 space-y-8">
            <span className="label-tech text-yellow-neon text-xs tracking-widest uppercase block font-mono">
              [ DIAGNÓSTICO ESTRATÉGICO DE MARCA ]
            </span>

            {/* H2 Chamada B2B com Fonte Calligráfica Parisienne (Imagem 1 Ref) */}
            <h2 className="title-impact text-[clamp(32px,5vw,68px)] text-white leading-tight font-jl-primary">
              Sua operação precisa de{' '}
              <span className="font-parisienne text-yellow-neon font-normal normal-case text-[1.2em] tracking-normal inline-block px-1 select-none">
                maturidade visual
              </span>
              , consistência e escala?
            </h2>

            <div className="mx-auto w-24 h-px bg-yellow-neon" />

            {/* P Apoio B2B */}
            <p className="body-text text-white/80 text-base sm:text-xl font-light leading-relaxed max-w-2xl mx-auto">
              Vamos conversar sobre como o Design Ops pode destravar os gargalos criativos da sua equipe e proteger a governança da sua marca.
            </p>

            {/* CTA Agendar Diagnóstico Técnico */}
            <div className="pt-4 flex justify-center">
              <Link href="/contato" className="btn-primary inline-flex items-center gap-3 text-sm py-3.5 px-8 shadow-xl hover:shadow-yellow-neon/20 transition-all duration-300">
                Agendar Diagnóstico Técnico <span className="text-base">→</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
