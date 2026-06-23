import { Suspense } from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import CategoryFilter from '@/components/cases/CategoryFilter'
import TechnicalSignature from '@/components/layout/TechnicalSignature'
import { createClient } from '@/lib/supabase/server'
import { Categoria, Projeto } from '@/types'
import { formatCategoria } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Trabalhos',
  description: 'Portfólio de projetos da Plixel — identidade visual, social media, vídeo e campanha.',
}

async function getProjetos(categoria?: string): Promise<Projeto[]> {
  const supabase = await createClient()
  let query = supabase
    .from('projetos')
    .select('*')
    .eq('publicado', true)
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
      <main className="relative min-h-screen section-dark pt-32 pb-24">
        <TechnicalSignature categoria="PORTFÓLIO" />

        <div className="max-w-7xl mx-auto px-6">
          <p className="label-tech mb-6">Portfólio</p>
          <h1 className="title-impact text-[clamp(56px,8vw,96px)] text-white leading-none mb-4">
            TRABALHOS
          </h1>
          <p className="body-text text-white/50 mb-12 max-w-xl">
            Cada projeto começa com um problema real. Cada entrega termina com resultado mensurável.
          </p>

          <Suspense>
            <CategoryFilter />
          </Suspense>

          {projetos.length > 0 ? (
            <div className="mt-12">
              {projetos.map((projeto, i) => (
                <Link
                  key={projeto.id}
                  href={`/trabalhos/${projeto.slug}`}
                  className="group relative flex items-center gap-6 py-7 border-b border-blue-neon/10 hover:border-blue-neon/0 transition-all duration-300"
                >
                  {/* Linha amarela esquerda no hover */}
                  <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-yellow-neon origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-300" />

                  <span className="font-poppins text-xs text-white/20 w-10 tabular-nums shrink-0 pl-4 group-hover:text-white/40 transition-colors duration-300">
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  <div className="flex-1 min-w-0">
                    <h3 className="title-impact text-2xl sm:text-3xl md:text-4xl text-white leading-none truncate group-hover:text-blue-neon transition-colors duration-300">
                      {projeto.titulo}
                    </h3>
                    <p className="font-poppins text-xs text-white/40 mt-1.5">{projeto.cliente}</p>
                  </div>

                  <div className="flex items-center gap-6 shrink-0">
                    <span className="label-tech text-[10px] text-white/30 hidden md:block">
                      {formatCategoria(projeto.categoria)}
                    </span>
                    <span className="text-white/30 group-hover:text-yellow-neon group-hover:translate-x-1 transition-all duration-300 font-poppins text-sm">
                      →
                    </span>
                  </div>
                </Link>
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
