import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/home/Hero'
import ProjectsPreview from '@/components/home/ProjectsPreview'
import TechnicalSignature from '@/components/layout/TechnicalSignature'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'
import { Projeto } from '@/types'

async function getProjetos(): Promise<Projeto[]> {
  const supabase = await createClient()
  const { data } = await supabase
    .from('projetos')
    .select('*')
    .eq('publicado', true)
    .order('ordem', { ascending: true })
    .limit(6)
  return data ?? []
}

export default async function HomePage() {
  const projetos = await getProjetos()

  return (
    <>
      <Header />
      <main>
        <Hero />

        {/* Manifesto */}
        <section className="relative section-mid section-y overflow-hidden">
          <TechnicalSignature categoria="DIAGNÓSTICO" />
          <div className="shell">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <p className="label-tech mb-6">Manifesto</p>
                <h2 className="title-impact text-[clamp(40px,5vw,64px)] text-white leading-none">
                  DIAGNÓSTICO<br />
                  <span className="title-accent text-[clamp(44px,5.5vw,70px)]">→ processo</span><br />
                  RESULTADO
                </h2>
                <div className="mt-6 w-16 h-px bg-yellow-neon" />
              </div>
              <div className="space-y-6">
                <p className="body-text text-white/70">
                  Todo projeto começa com um problema real, não com um pedido de &ldquo;logo bonito&rdquo;. A gente diagnostica o que está travando a comunicação, decide com intenção, e entrega algo que muda o resultado de verdade — seja venda, reconhecimento ou pertencimento.
                </p>
                <Link href="/sobre" className="btn-outline inline-flex">
                  Ler o manifesto completo
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Projetos */}
        {projetos.length > 0 && <ProjectsPreview projetos={projetos} />}

        {/* Processo */}
        <section className="relative section-dark section-y overflow-hidden">
          <TechnicalSignature categoria="PROCESSO" />
          <div className="shell">
            <p className="label-tech mb-6">Como trabalhamos</p>
            <h2 className="title-impact text-[clamp(36px,5vw,64px)] text-white mb-12 md:mb-16 leading-none">
              TRÊS ETAPAS,<br />
              <span className="title-accent text-[clamp(40px,5.5vw,70px)]">zero enrolação</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  num: '01',
                  titulo: 'DIAGNÓSTICO',
                  texto: 'Antes de criar, a gente entende o que está travando: comunicação confusa, identidade fragmentada, ou falta de conexão com quem importa.',
                },
                {
                  num: '02',
                  titulo: 'PROCESSO',
                  texto: 'Cada decisão visual tem motivo. Cor, tipografia, estrutura — tudo serve ao problema identificado, não ao gosto pessoal.',
                },
                {
                  num: '03',
                  titulo: 'RESULTADO',
                  texto: 'Entrega que se vê na prática: mais clareza, mais reconhecimento, mais conexão com quem o projeto precisa alcançar.',
                },
              ].map((step) => (
                <div key={step.num} className="border-t border-blue-neon/20 pt-8">
                  <span className="title-impact text-6xl text-blue-neon/20">{step.num}</span>
                  <h3 className="title-impact text-2xl text-white mt-4 mb-3">{step.titulo}</h3>
                  <p className="body-text text-white/50 text-sm">{step.texto}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA final — navy com amarelo só como acento (linha + 1 botão),
            respeitando a regra do DS: cor de ação ≤10%, nunca como fundo */}
        <section className="relative section-mid section-y overflow-hidden">
          <TechnicalSignature categoria="CASE" />
          <div className="max-w-3xl mx-auto px-6 sm:px-8 text-center relative z-10">
            <p className="label-tech mb-6">Próximo passo</p>
            <h2 className="title-impact text-[clamp(40px,7vw,96px)] text-white leading-none">
              PRONTO PRA
              <span className="title-accent block text-[clamp(44px,8vw,112px)] mt-1">começar?</span>
            </h2>
            <div className="mx-auto mt-8 w-20 h-px bg-yellow-neon" />
            <p className="body-text text-white/60 mt-8 text-lg max-w-md mx-auto">
              Tem um problema de comunicação pra resolver? Marca, negócio ou projeto que precisa ser entendido com mais clareza, mais identidade, mais conexão.
            </p>
            <div className="mt-10 flex flex-wrap gap-4 justify-center">
              <Link href="/contato" className="btn-primary">
                Falar com a Plixel
              </Link>
              <Link href="/trabalhos" className="btn-outline">
                Ver trabalhos
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
