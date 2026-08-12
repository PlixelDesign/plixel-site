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
      <main className="bg-black text-white selection:bg-yellow-neon selection:text-navy-deep antialiased overflow-x-hidden">
        {/* 01. Hero Section (Headline B2B + UI Cascade Asset Isométrico Flutuante) */}
        <Hero />

        {/* 02. Nova Seção: Metodologia Plixel (Cards Glassmorphic rounded-3xl + Fragmento Ops Toggle + Glow Radial) */}
        <MethodologySection />

        {/* 03. Seção 'Selected Work' (Vitrine Estratégica B2B - 3 Projects Curados com DNA UI Cascade) */}
        <ProjectsPreview />

        {/* 04. Rodapé de Conversão B2B Awwwards (Frase toda em Fonte Parisienne + Glow Radial) */}
        <section className="relative section-mid section-y overflow-hidden border-t border-white/10">
          <TechnicalSignature categoria="DIAGNÓSTICO TÉCNICO" />

          {/* Glow Radial Espaçado no Fundo (Diretriz 4: Consistência Cromática) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] lg:w-[700px] h-[550px] lg:h-[700px] rounded-full bg-gradient-to-tr from-yellow-neon/15 via-blue-neon/10 to-transparent blur-3xl opacity-80 pointer-events-none" />

          <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center relative z-10 space-y-8">
            <span className="label-tech text-yellow-neon text-xs tracking-widest uppercase block font-mono">
              [ DIAGNÓSTICO ESTRATÉGICO DE MARCA ]
            </span>

            {/* H2 Chamada B2B inteiramente em fonte Parisienne */}
            <h2 className="title-impact text-[clamp(34px,5.5vw,76px)] text-yellow-neon font-normal normal-case leading-relaxed font-parisienne tracking-normal text-center select-none drop-shadow-[0_4px_24px_rgba(255,215,0,0.18)] max-w-3xl mx-auto">
              Sua operação precisa de maturidade visual, consistência e escala?
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
