import Link from 'next/link'

interface ButtonProps {
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'outline' | 'ghost'
  children: React.ReactNode
  className?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  external?: boolean
}

export default function Button({
  href,
  onClick,
  variant = 'primary',
  children,
  className = '',
  type = 'button',
  disabled = false,
  external = false,
}: ButtonProps) {
  const base = 'inline-flex items-center justify-center font-poppins font-bold text-xs tracking-widest uppercase transition-all duration-200 px-8 py-3 disabled:opacity-40 disabled:cursor-not-allowed'
  const variants = {
    primary: 'bg-yellow-neon text-navy-deep hover:bg-white',
    outline: 'border border-blue-neon text-blue-neon hover:bg-blue-neon hover:text-navy-deep',
    ghost: 'text-white/60 hover:text-white',
  }
  const cls = `${base} ${variants[variant]} ${className}`

  if (href) {
    const props = external ? { target: '_blank', rel: 'noopener noreferrer' } : {}
    return (
      <Link href={href} className={cls} {...props}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} className={cls} disabled={disabled}>
      {children}
    </button>
  )
}
