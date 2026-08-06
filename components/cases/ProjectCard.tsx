import Link from 'next/link'
import Image from 'next/image'
import { Projeto } from '@/types'
import { formatCategoria } from '@/lib/utils'

export default function ProjectCard({
  projeto,
  index,
  isFeatured = false,
}: {
  projeto: Projeto
  index?: number
  isFeatured?: boolean
}) {
  const isUcadis = projeto.slug.includes('ucadis') || projeto.titulo.toLowerCase().includes('ucadis')
  const isJingLong = projeto.slug.includes('jing-long') || projeto.titulo.toLowerCase().includes('jing long')
  const isFrancis = projeto.slug.includes('francis') || projeto.titulo.toLowerCase().includes('francis')

  const href = isUcadis
    ? '/trabalhos/central-da-marca'
    : isJingLong
    ? '/trabalhos/jing-long/central-da-marca'
    : isFrancis
    ? '/trabalhos/francis-pinheiro-seguros'
    : `/trabalhos/${projeto.slug}`

  return (
    <Link
      href={href}
      className={`group relative flex flex-col bg-navy-mid border border-blue-neon/10 overflow-hidden hover:border-blue-neon/40 hover:-translate-y-1 transition-all duration-300 ${
        isFeatured ? 'md:col-span-2 lg:col-span-2' : 'col-span-1'
      }`}
    >
      <div className={`bg-navy-deep relative overflow-hidden ${isFeatured ? 'aspect-[21/9] sm:aspect-[16/8]' : 'aspect-[4/3]'}`}>
        {projeto.imagem_capa ? (
          <Image
            src={projeto.imagem_capa}
            alt={projeto.titulo}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes={isFeatured ? '(max-width: 768px) 100vw, 66vw' : '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-navy-mid">
            <span className="label-tech text-white/70">Imagem em breve</span>
          </div>
        )}
        <div className="absolute inset-0 bg-navy-deep/0 group-hover:bg-navy-deep/15 transition-colors duration-300" />

        {/* Tag da Categoria ou Diagnóstico Executivo */}
        <span className="absolute top-3 left-3 bg-navy-deep/90 backdrop-blur-md border border-white/10 px-3 py-1.5 label-tech text-[10px] sm:text-xs text-white max-w-[85%] truncate">
          {projeto.diagnostico ? projeto.diagnostico : formatCategoria(projeto.categoria)}
        </span>

        {/* Badge de Featured Case para UCADIS e Jing Long */}
        {isFeatured && (
          <span className="absolute top-3 right-3 bg-yellow-neon text-navy-deep font-poppins text-[10px] font-extrabold tracking-widest uppercase px-3 py-1 rounded-sm shadow-md">
            Featured Case
          </span>
        )}
      </div>

      <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
        <div>
          <h3 className={`title-impact text-white tracking-wide leading-none ${isFeatured ? 'text-3xl sm:text-4xl' : 'text-2xl'}`}>
            {projeto.titulo}
          </h3>
          <p className="body-text text-white/50 text-xs sm:text-sm mt-2">{projeto.cliente}</p>
        </div>

        <div className="mt-6 pt-5 border-t border-blue-neon/10 flex items-center justify-between text-white/40 group-hover:text-yellow-neon transition-colors duration-300">
          <span className="font-poppins text-xs tracking-widest uppercase font-semibold">Ver case</span>
          <span className="text-xs transform group-hover:translate-x-1.5 transition-transform duration-200">→</span>
        </div>
      </div>
    </Link>
  )
}
