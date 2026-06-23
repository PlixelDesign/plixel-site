'use client'

import { useState } from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import TechnicalSignature from '@/components/layout/TechnicalSignature'

export default function ContatoPage() {
  const [form, setForm] = useState({ nome: '', email: '', mensagem: '', servico: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('https://formsubmit.co/ajax/danielspsg@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...form, _subject: `Contato Plixel — ${form.nome}` }),
      })
      if (res.ok) {
        setStatus('sent')
        setForm({ nome: '', email: '', mensagem: '', servico: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <Header />
      <main className="relative section-dark min-h-screen pt-32 pb-24 overflow-hidden">
        <TechnicalSignature categoria="PROCESSO" />

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Info */}
            <div>
              <p className="label-tech mb-6">Contato</p>
              <h1 className="title-impact text-[clamp(56px,7vw,88px)] text-white leading-none mb-8">
                VAMOS<br />
                <span className="title-accent text-[clamp(62px,7.7vw,97px)]">trabalhar</span><br />
                JUNTOS
              </h1>
              <p className="body-text text-white/60 text-lg max-w-sm mb-12">
                Mande uma mensagem direta, sem formulário corporativo. A Plixel responde rápido.
              </p>

              <div className="space-y-6">
                <a
                  href="https://wa.me/5511999999999?text=Oi%2C%20vim%20pelo%20site%20da%20Plixel!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 border border-blue-neon/30 flex items-center justify-center group-hover:border-blue-neon transition-colors duration-200">
                    <span className="text-blue-neon text-xs">WA</span>
                  </div>
                  <div>
                    <p className="label-tech text-[10px] mb-0.5">WhatsApp</p>
                    <p className="font-poppins text-sm text-white/70 group-hover:text-white transition-colors duration-200">
                      [NÚMERO A SER INSERIDO]
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:contato@plixel.com.br"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 border border-blue-neon/30 flex items-center justify-center group-hover:border-blue-neon transition-colors duration-200">
                    <span className="text-blue-neon text-xs">@</span>
                  </div>
                  <div>
                    <p className="label-tech text-[10px] mb-0.5">E-mail</p>
                    <p className="font-poppins text-sm text-white/70 group-hover:text-white transition-colors duration-200">
                      contato@plixel.com.br
                    </p>
                  </div>
                </a>

                <a
                  href="https://instagram.com/plixel_design"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 border border-blue-neon/30 flex items-center justify-center group-hover:border-blue-neon transition-colors duration-200">
                    <span className="text-blue-neon text-xs">IG</span>
                  </div>
                  <div>
                    <p className="label-tech text-[10px] mb-0.5">Instagram</p>
                    <p className="font-poppins text-sm text-white/70 group-hover:text-white transition-colors duration-200">
                      @plixel_design
                    </p>
                  </div>
                </a>
              </div>
            </div>

            {/* Formulário */}
            <div>
              {status === 'sent' ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-16">
                  <div className="w-16 h-16 border border-green-valid flex items-center justify-center mb-6">
                    <span className="text-green-valid text-2xl">✓</span>
                  </div>
                  <h2 className="title-impact text-3xl text-white mb-4">MENSAGEM ENVIADA</h2>
                  <p className="body-text text-white/60">A Plixel vai retornar em breve.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="label-tech text-[10px] block mb-2">Nome *</label>
                    <input
                      type="text"
                      name="nome"
                      required
                      value={form.nome}
                      onChange={handleChange}
                      placeholder="Seu nome ou da empresa"
                      className="input-field"
                    />
                  </div>

                  <div>
                    <label className="label-tech text-[10px] block mb-2">E-mail *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="seu@email.com"
                      className="input-field"
                    />
                  </div>

                  <div>
                    <label className="label-tech text-[10px] block mb-2">Serviço de interesse</label>
                    <select
                      name="servico"
                      value={form.servico}
                      onChange={handleChange}
                      className="input-field"
                    >
                      <option value="">Selecionar (opcional)</option>
                      <option value="identidade_visual">Identidade Visual</option>
                      <option value="social_media">Social Media</option>
                      <option value="video">Vídeo</option>
                      <option value="campanha">Campanha</option>
                    </select>
                  </div>

                  <div>
                    <label className="label-tech text-[10px] block mb-2">Mensagem *</label>
                    <textarea
                      name="mensagem"
                      required
                      rows={5}
                      value={form.mensagem}
                      onChange={handleChange}
                      placeholder="Conta um pouco sobre o que você precisa..."
                      className="input-field resize-none"
                    />
                  </div>

                  {status === 'error' && (
                    <p className="font-poppins text-sm text-red-diag">
                      Erro ao enviar. Tente pelo WhatsApp ou e-mail direto.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="btn-primary w-full disabled:opacity-50"
                  >
                    {status === 'sending' ? 'Enviando...' : 'Enviar mensagem'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
