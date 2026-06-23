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
  const sig = 'opacity-35 text-white font-poppins text-[9px] tracking-widest uppercase pointer-events-none select-none'

  return (
    <>
      <span className={`${sig} absolute top-4 left-4`}>{categoria}</span>
      <span className={`${sig} absolute top-4 right-4 text-right leading-tight`}>
        PXL 2026<br />X:1920 Y:1080
      </span>
      <span className={`${sig} absolute bottom-4 left-4`}>@plixel_design</span>
      {slideNumber && (
        <span className={`${sig} absolute bottom-4 right-4 flex items-center gap-2`}>
          <span className="inline-block w-12 h-px bg-blue-neon opacity-60" />
          {slideNumber}/{totalSlides ?? '??'}
        </span>
      )}
    </>
  )
}
