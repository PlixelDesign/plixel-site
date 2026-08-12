import Link from 'next/link'
import Image from 'next/image'
import TechnicalSignature from '@/components/layout/TechnicalSignature'

interface FeaturedProjectB2B {
  id: string
  slug: string
  titulo: string
  tag: string
  descricao: string
  href: string
  imagem: string
  span: string
}

const FEATURED_3_PROJECTS: FeaturedProjectB2B[] = [
  {
    id: 'ucadis',
    slug: 'ucadis',
    titulo: 'UCADIS / Sistema Monolítico',
    tag: '[Design Ops & Sistema Monolítico]',
    descricao: 'Consolidação de sistema visual robusto e escalável para operações complexas.',
    href: '/trabalhos/central-da-marca',
    imagem: '/images/ucadis-capa-mascotes.png',
    span: 'lg:col-span-2',
  },
  {
    id: 'jennifer-lemos',
    slug: 'jennifer-lemos-fotografia',
    titulo: 'Jennifer Lemos / Posicionamento de Luxo',
    tag: '[Posicionamento Premium & Direção de Arte]',
    descricao: 'Engenharia vetorial de redução do símbolo e implementação de Responsive Brand System.',
    href: '/trabalhos/jennifer-lemos-fotografia',
    imagem: '/images/Cases/Jennifer-Lemos/jl-hero-capa.jpg',
    span: 'lg:col-span-1',
  },
  {
    id: 'jing-long',
    slug: 'jing-long',
    titulo: 'Academia Jing Long / Gestão de Portfólio',
    tag: '[Service Design & Arquitetura Comercial]',
    descricao: 'Reestruturação de pontos de contato orientados à experiência do usuário em alto volume.',
    href: '/trabalhos/jing-long/central-da-marca',
    imagem: '/images/jing-long-hero-cover.png',
    span: 'lg:col-span-3',
  },
]

export default function ProjectsPreview() {
  return (
    <section id="cases" className="relative section-graphite section-y border-b border-white/15 scroll-mt-20 overflow-hidden bg-[#0A0F1E]">
      <TechnicalSignature categoria="CASES" />

      {/* Linha Conectora Tática Blueprint */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-blue-neon/60 to-transparent pointer-events-none z-20" />

      {/* Glow Radial de Fundo */}
      <div className="absolute bottom-10 right-1/4 w-[480px] lg:w-[600px] h-[480px] lg:h-[600px] rounded-full bg-gradient-to-br from-blue-neon/12 via-yellow-neon/10 to-transparent blur-3xl opacity-70 pointer-events-none" />

      <div className="shell relative z-10 space-y-12">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="label-tech text-yellow-neon text-xs uppercase tracking-widest block font-mono">
              [ VITRINE ESTRATÉGICA B2B ]
            </span>
            <h2 className="title-impact text-[clamp(32px,5.5vw,72px)] text-white leading-none font-sans font-semibold">
              Cases de Engenharia Visual Implementados
            </h2>
            <p className="body-text text-white/70 text-base sm:text-lg font-light leading-relaxed">
              Projetos de alta relevância com impacto comprovado em governança de marca e eficiência operacional.
            </p>
          </div>
          <Link href="/trabalhos" className="hidden md:inline-flex btn-outline text-xs tracking-widest">
            Ver Todos os Projetos →
          </Link>
        </div>

        {/* BENTO GRID ASSIMÉTRICO DE CASES (Estilo Vercel / Bynario / Linear) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {FEATURED_3_PROJECTS.map((proj, idx) => (
            <article
              key={proj.id}
              className={`${proj.span} group relative flex flex-col bg-[#0A0F1E]/90 backdrop-blur-xl border border-white/15 rounded-3xl overflow-hidden hover:border-yellow-neon/40 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-yellow-neon/10 transition-all duration-300`}
            >
              {/* Marcador Técnico Blueprint de Canto */}
              <div className="absolute top-4 right-4 text-white/40 font-mono text-[9px] z-20 pointer-events-none bg-black/60 backdrop-blur-md px-2.5 py-1 border border-white/10">
                +0{idx + 1}
              </div>

              {/* Imagem em Proporção Adaptável ao Bento Grid */}
              <div className="relative aspect-[16/9] lg:aspect-[16/8] bg-[#0A0F1E] overflow-hidden">
                <Image
                  src={proj.imagem}
                  alt={proj.titulo}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 66vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1E] via-[#0A0F1E]/30 to-transparent opacity-90 pointer-events-none group-hover:opacity-60 transition-opacity duration-300" />

                {/* Tag Técnica B2B com Glassmorphism */}
                <span className="absolute top-4 left-4 bg-black/90 backdrop-blur-md border border-white/20 px-3.5 py-1.5 text-[10px] font-mono font-bold text-yellow-neon uppercase tracking-wider shadow-lg rounded-none">
                  {proj.tag}
                </span>
              </div>

              {/* Corpo do Card Bento Awwwards */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <h3 className="title-impact text-2xl sm:text-3xl text-white tracking-wide group-hover:text-yellow-neon transition-colors duration-300 font-sans font-semibold">
                    {proj.titulo}
                  </h3>
                  <p className="body-text text-white/80 text-sm font-light leading-relaxed">
                    <strong className="font-semibold text-white">{proj.descricao}</strong>
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-white/60 group-hover:text-yellow-neon transition-colors duration-300">
                  <Link
                    href={proj.href}
                    className="font-poppins text-xs tracking-widest uppercase font-bold flex items-center justify-between w-full"
                  >
                    <span>Ver Projeto</span>
                    <span className="transform group-hover:translate-x-1.5 transition-transform duration-200">→</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 md:hidden text-center">
          <Link href="/trabalhos" className="btn-outline w-full block text-center">
            Ver Todos os Projetos →
          </Link>
        </div>
      </div>
    </section>
  )
}
