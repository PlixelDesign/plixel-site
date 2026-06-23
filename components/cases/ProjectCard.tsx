import Link from 'next/link'
import Image from 'next/image'
import { Projeto } from '@/types'
import { formatCategoria } from '@/lib/utils'

export default function ProjectCard({ projeto }: { projeto: Projeto }) {
  return (
    <Link
      href={`/trabalhos/${projeto.slug}`}
      className="group relative bg-navy-mid border border-blue-neon/10 overflow-hidden hover:border-blue-neon/40 transition-all duration-300 flex flex-col"
    >
      <div className="aspect-[16/9] bg-navy-deep relative overflow-hidden">
        {projeto.imagem_capa ? (
          <Image
            src={projeto.imagem_capa}
            alt={projeto.titulo}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center tech-grid">
            <span className="label-tech opacity-40">Imagem em breve</span>
          </div>
        )}
        <div className="absolute top-3 left-3">
          <span className="bg-navy-deep/80 backdrop-blur-sm px-3 py-1 label-tech text-[10px]">
            {formatCategoria(projeto.categoria)}
          </span>
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <h3 className="title-impact text-2xl text-white tracking-wide leading-none">{projeto.titulo}</h3>
        <p className="body-text text-white/50 text-sm mt-1">{projeto.cliente}</p>
        <p className="body-text text-white/40 text-sm mt-3 line-clamp-2 flex-1">
          {projeto.diagnostico}
        </p>

        <div className="mt-6 flex items-center gap-2 text-yellow-neon">
          <span className="font-poppins text-xs tracking-widest uppercase">Ver case completo</span>
          <span className="text-xs transform group-hover:translate-x-1 transition-transform duration-200">→</span>
        </div>
      </div>
    </Link>
  )
}
