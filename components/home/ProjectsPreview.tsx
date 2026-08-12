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
  },
  {
    id: 'jennifer-lemos',
    slug: 'jennifer-lemos-fotografia',
    titulo: 'Jennifer Lemos / Posicionamento de Luxo',
    tag: '[Posicionamento Premium & Direção de Arte]',
    descricao: 'Engenharia vetorial de redução do símbolo e implementação de Responsive Brand System.',
    href: '/trabalhos/jennifer-lemos-fotografia',
    imagem: '/images/Cases/Jennifer-Lemos/jl-hero-capa.png',
  },
  {
    id: 'jing-long',
    slug: 'jing-long',
    titulo: 'Academia Jing Long / Gestão de Portfólio',
    tag: '[Service Design & Arquitetura Comercial]',
    descricao: 'Reestruturação de pontos de contato orientados à experiência do usuário em alto volume.',
    href: '/trabalhos/jing-long/central-da-marca',
    imagem: '/images/jinglong-banner-hero.png',
  },
]

export default function ProjectsPreview() {
  return (
    <section id="cases" className="relative section-graphite section-y border-b border-white/10 scroll-mt-20">
      <TechnicalSignature categoria="CASES" />

      <div className="shell relative z-10 space-y-12">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="space-y-3">
            <span className="label-tech text-yellow-neon text-xs uppercase tracking-widest block">
              [ VITRINE ESTRATÉGICA B2B ]
            </span>
            <h2 className="title-impact text-[clamp(32px,5.5vw,72px)] text-white leading-none">
              Cases de Engenharia Visual Implementados
            </h2>
            <p className="body-text text-white/70 text-base sm:text-lg font-light leading-relaxed max-w-2xl">
              Projetos de alta relevância com impacto comprovado em governança de marca e eficiência operacional.
            </p>
          </div>
          <Link href="/trabalhos" className="hidden md:inline-flex btn-outline">
            Ver todos os projetos →
          </Link>
        </div>

        {/* Grid de EXATAMENTE 3 Cases de Destaque */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {FEATURED_3_PROJECTS.map((proj) => (
            <article
              key={proj.id}
              className="group relative flex flex-col bg-navy-mid border border-blue-neon/20 overflow-hidden hover:border-yellow-neon/40 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Imagem Full-Bleed em Proporção 4:3 */}
              <div className="relative aspect-[4/3] bg-navy-deep overflow-hidden">
                <Image
                  src={proj.imagem}
                  alt={proj.titulo}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 pointer-events-none" />

                {/* Tag Técnica B2B */}
                <span className="absolute top-3 left-3 bg-black/90 backdrop-blur-md border border-white/10 px-3 py-1 text-[10px] font-mono font-bold text-yellow-neon uppercase tracking-wider">
                  {proj.tag}
                </span>
              </div>

              {/* Corpo do Card */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <h3 className="title-impact text-2xl text-white tracking-wide group-hover:text-yellow-neon transition-colors duration-300">
                    {proj.titulo}
                  </h3>
                  <p className="body-text text-white/80 text-xs sm:text-sm font-light leading-relaxed">
                    <strong className="font-semibold text-white">{proj.descricao}</strong>
                  </p>
                </div>

                <div className="pt-4 border-t border-blue-neon/10 flex items-center justify-between text-white/50 group-hover:text-yellow-neon transition-colors duration-300">
                  <Link
                    href={proj.href}
                    className="font-poppins text-xs tracking-widest uppercase font-bold flex items-center justify-between w-full"
                  >
                    <span>Ver Projeto Real</span>
                    <span className="transform group-hover:translate-x-1.5 transition-transform duration-200">→</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 md:hidden text-center">
          <Link href="/trabalhos" className="btn-outline w-full block text-center">
            Ver todos os projetos →
          </Link>
        </div>
      </div>
    </section>
  )
}
