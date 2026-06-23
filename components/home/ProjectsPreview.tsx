import Link from 'next/link'
import Image from 'next/image'
import { Projeto } from '@/types'
import { formatCategoria } from '@/lib/utils'

interface ProjectsPreviewProps {
  projetos: Projeto[]
}

export default function ProjectsPreview({ projetos }: ProjectsPreviewProps) {
  return (
    <section className="relative section-graphite py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-16">
          <div>
            <p className="label-tech mb-4">Projetos recentes</p>
            <h2 className="title-impact text-[clamp(48px,6vw,80px)] text-white">
              A MARCA ANTES<br />
              <span className="title-accent text-[clamp(52px,6.5vw,88px)]">do post</span>
            </h2>
          </div>
          <Link href="/trabalhos" className="hidden md:flex btn-outline">
            Ver todos
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projetos.map((projeto, i) => (
            <Link
              key={projeto.id}
              href={`/trabalhos/${projeto.slug}`}
              className="group relative bg-navy-mid border border-blue-neon/10 overflow-hidden hover:border-blue-neon/40 transition-colors duration-300"
            >
              <div className="aspect-[4/3] bg-navy-deep relative overflow-hidden">
                {projeto.imagem_capa ? (
                  <Image
                    src={projeto.imagem_capa}
                    alt={projeto.titulo}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center tech-grid">
                    <span className="label-tech opacity-40">Imagem em breve</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-navy-deep/0 group-hover:bg-navy-deep/20 transition-colors duration-300" />
              </div>

              <div className="p-6">
                <p className="label-tech text-blue-neon mb-2">{formatCategoria(projeto.categoria)}</p>
                <h3 className="title-impact text-xl text-white tracking-wide">{projeto.titulo}</h3>
                <p className="body-text text-white/50 text-sm mt-1">{projeto.cliente}</p>

                <div className="mt-4 flex items-center gap-2 text-yellow-neon opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <span className="font-poppins text-xs tracking-widest uppercase">Ver case</span>
                  <span className="text-xs">→</span>
                </div>
              </div>

              {/* numeração do card */}
              <span className="absolute top-3 right-3 font-poppins text-[10px] text-white/20 tracking-widest">
                {String(i + 1).padStart(2, '0')}
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-10 md:hidden">
          <Link href="/trabalhos" className="btn-outline w-full text-center block">
            Ver todos os trabalhos
          </Link>
        </div>
      </div>
    </section>
  )
}
