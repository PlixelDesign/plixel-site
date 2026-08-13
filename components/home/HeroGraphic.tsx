'use client'

import { useEffect, useRef, useState } from 'react'

export default function HeroGraphic() {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)

  const [scrollProgress, setScrollProgress] = useState(0)
  const [terminalText, setTerminalText] = useState<string[]>([])

  // Typewriter effect para logs de Design Tokens estilo Terminal Vercel
  useEffect(() => {
    const logs = [
      '--color-primary-blue: #2563EB;',
      'status: SYSTEM_OPTIMIZED;',
      'typography: GEOMETRIC_SANS;',
      'operational_scale: 99.8%;',
      'governance_check: PASSED [100%]'
    ]

    let logIdx = 0
    let charIdx = 0
    let currentLogs: string[] = []

    const typeInterval = setInterval(() => {
      if (logIdx < logs.length) {
        const fullLine = logs[logIdx]
        if (charIdx <= fullLine.length) {
          const partialLine = fullLine.substring(0, charIdx)
          setTerminalText([...currentLogs, partialLine])
          charIdx++
        } else {
          currentLogs.push(fullLine)
          logIdx++
          charIdx = 0
        }
      } else {
        clearInterval(typeInterval)
      }
    }, 45)

    return () => clearInterval(typeInterval)
  }, [])

  // Sincronização de Scroll (Video Scrubbing + Efeito de Explosão e Transição com Blur/Scale/Opacity)
  useEffect(() => {
    const video = videoRef.current
    const container = containerRef.current
    if (!video || !container) return

    let animationFrameId: number

    const handleScroll = () => {
      const rect = container.getBoundingClientRect()
      const windowHeight = window.innerHeight

      // Progresso de Scroll de 0 (topo) a 1 (transição para MethodologySection)
      const totalHeight = rect.height || windowHeight
      const currentScroll = Math.max(0, -rect.top)
      const ratio = Math.min(1, Math.max(0, currentScroll / (totalHeight * 0.7)))

      setScrollProgress(ratio)

      // Scrubbing do Tempo do Vídeo com base no Scroll do Usuário (Efeito de Explosão)
      if (video.duration && !isNaN(video.duration)) {
        const targetTime = ratio * video.duration
        if (Math.abs(video.currentTime - targetTime) > 0.05) {
          video.currentTime = targetTime
        }
      }
    }

    const onScroll = () => {
      animationFrameId = requestAnimationFrame(handleScroll)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    handleScroll()

    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  // Valores calculados de transição de scroll
  const scale = 1 + scrollProgress * 0.1 // Aumento de escala suave (1.0 -> 1.1)
  const opacity = Math.max(0, 1 - scrollProgress * 1.25) // Desaparecimento suave (1 -> 0)
  const blurPx = scrollProgress * 24 // Desfoque progressivo (0px -> 24px)

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0 select-none"
    >
      {/* 01. CAMADA DE VÍDEO BACKGROUND RESPONSIVO (A_master_level_detailed_macro.mp4) */}
      <div
        className="relative w-full h-full transition-transform duration-75 ease-out"
        style={{
          transform: `scale(${scale})`,
          opacity: opacity,
          filter: `blur(${blurPx}px)`,
        }}
      >
        <video
          ref={videoRef}
          src="/videos/hero-background.mp4"
          muted
          playsInline
          autoPlay
          loop
          preload="auto"
          className="w-full h-full object-cover object-center opacity-75"
        />

        {/* MÁSCARAS DE GRADIENTE PARA FUSÃO PERFEITA COM O FUNDO #0A0F1E */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F1E] via-transparent to-[#0A0F1E] opacity-90 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0F1E] via-transparent to-[#0A0F1E]/80 opacity-80 pointer-events-none" />
      </div>

      {/* 02. GLOW RADIAL CIANO/GOLD DE ILUMINAÇÃO DE FUNDO */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] lg:w-[700px] h-[550px] lg:h-[700px] rounded-full bg-gradient-to-tr from-blue-neon/15 via-yellow-neon/10 to-transparent blur-3xl opacity-60 pointer-events-none" />

      {/* 03. MARGINALIA DE DESIGN TOKENS (Terminal Typewriter Stream Flutuante) */}
      <div
        className="absolute bottom-10 right-6 sm:right-12 bg-[#0A0F1E]/85 backdrop-blur-2xl border border-blue-neon/30 p-4 rounded-xl shadow-2xl space-y-2 text-[10px] font-mono w-64 sm:w-72 lg:w-80 pointer-events-auto z-10 hidden sm:block transition-opacity duration-300"
        style={{ opacity: Math.max(0, 1 - scrollProgress * 1.6) }}
      >
        <div className="flex items-center justify-between text-yellow-neon font-bold border-b border-white/10 pb-2">
          <span>[ DESIGN_TOKENS.LOG ]</span>
          <span className="w-2 h-2 rounded-full bg-yellow-neon animate-ping" />
        </div>

        <div className="space-y-1 text-white/80 min-h-[90px]">
          {terminalText.map((line, i) => (
            <div key={i} className="flex items-center gap-1.5">
              <span className="text-blue-neon">&gt;</span>
              <span className={line.includes('PASSED') || line.includes('#FFD700') ? 'text-yellow-neon font-semibold' : ''}>
                {line}
              </span>
            </div>
          ))}
          <span className="inline-block w-2 h-3 bg-yellow-neon animate-pulse ml-1" />
        </div>

        <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[8px] text-white/40">
          <span>SCROLL_EXPLOSION_ENGINE</span>
          <span className="text-yellow-neon font-bold">ACTIVE ✓</span>
        </div>
      </div>
    </div>
  )
}
