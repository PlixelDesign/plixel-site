'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset?: () => void
}) {
  useEffect(() => {
    const msg = error?.message || (typeof error === 'string' ? error : 'Erro de renderização')
    console.error('App Error:', msg)
  }, [error])

  return (
    <div className="min-h-screen bg-navy-deep flex items-center justify-center p-6 text-center">
      <div className="max-w-md space-y-6">
        <div className="w-16 h-16 mx-auto border border-red-diag flex items-center justify-center">
          <span className="text-red-diag font-poppins font-bold text-xl">!</span>
        </div>
        <h1 className="title-impact text-3xl text-white">ALGO DEU ERRADO</h1>
        <p className="body-text text-white/60 text-sm">
          Ocorreu um problema ao carregar este conteúdo.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          {typeof reset === 'function' && (
            <button
              type="button"
              onClick={() => reset()}
              className="btn-primary text-xs"
            >
              Tentar novamente
            </button>
          )}
          <Link href="/" className="btn-outline text-xs">
            Ir para a Home
          </Link>
        </div>
      </div>
    </div>
  )
}
