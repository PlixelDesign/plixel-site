import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="relative bg-graphite tech-grid border-t border-blue-neon/10">
      <div className="shell py-14 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-12">
          <div>
            <span className="title-impact text-4xl text-white tracking-[0.2em]">PLIXEL</span>
            <p className="body-text text-white/50 mt-4 text-sm max-w-xs">
              Comunicação visual que é entendida rápido e lembrada depois.
            </p>
          </div>

          <div>
            <p className="label-tech mb-4">Navegação</p>
            <nav className="flex flex-col gap-3">
              {[
                { href: '/', label: 'Home' },
                { href: '/trabalhos', label: 'Trabalhos' },
                { href: '/sobre', label: 'Sobre' },
                { href: '/contato', label: 'Contato' },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="font-poppins text-sm text-white/60 hover:text-white transition-colors duration-200"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="label-tech mb-4">Contato</p>
            <div className="flex flex-col gap-3">
              <a
                href="https://instagram.com/plixel_design"
                target="_blank"
                rel="noopener noreferrer"
                className="font-poppins text-sm text-white/60 hover:text-blue-neon transition-colors duration-200"
              >
                @plixel_design
              </a>
              <a
                href="mailto:contato@plixel.com.br"
                className="font-poppins text-sm text-white/60 hover:text-blue-neon transition-colors duration-200"
              >
                contato@plixel.com.br
              </a>
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="font-poppins text-sm text-white/60 hover:text-blue-neon transition-colors duration-200"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-blue-neon/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-poppins text-xs text-white/30 tracking-widest uppercase">
            © {new Date().getFullYear()} Plixel. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-2">
            <span className="inline-block w-8 h-px bg-blue-neon opacity-30" />
            <span className="font-poppins text-xs text-white/30 tracking-widest">PXL 2026</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
