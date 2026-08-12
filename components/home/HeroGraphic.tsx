'use client'

export default function HeroGraphic() {
  return (
    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-full max-w-[550px] lg:max-w-[680px] xl:max-w-[750px] h-[550px] lg:h-[680px] pointer-events-none z-0 hidden md:block select-none">
      
      {/* 01. Frio Glow Radial de Iluminação de Fundo (Cyan & Neon Gold Aura) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[460px] lg:w-[580px] h-[460px] lg:h-[580px] rounded-full bg-gradient-to-tr from-blue-neon/15 via-yellow-neon/10 to-transparent blur-3xl opacity-70 pointer-events-none" />

      {/* 02. O Átomo de Pixels (Composição Isométrica Blueprint de Órbitas Tracejadas) */}
      <div className="relative w-full h-full flex items-center justify-center">

        {/* Órbita 01 (Externa - 440px) */}
        <div className="absolute w-[360px] lg:w-[460px] h-[360px] lg:h-[460px] rounded-full border border-dashed border-white/15 animate-[spin_40s_linear_infinite]">
          {/* Pixel Orbital 1A */}
          <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-yellow-neon shadow-[0_0_14px_#FFD700] rounded-none border border-black/80" />
          {/* Pixel Orbital 1B */}
          <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-blue-neon shadow-[0_0_10px_#60A5FA] rounded-none" />
        </div>

        {/* Órbita 02 (Intermediária Inclinada 45deg - 340px) */}
        <div className="absolute w-[280px] lg:w-[350px] h-[280px] lg:h-[350px] rounded-full border border-dashed border-yellow-neon/30 rotate-45 animate-[spin_25s_linear_infinite_reverse]">
          {/* Pixel Orbital 2A */}
          <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-3 h-3 bg-yellow-neon shadow-[0_0_14px_#FFD700] rounded-none border border-black/80" />
          {/* Pixel Orbital 2B */}
          <div className="absolute top-1/2 -left-1.5 -translate-y-1/2 w-2.5 h-2.5 bg-white shadow-[0_0_10px_#FFFFFF] rounded-none" />
        </div>

        {/* Órbita 03 (Interna Inclinada -45deg - 240px) */}
        <div className="absolute w-[200px] lg:w-[250px] h-[200px] lg:h-[250px] rounded-full border border-dashed border-blue-neon/40 -rotate-45 animate-[spin_18s_linear_infinite]">
          {/* Pixel Orbital 3A */}
          <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-yellow-neon shadow-[0_0_16px_#FFD700] rounded-none border border-black/80" />
        </div>

        {/* NÚCLEO DO ÁTOMO (Pixel Core Matrix 3x3 com Glow) */}
        <div className="relative w-24 h-24 lg:w-28 lg:h-28 bg-black/80 backdrop-blur-xl border border-yellow-neon/40 rounded-none flex items-center justify-center shadow-[0_0_30px_rgba(255,215,0,0.15)]">
          {/* Marcadores de Canto Blueprint (+) */}
          <span className="absolute -top-2 -left-2 font-mono text-[10px] text-yellow-neon">+</span>
          <span className="absolute -top-2 -right-2 font-mono text-[10px] text-yellow-neon">+</span>
          <span className="absolute -bottom-2 -left-2 font-mono text-[10px] text-yellow-neon">+</span>
          <span className="absolute -bottom-2 -right-2 font-mono text-[10px] text-yellow-neon">+</span>

          {/* Matriz de Pixels 3x3 Pulsante */}
          <div className="grid grid-cols-3 gap-1.5 p-2">
            <div className="w-2.5 h-2.5 bg-yellow-neon shadow-[0_0_8px_#FFD700]" />
            <div className="w-2.5 h-2.5 bg-blue-neon/40" />
            <div className="w-2.5 h-2.5 bg-yellow-neon shadow-[0_0_8px_#FFD700]" />
            <div className="w-2.5 h-2.5 bg-blue-neon/40" />
            <div className="w-2.5 h-2.5 bg-yellow-neon shadow-[0_0_12px_#FFD700] animate-pulse" />
            <div className="w-2.5 h-2.5 bg-blue-neon/40" />
            <div className="w-2.5 h-2.5 bg-yellow-neon shadow-[0_0_8px_#FFD700]" />
            <div className="w-2.5 h-2.5 bg-blue-neon/40" />
            <div className="w-2.5 h-2.5 bg-yellow-neon shadow-[0_0_8px_#FFD700]" />
          </div>

          <div className="absolute -bottom-5 text-[8px] font-mono text-yellow-neon tracking-widest uppercase">
            [ PIXEL_CORE ]
          </div>
        </div>

        {/* Linhas de Retícula CAD Eixos X/Y */}
        <div className="absolute w-[440px] lg:w-[540px] h-px bg-white/10" />
        <div className="absolute h-[440px] lg:h-[540px] w-px bg-white/10" />

        {/* Anel de Cota Graduado Externa */}
        <div className="absolute w-[480px] lg:w-[580px] h-[480px] lg:h-[580px] rounded-full border border-white/5 pointer-events-none" />

      </div>

      {/* Telemetria Marginalia do Átomo (Monospaced Micro-data Bynario Style) */}
      <div className="absolute top-8 right-4 font-mono text-[9px] text-white/40 tracking-widest space-y-1 text-right bg-black/60 backdrop-blur-md p-2.5 border border-white/10 rounded-none">
        <div>ATOM_SYS: REVOLVING</div>
        <div>ORBIT_FREQ: 60FPS</div>
        <div className="text-yellow-neon">DATA_PACKETS: STREAMING</div>
      </div>
    </div>
  )
}
