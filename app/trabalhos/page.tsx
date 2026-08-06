import { Suspense } from 'react'
import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import CategoryFilter from '@/components/cases/CategoryFilter'
import ProjectCard from '@/components/cases/ProjectCard'
import TechnicalSignature from '@/components/layout/TechnicalSignature'
import { createClient } from '@/lib/supabase/server'
import { Categoria, Projeto } from '@/types'
import { INITIAL_MOCK_PROJETOS } from '@/lib/mock-data'

export const metadata: Metadata = {
  title: 'Sistemas Visuais & Identidades Estruturadas · Trabalhos Plixel',
  description:
    'Projetos de branding desenvolvidos sob a ótica de processos, consistência multicanal e eficiência de negócio.',
}

async function getProjetos(categoria?: string): Promise<Projeto[]> {
  try {
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
      if (categoria && categoria !== 'todos') {
        return INITIAL_MOCK_PROJETOS.filter((p) => p.categoria === categoria)
      }
      return INITIAL_MOCK_PROJETOS
    }
    const supabase = await createClient()
    let query = supabase
      .from('projetos')
      .select('*')
      .eq('publicado', true)
      .neq('imagem_capa', '')
      .order('ordem', { ascending: true })

    if (categoria && categoria !== 'todos') {
      query = query.eq('categoria', categoria as Categoria)
    }

    const { data, error } = await query
    if (error || !data || data.length === 0) {
      if (categoria && categoria !== 'todos') {
        return INITIAL_MOCK_PROJETOS.filter((p) => p.categoria === categoria)
      }
      return INITIAL_MOCK_PROJETOS
    }
    return data
  } catch {
    if (categoria && categoria !== 'todos') {
      return INITIAL_MOCK_PROJETOS.filter((p) => p.categoria === categoria)
    }
    return INITIAL_MOCK_PROJETOS
  }
}

export default async function TrabalhosPage({
  searchParams,
}: {
  searchParams: Promise<{ categoria?: string }>
}) {
  const params = await searchParams
  const projetos = await getProjetos(params.categoria)

  return (
    <>
      <Header />
      <main className="relative min-h-screen section-dark pt-28 md:pt-36 pb-20 md:pb-28">
        <TechnicalSignature categoria="PORTFÓLIO" />

        <div className="shell">
          <p className="label-tech mb-4 text-blue-neon">Sistemas Visuais & Design Ops</p>

          <h1 className="title-impact text-[clamp(32px,6vw,72px)] text-white leading-tight mb-4 max-w-4xl tracking-normal sm:tracking-wide">
            Sistemas Visuais e Identidades Estruturadas para Escala Operacional.
          </h1>

          <p className="body-text text-white/70 mb-12 max-w-2xl text-base sm:text-lg leading-relaxed">
            Projetos de branding desenvolvidos sob a ótica de processos, consistência multicanal e eficiência de negócio.
          </p>

          <Suspense>
            <CategoryFilter />
          </Suspense>

          {projetos.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12">
              {projetos.map((projeto, i) => {
                const isFeatured =
                  projeto.slug.includes('ucadis') ||
                  projeto.slug.includes('jing-long') ||
                  projeto.titulo.toLowerCase().includes('ucadis') ||
                  projeto.titulo.toLowerCase().includes('jing long')

                return (
                  <ProjectCard
                    key={projeto.id}
                    projeto={projeto}
                    index={i}
                    isFeatured={isFeatured}
                  />
                )
              })}
            </div>
          ) : (
            <div className="mt-24 text-center">
              <p className="body-text text-white/40">
                {params.categoria
                  ? 'Nenhum projeto nessa categoria ainda.'
                  : 'Os projetos serão publicados em breve.'}
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
