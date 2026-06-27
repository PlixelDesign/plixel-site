import { Suspense } from 'react'
import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import CategoryFilter from '@/components/cases/CategoryFilter'
import ProjectCard from '@/components/cases/ProjectCard'
import TechnicalSignature from '@/components/layout/TechnicalSignature'
import { createClient } from '@/lib/supabase/server'
import { Categoria, Projeto } from '@/types'

export const metadata: Metadata = {
  title: 'Trabalhos',
  description: 'Portfólio de projetos da Plixel: identidade visual, social media, vídeo e campanha.',
}

async function getProjetos(categoria?: string): Promise<Projeto[]> {
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

  const { data } = await query
  return data ?? []
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
      <main className="relative min-h-screen section-dark pt-28 md:pt-32 pb-20 md:pb-28">
        <TechnicalSignature categoria="PORTFÓLIO" />

        <div className="shell">
          <p className="label-tech mb-6">Portfólio</p>
          <h1 className="title-impact text-[clamp(44px,8vw,96px)] text-white leading-none mb-5">
            TRABALHOS
          </h1>
          <p className="body-text text-white/50 mb-12 max-w-xl">
            Cada projeto começa com um problema real. Cada entrega termina com algo mais claro, mais reconhecível e mais conectado a quem importa.
          </p>

          <Suspense>
            <CategoryFilter />
          </Suspense>

          {projetos.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {projetos.map((projeto, i) => (
                <ProjectCard key={projeto.id} projeto={projeto} index={i} />
              ))}
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
