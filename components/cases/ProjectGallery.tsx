'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'

export default function ProjectGallery({ imagens }: { imagens: string[] }) {
  const [lightbox, setLightbox] = useState<number | null>(null)

  const fechar = useCallback(() => setLightbox(null), [])

  const anterior = useCallback(() => {
    setLightbox((i) => (i !== null ? (i - 1 + imagens.length) % imagens.length : null))
  }, [imagens.length])

  const proximo = useCallback(() => {
    setLightbox((i) => (i !== null ? (i + 1) % imagens.length : null))
  }, [imagens.length])

  useEffect(() => {
    if (lightbox === null) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') fechar()
      if (e.key === 'ArrowLeft') anterior()
      if (e.key === 'ArrowRight') proximo()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [lightbox, fechar, anterior, proximo])

  if (!imagens.length) return null

  // 1 imagem: exibe em largura total 16:9
  if (imagens.length === 1) {
    return (
      <div
        className="relative aspect-video bg-navy-deep overflow-hidden border border-blue-neon/10 cursor-zoom-in"
        onClick={() => setLightbox(0)}
      >
        <Image src={imagens[0]} alt="Imagem do projeto" fill className="object-contain" sizes="90vw" priority />
      </div>
    )
  }

  // 2+ imagens: grid — ótimo pra posts, artes, identidade aplicada
  const cols = imagens.length === 2 ? 'grid-cols-2' : 'grid-cols-2 md:grid-cols-3'

  return (
    <>
      <div className={`grid ${cols} gap-3 sm:gap-4`}>
        {imagens.map((src, i) => (
          <button
            key={`${src}-${i}`}
            type="button"
            onClick={() => setLightbox(i)}
            className="group relative min-h-[260px] sm:min-h-[320px] bg-navy-mid/90 overflow-hidden border border-blue-neon/10 hover:border-blue-neon/40 transition-all duration-300 focus:outline-none focus-visible:ring-1 focus-visible:ring-blue-neon p-3 flex items-center justify-center rounded-lg"
            aria-label={`Ver imagem ${i + 1} em tela cheia`}
          >
            <Image
              src={src}
              alt={`Arte ${i + 1}`}
              fill
              className="object-contain p-2 transition-transform duration-500 group-hover:scale-[1.02]"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-navy-deep/0 group-hover:bg-navy-deep/30 transition-colors duration-200 flex items-center justify-center">
              <span className="font-poppins text-[10px] text-white tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-200 uppercase bg-navy-deep/80 px-3 py-1.5 rounded border border-white/10 backdrop-blur-sm">
                Ampliar
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-graphite/95 flex items-center justify-center"
          onClick={fechar}
        >
          {/* Imagem */}
          <div
            className="relative w-full max-w-5xl max-h-[85vh] mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-[80vh]">
              <Image
                src={imagens[lightbox]}
                alt={`Arte ${lightbox + 1}`}
                fill
                className="object-contain"
                sizes="90vw"
                priority
              />
            </div>

            {/* Contador */}
            <span className="absolute bottom-3 left-1/2 -translate-x-1/2 font-poppins text-[10px] text-white/40 tracking-widest">
              {String(lightbox + 1).padStart(2, '0')} / {String(imagens.length).padStart(2, '0')}
            </span>
          </div>

          {/* Navegação */}
          {imagens.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); anterior() }}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center border border-blue-neon/30 text-blue-neon hover:bg-blue-neon hover:text-navy-deep transition-colors duration-200 font-poppins"
                aria-label="Imagem anterior"
              >
                ←
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); proximo() }}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center border border-blue-neon/30 text-blue-neon hover:bg-blue-neon hover:text-navy-deep transition-colors duration-200 font-poppins"
                aria-label="Próxima imagem"
              >
                →
              </button>
            </>
          )}

          {/* Fechar */}
          <button
            onClick={fechar}
            className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center border border-blue-neon/30 text-blue-neon hover:bg-blue-neon hover:text-navy-deep transition-colors duration-200 font-poppins text-lg"
            aria-label="Fechar"
          >
            ×
          </button>
        </div>
      )}
    </>
  )
}
