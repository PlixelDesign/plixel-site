/**
 * Estrutura geométrica blueprint do hero — cubo wireframe 3D em linhas neon,
 * com vértices brilhantes, girando lentamente em perspectiva isométrica.
 *
 * Construído com CSS 3D puro (sem JS, sem SVG pesado, sem libs) para manter
 * performance alta. A animação pausa para quem usa "prefers-reduced-motion".
 * É puramente decorativo (aria-hidden) e não captura cliques.
 */
export default function HeroGraphic() {
  const SIZE = 300
  const HALF = SIZE / 2

  // As 6 faces do cubo, cada uma rotacionada e empurrada meio-lado para fora.
  const faces = [
    `translateZ(${HALF}px)`,
    `rotateY(180deg) translateZ(${HALF}px)`,
    `rotateY(90deg) translateZ(${HALF}px)`,
    `rotateY(-90deg) translateZ(${HALF}px)`,
    `rotateX(90deg) translateZ(${HALF}px)`,
    `rotateX(-90deg) translateZ(${HALF}px)`,
  ]

  // Os 8 vértices (combinações de ±metade em x, y, z).
  const signs = [-1, 1]
  const vertices: { x: number; y: number; z: number }[] = []
  for (const x of signs)
    for (const y of signs)
      for (const z of signs) vertices.push({ x: x * HALF, y: y * HALF, z: z * HALF })

  return (
    <div
      aria-hidden
      className="hero-cube-scene pointer-events-none absolute z-0 right-[-70px] top-1/2 -translate-y-1/2 scale-[0.62] opacity-[0.18] sm:right-0 sm:scale-75 lg:right-16 lg:scale-100 lg:opacity-90"
    >
      <div className="hero-cube" style={{ width: SIZE, height: SIZE }}>
        {faces.map((transform, i) => (
          <div
            key={i}
            className="hero-cube-face"
            style={{ width: SIZE, height: SIZE, transform }}
          />
        ))}
        {vertices.map((v, i) => (
          <div
            key={i}
            className="hero-cube-vertex"
            style={{ transform: `translate3d(${v.x}px, ${v.y}px, ${v.z}px)` }}
          />
        ))}
      </div>
    </div>
  )
}
