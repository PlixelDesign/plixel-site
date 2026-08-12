import Link from 'next/link'
import TechnicalSignature from '@/components/layout/TechnicalSignature'
import HeroGraphic from '@/components/home/HeroGraphic'

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] sm:min-h-screen bg-[#05080e] tech-grid bg-noise flex flex-col justify-center overflow-hidden pt-28 pb-20 sm:py-36 border-b border-white/15">
      <TechnicalSignature categoria="DESIGN OPS &amp; BRANDING" />

      {/* 01. MARGINALIA DE BORDA (Micro-dados em Fonte Monoespaçada - Estilo Bynario / Terminal) */}
      <div className="absolute top-6 left-6 font-mono text-[10px] tracking-widest text-white/40 uppercase select-none pointer-events-none hidden sm:flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-yellow-neon animate-pulse" />
        <span>[ PLX_CORE: ACTIVE ] // SYS_OPS_RUNNING</span>
      </div>

      <div className="absolute top-6 right-6 font-mono text-[10px] tracking-widest text-white/40 uppercase select-none pointer-events-none hidden md:block text-right">
        <span>LATENCY: 0.04ms // COORD: 24.5°N 19.8°W</span>
      </div>

      <div className="absolute bottom-6 left-6 font-mono text-[10px] tracking-widest text-white/40 uppercase select-none pointer-events-none hidden sm:block">
        <span>[ DATA_PIPELINE: ACTIVE ] // GOVERNANCE: 99.8%</span>
      </div>

      <div className="absolute bottom-6 right-6 font-mono text-[10px] tracking-widest text-white/40 uppercase select-none pointer-events-none hidden md:block text-right">
        <span>[ NODE_CLUSTER: PLIXEL_HQ ]</span>
      </div>

      {/* MARCADORES DE INTERSEÇÃO DE RETÍCULA CAD (Crosshairs '+') */}
      <div className="absolute top-12 left-12 font-mono text-xs text-white/20 select-none pointer-events-none hidden lg:block">+</div>
      <div className="absolute top-12 right-12 font-mono text-xs text-white/20 select-none pointer-events-none hidden lg:block">+</div>
      <div className="absolute bottom-12 left-12 font-mono text-xs text-white/20 select-none pointer-events-none hidden lg:block">+</div>
      <div className="absolute bottom-12 right-12 font-mono text-xs text-white/20 select-none pointer-events-none hidden lg:block">+</div>

      {/* Linhas de Cota Táticas Blueprint */}
      <div className="absolute left-0 right-0 top-1/2 h-px bg-white/5 pointer-events-none" />
      <div className="absolute top-0 bottom-0 left-1/4 w-px bg-white/5 pointer-events-none hidden lg:block" />

      {/* 03. ASSET VISUAL: O ÁTOMO DE PIXELS (Órbitas Tracejadas + Pixels Neon Pulsantes) */}
      <HeroGraphic />

      <div className="shell py-8 sm:py-20 md:py-28 relative z-10 space-y-6">
        {/* Tag Categoria Utilitária em Monoespaçado */}
        <div className="inline-flex items-center gap-2 bg-black/60 backdrop-blur-md border border-yellow-neon/40 px-3.5 py-1.5 rounded-none animate-fade-up">
          <span className="w-1.5 h-1.5 bg-yellow-neon rounded-none animate-ping" />
          <span className="font-mono text-[11px] font-bold tracking-widest text-yellow-neon uppercase">
            [ CONSULTORIA SÊNIOR EM DESIGN OPS &amp; BRANDING ]
          </span>
        </div>

        {/* H1 Headline Brutalist B2B (Sans-Serif Geométrica Pesada - Zero Cursiva) */}
        <h1 className="title-impact text-[clamp(34px,5.8vw,80px)] leading-[1.05] text-white max-w-4xl tracking-tight uppercase font-extrabold animate-fade-up delay-100">
          Engenharia de Marca e Design Ops para Operações de Alta Escala.
        </h1>

        <div className="w-20 h-1 bg-yellow-neon my-6 animate-fade-up delay-100" />

        {/* Sub-headline P Brutalist B2B */}
        <p className="body-text text-white/80 max-w-2xl text-base sm:text-xl leading-relaxed font-light animate-fade-up delay-200 font-sans">
          Estruturação de sistemas visuais, governança de identidade e otimização de ativos gráficos para varejo, logística e serviços. Transformamos marcas fragmentadas em ecossistemas de alta eficiência e conversão.
        </p>

        {/* 04. BOTÕES UTILITÁRIOS (Bordas Afiadas, Fundo Escuro/Amarelo Neon, Hover Cortante +4px) */}
        <div className="pt-6 flex flex-wrap gap-4 items-center animate-fade-up delay-300">
          <a
            href="#cases"
            className="group bg-yellow-neon text-black font-mono font-bold text-xs sm:text-sm uppercase tracking-wider rounded-none px-6 py-4 border border-yellow-neon hover:bg-white hover:text-black hover:border-white transition-all duration-200 shadow-[0_0_20px_rgba(255,215,0,0.25)] flex items-center gap-3"
          >
            <span>Analisar Projetos Implementados</span>
            <span className="inline-block transform group-hover:translate-x-1 transition-transform duration-200 ease-in-out font-bold">
              →
            </span>
          </a>

          <Link
            href="/contato"
            className="group bg-black/80 backdrop-blur-md border border-white/25 text-white font-mono font-bold text-xs sm:text-sm uppercase tracking-wider rounded-none px-6 py-4 hover:border-yellow-neon hover:text-yellow-neon transition-all duration-200 flex items-center gap-3"
          >
            <span>Falar com Especialista</span>
            <span className="inline-block transform group-hover:translate-x-1 transition-transform duration-200 ease-in-out font-bold">
              →
            </span>
          </Link>
        </div>
      </div>

      {/* Indicador de scroll tático */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="font-mono text-[9px] tracking-widest text-white uppercase">[ SCROLL_DOWN ]</span>
        <div className="w-px h-10 bg-yellow-neon animate-pulse" />
      </div>
    </section>
  )
}
