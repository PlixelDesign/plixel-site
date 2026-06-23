import Link from 'next/link'
import TechnicalSignature from '@/components/layout/TechnicalSignature'
import HeroGraphic from '@/components/home/HeroGraphic'

export default function Hero() {
  return (
    <section className="relative min-h-screen section-dark flex flex-col justify-center overflow-hidden pt-16">
      <TechnicalSignature categoria="IDENTIDADE" />

      {/* Linha de cota horizontal decorativa */}
      <div className="absolute left-0 right-0 top-1/2 h-px bg-blue-neon opacity-[0.06] pointer-events-none" />
      <div className="absolute left-6 top-1/2 -translate-y-1/2 text-blue-neon opacity-20 font-poppins text-[9px] tracking-widest pointer-events-none select-none">
        1920px
      </div>

      {/* Estrutura geométrica blueprint (contrapeso visual à direita) */}
      <HeroGraphic />

      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 relative z-10">
        <p className="label-tech mb-8">Agência de Design Estratégico</p>

        <h1 className="title-impact text-[clamp(72px,12vw,160px)] leading-none text-white max-w-5xl">
          DESIGN QUE{' '}
          <span className="title-accent text-[clamp(80px,13.2vw,176px)]">conecta,</span>
          <br />
          NÃO SÓ DECORA
        </h1>

        <div className="mt-8 w-24 h-px bg-yellow-neon" />

        <p className="body-text text-white/60 mt-8 max-w-xl text-lg">
          Identidade visual e comunicação estratégica para marcas, negócios e instituições que precisam ser entendidos rápido e lembrados depois.
        </p>

        <div className="mt-12 flex flex-wrap gap-4">
          <Link href="/trabalhos" className="btn-primary">
            Ver trabalhos
          </Link>
          <Link href="/contato" className="btn-outline">
            Falar com a Plixel
          </Link>
        </div>
      </div>

      {/* Indicador de scroll */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="font-poppins text-[10px] tracking-widest text-white uppercase">Scroll</span>
        <div className="w-px h-12 bg-blue-neon animate-pulse" />
      </div>
    </section>
  )
}
