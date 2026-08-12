import TechnicalSignature from '@/components/layout/TechnicalSignature'

export default function MethodologySection() {
  return (
    <section id="metodologia" className="relative section-mid section-y overflow-hidden border-b border-white/15 bg-[#0A0F1E]">
      <TechnicalSignature categoria="METODOLOGIA" />

      {/* Órbitas Técnicas Perpassantes como Textura de Fundo (DNA Visual Unificado) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-dashed border-white/5 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full border border-dashed border-blue-neon/5 pointer-events-none" />

      {/* Glow Radial de Fundo */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-yellow-neon/12 via-blue-neon/10 to-transparent blur-3xl opacity-70 pointer-events-none" />

      <div className="shell relative z-10 space-y-12">
        <div className="max-w-3xl space-y-3">
          <span className="label-tech text-yellow-neon text-xs uppercase tracking-widest block font-mono">
            [ AUTORIDADE &amp; METODOLOGIA PLIXEL ]
          </span>
          <h2 className="title-impact text-[clamp(32px,5vw,64px)] text-white leading-tight font-sans font-semibold">
            Metodologia de Escalabilidade Visual
          </h2>
          <p className="body-text text-white/70 text-base sm:text-lg font-light leading-relaxed">
            Processo de engenharia visual orientado à resolução de gargalos operacionais e amplificação da autoridade de marca.
          </p>
        </div>

        {/* BENTO GRID ASSIMÉTRICO E MODULAR (Estilo Vercel / Bynario / Linear) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          
          {/* Bento Card 01 (Destaque Principal - 2 Colunas no Desktop) */}
          <article className="lg:col-span-2 bg-[#0A0F1E]/80 backdrop-blur-xl border border-white/15 p-8 sm:p-12 rounded-3xl space-y-6 hover:border-yellow-neon/40 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-yellow-neon/10 transition-all duration-300 relative group flex flex-col justify-between overflow-hidden">
            {/* Brilho Suave de Fundo */}
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-neon/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="space-y-4 relative z-10 max-w-xl">
              <span className="text-[10px] font-mono font-bold tracking-widest text-yellow-neon uppercase block bg-black/60 backdrop-blur-md border border-yellow-neon/30 w-fit px-3.5 py-1 rounded-none">
                [ DESIGN OPS &amp; PRODUCTIVITY ]
              </span>

              <h3 className="title-impact text-3xl sm:text-4xl text-white tracking-wide group-hover:text-yellow-neon transition-colors duration-300 font-sans font-semibold">
                Design Ops &amp; Produtividade
              </h3>

              <p className="body-text text-white/80 text-base leading-relaxed font-light">
                Criação de diretrizes, bibliotecas de componentes e integração de IA para autonomia das equipes. Reduzimos o tempo de produção criativa enquanto elevamos a governança institucional.
              </p>
            </div>

            {/* Sub-widget Técnico Bento */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10 text-xs font-mono text-white/70">
              <div className="bg-black/50 p-3 border border-white/10 rounded-xl space-y-1">
                <span className="text-yellow-neon font-bold block">GOVERNANCE_INDEX: 100%</span>
                <span className="text-[10px] text-white/40">Tokens unificados no Figma &amp; Código</span>
              </div>
              <div className="bg-black/50 p-3 border border-white/10 rounded-xl space-y-1">
                <span className="text-blue-neon font-bold block">TIME_TO_MARKET: -65%</span>
                <span className="text-[10px] text-white/40">Aceleração de ativos para tráfego</span>
              </div>
            </div>
          </article>

          {/* Bento Card 02 (1 Coluna) */}
          <article className="bg-[#0A0F1E]/80 backdrop-blur-xl border border-white/15 p-8 sm:p-10 rounded-3xl space-y-6 hover:border-yellow-neon/40 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-yellow-neon/10 transition-all duration-300 relative group flex flex-col justify-between overflow-hidden">
            <div className="space-y-4 relative z-10">
              <span className="text-[10px] font-mono font-bold tracking-widest text-yellow-neon uppercase block bg-black/60 backdrop-blur-md border border-white/10 w-fit px-3 py-1 rounded-none">
                [ ARQUITETURA DE MARCA ]
              </span>

              <h3 className="title-impact text-2xl sm:text-3xl text-white tracking-wide group-hover:text-yellow-neon transition-colors duration-300 font-sans font-semibold">
                Arquitetura de Marca Híbrida
              </h3>

              <p className="body-text text-white/80 text-sm leading-relaxed font-light">
                Gestão de portfólio complexo e criação de sub-marcas sem diluição institucional.
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-white/40 text-xs font-mono relative z-10 group-hover:text-yellow-neon transition-colors duration-300">
              <span>01 / ARQUITETURA</span>
              <span className="group-hover:translate-x-1.5 transition-transform duration-200 font-bold">→</span>
            </div>
          </article>

          {/* Bento Card 03 (1 Coluna Completa na Segunda Linha / Eixo Modular) */}
          <article className="lg:col-span-3 bg-[#0A0F1E]/80 backdrop-blur-xl border border-white/15 p-8 sm:p-10 rounded-3xl flex flex-wrap items-center justify-between gap-6 hover:border-yellow-neon/40 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-yellow-neon/10 transition-all duration-300 relative group overflow-hidden">
            <div className="space-y-2 max-w-2xl relative z-10">
              <span className="text-[10px] font-mono font-bold tracking-widest text-yellow-neon uppercase block">
                [ PERFORMANCE &amp; CONVERSÃO B2B ]
              </span>
              <h3 className="title-impact text-2xl sm:text-3xl text-white tracking-wide group-hover:text-yellow-neon transition-colors duration-300 font-sans font-semibold">
                Performance &amp; Conversão de Alta Precisão
              </h3>
              <p className="body-text text-white/80 text-sm leading-relaxed font-light">
                Identidades e criativos projetados estrategicamente para performar em funis de tráfego pago e plataformas SaaS de alta demanda.
              </p>
            </div>

            <div className="relative z-10 flex items-center gap-3">
              <span className="font-mono text-xs text-yellow-neon font-bold bg-black/60 px-4 py-2 border border-yellow-neon/30 rounded-none">
                CONVERSION_READY ✓
              </span>
            </div>
          </article>

        </div>
      </div>
    </section>
  )
}
