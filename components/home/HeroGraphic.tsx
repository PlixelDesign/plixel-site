'use client'

import { useEffect, useRef, useState } from 'react'

export default function HeroGraphic() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const [terminalText, setTerminalText] = useState<string[]>([])

  // Animação de Digitação Estilo Terminal Vercel/Linear para Design Tokens
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

  // Canvas WebGL/2D 60 FPS: Animação "Deus Ex Machina" (Caos de Voxels -> Atração Magnética)
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let width = (canvas.width = canvas.parentElement?.clientWidth || 650)
    let height = (canvas.height = canvas.parentElement?.clientHeight || 650)

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return
      width = canvas.width = canvas.parentElement.clientWidth
      height = canvas.height = canvas.parentElement.clientHeight
    }

    window.addEventListener('resize', handleResize)

    // Estrutura de Voxel (Cubos Translucidos de Pixels)
    const voxelGridSize = 5
    const voxels: {
      startX: number
      startY: number
      startZ: number
      targetX: number
      targetY: number
      targetZ: number
      x: number
      y: number
      z: number
      size: number
      color: string
    }[] = []

    // Posições Alvo do Átomo de Pixels em Grid 3D
    const half = Math.floor(voxelGridSize / 2)
    for (let x = -half; x <= half; x++) {
      for (let y = -half; y <= half; y++) {
        for (let z = -half; z <= half; z++) {
          // Filtrar para formar a geometria do Átomo (esfera / núcleo + anel)
          const dist = Math.sqrt(x * x + y * y + z * z)
          if (dist <= 2.2 || (dist > 2.8 && dist <= 3.2)) {
            const startX = (Math.random() - 0.5) * 600
            const startY = (Math.random() - 0.5) * 600
            const startZ = (Math.random() - 0.5) * 600
            const spacing = 38

            voxels.push({
              startX,
              startY,
              startZ,
              targetX: x * spacing,
              targetY: y * spacing,
              targetZ: z * spacing,
              x: startX,
              y: startY,
              z: startZ,
              size: 8,
              color: (x === 0 && y === 0 && z === 0) || Math.random() > 0.6 ? '#FFD700' : '#60A5FA'
            })
          }
        }
      }
    }

    let time = 0
    let attractionProgress = 0 // 0 = Caos total, 1 = Encaixe Magnético Perfeito

    const render = () => {
      time += 0.016
      ctx.clearRect(0, 0, width, height)

      // Evolução da força magnética "Deus Ex Machina"
      if (attractionProgress < 1) {
        attractionProgress += 0.012
      }

      const cx = width / 2
      const cy = height / 2
      const rotY = time * 0.4
      const rotX = Math.sin(time * 0.3) * 0.25

      // 01. Desenhar Órbitas Tracejadas (Cyan/Blue Neon)
      ctx.save()
      ctx.translate(cx, cy)
      ctx.lineWidth = 1
      ctx.setLineDash([4, 6])

      // Anel Órbitas 1
      ctx.strokeStyle = 'rgba(96, 165, 250, 0.25)'
      ctx.beginPath()
      ctx.ellipse(0, 0, 180, 70, rotY, 0, Math.PI * 2)
      ctx.stroke()

      // Anel Órbitas 2
      ctx.strokeStyle = 'rgba(255, 215, 0, 0.3)'
      ctx.beginPath()
      ctx.ellipse(0, 0, 230, 90, -rotY * 0.8, 0, Math.PI * 2)
      ctx.stroke()
      ctx.restore()

      // 02. Desenhar Voxels (Caos -> Atração Magnética)
      voxels.forEach(v => {
        // Interpolação Física Magnética (Lerp)
        const easeProgress = 1 - Math.pow(1 - Math.min(1, attractionProgress), 3)
        const idealX = v.startX + (v.targetX - v.startX) * easeProgress
        const idealY = v.startY + (v.targetY - v.startY) * easeProgress
        const idealZ = v.startZ + (v.targetZ - v.startZ) * easeProgress

        // Rotação Y
        const x1 = idealX * Math.cos(rotY) + idealZ * Math.sin(rotY)
        const z1 = -idealX * Math.sin(rotY) + idealZ * Math.cos(rotY)

        // Rotação X
        const y2 = idealY * Math.cos(rotX) - z1 * Math.sin(rotX)
        const z2 = idealY * Math.sin(rotX) + z1 * Math.cos(rotX)
        const x2 = x1

        // Projeção de Perspectiva
        const fov = 400
        const distance = 450
        const scale = fov / (distance + z2)
        const px = cx + x2 * scale
        const py = cy + y2 * scale

        // Desenhar Voxel (Cubo Translúcido Brilhante)
        const currentSize = v.size * scale
        ctx.fillStyle = v.color
        ctx.shadowColor = v.color
        ctx.shadowBlur = Math.min(16, 8 * scale)

        // Linhas conectoras magnéticas quando se aproximando
        if (attractionProgress < 0.9) {
          ctx.strokeStyle = 'rgba(96, 165, 250, 0.15)'
          ctx.lineWidth = 0.5
          ctx.beginPath()
          ctx.moveTo(cx, cy)
          ctx.lineTo(px, py)
          ctx.stroke()
        }

        ctx.fillRect(px - currentSize / 2, py - currentSize / 2, currentSize, currentSize)
        ctx.shadowBlur = 0
      })

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-full max-w-[550px] lg:max-w-[700px] xl:max-w-[780px] h-[550px] lg:h-[700px] pointer-events-none z-0 hidden md:block select-none">
      
      {/* Glow Radial Frio Cyan/Gold Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] lg:w-[620px] h-[480px] lg:h-[620px] rounded-full bg-gradient-to-tr from-blue-neon/15 via-yellow-neon/10 to-transparent blur-3xl opacity-75 pointer-events-none" />

      {/* Canvas 3D de Voxels Magnéticos */}
      <canvas ref={canvasRef} className="w-full h-full block" />

      {/* MARGINALIA DE DESIGN TOKENS (Terminal Typewriter Stream Overlaid) */}
      <div className="absolute bottom-8 right-6 bg-[#0A0F1E]/90 backdrop-blur-2xl border border-blue-neon/30 p-4 rounded-xl shadow-2xl space-y-2 text-[10px] font-mono w-64 lg:w-72 pointer-events-auto">
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
          <span>ORBITAL_SYNCRONIZER</span>
          <span className="text-yellow-neon font-bold">DEUS_EX_MACHINA ✓</span>
        </div>
      </div>
    </div>
  )
}
