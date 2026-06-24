import Link from 'next/link'
import Image from 'next/image'
import { Projeto } from '@/types'
import { formatCategoria } from '@/lib/utils'

export default function ProjectCard({
  projeto,
  index,
}: {
  projeto: Projeto
  index?: number
}) {
  return (
    <Link
      href={`/trabalhos/${projeto.slug}`}
      className="group relative flex flex-col bg-navy-mid border border-blue-neon/10 overflow-hidden hover:border-blue-neon/40 hover:-translate-y-1 transition-all duration-300"
    >
      <div className="aspect-[4/3] bg-navy-deep relative overflow-hidden">
        {projeto.imagem_capa ? (
          <Image
            src={projeto.imagem_capa}
            alt={projeto.titulo}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center tech-grid">
            <span className="label-tech opacity-40">Imagem em breve</span>
          </div>
        )}
        <div className="absolute inset-0 bg-navy-deep/0 group-hover:bg-navy-deep/15 transition-colors duration-300" />

        {/* Badge de categoria */}
        <span className="absolute top-3 left-3 bg-navy-deep/80 backdrop-blur-sm px-3 py-1 label-tech text-[10px]">
          {formatCategoria(projeto.categoria)}
        </span>

        {/* Numeração opcional */}
        {index !== undefined && (
          <span className="absolute top-3 right-3 font-poppins text-[10px] text-white/40 tracking-widest tabular-nums">
            {String(index + 1).padStart(2, '0')}
          </span>
        )}
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <h3 className="title-impact text-2xl text-white tracking-wide leading-none">{projeto.titulo}</h3>
        <p className="body-text text-white/50 text-sm mt-1.5">{projeto.cliente}</p>

        <div className="mt-5 pt-5 border-t border-blue-neon/10 flex items-center gap-2 text-white/40 group-hover:text-yellow-neon transition-colors duration-300">
          <span className="font-poppins text-xs tracking-widest uppercase">Ver case</span>
          <span className="text-xs transform group-hover:translate-x-1 transition-transform duration-200">→</span>
        </div>
      </div>
    </Link>
  )
}
