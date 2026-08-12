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
      <main className="bg-[#05080e] text-white selection:bg-yellow-neon selection:text-navy-deep antialiased overflow-x-hidden">
        {/* 01. Hero Section (Headline B2B High-Tech Brutalism + O Átomo de Pixels) */}
        <Hero />

        {/* 02. Nova Seção: Metodologia Plixel (Grid Cyber-Corporate + Frag. Ops Toggle + Glow) */}
        <MethodologySection />

        {/* 03. Seção 'Selected Work' (Vitrine Estratégica B2B - 3 Projects Curados) */}
        <ProjectsPreview />

        {/* 04. Rodapé de Conversão B2B (Estética High-Tech Brutalism & Utilitária) */}
        <section className="relative section-mid section-y overflow-hidden border-t border-white/15">
          <TechnicalSignature categoria="DIAGNÓSTICO TÉCNICO" />

          {/* Glow Radial Espaçado no Fundo */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] lg:w-[700px] h-[550px] lg:h-[700px] rounded-full bg-gradient-to-tr from-yellow-neon/15 via-blue-neon/10 to-transparent blur-3xl opacity-70 pointer-events-none" />

          <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center relative z-10 space-y-8">
            <span className="label-tech text-yellow-neon text-xs tracking-widest uppercase block font-mono">
              [ DIAGNÓSTICO ESTRATÉGICO DE MARCA ]
            </span>

            {/* H2 Chamada B2B Geométrica Pesada (Bynario Style - Sem Cursivas) */}
            <h2 className="title-impact text-[clamp(32px,5vw,68px)] text-white font-extrabold uppercase leading-tight tracking-tight text-center max-w-3xl mx-auto font-sans">
              Sua operação precisa de{' '}
              <span className="text-yellow-neon underline decoration-yellow-neon/40 underline-offset-8">
                maturidade visual
              </span>
              , consistência e escala?
            </h2>

            <div className="mx-auto w-20 h-1 bg-yellow-neon" />

            {/* P Apoio B2B */}
            <p className="body-text text-white/80 text-base sm:text-xl font-light leading-relaxed max-w-2xl mx-auto font-sans">
              Vamos conversar sobre como o Design Ops pode destravar os gargalos criativos da sua equipe e proteger a governança da sua marca.
            </p>

            {/* CTA Agendar Diagnóstico Técnico Utilitário */}
            <div className="pt-4 flex justify-center">
              <Link href="/contato" className="group bg-yellow-neon text-black font-mono font-bold text-xs sm:text-sm uppercase tracking-wider rounded-none px-8 py-4 border border-yellow-neon hover:bg-white hover:text-black transition-all duration-200 shadow-[0_0_25px_rgba(255,215,0,0.25)] flex items-center gap-3">
                <span>Agendar Diagnóstico Técnico</span>
                <span className="inline-block transform group-hover:translate-x-1 transition-transform duration-200 ease-in-out font-bold">→</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
