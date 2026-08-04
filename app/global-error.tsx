'use client'

import { useEffect } from 'react'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset?: () => void
}) {
  useEffect(() => {
    const msg = error?.message || (typeof error === 'string' ? error : 'Erro global')
    console.error('Global Error:', msg)
  }, [error])

  return (
    <html lang="pt-BR">
      <body className="bg-navy-deep text-white min-h-screen flex items-center justify-center p-6 text-center font-sans">
        <div className="max-w-md space-y-6">
          <div className="w-16 h-16 mx-auto border border-red-500 flex items-center justify-center">
            <span className="text-red-500 font-bold text-xl">!</span>
          </div>
          <h1 className="text-3xl font-bold tracking-wider text-white uppercase">ERRO NO SISTEMA</h1>
          <p className="text-white/60 text-sm">
            Ocorreu um erro inesperado na aplicação.
          </p>
          {typeof reset === 'function' && (
            <button
              type="button"
              onClick={() => reset()}
              className="px-6 py-2 bg-yellow-400 text-black font-bold uppercase text-xs tracking-widest hover:bg-white transition-colors"
            >
              Tentar novamente
            </button>
          )}
        </div>
      </body>
    </html>
  )
}
