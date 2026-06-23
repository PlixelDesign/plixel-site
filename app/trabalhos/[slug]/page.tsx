import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ProjectGallery from '@/components/cases/ProjectGallery'
import TechnicalSignature from '@/components/layout/TechnicalSignature'
import { createClient } from '@/lib/supabase/server'
import { Projeto } from '@/types'
import { formatCategoria, getEmbedUrl, isVideoShorts } from '@/lib/utils'

async function getProjeto(slug: string): Promise<Projeto | null> {
  const supabase = await createClient()
  const { data } = await supabase
    .from('projetos')
    .select('*')
    .eq('slug', slug)
    .eq('publicado', true)
    .single()
  return data ?? null
}

async function getNavegacao(ordem: number): Promise<{ anterior: Projeto | null; proximo: Projeto | null }> {
  const supabase = await createClient()
  const [{ data: anterior }, { data: proximo }] = await Promise.all([
    supabase
      .from('projetos')
      .select('*')
      .eq('publicado', true)
      .lt('ordem', ordem)
      .order('ordem', { ascending: false })
      .limit(1)
      .single(),
    supabase
      .from('projetos')
      .select('*')
      .eq('publicado', true)
      .gt('ordem', ordem)
      .order('ordem', { ascending: true })
      .limit(1)
      .single(),
  ])
  return { anterior: anterior ?? null, proximo: proximo ?? null }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const projeto = await getProjeto(slug)
  if (!projeto) return { title: 'Projeto não encontrado' }
  return {
    title: `${projeto.titulo} — ${projeto.cliente}`,
    description: projeto.diagnostico.slice(0, 155),
    openGraph: {
      images: projeto.imagem_capa ? [{ url: projeto.imagem_capa }] : [],
    },
  }
}

export default async function CasePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const projeto = await getProjeto(slug)
  if (!projeto) notFound()

  const { anterior, proximo } = await getNavegacao(projeto.ordem)
  const embedUrl = projeto.video_url ? getEmbedUrl(projeto.video_url) : null
  const isShorts = projeto.video_url ? isVideoShorts(projeto.video_url) : false

  const secoes = [
    { label: 'DIAGNÓSTICO', content: projeto.diagnostico },
    { label: 'PROCESSO', content: projeto.processo },
    { label: 'RESULTADO', content: projeto.resultado },
  ]

  return (
    <>
      <Header />
      <main>
        {/* Hero do case */}
        <section className="relative section-dark pt-32 pb-16 overflow-hidden">
          <TechnicalSignature categoria="CASE" />
          <div className="max-w-7xl mx-auto px-6">
            <Link
              href="/trabalhos"
              className="inline-flex items-center gap-2 font-poppins text-xs text-white/40 hover:text-white tracking-widest uppercase mb-12 transition-colors duration-200"
            >
              ← Todos os trabalhos
            </Link>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
              <div>
                <p className="label-tech mb-4">{formatCategoria(projeto.categoria)}</p>
                <h1 className="title-impact text-[clamp(48px,6vw,80px)] text-white leading-none">
                  {projeto.titulo}
                </h1>
                <p className="body-text text-white/50 mt-4 text-lg">{projeto.cliente}</p>
              </div>
              <div className="flex md:justify-end">
                <div className="border-t border-blue-neon/20 pt-6 text-right">
                  <p className="label-tech text-[10px] mb-1">Categoria</p>
                  <p className="font-poppins text-sm text-white">{formatCategoria(projeto.categoria)}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Player de vídeo */}
        {embedUrl && (
          <section className="section-graphite py-16">
            <div className={`mx-auto px-6 ${isShorts ? 'max-w-sm' : 'max-w-5xl'}`}>
              <div className={`relative w-full bg-navy-deep border border-blue-neon/10 overflow-hidden ${isShorts ? 'aspect-[9/16]' : 'aspect-video'}`}>
                <iframe
                  src={embedUrl}
                  title={`Vídeo — ${projeto.titulo}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            </div>
          </section>
        )}

        {/* Galeria */}
        {projeto.imagens.length > 0 && (
          <section className="section-graphite py-16">
            <div className="max-w-7xl mx-auto px-6">
              <ProjectGallery imagens={projeto.imagens} />
            </div>
          </section>
        )}

        {/* Narrativa diagnóstico/processo/resultado */}
        <section className="section-dark py-24">
          <div className="max-w-4xl mx-auto px-6 space-y-20">
            {secoes.map((s, i) => (
              <div key={s.label} className="relative">
                <div className="flex items-center gap-6 mb-8">
                  <span className="title-impact text-6xl text-blue-neon/15">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <p className="label-tech mb-1">{s.label}</p>
                    <div className="w-12 h-px bg-yellow-neon" />
                  </div>
                </div>
                <p className="body-text text-white/75 text-lg leading-relaxed whitespace-pre-line">
                  {s.content}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Navegação próximo/anterior */}
        <section className="section-mid py-16 border-t border-blue-neon/10">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 gap-8">
            {anterior ? (
              <Link
                href={`/trabalhos/${anterior.slug}`}
                className="group flex flex-col gap-2 border-l border-blue-neon/20 pl-6 hover:border-blue-neon transition-colors duration-200"
              >
                <span className="font-poppins text-xs text-white/40 tracking-widest uppercase">← Anterior</span>
                <span className="title-impact text-xl text-white group-hover:text-blue-neon transition-colors duration-200">
                  {anterior.titulo}
                </span>
                <span className="body-text text-white/40 text-sm">{anterior.cliente}</span>
              </Link>
            ) : (
              <div />
            )}

            {proximo ? (
              <Link
                href={`/trabalhos/${proximo.slug}`}
                className="group flex flex-col gap-2 border-r border-blue-neon/20 pr-6 text-right items-end hover:border-blue-neon transition-colors duration-200"
              >
                <span className="font-poppins text-xs text-white/40 tracking-widest uppercase">Próximo →</span>
                <span className="title-impact text-xl text-white group-hover:text-blue-neon transition-colors duration-200">
                  {proximo.titulo}
                </span>
                <span className="body-text text-white/40 text-sm">{proximo.cliente}</span>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
