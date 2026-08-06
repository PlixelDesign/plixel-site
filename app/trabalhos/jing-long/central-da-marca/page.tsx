import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Jing Long Martial Arts Academy · Brand System',
  description:
    'Manual de identidade visual, design tokens e desdobramento de produtos para Jing Long Martial Arts Academy.',
}

const ASSETS = {
  heroCover: '/images/jing-long-hero-cover.png',
  matrizTypo: '/images/jing-long-matriz-typo-grafismo.jpg',
  matrizRecorte: '/images/jing-long-matriz-recorte-grafismo.jpg',
  matrizMonocromatica: '/images/jing-long-matriz-sobreposicao-monocromatica.jpg',
  designOpsGrid: '/images/jing-long-design-ops-grid-social.jpg',
  merchTshirt: '/images/jing-long-merch-tshirt.png',
  merchDuffelBag: '/images/jing-long-merch-duffel-bag.png',
  merchYogaMat: '/images/jing-long-merch-yoga-mat.png',
  productPreWorkout: '/images/jing-long-products.png',
}

export default function JingLongBrandPage() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-[#ED1D1D] selection:text-white relative overflow-x-hidden antialiased">
      {/* Header Global da Plixel */}
      <Header />

      {/* Sub-header de navegação interna da Jing Long (Fixado em top-16 abaixo do Header da Plixel) */}
      <header className="sticky top-16 z-40 backdrop-blur-md bg-black/90 border-b border-zinc-900 transition-all">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 h-14 flex items-center justify-between overflow-x-auto scrollbar-none">
          <div className="flex items-center gap-3 shrink-0">
            <Link href="/trabalhos" className="flex items-center gap-2 text-xs font-bold text-zinc-400 hover:text-[#ED1D1D] uppercase tracking-wider transition-colors mr-2">
              ← Voltar a Trabalhos
            </Link>
            <div className="h-4 w-px bg-zinc-800 hidden sm:block" />
            <div className="w-7 h-7 bg-[#ED1D1D] flex items-center justify-center font-bebas text-lg text-white tracking-widest shrink-0 hidden sm:flex">
              JL
            </div>
            <span className="font-bebas text-base text-white tracking-wide hidden sm:inline-block">
              JING LONG MARTIAL ARTS ACADEMY
            </span>
          </div>

          <nav className="flex items-center space-x-1 sm:space-x-2 font-bebas tracking-widest text-xs sm:text-sm text-zinc-400">
            <a href="#hero" className="px-2.5 py-1 rounded hover:text-[#ED1D1D] hover:bg-zinc-900 transition-colors whitespace-nowrap">Início</a>
            <a href="#tokens" className="px-2.5 py-1 rounded hover:text-[#ED1D1D] hover:bg-zinc-900 transition-colors whitespace-nowrap">Design Tokens</a>
            <a href="#elasticidade" className="px-2.5 py-1 rounded hover:text-[#ED1D1D] hover:bg-zinc-900 transition-colors whitespace-nowrap">Sistema Visual</a>
            <a href="#design-ops" className="px-2.5 py-1 rounded hover:text-[#ED1D1D] hover:bg-zinc-900 transition-colors whitespace-nowrap">Design Ops</a>
            <a href="#produtos" className="px-2.5 py-1 rounded hover:text-[#ED1D1D] hover:bg-zinc-900 transition-colors whitespace-nowrap">Produtos</a>
          </nav>
        </div>
      </header>

      {/* SEÇÃO 1: HERO */}
      <section id="hero" className="w-full relative pt-16">
        <div className="relative w-full aspect-[21/9] min-h-[380px] max-h-[850px] bg-zinc-950 overflow-hidden border-b border-zinc-900">
          <Image
            src={ASSETS.heroCover}
            alt="Jing Long Martial Arts Academy"
            fill
            priority
            quality={95}
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
      </section>

      {/* CONTEÚDO PRINCIPAL */}
      <main className="max-w-[1400px] mx-auto px-6 sm:px-12 py-20 sm:py-28 space-y-28 sm:space-y-40">
        
        {/* SEÇÃO 2: DESIGN TOKENS */}
        <section id="tokens" className="space-y-16 scroll-mt-36">
          <div className="max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-3">
              <span className="w-8 h-[2px] bg-[#ED1D1D]" />
              <span className="font-bebas text-xl text-[#ED1D1D] tracking-widest uppercase">
                Fundações de Marca
              </span>
            </div>

            <h2 className="font-bebas text-5xl sm:text-6xl md:text-7xl text-white tracking-tight leading-[0.95] uppercase">
              Design Tokens & Diretrizes Visuais
            </h2>

            <p className="font-sans text-lg sm:text-xl text-zinc-300 font-normal leading-relaxed max-w-3xl">
              Estruturação das variáveis atômicas de cor e tipografia que regem o ecossistema visual da marca, garantindo contraste extremo, precisão técnica e legibilidade instantânea.
            </p>
          </div>

          {/* PALETA DE CORES */}
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-zinc-900 pb-3">
              <h3 className="font-bebas text-2xl text-white tracking-wider uppercase">
                Paleta de Cores Primária
              </h3>
              <span className="font-mono text-xs text-zinc-500 uppercase">
                Atomic Color Variables
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="group rounded-3xl bg-zinc-950 border border-zinc-900 hover:border-zinc-700 transition-all duration-500 overflow-hidden flex flex-col justify-between p-6 space-y-6">
                <div className="space-y-4">
                  <div className="w-full h-32 rounded-2xl bg-[#000000] border border-zinc-800 flex items-end justify-between p-4 relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
                    <span className="px-2.5 py-1 rounded bg-zinc-900/90 border border-zinc-800 text-[10px] font-mono text-zinc-400">
                      Background / Estrutura
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bebas text-2xl text-white tracking-wide">Preto Principal</h4>
                    <p className="font-sans text-xs text-zinc-400">Fundo institucional e estrutura de contêineres.</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-zinc-900 flex items-center justify-between font-mono text-xs">
                  <span className="text-zinc-500">--color-primary-black</span>
                  <span className="text-white font-bold bg-zinc-900 px-2 py-1 rounded">#000000</span>
                </div>
              </div>

              <div className="group rounded-3xl bg-zinc-950 border border-zinc-900 hover:border-zinc-700 transition-all duration-500 overflow-hidden flex flex-col justify-between p-6 space-y-6">
                <div className="space-y-4">
                  <div className="w-full h-32 rounded-2xl bg-[#FFFFFF] flex items-end justify-between p-4 relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500 text-black">
                    <span className="px-2.5 py-1 rounded bg-black/90 text-[10px] font-mono text-white">
                      Tipografia / Contraste
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bebas text-2xl text-white tracking-wide">Branco Puro</h4>
                    <p className="font-sans text-xs text-zinc-400">Leitura de alto contraste e hierarquia textual.</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-zinc-900 flex items-center justify-between font-mono text-xs">
                  <span className="text-zinc-500">--color-primary-white</span>
                  <span className="text-white font-bold bg-zinc-900 px-2 py-1 rounded">#FFFFFF</span>
                </div>
              </div>

              <div className="group rounded-3xl bg-zinc-950 border border-zinc-900 hover:border-[#ED1D1D]/50 transition-all duration-500 overflow-hidden flex flex-col justify-between p-6 space-y-6">
                <div className="space-y-4">
                  <div className="w-full h-32 rounded-2xl bg-[#ED1D1D] flex items-end justify-between p-4 relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500 text-white shadow-lg shadow-[#ED1D1D]/20">
                    <span className="px-2.5 py-1 rounded bg-black/80 text-[10px] font-mono text-red-400">
                      Acento / Energia
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bebas text-2xl text-white tracking-wide">Vermelho Jing Long</h4>
                    <p className="font-sans text-xs text-zinc-400">Pontos de tensão visual, badges e acentos.</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-zinc-900 flex items-center justify-between font-mono text-xs">
                  <span className="text-zinc-500">--color-primary-red</span>
                  <span className="text-[#ED1D1D] font-bold bg-zinc-900 px-2 py-1 rounded">#ED1D1D</span>
                </div>
              </div>
            </div>
          </div>

          {/* TIPOGRAFIA */}
          <div className="space-y-6 pt-4">
            <div className="flex items-center justify-between border-b border-zinc-900 pb-3">
              <h3 className="font-bebas text-2xl text-white tracking-wider uppercase">
                Sistema Tipográfico
              </h3>
              <span className="font-mono text-xs text-zinc-500 uppercase">
                Typography Pairing & Specs
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="rounded-3xl bg-zinc-950 border border-zinc-900 p-8 space-y-6 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-bebas text-xl text-[#ED1D1D] tracking-widest uppercase">
                      Display / Headings
                    </span>
                    <span className="font-mono text-xs text-zinc-500">Font-Family: &apos;Bebas Neue&apos;</span>
                  </div>

                  <div className="p-6 rounded-2xl bg-black border border-zinc-900 space-y-2">
                    <span className="font-mono text-[10px] text-zinc-500 uppercase block">Specimen Teste (H1, H2, H3):</span>
                    <p className="font-bebas text-4xl sm:text-5xl text-white tracking-wide leading-none uppercase">
                      &ldquo;A TÉCNICA VENCE A FORÇA&rdquo;
                    </p>
                    <p className="font-bebas text-xl text-zinc-500 tracking-widest pt-2">
                      ABCDEFGHIJKLMNOPQRSTUVWXYZ 0123456789
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-zinc-900 flex items-center justify-between font-mono text-xs text-zinc-400">
                  <span>Aplicação: H1, H2, H3 e Chamadas</span>
                  <span className="text-white font-semibold">Weight: 400 Regular</span>
                </div>
              </div>

              <div className="rounded-3xl bg-zinc-950 border border-zinc-900 p-8 space-y-6 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-[#ED1D1D] font-semibold uppercase tracking-wider">
                      Body & Interface
                    </span>
                    <span className="font-mono text-xs text-zinc-500">Font-Family: &apos;Inter&apos; / Sans</span>
                  </div>

                  <div className="p-6 rounded-2xl bg-black border border-zinc-900 space-y-3">
                    <span className="font-mono text-[10px] text-zinc-500 uppercase block">Specimen Teste (Regular & Medium):</span>
                    <p className="font-sans text-sm text-zinc-300 leading-relaxed font-normal">
                      A hierarquia textual foi calibrada para proporcionar máxima clareza em leitura contínua. <strong className="font-medium text-white">Pesos Medium (500) e Bold (700)</strong> são aplicados estrategicamente em descrições operacionais e rotulagens técnicas.
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-zinc-900 flex items-center justify-between font-mono text-xs text-zinc-400">
                  <span>Aplicação: Descrições, UI e Body Text</span>
                  <span className="text-white font-semibold">Weights: 400 / 500 / 700</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SEÇÃO 3: ELASTICIDADE VISUAL */}
        <section id="elasticidade" className="space-y-16 scroll-mt-36">
          <div className="max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-3">
              <span className="w-8 h-[2px] bg-[#ED1D1D]" />
              <span className="font-bebas text-xl text-[#ED1D1D] tracking-widest uppercase">
                Identidade Gráfica
              </span>
            </div>

            <h2 className="font-bebas text-5xl sm:text-6xl md:text-7xl text-white tracking-tight leading-[0.95] uppercase">
              Elasticidade e Agressividade Gráfica
            </h2>

            <p className="font-sans text-lg sm:text-xl text-zinc-300 font-normal leading-relaxed max-w-3xl">
              O objetivo central foi estruturar um sistema elástico e agressivo para a <strong className="text-white font-semibold">Jing Long Martial Arts Academy</strong>. A linguagem foi projetada para expandir desde texturas monocromáticas intensas até recortes abstratos da matriz do grafismo, garantindo força visual em todas as escalas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
            <article className="group space-y-4">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-950 border border-zinc-900 group-hover:border-[#ED1D1D]/50 transition-colors duration-500">
                <Image
                  src={ASSETS.matrizTypo}
                  alt="Typo-Grafismo Jing Long"
                  fill
                  quality={90}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 font-bebas text-lg text-white tracking-wider">
                  01. Typo-Grafismo
                </div>
              </div>
              <div className="space-y-1">
                <h3 className="font-bebas text-2xl text-white tracking-wide">Integração Tipográfica</h3>
                <p className="font-sans text-xs text-zinc-400 leading-relaxed">
                  Tipografia estruturada com &apos;Bebas Neue&apos; para impacto frontal imediato e peso institucional.
                </p>
              </div>
            </article>

            <article className="group space-y-4">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-950 border border-zinc-900 group-hover:border-[#ED1D1D]/50 transition-colors duration-500">
                <Image
                  src={ASSETS.matrizRecorte}
                  alt="Recorte do Grafismo"
                  fill
                  quality={90}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 font-bebas text-lg text-white tracking-wider">
                  02. Recorte de Símbolo
                </div>
              </div>
              <div className="space-y-1">
                <h3 className="font-bebas text-2xl text-white tracking-wide">Recortes Estruturais</h3>
                <p className="font-sans text-xs text-zinc-400 leading-relaxed">
                  Fragmentação vetorial do símbolo do Dragão para criar padrões abstratos e grafismos secundários.
                </p>
              </div>
            </article>

            <article className="group space-y-4">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-950 border border-zinc-900 group-hover:border-[#ED1D1D]/50 transition-colors duration-500">
                <Image
                  src={ASSETS.matrizMonocromatica}
                  alt="Sobreposição Monocromática"
                  fill
                  quality={90}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 font-bebas text-lg text-white tracking-wider">
                  03. Sobreposição Monocromática
                </div>
              </div>
              <div className="space-y-1">
                <h3 className="font-bebas text-2xl text-white tracking-wide">Monocromatismo Agressivo</h3>
                <p className="font-sans text-xs text-zinc-400 leading-relaxed">
                  Paleta restrita (#000000, #FFFFFF e #ED1D1D) gerando contraste extremo e rápida memorização.
                </p>
              </div>
            </article>
          </div>
        </section>

        {/* SEÇÃO 4: DESIGN OPS */}
        <section id="design-ops" className="space-y-12 scroll-mt-36">
          <div className="max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-3">
              <span className="w-8 h-[2px] bg-[#ED1D1D]" />
              <span className="font-bebas text-xl text-[#ED1D1D] tracking-widest uppercase">
                Design Ops
              </span>
            </div>

            <h2 className="font-bebas text-5xl sm:text-6xl text-white tracking-tight leading-none uppercase">
              Grid de Redes Sociais & Consistência de Escala
            </h2>

            <p className="font-sans text-base sm:text-lg text-zinc-300 leading-relaxed max-w-3xl">
              Regras rigorosas de construção gráfica foram documentadas para permitir que a equipe interna mantenha a consistência da marca em postagens diárias de alta frequência.
            </p>
          </div>

          <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-3xl overflow-hidden bg-zinc-950 border border-zinc-900 shadow-2xl group">
            <Image
              src={ASSETS.designOpsGrid}
              alt="Grid para Redes Sociais da Jing Long"
              fill
              quality={95}
              sizes="100vw"
              className="object-cover group-hover:scale-102 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 px-4 py-2 bg-black/80 backdrop-blur-md rounded-xl border border-zinc-800 font-mono text-xs text-zinc-300">
              [ Design Specs: Grid Rígido & Proporção Tipográfica ]
            </div>
          </div>
        </section>

        {/* SEÇÃO 5: PRODUTOS FÍSICOS */}
        <section id="produtos" className="space-y-16 scroll-mt-36">
          <div className="max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-3">
              <span className="w-8 h-[2px] bg-[#ED1D1D]" />
              <span className="font-bebas text-xl text-[#ED1D1D] tracking-widest uppercase">
                Produtos & Vestuário
              </span>
            </div>

            <h2 className="font-bebas text-5xl sm:text-6xl text-white tracking-tight leading-none uppercase">
              Desdobramento Físico & Produtos
            </h2>

            <p className="font-sans text-base sm:text-lg text-zinc-300 leading-relaxed max-w-3xl">
              Aplicação tangível do sistema visual em merchandising, equipamentos de treino e na linha proprietária de suplementação funcional da academia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
            <div className="md:col-span-7 lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <article className="group relative aspect-square rounded-3xl overflow-hidden bg-zinc-950 border border-zinc-900 p-6 flex flex-col justify-end">
                <Image
                  src={ASSETS.merchTshirt}
                  alt="Camiseta Oficial Jing Long Martial Arts Academy"
                  fill
                  quality={90}
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                <div className="relative z-10 space-y-1">
                  <span className="font-mono text-[11px] text-[#ED1D1D] uppercase tracking-wider font-semibold">
                    Apparel
                  </span>
                  <h3 className="font-bebas text-3xl text-white tracking-wide">
                    Camiseta Oficial
                  </h3>
                </div>
              </article>

              <article className="group relative aspect-square rounded-3xl overflow-hidden bg-zinc-950 border border-zinc-900 p-6 flex flex-col justify-end">
                <Image
                  src={ASSETS.merchDuffelBag}
                  alt="Duffel Bag Esportiva Jing Long"
                  fill
                  quality={90}
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                <div className="relative z-10 space-y-1">
                  <span className="font-mono text-[11px] text-[#ED1D1D] uppercase tracking-wider font-semibold">
                    Gear
                  </span>
                  <h3 className="font-bebas text-3xl text-white tracking-wide">
                    Mala Esportiva Duffel
                  </h3>
                </div>
              </article>

              <article className="sm:col-span-2 group relative aspect-[16/9] sm:aspect-[21/9] md:aspect-[16/9] rounded-3xl overflow-hidden bg-zinc-950 border border-zinc-900 p-6 sm:p-8 flex flex-col justify-end">
                <Image
                  src={ASSETS.productPreWorkout}
                  alt="Embalagem do Suplemento Pré-Treino Proprietário Jing Long"
                  fill
                  quality={95}
                  sizes="(max-width: 768px) 100vw, 60vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                <div className="relative z-10 space-y-1">
                  <span className="font-mono text-[11px] text-[#ED1D1D] uppercase tracking-wider font-semibold">
                    Nutrition & Performance
                  </span>
                  <h3 className="font-bebas text-3xl sm:text-4xl text-white tracking-wide">
                    Suplemento Pré-Treino Proprietário
                  </h3>
                </div>
              </article>
            </div>

            <article className="md:col-span-5 lg:col-span-4 group relative h-full min-h-[350px] rounded-3xl overflow-hidden bg-zinc-950 border border-zinc-900 p-8 flex flex-col justify-between">
              <Image
                src={ASSETS.merchYogaMat}
                alt="Tapete de Yoga & Treino de Solo Jing Long"
                fill
                quality={95}
                sizes="(max-width: 768px) 100vw, 35vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent" />
              
              <div className="relative z-10">
                <span className="px-3.5 py-1.5 rounded-full bg-[#ED1D1D] text-white font-bebas text-sm tracking-widest uppercase">
                  Destaque Equipment
                </span>
              </div>

              <div className="relative z-10 space-y-2">
                <span className="font-mono text-xs text-[#ED1D1D] uppercase tracking-wider font-semibold">
                  Solo & Mobilidade
                </span>
                <h3 className="font-bebas text-4xl text-white tracking-wide leading-none">
                  Tapete de Yoga & Treino de Solo
                </h3>
                <p className="font-sans text-xs text-zinc-300 leading-relaxed">
                  Superfície emborrachada de alta densidade com grafismo oriental gravado em relevo.
                </p>
              </div>
            </article>
          </div>
        </section>
      </main>

      {/* Footer Global da Plixel */}
      <Footer />
    </div>
  )
}
