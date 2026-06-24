interface TechnicalSignatureProps {
  categoria?: string
  slideNumber?: string
  totalSlides?: string
}

export default function TechnicalSignature({
  categoria = 'PORTFÓLIO',
  slideNumber,
  totalSlides,
}: TechnicalSignatureProps) {
  // Detalhe técnico decorativo. Escondido no mobile (hidden sm:block) para não
  // colidir com os títulos grandes nem com o header fixo na primeira seção.
  const sig = 'hidden sm:block opacity-30 text-white font-poppins text-[9px] tracking-widest uppercase pointer-events-none select-none'

  return (
    <>
      <span className={`${sig} absolute top-6 left-6`}>{categoria}</span>
      <span className={`${sig} absolute top-6 right-6 text-right leading-tight`}>
        PXL 2026<br />X:1920 Y:1080
      </span>
      <span className={`${sig} absolute bottom-6 left-6`}>@plixel_design</span>
      {slideNumber && (
        <span className={`${sig} absolute bottom-6 right-6 sm:flex items-center gap-2`}>
          <span className="inline-block w-12 h-px bg-blue-neon opacity-60" />
          {slideNumber}/{totalSlides ?? '??'}
        </span>
      )}
    </>
  )
}
