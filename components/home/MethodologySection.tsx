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
      tag: '[ PERFORMANCE & PERFORMANCE ]',
      titulo: 'Performance & Conversão',
      texto:
        'Identidades e criativos projetados estrategicamente para performar em funis de tráfego e plataformas SaaS.',
    },
  ]

  return (
    <section id="metodologia" className="relative section-mid section-y overflow-hidden border-b border-white/10">
      <TechnicalSignature categoria="METODOLOGIA" />

      <div className="shell relative z-10 space-y-12">
        <div className="max-w-3xl space-y-3">
          <span className="label-tech text-yellow-neon text-xs uppercase tracking-widest block">
            [ AUTORIDADE &amp; METODOLOGIA PLIXEL ]
          </span>
          <h2 className="title-impact text-[clamp(32px,5vw,64px)] text-white leading-tight">
            Metodologia de Escalabilidade Visual
          </h2>
          <p className="body-text text-white/70 text-base sm:text-lg font-light leading-relaxed">
            Processo de engenharia visual orientado à resolução de gargalos operacionais e amplificação da autoridade de marca.
          </p>
        </div>

        {/* Grid de 3 Colunas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {methodSteps.map((step, idx) => (
            <article
              key={idx}
              className="bg-navy-mid/90 border border-blue-neon/20 p-8 rounded-none space-y-4 hover:border-yellow-neon/40 transition-all duration-300 relative group flex flex-col justify-between"
            >
              <div className="space-y-3">
                <span className="text-[10px] font-mono font-bold tracking-widest text-yellow-neon uppercase block">
                  {step.tag}
                </span>

                <h3 className="title-impact text-2xl text-white tracking-wide group-hover:text-yellow-neon transition-colors duration-300">
                  {step.titulo}
                </h3>

                <p className="body-text text-white/75 text-sm leading-relaxed font-light">
                  {step.texto}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-white/30 text-xs font-mono">
                <span>0{idx + 1} / METODOLOGIA</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
