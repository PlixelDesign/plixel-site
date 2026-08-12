'use client'

import { useEffect, useRef } from 'react'

export default function HeroGraphic() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let width = (canvas.width = canvas.parentElement?.clientWidth || 600)
    let height = (canvas.height = canvas.parentElement?.clientHeight || 600)

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return
      width = canvas.width = canvas.parentElement.clientWidth
      height = canvas.height = canvas.parentElement.clientHeight
    }

    window.addEventListener('resize', handleResize)

    // Interatividade com o Mouse
    let mouseX = 0
    let mouseY = 0
    let targetRotX = 0
    let targetRotY = 0
    let currentRotX = 0
    let currentRotY = 0

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      const x = e.clientX - rect.left - width / 2
      const y = e.clientY - rect.top - height / 2
      targetRotY = (x / width) * Math.PI * 0.8
      targetRotX = (-y / height) * Math.PI * 0.8
    }

    window.addEventListener('mousemove', handleMouseMove)

    // Criar Vértices do Icosaedro 3D (Core de Engenharia Visual)
    const phi = (1 + Math.sqrt(5)) / 2
    const rawVertices = [
      [-1, phi, 0], [1, phi, 0], [-1, -phi, 0], [1, -phi, 0],
      [0, -1, phi], [0, 1, phi], [0, -1, -phi], [0, 1, -phi],
      [phi, 0, -1], [phi, 0, 1], [-phi, 0, -1], [-phi, 0, 1]
    ]

    // Arestas do Icosaedro
    const edges: [number, number][] = []
    const distSq = (a: number[], b: number[]) =>
      (a[0]-b[0])**2 + (a[1]-b[1])**2 + (a[2]-b[2])**2

    for (let i = 0; i < rawVertices.length; i++) {
      for (let j = i + 1; j < rawVertices.length; j++) {
        if (Math.abs(distSq(rawVertices[i], rawVertices[j]) - 4) < 0.1) {
          edges.push([i, j])
        }
      }
    }

    // Anéis de Órbita (Torus 3D)
    const ringParticlesCount = 60
    const ring1: { angle: number; r: number; y: number }[] = []
    const ring2: { angle: number; r: number; x: number }[] = []

    for (let i = 0; i < ringParticlesCount; i++) {
      ring1.push({
        angle: (i / ringParticlesCount) * Math.PI * 2,
        r: 160,
        y: (Math.random() - 0.5) * 10
      })
      ring2.push({
        angle: (i / ringParticlesCount) * Math.PI * 2,
        r: 210,
        x: (Math.random() - 0.5) * 10
      })
    }

    // Partículas de Poeira Estelar / Nódulo Cyber
    const particlesCount = 70
    const particles = Array.from({ length: particlesCount }, () => ({
      x: (Math.random() - 0.5) * 500,
      y: (Math.random() - 0.5) * 500,
      z: (Math.random() - 0.5) * 500,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      vz: (Math.random() - 0.5) * 0.4,
      size: Math.random() * 2 + 1,
      color: Math.random() > 0.4 ? '#FFD700' : '#60A5FA'
    }))

    let time = 0

    // Loop de Renderização 3D 60 FPS
    const render = () => {
      time += 0.015
      ctx.clearRect(0, 0, width, height)

      // Suavização do movimento do mouse (Easing)
      currentRotX += (targetRotX - currentRotX) * 0.05
      currentRotY += (targetRotY - currentRotY) * 0.05

      const autoRotY = time * 0.4 + currentRotY
      const autoRotX = Math.sin(time * 0.3) * 0.2 + currentRotX
      const autoRotZ = time * 0.15

      const scale = Math.min(width, height) * 0.32
      const cx = width / 2
      const cy = height / 2

      // Função de Projeção 3D para 2D com Matriz de Rotação
      const project = (x: number, y: number, z: number) => {
        // Rotação Y
        let x1 = x * Math.cos(autoRotY) + z * Math.sin(autoRotY)
        let z1 = -x * Math.sin(autoRotY) + z * Math.cos(autoRotY)
        let y1 = y

        // Rotação X
        let y2 = y1 * Math.cos(autoRotX) - z1 * Math.sin(autoRotX)
        let z2 = y1 * Math.sin(autoRotX) + z1 * Math.cos(autoRotX)
        let x2 = x1

        // Rotação Z
        let x3 = x2 * Math.cos(autoRotZ) - y2 * Math.sin(autoRotZ)
        let y3 = x2 * Math.sin(autoRotZ) + y2 * Math.cos(autoRotZ)

        // Perspectiva
        const fov = 400
        const distance = 500
        const pScale = fov / (distance + z2)

        return {
          px: cx + x3 * pScale,
          py: cy + y3 * pScale,
          pScale,
          z: z2
        }
      }

      // 1. Desenhar Anel 1 (Torus Neon Amarelo)
      ctx.lineWidth = 1.2
      ctx.strokeStyle = 'rgba(255, 215, 0, 0.4)'
      ctx.beginPath()
      for (let i = 0; i <= ringParticlesCount; i++) {
        const p = ring1[i % ringParticlesCount]
        const rx = Math.cos(p.angle + time) * p.r
        const rz = Math.sin(p.angle + time) * p.r
        const proj = project(rx, p.y, rz)
        if (i === 0) ctx.moveTo(proj.px, proj.py)
        else ctx.lineTo(proj.px, proj.py)
      }
      ctx.stroke()

      // 2. Desenhar Anel 2 (Torus Neon Azul)
      ctx.strokeStyle = 'rgba(96, 165, 250, 0.35)'
      ctx.beginPath()
      for (let i = 0; i <= ringParticlesCount; i++) {
        const p = ring2[i % ringParticlesCount]
        const ry = Math.cos(p.angle - time * 0.8) * p.r
        const rz = Math.sin(p.angle - time * 0.8) * p.r
        const proj = project(p.x, ry, rz)
        if (i === 0) ctx.moveTo(proj.px, proj.py)
        else ctx.lineTo(proj.px, proj.py)
      }
      ctx.stroke()

      // 3. Desenhar Núcleo 3D Icosaedro (Geodesic Core)
      const projectedNodes = rawVertices.map(v =>
        project(v[0] * scale * 0.5, v[1] * scale * 0.5, v[2] * scale * 0.5)
      )

      // Linhas da Malha 3D
      edges.forEach(([i, j]) => {
        const n1 = projectedNodes[i]
        const n2 = projectedNodes[j]
        const avgZ = (n1.z + n2.z) / 2
        const alpha = Math.max(0.1, Math.min(0.85, (avgZ + 200) / 400))

        const gradient = ctx.createLinearGradient(n1.px, n1.py, n2.px, n2.py)
        gradient.addColorStop(0, `rgba(255, 215, 0, ${alpha})`)
        gradient.addColorStop(1, `rgba(96, 165, 250, ${alpha})`)

        ctx.strokeStyle = gradient
        ctx.lineWidth = 1.5 * n1.pScale
        ctx.beginPath()
        ctx.moveTo(n1.px, n1.py)
        ctx.lineTo(n2.px, n2.py)
        ctx.stroke()
      })

      // Vértices do Núcleo com Brilho Neon
      projectedNodes.forEach(node => {
        const nodeRadius = 3.5 * node.pScale
        ctx.fillStyle = '#FFD700'
        ctx.shadowColor = '#FFD700'
        ctx.shadowBlur = 12
        ctx.beginPath()
        ctx.arc(node.px, node.py, Math.max(1, nodeRadius), 0, Math.PI * 2)
        ctx.fill()
        ctx.shadowBlur = 0
      })

      // 4. Desenhar Partículas Flutuantes Interativas
      particles.forEach(p => {
        p.x += p.vx
        p.y += p.vy
        p.z += p.vz

        if (Math.abs(p.x) > 250) p.vx *= -1
        if (Math.abs(p.y) > 250) p.vy *= -1
        if (Math.abs(p.z) > 250) p.vz *= -1

        const proj = project(p.x, p.y, p.z)
        const alpha = Math.max(0.15, Math.min(0.9, (proj.z + 250) / 500))

        ctx.fillStyle = p.color === '#FFD700' ? `rgba(255, 215, 0, ${alpha})` : `rgba(96, 165, 250, ${alpha})`
        ctx.beginPath()
        ctx.arc(proj.px, proj.py, p.size * proj.pScale, 0, Math.PI * 2)
        ctx.fill()
      })

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-full max-w-[550px] lg:max-w-[700px] xl:max-w-[800px] h-[550px] lg:h-[700px] pointer-events-none z-0 opacity-80 sm:opacity-90 transition-opacity duration-700">
      {/* HUD Telemetria Awwwards em Overlay */}
      <div className="absolute top-12 right-8 text-[10px] font-mono text-yellow-neon/60 tracking-widest pointer-events-none hidden lg:block space-y-1 bg-black/40 backdrop-blur-md p-3 border border-yellow-neon/20">
        <div>[ CORE: DESIGN OPS 3D ENGINE ]</div>
        <div>[ ORBITAL ROTATION: ACTIVE ]</div>
        <div>[ GOVERNANCE MATRIX: 99.9% ]</div>
      </div>

      <div className="absolute bottom-12 right-8 text-[9px] font-mono text-blue-neon/50 tracking-widest pointer-events-none hidden lg:block bg-black/40 backdrop-blur-md p-2 border border-blue-neon/20">
        LATENCY: 0.2ms / PERSPECTIVE 3D
      </div>

      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  )
}
