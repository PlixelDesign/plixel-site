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
  { titulo: 'DIAGNÓSTICO ANTES DE TUDO', texto: '[CONTEÚDO A SER FORNECIDO POR DANIEL]' },
  { titulo: 'TÉCNICA COM INTENÇÃO', texto: '[CONTEÚDO A SER FORNECIDO POR DANIEL]' },
  { titulo: 'RESULTADO MENSURÁVEL', texto: '[CONTEÚDO A SER FORNECIDO POR DANIEL]' },
  { titulo: 'SEM ENROLAÇÃO', texto: '[CONTEÚDO A SER FORNECIDO POR DANIEL]' },
]

export default function SobrePage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative section-dark pt-32 pb-24 overflow-hidden">
          <TechnicalSignature categoria="IDENTIDADE" />
          <div className="max-w-7xl mx-auto px-6">
            <p className="label-tech mb-6">Sobre a Plixel</p>
            <h1 className="title-impact text-[clamp(56px,8vw,96px)] text-white leading-none">
              A MARCA<br />
              <span className="title-accent text-[clamp(62px,8.8vw,106px)]">antes</span><br />
              DO POST
            </h1>
          </div>
        </section>

        {/* Manifesto principal */}
        <section className="relative section-graphite py-24 overflow-hidden">
          <TechnicalSignature categoria="PROCESSO" />
          <div className="max-w-4xl mx-auto px-6">
            <div className="border-l-2 border-yellow-neon pl-8 mb-16">
              <p className="title-impact text-3xl md:text-4xl text-white leading-tight">
                [CONTEÚDO A SER FORNECIDO POR DANIEL]
              </p>
            </div>
            <div className="space-y-6">
              {[1, 2, 3].map((i) => (
                <p key={i} className="body-text text-white/65 text-lg leading-relaxed">
                  [CONTEÚDO A SER FORNECIDO POR DANIEL]
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* Valores */}
        <section className="relative section-dark py-24 overflow-hidden">
          <TechnicalSignature categoria="EDUCACIONAL" />
          <div className="max-w-7xl mx-auto px-6">
            <p className="label-tech mb-6">Valores</p>
            <h2 className="title-impact text-[clamp(40px,5vw,64px)] text-white mb-16 leading-none">
              COMO A PLIXEL<br />
              <span className="title-accent text-[clamp(44px,5.5vw,70px)]">pensa</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
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
        <section className="relative section-mid py-24 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <p className="label-tech mb-6">Processo de trabalho</p>
            <h2 className="title-impact text-[clamp(40px,5vw,64px)] text-white mb-16 leading-none">
              DIAGNÓSTICO →<br />
              <span className="title-accent text-[clamp(44px,5.5vw,70px)]">processo</span><br />
              → RESULTADO
            </h2>
            <p className="body-text text-white/60 max-w-2xl text-lg mb-12">
              [CONTEÚDO A SER FORNECIDO POR DANIEL]
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
