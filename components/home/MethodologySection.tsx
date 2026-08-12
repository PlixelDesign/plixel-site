import TechnicalSignature from '@/components/layout/TechnicalSignature'

export default function MethodologySection() {
  const methodSteps = [
    {
      tag: '[ ARQUITETURA DE MARCA ]',
      titulo: 'Arquitetura de Marca Híbrida',
      texto:
        'Gestão de portfólio complexo e criação de sub-marcas sem diluição institucional.',
    },
    {
      tag: '[ DESIGN OPS & PRODUCTIVITY ]',
      titulo: 'Design Ops & Produtividade',
      texto:
        'Criação de diretrizes, bibliotecas de componentes e integração de IA para autonomia das equipes.',
    },
    {
      tag: '[ PERFORMANCE & CONVERSÃO ]',
      titulo: 'Performance & Conversão',
      texto:
        'Identidades e criativos projetados estrategicamente para performar em funis de tráfego e plataformas SaaS.',
    },
  ]

  return (
    <section id="metodologia" className="relative section-mid section-y overflow-hidden border-b border-white/10">
      <TechnicalSignature categoria="METODOLOGIA" />

      {/* Glow Radial de Fundo (Diretriz 4: Consistência Cromática) */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[480px] lg:w-[600px] h-[480px] lg:h-[600px] rounded-full bg-gradient-to-tr from-yellow-neon/12 via-blue-neon/10 to-transparent blur-3xl opacity-70 pointer-events-none" />

      {/* Fragmento UI Cascade Decorativo em Flutuação (Diretriz 3: Motif de Continuidade) */}
      <div className="absolute right-8 top-16 hidden lg:block animate-ui-cascade pointer-events-none opacity-85 z-20">
        <div className="bg-black/80 backdrop-blur-xl border border-yellow-neon/30 p-3.5 rounded-xl shadow-2xl space-y-2 text-[9px] font-mono text-white/80 w-44">
          <div className="flex items-center justify-between text-yellow-neon font-bold border-b border-white/10 pb-1.5">
            <span>[ OPS TOGGLE ]</span>
            <span className="w-2 h-2 rounded-full bg-yellow-neon animate-ping" />
          </div>
          <div className="flex items-center justify-between pt-0.5 text-[8px]">
            <span>Autonomy Mode</span>
            <span className="text-yellow-neon font-bold">ON</span>
          </div>
          <div className="w-full bg-white/10 h-1 rounded-full overflow-hidden">
            <div className="bg-yellow-neon h-full w-4/5" />
          </div>
        </div>
      </div>

      <div className="shell relative z-10 space-y-12">
        <div className="max-w-3xl space-y-3">
          <span className="label-tech text-yellow-neon text-xs uppercase tracking-widest block font-mono">
            [ AUTORIDADE &amp; METODOLOGIA PLIXEL ]
          </span>
          <h2 className="title-impact text-[clamp(32px,5vw,64px)] text-white leading-tight">
            Metodologia de Escalabilidade Visual
          </h2>
          <p className="body-text text-white/70 text-base sm:text-lg font-light leading-relaxed">
            Processo de engenharia visual orientado à resolução de gargalos operacionais e amplificação da autoridade de marca.
          </p>
        </div>

        {/* Grid de 3 Colunas Herda DNA do UI Cascade: Glassmorphism + rounded-2xl / rounded-3xl */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {methodSteps.map((step, idx) => (
            <article
              key={idx}
              className="bg-navy-mid/80 backdrop-blur-xl border border-white/10 p-8 sm:p-10 rounded-2xl sm:rounded-3xl space-y-6 hover:border-yellow-neon/40 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-yellow-neon/10 transition-all duration-300 relative group flex flex-col justify-between overflow-hidden"
            >
              {/* Brilho Suave Interno no Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-neon/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="space-y-4 relative z-10">
                <span className="text-[10px] font-mono font-bold tracking-widest text-yellow-neon uppercase block bg-black/40 backdrop-blur-md border border-white/10 w-fit px-3 py-1 rounded-md">
                  {step.tag}
                </span>

                <h3 className="title-impact text-2xl sm:text-3xl text-white tracking-wide group-hover:text-yellow-neon transition-colors duration-300">
                  {step.titulo}
                </h3>

                <p className="body-text text-white/80 text-sm leading-relaxed font-light">
                  {step.texto}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-white/40 text-xs font-mono relative z-10 group-hover:text-yellow-neon transition-colors duration-300">
                <span>0{idx + 1} / METODOLOGIA</span>
                <span className="group-hover:translate-x-1.5 transition-transform duration-200 font-bold">→</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
