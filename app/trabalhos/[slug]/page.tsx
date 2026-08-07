import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ProjectGallery from '@/components/cases/ProjectGallery'
import TechnicalSignature from '@/components/layout/TechnicalSignature'
import { createClient } from '@/lib/supabase/server'
import { Projeto } from '@/types'
import { formatCategoria, getEmbedUrl, isVideoShorts } from '@/lib/utils'

import { INITIAL_MOCK_PROJETOS } from '@/lib/mock-data'

import FrancisCaseStudy from '@/components/cases/FrancisCaseStudy'
import EBEscolaDeMusicaCase from '@/components/cases/EBEscolaDeMusicaCase'

async function getProjeto(slug: string): Promise<Projeto | null> {
  try {
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
      return INITIAL_MOCK_PROJETOS.find((p) => p.slug === slug) ?? null
    }
    const supabase = await createClient()
    const { data } = await supabase
      .from('projetos')
      .select('*')
      .eq('slug', slug)
      .eq('publicado', true)
      .single()
    return data ?? INITIAL_MOCK_PROJETOS.find((p) => p.slug === slug) ?? null
  } catch {
    return INITIAL_MOCK_PROJETOS.find((p) => p.slug === slug) ?? null
  }
}

async function getNavegacao(ordem: number): Promise<{ anterior: Projeto | null; proximo: Projeto | null }> {
  try {
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
      return { anterior: null, proximo: null }
    }
    const supabase = await createClient()
    const [{ data: anterior }, { data: proximo }] = await Promise.all([
      supabase
        .from('projetos')
        .select('*')
        .eq('publicado', true)
        .neq('imagem_capa', '')
        .lt('ordem', ordem)
        .order('ordem', { ascending: false })
        .limit(1)
        .single(),
      supabase
        .from('projetos')
        .select('*')
        .eq('publicado', true)
        .neq('imagem_capa', '')
        .gt('ordem', ordem)
        .order('ordem', { ascending: true })
        .limit(1)
        .single(),
    ])
    return { anterior: anterior ?? null, proximo: proximo ?? null }
  } catch {
    return { anterior: null, proximo: null }
  }
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
    title: `${projeto.titulo} · ${projeto.cliente}`,
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

  if (
    projeto.slug.toLowerCase().includes('francis') ||
    projeto.titulo.toLowerCase().includes('francis') ||
    projeto.diagnostico.includes('Instagram não convertia')
  ) {
    projeto.diagnostico =
      'A marca enfrentava um gargalo de posicionamento digital. Os canais não transmitiam a proposta de valor corporativa, forçando a captação a depender puramente de abordagem direta comercial, sem uma base de autoridade visual prévia.'
    projeto.cliente = 'Identidade Corporativa e Uniformização de Ativos'
  }

  if (
    projeto.slug.toLowerCase().includes('eb') ||
    projeto.titulo.toLowerCase().includes('eb') ||
    projeto.diagnostico.includes('dificultava a atração')
  ) {
    projeto.diagnostico =
      'A falta de padronização visual reduzia a taxa de conversão de novos leads e enfraquecia o diferencial competitivo de mercado. O desafio consistiu em estruturar um sistema visual que tangibilizasse a metodologia e acelerasse a jornada de decisão do aluno.'
    projeto.cliente = 'Design de Identidade Local'
  }

  // Separa a imagem de capa das demais imagens da galeria
  const capaUrl = projeto.imagem_capa && projeto.imagem_capa !== '/og-image.png' ? projeto.imagem_capa : null
  const displayImages = Array.from(
    new Set([
      ...(capaUrl ? [capaUrl] : []),
      ...(projeto.imagens || []),
    ])
  )

  const { anterior, proximo } = await getNavegacao(projeto.ordem)
  const embedUrl = projeto.video_url ? getEmbedUrl(projeto.video_url) : null
  const isShorts = projeto.video_url ? isVideoShorts(projeto.video_url) : false
  const isAvulsa = false
  const isUcadis = projeto.slug.includes('ucadis') || projeto.titulo.toLowerCase().includes('ucadis')
  const isFrancis = projeto.slug.includes('francis') || projeto.titulo.toLowerCase().includes('francis')
  const isJennifer = projeto.slug.includes('jennifer') || projeto.titulo.toLowerCase().includes('jennifer')
  const isEb = projeto.slug.includes('eb') || projeto.titulo.toLowerCase().includes('eb') || projeto.titulo.toLowerCase().includes('musica')

  const secoes = [
    { label: 'DIAGNÓSTICO', content: projeto.diagnostico },
    { label: 'PROCESSO', content: projeto.processo },
    { label: 'RESULTADO', content: projeto.resultado },
  ]

  if (isFrancis) {
    return <FrancisCaseStudy />
  }

  if (isEb) {
    return <EBEscolaDeMusicaCase />
  }

  return (
    <>
      <Header />
      <main>
        {/* Hero do case */}
        <section className="relative section-dark pt-28 md:pt-32 pb-12 md:pb-16 overflow-hidden">
          <TechnicalSignature categoria="CASE" />
          <div className="shell">
            <Link
              href="/trabalhos"
              className="inline-flex items-center gap-2 font-poppins text-xs text-white/40 hover:text-white tracking-widest uppercase mb-10 md:mb-12 transition-colors duration-200"
            >
              ← Todos os trabalhos
            </Link>

            <p className="label-tech mb-4">{formatCategoria(projeto.categoria)}</p>
            <h1 className="title-impact text-[clamp(40px,6vw,80px)] text-white leading-none max-w-4xl">
              {projeto.titulo}
            </h1>
            <p className="body-text text-white/50 mt-4 text-base md:text-lg">{projeto.cliente}</p>

            {/* Banner de Capa Principal */}
            {capaUrl && (
              <div className="mt-10 md:mt-12 relative w-full rounded-xl overflow-hidden border border-blue-neon/20 bg-navy-deep">
                <Image
                  src={capaUrl}
                  alt={`Capa de ${projeto.titulo}`}
                  width={1920}
                  height={1080}
                  priority
                  className="w-full h-auto object-contain block max-h-[650px]"
                />
              </div>
            )}
          </div>
        </section>

        {/* Player de vídeo */}
        {embedUrl && (
          <section className="section-graphite py-16">
            <div className={`mx-auto px-6 ${isShorts ? 'max-w-sm' : 'max-w-5xl'}`}>
              <div className={`relative w-full bg-navy-deep border border-blue-neon/10 overflow-hidden ${isShorts ? 'aspect-[9/16]' : 'aspect-video'}`}>
                <iframe
                  src={embedUrl}
                  title={`Vídeo: ${projeto.titulo}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            </div>
          </section>
        )}

        {/* Galeria */}
        {displayImages.length > 0 && (
          <section className="section-graphite py-12 md:py-16">
            <div className="shell">
              <ProjectGallery imagens={displayImages} />
            </div>
          </section>
        )}

        {/* Call to Action exclusivo UCADIS */}
        {isUcadis && (
          <section className="section-graphite pb-12 md:pb-16 pt-2">
            <div className="shell text-center">
              <div className="flex flex-col items-center justify-center gap-3 max-w-2xl mx-auto">
                <Link
                  href="/trabalhos/central-da-marca"
                  className="btn-primary inline-flex items-center gap-2"
                >
                  Explorar Central da Marca
                  <span className="text-xs">→</span>
                </Link>
                <p className="body-text text-white/60 text-sm max-w-lg mt-1">
                  Plataforma web desenvolvida para garantir a padronização e escalabilidade da marca por múltiplos fornecedores e equipes internas.
                </p>
              </div>
            </div>
          </section>
        )}

        {/* Seção Intercalada de Conteúdo (Texto + Imagem lado a lado + Break full width) */}
        {isFrancis ? (
          <div className="section-dark space-y-16 md:space-y-24 py-16">
            {/* Bloco 1: Diagnóstico + Imagem */}
            <section className="shell grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <span className="title-impact text-5xl text-blue-neon/20">01</span>
                  <div>
                    <p className="label-tech text-blue-neon">DIAGNÓSTICO COMERCIAL</p>
                    <div className="w-12 h-px bg-yellow-neon mt-1" />
                  </div>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                  Gargalo de Posicionamento e Captação Dependente
                </h2>
                <p className="body-text text-white/80 text-base md:text-lg leading-relaxed">
                  A marca enfrentava um gargalo de posicionamento digital. Os canais não transmitiam a proposta de valor corporativa, forçando a captação a depender puramente de abordagem direta comercial, sem uma base de autoridade visual prévia.
                </p>
              </div>

              <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-blue-neon/20 bg-navy-mid flex items-center justify-center p-3">
                <Image
                  src="/images/francis-mockup-impressos.png"
                  alt="Grid de Ativos Corporativos Francis Pinheiro Seguros"
                  fill
                  className="object-contain p-2"
                />
              </div>
            </section>

            {/* Break Full Width: Performance */}
            <section className="w-full bg-navy-mid border-y border-blue-neon/10 py-12 md:py-16">
              <div className="shell space-y-4 text-center">
                <span className="label-tech text-yellow-neon text-xs tracking-widest uppercase">
                  [ Mídia de Performance &amp; Tráfego Pago ]
                </span>
                <div className="relative w-full max-w-4xl mx-auto aspect-video rounded-xl overflow-hidden border border-white/10 bg-slate-950">
                  <Image
                    src="/images/francis-flyer-seguradoras.png"
                    alt="Matrizes Visuais para Campanhas de Performance"
                    fill
                    className="object-contain p-3"
                  />
                </div>
                <p className="text-xs font-mono text-white/50 pt-2">
                  Matrizes Visuais para Campanhas de Performance (Otimização de Conversão e CTR)
                </p>
              </div>
            </section>

            {/* Bloco 2: Imagem/Placeholder + Solução/Resultado */}
            <section className="shell grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-dashed border-blue-neon/40 bg-navy-deep flex items-center justify-center p-8 text-center group">
                <div className="space-y-3">
                  <div className="text-4xl text-blue-neon mb-2">💬</div>
                  <span className="label-tech text-blue-neon text-xs tracking-widest block">
                    [ SERVICE DESIGN &amp; WHATSAPP OPS ]
                  </span>
                  <p className="text-sm font-semibold text-white/90 max-w-sm mx-auto leading-snug">
                    Mapeamento de Jornada de Atendimento e Automação de Fluxo Comercial (WhatsApp Ops)
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <span className="title-impact text-5xl text-blue-neon/20">02</span>
                  <div>
                    <p className="label-tech text-blue-neon">ENGENHARIA E RESULTADO</p>
                    <div className="w-12 h-px bg-yellow-neon mt-1" />
                  </div>
                </div>
                <div className="space-y-4">
                  <p className="body-text text-white/80 text-base leading-relaxed">
                    <strong className="text-white font-semibold block mb-1">Service Design e Automação:</strong>
                    Service Design: Integração entre Identidade (Brand Equity), Mídia de Performance (matrizes de criativos focados em conversão e CTR) e Desenho de Serviço (WhatsApp Ops com réguas automatizadas e roteiros de abordagem).
                  </p>
                  <p className="body-text text-white/80 text-base leading-relaxed pt-2 border-t border-white/10">
                    <strong className="text-white font-semibold block mb-1">Resultado Operacional:</strong>
                    A entrega consolidou a introdução da corretora no mercado com uma estrutura corporativa madura, escalável e orientada a dados. O alinhamento entre a identidade visual e o fluxo do WhatsApp gerou previsibilidade comercial, otimizou o Custo por Lead (CPL) e blindou a marca com diretrizes prontas para a expansão futura da equipe de vendas.
                  </p>
                </div>
              </div>
            </section>
          </div>
        ) : isJennifer ? (
          <div className="section-dark space-y-16 md:space-y-24 py-16">
            {/* Bloco 1: Diagnóstico + Imagem */}
            <section className="shell grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <span className="title-impact text-5xl text-blue-neon/20">01</span>
                  <div>
                    <p className="label-tech text-blue-neon">DIAGNÓSTICO E POSICIONAMENTO</p>
                    <div className="w-12 h-px bg-yellow-neon mt-1" />
                  </div>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                  Barreira de Precificação e Percepção de Valor
                </h2>
                <p className="body-text text-white/80 text-base md:text-lg leading-relaxed">
                  Em um mercado de serviços altamente pulverizado, a marca precisava romper a barreira da precificação comum e se estabelecer no segmento premium, exigindo uma comunicação visual que justificasse um ticket médio mais alto.
                </p>
              </div>

              <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-blue-neon/20 bg-navy-mid flex items-center justify-center p-3">
                <Image
                  src="/images/jennifer-logo-dark.png"
                  alt="Identidade Visual sobre fundo escuro Jennifer Fotografia"
                  fill
                  className="object-contain p-2"
                />
              </div>
            </section>

            {/* Break Full Width: Pattern das Lentes */}
            <section className="w-full bg-navy-mid border-y border-blue-neon/10 py-12 md:py-16">
              <div className="shell space-y-4 text-center">
                <span className="label-tech text-yellow-neon text-xs tracking-widest uppercase">
                  [ Arquitetura Visual &amp; Fotografia Autoral ]
                </span>
                <div className="relative w-full max-w-4xl mx-auto aspect-video rounded-xl overflow-hidden border border-white/10 bg-slate-950">
                  <Image
                    src="/images/jennifer-album-fotos.png"
                    alt="Pattern de Lentes e Álbum de Fotos Jennifer Fotografia"
                    fill
                    className="object-contain p-3"
                  />
                </div>
                <p className="text-xs font-mono text-white/50 pt-2">
                  Pattern Vetorial de Lentes e Consistência Multicanal
                </p>
              </div>
            </section>

            {/* Bloco 2: Placeholder Foil + Solução */}
            <section className="shell grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-dashed border-amber-500/40 bg-gradient-to-br from-amber-950/20 via-navy-deep to-slate-950 flex items-center justify-center p-8 text-center group">
                <div className="space-y-3">
                  <div className="text-4xl text-amber-400 mb-2">✨</div>
                  <span className="label-tech text-amber-400 text-xs tracking-widest block">
                    [ ACABAMENTO PREMIUM ]
                  </span>
                  <p className="text-sm font-semibold text-white/90 max-w-sm mx-auto leading-snug">
                    Mockup do Cartão de Visitas com Gold Foil (Acabamento Premium)
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <span className="title-impact text-5xl text-blue-neon/20">02</span>
                  <div>
                    <p className="label-tech text-blue-neon">SISTEMA VISUAL E SOLUÇÃO</p>
                    <div className="w-12 h-px bg-yellow-neon mt-1" />
                  </div>
                </div>
                <p className="body-text text-white/80 text-base md:text-lg leading-relaxed">
                  Desenvolvimento de um sistema de identidade visual sofisticado, unificando a presença digital e física da marca. A arquitetura visual foi projetada para transmitir consistência em todos os pontos de contato, acelerando a decisão de compra.
                </p>
              </div>
            </section>
          </div>
        ) : isEb ? (
          <div className="section-dark space-y-16 md:space-y-24 py-16">
            {/* Bloco 1: Diagnóstico + Imagem */}
            <section className="shell grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <span className="title-impact text-5xl text-blue-neon/20">01</span>
                  <div>
                    <p className="label-tech text-blue-neon">DIAGNÓSTICO E DESAFIO</p>
                    <div className="w-12 h-px bg-yellow-neon mt-1" />
                  </div>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                  Padronização e Conversão de Leads
                </h2>
                <p className="body-text text-white/80 text-base md:text-lg leading-relaxed">
                  A falta de padronização visual reduzia a taxa de conversão de novos leads e enfraquecia o diferencial competitivo de mercado. O desafio consistiu em estruturar um sistema visual que tangibilizasse a metodologia e acelerasse a jornada de decisão do aluno.
                </p>
              </div>

              <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-blue-neon/20 bg-navy-mid flex items-center justify-center p-3">
                <Image
                  src="/images/eb-capa-hero.png"
                  alt="Logos com fundo marrom/creme EB Escola de Música"
                  fill
                  className="object-contain p-2"
                />
              </div>
            </section>

            {/* Break Full Width: Pattern de Violoncelos */}
            <section className="w-full bg-navy-mid border-y border-blue-neon/10 py-12 md:py-16">
              <div className="shell space-y-4 text-center">
                <span className="label-tech text-yellow-neon text-xs tracking-widest uppercase">
                  [ Identidade Sonora &amp; Pattern ]
                </span>
                <div className="relative w-full max-w-4xl mx-auto aspect-[21/9] rounded-xl overflow-hidden border border-white/10 bg-slate-950 flex items-center justify-center p-6 text-center">
                  <div className="space-y-2">
                    <span className="text-4xl text-blue-neon">🎵</span>
                    <p className="text-sm font-semibold text-white/90">
                      Pattern de Violoncelos &amp; Elementos de Ritmo Musical
                    </p>
                  </div>
                </div>
                <p className="text-xs font-mono text-white/50 pt-2">
                  Pattern Vetorial de Violoncelos e Notas Musicais
                </p>
              </div>
            </section>

            {/* Bloco 2: Placeholder iPad Studio + Solução */}
            <section className="shell grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-dashed border-blue-neon/40 bg-navy-deep flex items-center justify-center p-8 text-center group">
                <div className="space-y-3">
                  <div className="text-4xl text-blue-neon mb-2">📱</div>
                  <span className="label-tech text-blue-neon text-xs tracking-widest block">
                    [ METODOLOGIA DIGITAL ]
                  </span>
                  <p className="text-sm font-semibold text-white/90 max-w-sm mx-auto leading-snug">
                    Mockup do iPad Studio (Metodologia Digital e Presença Local)
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <span className="title-impact text-5xl text-blue-neon/20">02</span>
                  <div>
                    <p className="label-tech text-blue-neon">SISTEMA VISUAL E IMPACTO</p>
                    <div className="w-12 h-px bg-yellow-neon mt-1" />
                  </div>
                </div>
                <div className="space-y-4">
                  <p className="body-text text-white/80 text-base leading-relaxed">
                    <strong className="text-white font-semibold block mb-1">Estruturação de Marca:</strong>
                    Estruturação de marca e sistema visual voltado ao ensino musical e presença local, criando uma experiência consistente em todos os pontos de contato.
                  </p>
                  <p className="body-text text-white/80 text-base leading-relaxed pt-2 border-t border-white/10">
                    <strong className="text-white font-semibold block mb-1">Resultado na Comunidade:</strong>
                    Identidade memorável e forte posicionamento na comunidade, gerando reconhecimento de marca imediato e aceleração na captação de alunos.
                  </p>
                </div>
              </div>
            </section>
          </div>
        ) : isAvulsa ? (
          projeto.diagnostico.trim() && (
            <section className="section-dark section-y">
              <div className="shell-narrow">
                <div className="flex items-center gap-3 mb-6">
                  <p className="label-tech">Descrição</p>
                  <div className="w-12 h-px bg-yellow-neon" />
                </div>
                <p className="body-text text-white/75 text-lg leading-relaxed whitespace-pre-line">
                  {projeto.diagnostico}
                </p>
              </div>
            </section>
          )
        ) : (
          <section className="section-dark section-y">
            <div className="shell-narrow space-y-16 md:space-y-20">
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
        )}

        {/* Navegação próximo/anterior */}
        <section className="section-mid py-12 md:py-16 border-t border-blue-neon/10">
          <div className="shell grid grid-cols-2 gap-4 sm:gap-8">
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
