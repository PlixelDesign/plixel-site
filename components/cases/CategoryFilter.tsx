'use client'

import { useRouter, useSearchParams, usePathname } from 'next/navigation'
import { Categoria, CATEGORIA_LABELS } from '@/types'

const ALL = 'todos'
const categorias = [ALL, ...Object.keys(CATEGORIA_LABELS)] as const

export default function CategoryFilter() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const current = searchParams.get('categoria') ?? ALL

  function setFilter(cat: string) {
    const params = new URLSearchParams(searchParams.toString())
    if (cat === ALL) {
      params.delete('categoria')
    } else {
      params.set('categoria', cat)
    }
    router.push(`${pathname}?${params.toString()}`)
  }

  return (
    <div className="flex flex-wrap gap-3" role="group" aria-label="Filtrar por categoria">
      {categorias.map((cat) => {
        const isActive = cat === current
        const label = cat === ALL ? 'Todos' : CATEGORIA_LABELS[cat as Categoria]
        return (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`font-poppins text-xs tracking-widest uppercase px-5 py-2 border transition-all duration-200 ${
              isActive
                ? 'border-yellow-neon text-yellow-neon'
                : 'border-blue-neon/30 text-white/50 hover:border-blue-neon/60 hover:text-white'
            }`}
          >
            {label}
          </button>
        )
      })}
    </div>
  )
}
