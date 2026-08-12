'use client'

export default function HeroGraphic() {
  return (
    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-full max-w-[580px] lg:max-w-[700px] xl:max-w-[760px] h-[600px] lg:h-[720px] pointer-events-none z-0 hidden md:block">
      {/* 02. Glow Radial Difuso (Atrás da composição isométrica para profundidade de campo) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] lg:w-[600px] h-[480px] lg:h-[600px] rounded-full bg-gradient-to-tr from-yellow-neon/15 via-blue-neon/10 to-transparent blur-3xl opacity-80 pointer-events-none" />

      {/* Container de Perspectiva Isométrica */}
      <div className="relative w-full h-full flex items-center justify-center [perspective:1400px]">
        
        {/* Composição Isométrica com Animação de Flutuação Suave (Axis Y Loop) */}
        <div className="relative w-[360px] lg:w-[440px] animate-ui-cascade [transform-style:preserve-3d] transition-transform duration-700">
          
          {/* CAMADA 01 (Base): Design Tokens & Matriz Cromática */}
          <div className="relative w-full bg-navy-mid/95 backdrop-blur-xl border border-white/15 p-6 rounded-xl shadow-2xl space-y-4 transform [transform:translateZ(0px)] group">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="text-[10px] font-mono font-bold tracking-widest text-yellow-neon uppercase">
                [ 01. DESIGN TOKENS ]
              </span>
              <span className="text-[9px] font-mono text-white/40 uppercase">v2.4 / TOKENS</span>
            </div>

            {/* Grid de Cores Reais do Ecossistema Plixel */}
            <div className="grid grid-cols-4 gap-2.5">
              <div className="space-y-1.5">
                <div className="h-10 rounded bg-yellow-neon shadow-md shadow-yellow-neon/20 border border-yellow-neon/40" />
                <span className="text-[8px] font-mono text-white/60 block text-center">#FFD700</span>
              </div>
              <div className="space-y-1.5">
                <div className="h-10 rounded bg-blue-neon shadow-md shadow-blue-neon/20 border border-blue-neon/40" />
                <span className="text-[8px] font-mono text-white/60 block text-center">#60A5FA</span>
              </div>
              <div className="space-y-1.5">
                <div className="h-10 rounded bg-navy-deep border border-white/20" />
                <span className="text-[8px] font-mono text-white/60 block text-center">#0D2342</span>
              </div>
              <div className="space-y-1.5">
                <div className="h-10 rounded bg-white border border-white/30" />
                <span className="text-[8px] font-mono text-white/60 block text-center">#FFFFFF</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-[9px] font-mono text-white/50 pt-1">
              <span>SYSTEM: STRICT GOVERNANCE</span>
              <span className="text-yellow-neon">PASSED ✓</span>
            </div>
          </div>

          {/* CAMADA 02 (Intermediária): Escala Tipográfica & Regras de Hierarquia */}
          <div className="absolute top-10 -left-6 lg:-left-10 w-full bg-navy-deep/95 backdrop-blur-xl border border-yellow-neon/30 p-6 rounded-xl shadow-2xl space-y-4 transform [transform:translateZ(50px)_translateY(-40px)]">
            <div className="flex items-center justify-between border-b border-yellow-neon/20 pb-3">
              <span className="text-[10px] font-mono font-bold tracking-widest text-yellow-neon uppercase">
                [ 02. TYPOGRAPHY SCALE ]
              </span>
              <span className="text-[9px] font-mono text-yellow-neon/60 uppercase">FONTS &amp; SCALING</span>
            </div>

            <div className="space-y-2.5">
              <div className="flex items-center justify-between bg-black/40 p-2 rounded border border-white/10">
                <span className="font-jl-primary text-lg text-white tracking-wide">Sinera / Headline</span>
                <span className="text-[9px] font-mono text-yellow-neon">H1 96px</span>
              </div>
              <div className="flex items-center justify-between bg-black/40 p-2 rounded border border-white/10">
                <span className="font-jl-secondary text-sm text-white/90">Bontias / Subtitle</span>
                <span className="text-[9px] font-mono text-blue-neon">H2 48px</span>
              </div>
              <div className="flex items-center justify-between bg-black/40 p-2 rounded border border-white/10">
                <span className="font-poppins text-xs text-white/70">Poppins / Body Text</span>
                <span className="text-[9px] font-mono text-white/40">Base 16px</span>
              </div>
            </div>
          </div>

          {/* CAMADA 03 (Topo): Componentes UI & Autonomia de Equipe */}
          <div className="absolute top-20 -left-12 lg:-left-20 w-full bg-black/90 backdrop-blur-2xl border border-white/20 p-6 rounded-xl shadow-2xl space-y-4 transform [transform:translateZ(100px)_translateY(-80px)]">
            <div className="flex items-center justify-between border-b border-white/15 pb-3">
              <span className="text-[10px] font-mono font-bold tracking-widest text-yellow-neon uppercase">
                [ 03. COMPONENT OPS ]
              </span>
              <span className="text-[9px] font-mono text-white/50 uppercase">AUTONOMY READY</span>
            </div>

            {/* Amostra de Componente Botão & Switches de Interface */}
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-3">
                <div className="flex-1 bg-yellow-neon text-navy-deep px-3 py-2 rounded text-center text-xs font-bold font-poppins tracking-wider shadow-lg">
                  PRIMARY BUTTON
                </div>
                <div className="flex-1 bg-transparent border border-white/30 text-white px-3 py-2 rounded text-center text-xs font-poppins tracking-wider">
                  HOVER STATE
                </div>
              </div>

              <div className="flex items-center justify-between bg-navy-mid/60 p-2.5 rounded border border-white/10 text-xs">
                <span className="font-mono text-white/80">DESIGN OPS SYSTEM</span>
                <span className="bg-yellow-neon/20 text-yellow-neon px-2 py-0.5 rounded text-[10px] font-mono font-bold">
                  ACTIVE
                </span>
              </div>
            </div>

            {/* Badge de Telemetria Final */}
            <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[9px] font-mono text-white/40">
              <span>SCALABILITY INDEX</span>
              <span className="text-yellow-neon font-bold">99.8% OPTIMIZED</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
