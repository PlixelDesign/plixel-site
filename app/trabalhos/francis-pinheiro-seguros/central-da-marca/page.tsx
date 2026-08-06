import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Francis Pinheiro Seguros · Go-To-Market & Service Design',
  description:
    'Lançamento de Operação, Engenharia de Funil Comercial, Mídia de Performance e Automação de Atendimento (WhatsApp Ops).',
}

export default function FrancisPinheiroBrandPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-blue-600 selection:text-white relative overflow-x-hidden antialiased">
      {/* Header Global da Plixel */}
      <Header />

      {/* Sub-header de navegação interna */}
      <header className="sticky top-16 z-40 backdrop-blur-md bg-slate-950/90 border-b border-slate-800/80 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between overflow-x-auto scrollbar-none">
          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/trabalhos"
              className="flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-blue-400 uppercase tracking-wider transition-colors mr-2"
            >
              ← Voltar a Trabalhos
            </Link>
            <div className="h-4 w-px bg-slate-800 hidden sm:block" />
            <span className="font-bold text-sm text-white tracking-wide hidden sm:inline-block">
              Francis Pinheiro Seguros
            </span>
          </div>

          <nav className="flex items-center space-x-1 sm:space-x-2 text-xs sm:text-sm text-slate-400">
            <a
              href="#diagnostico"
              className="px-2.5 py-1 rounded hover:text-blue-400 hover:bg-slate-900 transition-colors whitespace-nowrap"
            >
              Go-To-Market
            </a>
            <a
              href="#processo"
              className="px-2.5 py-1 rounded hover:text-blue-400 hover:bg-slate-900 transition-colors whitespace-nowrap"
            >
              Service Design
            </a>
            <a
              href="#resultado"
              className="px-2.5 py-1 rounded hover:text-blue-400 hover:bg-slate-900 transition-colors whitespace-nowrap"
            >
              Resultados
            </a>
            <a
              href="#galeria"
              className="px-2.5 py-1 rounded hover:text-blue-400 hover:bg-slate-900 transition-colors whitespace-nowrap"
            >
              Ativos Visuais
            </a>
          </nav>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative bg-slate-950 text-white overflow-hidden pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 -right-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <span className="inline-block px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-widest bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-6">
              Go-To-Market · Service Design · Automação Comercial
            </span>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white mb-6">
              Francis Pinheiro Seguros: Lançamento de Operação e Engenharia de Funil.
            </h1>

            <p className="text-base sm:text-xl text-slate-300 leading-relaxed font-normal mb-8 max-w-3xl mx-auto">
              Integração estratégica entre Identidade Corporativa, Mídia de Performance e Automação no WhatsApp Ops para aquisição previsível de clientes.
            </p>
          </div>

          <div className="relative w-full rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-slate-900">
            <Image
              src="/og-image.png"
              alt="Francis Pinheiro Seguros - Capa Institucional"
              width={1920}
              height={1080}
              priority
              className="w-full h-auto object-cover block max-h-[550px]"
            />
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 pt-12 pb-28">
        
        {/* SEÇÃO 1: DIAGNÓSTICO */}
        <section id="diagnostico" className="scroll-mt-36">
          <div className="bg-slate-900/90 rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-blue-500/10 text-blue-400 border border-blue-500/20">
              <span>01</span> Diagnóstico Executivo &amp; Desafio Comercial
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
              Lançamento de Operação (Go-To-Market) e Engenharia de Funil Comercial
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
              O desafio consistia em introduzir uma nova corretora de seguros no mercado a partir do zero absoluto, estabelecendo autoridade instantânea em um setor altamente regulado. Para garantir tração imediata, o projeto exigia uma abordagem integrada que superasse o escopo tradicional do design: era necessário construir um sistema de identidade visual robusto e, simultaneamente, desenhar a engenharia do funil comercial — alinhando os criativos de tráfego pago à régua de relacionamento automatizada no WhatsApp, mitigando o atrito na captação de leads frios.
            </p>
          </div>
        </section>

        {/* SEÇÃO 2: PROCESSO (SERVICE DESIGN) */}
        <section id="processo" className="scroll-mt-36 space-y-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-blue-400">
              02 — Metodologia &amp; Execução
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-2">
              Service Design: Integração entre Identidade, Mídia de Performance e Automação
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Tópico 1 */}
            <div className="bg-slate-900/80 rounded-2xl p-8 border border-slate-800 hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest">
                  [ Pilar 01 ]
                </span>
                <h3 className="text-xl font-bold text-white">
                  Brand Equity Institucional
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Desenvolvimento de um ecossistema visual sólido (tipografias, paleta cromática estável e grafismos) projetado para transmitir segurança e credibilidade desde o primeiro ponto de contato.
                </p>
              </div>
            </div>

            {/* Tópico 2 */}
            <div className="bg-slate-900/80 rounded-2xl p-8 border border-slate-800 hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest">
                  [ Pilar 02 ]
                </span>
                <h3 className="text-xl font-bold text-white">
                  Design para Performance (Mídia Paga)
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Criação de matrizes de criativos estáticos e dinâmicos focados em conversão, utilizando hierarquia tipográfica estrita e blocos de contraste visual para maximizar a taxa de clique (CTR) em campanhas de captação.
                </p>
              </div>
            </div>

            {/* Tópico 3 */}
            <div className="bg-slate-900/80 rounded-2xl p-8 border border-slate-800 hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest">
                  [ Pilar 03 ]
                </span>
                <h3 className="text-xl font-bold text-white">
                  Desenho de Serviço (WhatsApp Ops)
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Estruturação da arquitetura de atendimento comercial, incluindo o desenvolvimento de réguas de mensagens automatizadas, copys de recepção e roteiros de abordagem. O design visual foi integrado à lógica de conversação para garantir que a percepção de autoridade da marca se mantivesse intacta durante o transbordo para o time de vendas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SEÇÃO 3: RESULTADO */}
        <section id="resultado" className="scroll-mt-36">
          <div className="bg-gradient-to-br from-blue-950/40 via-slate-900 to-slate-950 rounded-3xl p-8 sm:p-12 border border-blue-500/30 shadow-2xl space-y-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-blue-400">
                03 — Impacto Mensurável
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-2">
                Validação Operacional e Funil de Aquisição Previsível
              </h2>
            </div>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              A entrega consolidou a introdução da corretora no mercado com uma estrutura corporativa madura, escalável e orientada a dados. Mais do que uma marca, o cliente recebeu um ecossistema de aquisição validado, unindo posicionamento estratégico, eficiência em tráfego pago e automação comercial de ponta a ponta. O alinhamento entre a identidade visual e o fluxo do WhatsApp gerou previsibilidade comercial, otimizou o Custo por Lead (CPL) e blindou a marca com diretrizes prontas para a expansão futura da equipe de vendas.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-slate-800">
              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800">
                <span className="text-xs font-mono text-slate-400 block mb-1">Mídia Paga &amp; Tráfego</span>
                <span className="text-lg font-bold text-blue-400">CTR Elevado &amp; CPL Otimizado</span>
              </div>
              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800">
                <span className="text-xs font-mono text-slate-400 block mb-1">Engenharia Comercial</span>
                <span className="text-lg font-bold text-blue-400">Fluxo WhatsApp Ops</span>
              </div>
              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800">
                <span className="text-xs font-mono text-slate-400 block mb-1">Autoridade no Setor</span>
                <span className="text-lg font-bold text-blue-400">Go-To-Market Validado</span>
              </div>
            </div>
          </div>
        </section>

        {/* SEÇÃO 4: GALERIA DE ATIVOS & LEGENDAS TÉCNICAS */}
        <section id="galeria" className="scroll-mt-36 space-y-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-blue-400">
              04 — Entregáveis Técnicos
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
              Matrizes Visuais &amp; Mapeamento de Atendimento
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Item 1 */}
            <div className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 shadow-md flex flex-col justify-between group">
              <div className="relative aspect-[4/3] bg-slate-950 overflow-hidden">
                <Image
                  src="/og-image.png"
                  alt="Campanhas de Performance"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <span className="text-[11px] font-mono text-blue-400 block mb-1 uppercase tracking-wider font-semibold">
                  Mídia Paga
                </span>
                <p className="text-sm font-semibold text-slate-200 leading-snug">
                  Matrizes Visuais para Campanhas de Performance (Otimização de Conversão e CTR)
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 shadow-md flex flex-col justify-between group">
              <div className="relative aspect-[4/3] bg-slate-950 overflow-hidden">
                <Image
                  src="/og-image.png"
                  alt="Arquitetura de Conteúdo"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <span className="text-[11px] font-mono text-blue-400 block mb-1 uppercase tracking-wider font-semibold">
                  Educação &amp; Autoridade
                </span>
                <p className="text-sm font-semibold text-slate-200 leading-snug">
                  Arquitetura de Conteúdo: Educação de Mercado e Quebra de Objeções Prévias
                </p>
              </div>
            </div>

            {/* Item 3 Placeholder (Nova Imagem de WhatsApp Ops) */}
            <div className="bg-slate-900 rounded-2xl overflow-hidden border border-dashed border-blue-500/40 shadow-md flex flex-col justify-between group">
              <div className="relative aspect-[4/3] bg-slate-950/80 flex items-center justify-center p-6 text-center">
                <div className="space-y-2">
                  <span className="inline-block p-3 rounded-full bg-blue-500/10 text-blue-400 text-xl">
                    💬
                  </span>
                  <span className="block text-xs font-mono text-blue-400 uppercase tracking-widest">
                    [ Mapeamento de Automação ]
                  </span>
                </div>
              </div>
              <div className="p-6 bg-slate-900">
                <span className="text-[11px] font-mono text-blue-400 block mb-1 uppercase tracking-wider font-semibold">
                  Service Design &amp; WhatsApp Ops
                </span>
                <p className="text-sm font-semibold text-slate-200 leading-snug">
                  Mapeamento de Jornada de Atendimento e Automação de Fluxo Comercial (WhatsApp Ops)
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Global da Plixel */}
      <Footer />
    </div>
  )
}
