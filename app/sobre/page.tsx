import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import TechnicalSignature from '@/components/layout/TechnicalSignature'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Sobre',
  description: 'Quem é a Plixel, como pensa e como trabalha. Design estratégico sem enrolação.',
}

const valores = [
  { titulo: 'DIAGNÓSTICO ANTES DE TUDO', texto: 'Não criamos nada sem entender o que está realmente travando a comunicação. Arte sem diagnóstico é palpite caro.' },
  { titulo: 'TÉCNICA COM INTENÇÃO', texto: 'Cor, tipografia e estrutura não são escolha de gosto. Cada decisão serve a um motivo identificado no diagnóstico.' },
  { titulo: 'RESULTADO MENSURÁVEL', texto: 'Entrega não é "ficou bonito". É clareza, reconhecimento ou conexão que se vê na prática, depois do projeto.' },
  { titulo: 'SEM ENROLAÇÃO', texto: 'Processo direto, prazo definido, comunicação sem rodeio. A gente fala o que vai fazer e faz.' },
]

export default function SobrePage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative section-dark pt-28 md:pt-32 pb-20 md:pb-28 overflow-hidden">
          <TechnicalSignature categoria="IDENTIDADE" />
          <div className="shell">
            <p className="label-tech mb-6">Sobre a Plixel</p>
            <h1 className="title-impact text-[clamp(44px,8vw,96px)] text-white leading-none">
              A MARCA<br />
              <span className="title-accent text-[clamp(48px,8.8vw,106px)]">antes</span><br />
              DO POST
            </h1>
          </div>
        </section>

        {/* Manifesto principal */}
        <section className="relative section-graphite section-y overflow-hidden">
          <TechnicalSignature categoria="PROCESSO" />
          <div className="shell-narrow">
            <div className="border-l-2 border-yellow-neon pl-8 mb-16">
              <p className="title-impact text-3xl md:text-4xl text-white leading-tight">
                Toda marca que você lembra teve alguém pensando nela antes do primeiro post sair. A Plixel existe pra fazer essa parte: a estrutura que vem antes da arte.
              </p>
            </div>
            <div className="space-y-6">
              <p className="body-text text-white/65 text-lg leading-relaxed">
                A marca não é o feed. É o que sustenta o feed.
              </p>
              <p className="body-text text-white/65 text-lg leading-relaxed">
                Quando a estrutura existe, o conteúdo flui. Quando não existe, cada post recomeça do zero.
              </p>
              <p className="body-text text-white/65 text-lg leading-relaxed">
                A gente entra exatamente nesse ponto: antes da postagem, na decisão.
              </p>
            </div>
          </div>
        </section>

        {/* Valores */}
        <section className="relative section-dark section-y overflow-hidden">
          <TechnicalSignature categoria="EDUCACIONAL" />
          <div className="shell">
            <p className="label-tech mb-6">Valores</p>
            <h2 className="title-impact text-[clamp(36px,5vw,64px)] text-white mb-12 md:mb-16 leading-none">
              COMO A PLIXEL<br />
              <span className="title-accent text-[clamp(40px,5.5vw,70px)]">pensa</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10">
              {valores.map((v, i) => (
                <div key={v.titulo} className="border-t border-blue-neon/20 pt-8">
                  <div className="flex items-start gap-4">
                    <span className="title-impact text-4xl text-blue-neon/15 mt-1 shrink-0">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <h3 className="title-impact text-xl text-white mb-3">{v.titulo}</h3>
                      <p className="body-text text-white/50 text-sm">{v.texto}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Processo */}
        <section className="relative section-mid section-y overflow-hidden">
          <div className="shell">
            <p className="label-tech mb-6">Processo de trabalho</p>
            <h2 className="title-impact text-[clamp(36px,5vw,64px)] text-white mb-12 md:mb-16 leading-none">
              DIAGNÓSTICO →<br />
              <span className="title-accent text-[clamp(40px,5.5vw,70px)]">processo</span><br />
              → RESULTADO
            </h2>
            <p className="body-text text-white/60 max-w-2xl text-lg mb-12">
              Esse é o método em toda entrega da Plixel, do projeto comercial ao institucional. Sem ele, é só arte solta. Com ele, é estratégia que se sustenta.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/trabalhos" className="btn-primary">
                Ver trabalhos
              </Link>
              <Link href="/contato" className="btn-outline">
                Falar com a Plixel
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
