import Link from 'next/link'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import TechnicalSignature from '@/components/layout/TechnicalSignature'

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="relative section-dark min-h-screen flex items-center justify-center overflow-hidden">
        <TechnicalSignature categoria="ERRO" />
        <div className="text-center px-6">
          <p className="label-tech mb-6">Página não encontrada</p>
          <h1 className="title-impact text-[clamp(120px,20vw,240px)] text-white/10 leading-none">
            404
          </h1>
          <p className="title-impact text-[clamp(32px,4vw,48px)] text-white -mt-4 mb-8">
            ESSA PÁGINA
            <span className="title-accent block -mt-[0.18em] text-[clamp(36px,4.4vw,53px)]">não existe</span>
          </p>
          <Link href="/" className="btn-primary">
            Voltar para o início
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
