'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [erro, setErro] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setErro('')
    setLoading(true)

    const supabase = createClient()
    const { error } = await supabase.auth.signInWithPassword({ email, password: senha })

    if (error) {
      setErro('E-mail ou senha incorretos.')
      setLoading(false)
      return
    }

    router.push('/admin')
    router.refresh()
  }

  return (
    <div className="min-h-screen section-dark tech-grid flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-10">
          <span className="title-impact text-4xl text-white tracking-[0.2em]">PLIXEL</span>
          <p className="label-tech mt-2 text-white/40">Painel Administrativo</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5 bg-navy-mid p-8 border border-blue-neon/10">
          <div>
            <label className="label-tech text-[10px] block mb-2">E-mail</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu@email.com"
              className="input-field"
            />
          </div>

          <div>
            <label className="label-tech text-[10px] block mb-2">Senha</label>
            <input
              type="password"
              required
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              placeholder="••••••••"
              className="input-field"
            />
          </div>

          {erro && (
            <p className="font-poppins text-sm text-red-diag">{erro}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="btn-primary w-full disabled:opacity-50"
          >
            {loading ? 'Entrando...' : 'Entrar'}
          </button>
        </form>

        <p className="text-center mt-6 font-poppins text-xs text-white/20 tracking-widest">
          PXL 2026 · ADMIN
        </p>
      </div>
    </div>
  )
}
