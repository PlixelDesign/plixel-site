import Link from 'next/link'
import { Projeto } from '@/types'
import ProjectCard from '@/components/cases/ProjectCard'

interface ProjectsPreviewProps {
  projetos: Projeto[]
}

export default function ProjectsPreview({ projetos }: ProjectsPreviewProps) {
  return (
    <section className="relative section-graphite section-y">
      <div className="shell">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12 md:mb-16">
          <div>
            <p className="label-tech mb-4">Projetos recentes</p>
            <h2 className="title-impact text-[clamp(36px,6vw,80px)] text-white leading-none">
              TRABALHOS{' '}
              <span className="title-accent text-[clamp(40px,6.5vw,88px)]">selecionados</span>
            </h2>
          </div>
          <Link href="/trabalhos" className="hidden md:inline-flex btn-outline">
            Ver todos
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projetos.map((projeto, i) => (
            <ProjectCard key={projeto.id} projeto={projeto} index={i} />
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
