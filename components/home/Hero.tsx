import Link from 'next/link'
import TechnicalSignature from '@/components/layout/TechnicalSignature'
import HeroGraphic from '@/components/home/HeroGraphic'

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] sm:min-h-screen section-dark flex flex-col justify-center overflow-hidden pt-24 pb-16 sm:py-32 border-b border-white/10">
      <TechnicalSignature categoria="DESIGN OPS &amp; BRANDING" />

      {/* Linha de cota horizontal decorativa */}
      <div className="absolute left-0 right-0 top-1/2 h-px bg-blue-neon opacity-[0.06] pointer-events-none" />
      <div className="absolute left-6 top-1/2 -translate-y-1/2 text-blue-neon opacity-20 font-poppins text-[9px] tracking-widest pointer-events-none select-none hidden sm:block">
        1920px
      </div>

      {/* Estrutura geométrica blueprint (contrapeso visual à direita) */}
      <HeroGraphic />

      <div className="shell py-8 sm:py-20 md:py-28 relative z-10 space-y-6">
        <span className="label-tech text-yellow-neon text-xs tracking-widest uppercase block">
          [ CONSULTORIA SÊNIOR EM DESIGN OPS &amp; BRANDING ]
        </span>

        {/* H1 Headline B2B */}
        <h1 className="title-impact text-[clamp(32px,5.5vw,76px)] leading-[1.08] text-white max-w-5xl tracking-normal sm:tracking-wide">
          Engenharia de Marca e Design Ops para Operações de Alta Escala.
        </h1>

        <div className="w-24 h-px bg-yellow-neon my-6" />

        {/* Sub-headline B2B */}
        <p className="body-text text-white/80 max-w-3xl text-base sm:text-xl md:text-2xl leading-relaxed font-light">
          Estruturação de sistemas visuais, governança de identidade e otimização de ativos gráficos para varejo, logística e serviços. Transformamos marcas fragmentadas em ecossistemas de alta eficiência e conversão.
        </p>

        {/* CTAs */}
        <div className="pt-6 flex flex-wrap gap-4 items-center">
          <a href="#cases" className="btn-primary flex items-center gap-2">
            Analisar Projetos Implementados <span className="text-sm">→</span>
          </a>
          <Link href="/contato" className="btn-outline flex items-center gap-2">
            Falar com Especialista <span className="text-sm">→</span>
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
