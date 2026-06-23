'use client'

import { useState, useRef } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { createClient } from '@/lib/supabase/client'
import { Projeto, Categoria, CATEGORIA_LABELS } from '@/types'
import { slugify } from '@/lib/utils'

type ProjetoFormData = Omit<Projeto, 'id' | 'slug' | 'created_at' | 'updated_at'>

interface ProjectFormProps {
  initialData?: Projeto
  mode: 'create' | 'edit'
}

export default function ProjectForm({ initialData, mode }: ProjectFormProps) {
  const router = useRouter()
  const fileInputRef = useRef<HTMLInputElement>(null)

  const [form, setForm] = useState<ProjetoFormData>({
    titulo: initialData?.titulo ?? '',
    cliente: initialData?.cliente ?? '',
    categoria: initialData?.categoria ?? 'identidade_visual',
    diagnostico: initialData?.diagnostico ?? '',
    processo: initialData?.processo ?? '',
    resultado: initialData?.resultado ?? '',
    imagens: initialData?.imagens ?? [],
    imagem_capa: initialData?.imagem_capa ?? '',
    video_url: initialData?.video_url ?? null,
    ordem: initialData?.ordem ?? 99,
    publicado: initialData?.publicado ?? false,
  })

  const [uploading, setUploading] = useState(false)
  const [saving, setSaving] = useState(false)
  const [erro, setErro] = useState('')
  const [dragOver, setDragOver] = useState(false)

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value, type } = e.target
    const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    setForm((prev) => ({ ...prev, [name]: val }))
  }

  async function uploadImagens(files: FileList | File[]) {
    const supabase = createClient()
    setUploading(true)
    const novasUrls: string[] = []

    for (const file of Array.from(files)) {
      const ext = file.name.split('.').pop()
      const path = `projetos/${slugify(form.titulo || 'sem-titulo')}/${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`

      const { error } = await supabase.storage.from('imagens').upload(path, file, {
        cacheControl: '3600',
        upsert: false,
      })

      if (error) {
        setErro(`Erro ao enviar ${file.name}: ${error.message}`)
        continue
      }

      const { data } = supabase.storage.from('imagens').getPublicUrl(path)
      novasUrls.push(data.publicUrl)
    }

    setForm((prev) => {
      const todasImagens = [...prev.imagens, ...novasUrls]
      return {
        ...prev,
        imagens: todasImagens,
        imagem_capa: prev.imagem_capa || todasImagens[0] || '',
      }
    })
    setUploading(false)
  }

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files?.length) uploadImagens(e.target.files)
  }

  function handleDrop(e: React.DragEvent) {
    e.preventDefault()
    setDragOver(false)
    if (e.dataTransfer.files?.length) uploadImagens(e.dataTransfer.files)
  }

  function removerImagem(url: string) {
    setForm((prev) => {
      const imagens = prev.imagens.filter((i) => i !== url)
      return {
        ...prev,
        imagens,
        imagem_capa: prev.imagem_capa === url ? (imagens[0] ?? '') : prev.imagem_capa,
      }
    })
  }

  function definirCapa(url: string) {
    setForm((prev) => ({ ...prev, imagem_capa: url }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSaving(true)
    setErro('')

    const supabase = createClient()
    const slug = slugify(form.titulo)
    const payload = { ...form, slug }

    if (mode === 'create') {
      const { error } = await supabase.from('projetos').insert(payload)
      if (error) { setErro(error.message); setSaving(false); return }
    } else {
      const { error } = await supabase
        .from('projetos')
        .update({ ...payload, updated_at: new Date().toISOString() })
        .eq('id', initialData!.id)
      if (error) { setErro(error.message); setSaving(false); return }
    }

    router.push('/admin')
    router.refresh()
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8 max-w-3xl">
      {/* Dados básicos */}
      <div className="bg-navy-mid p-8 border border-blue-neon/10 space-y-5">
        <h2 className="label-tech text-blue-neon mb-6">Dados do projeto</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="label-tech text-[10px] block mb-2">Título *</label>
            <input
              type="text"
              name="titulo"
              required
              value={form.titulo}
              onChange={handleChange}
              placeholder="Ex: Identidade Visual UCADIS"
              className="input-field"
            />
          </div>
          <div>
            <label className="label-tech text-[10px] block mb-2">Cliente *</label>
            <input
              type="text"
              name="cliente"
              required
              value={form.cliente}
              onChange={handleChange}
              placeholder="Nome do cliente"
              className="input-field"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="label-tech text-[10px] block mb-2">Categoria *</label>
            <select
              name="categoria"
              value={form.categoria}
              onChange={handleChange}
              className="input-field"
            >
              {(Object.entries(CATEGORIA_LABELS) as [Categoria, string][]).map(([val, label]) => (
                <option key={val} value={val}>{label}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="label-tech text-[10px] block mb-2">Ordem de exibição</label>
            <input
              type="number"
              name="ordem"
              min={1}
              value={form.ordem}
              onChange={handleChange}
              className="input-field"
            />
          </div>
        </div>
      </div>

      {/* Narrativa */}
      <div className="bg-navy-mid p-8 border border-blue-neon/10 space-y-5">
        <h2 className="label-tech text-blue-neon mb-6">Narrativa do case</h2>

        {[
          { name: 'diagnostico', label: 'Diagnóstico *', placeholder: 'Qual era o problema real que o projeto precisava resolver?' },
          { name: 'processo', label: 'Processo *', placeholder: 'O que foi feito, quais decisões foram tomadas e por quê?' },
          { name: 'resultado', label: 'Resultado *', placeholder: 'O que mudou após o projeto? Resultado entregue ou observado.' },
        ].map((field) => (
          <div key={field.name}>
            <label className="label-tech text-[10px] block mb-2">{field.label}</label>
            <textarea
              name={field.name}
              required
              rows={4}
              value={form[field.name as keyof ProjetoFormData] as string}
              onChange={handleChange}
              placeholder={field.placeholder}
              className="input-field resize-none"
            />
          </div>
        ))}
      </div>

      {/* Vídeo */}
      <div className="bg-navy-mid p-8 border border-blue-neon/10 space-y-5">
        <h2 className="label-tech text-blue-neon mb-6">Vídeo (opcional)</h2>
        <div>
          <label className="label-tech text-[10px] block mb-2">URL do YouTube ou Vimeo</label>
          <input
            type="url"
            name="video_url"
            value={form.video_url ?? ''}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, video_url: e.target.value || null }))
            }
            placeholder="https://www.youtube.com/watch?v=... ou https://vimeo.com/..."
            className="input-field"
          />
          <p className="font-poppins text-xs text-white/30 mt-2">
            Cole o link normal do vídeo — YouTube ou Vimeo. Aparece acima das imagens na página do case.
          </p>
        </div>
      </div>

      {/* Imagens */}
      <div className="bg-navy-mid p-8 border border-blue-neon/10 space-y-5">
        <h2 className="label-tech text-blue-neon mb-6">Imagens do projeto</h2>

        {/* Área de upload */}
        <div
          className={`border-2 border-dashed p-8 text-center cursor-pointer transition-colors duration-200 ${
            dragOver ? 'border-yellow-neon bg-yellow-neon/5' : 'border-blue-neon/20 hover:border-blue-neon/50'
          }`}
          onClick={() => fileInputRef.current?.click()}
          onDragOver={(e) => { e.preventDefault(); setDragOver(true) }}
          onDragLeave={() => setDragOver(false)}
          onDrop={handleDrop}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            multiple
            onChange={handleFileChange}
            className="hidden"
          />
          {uploading ? (
            <p className="font-poppins text-sm text-blue-neon">Enviando imagens...</p>
          ) : (
            <>
              <p className="font-poppins text-sm text-white/60">
                Arraste imagens aqui ou clique para selecionar
              </p>
              <p className="font-poppins text-xs text-white/30 mt-2">
                JPG, PNG, WebP · Múltiplas imagens aceitas
              </p>
            </>
          )}
        </div>

        {/* Preview das imagens */}
        {form.imagens.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {form.imagens.map((url) => (
              <div key={url} className="relative group">
                <div className={`aspect-video relative overflow-hidden border ${
                  form.imagem_capa === url ? 'border-yellow-neon' : 'border-blue-neon/20'
                }`}>
                  <Image src={url} alt="Preview" fill className="object-cover" sizes="200px" />
                  {form.imagem_capa === url && (
                    <span className="absolute top-1 left-1 bg-yellow-neon text-navy-deep font-poppins text-[9px] px-1.5 py-0.5 tracking-widest">
                      CAPA
                    </span>
                  )}
                </div>
                <div className="absolute inset-0 bg-navy-deep/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                  {form.imagem_capa !== url && (
                    <button
                      type="button"
                      onClick={() => definirCapa(url)}
                      className="font-poppins text-[10px] text-yellow-neon border border-yellow-neon/50 px-2 py-1 hover:bg-yellow-neon hover:text-navy-deep transition-colors"
                    >
                      Capa
                    </button>
                  )}
                  <button
                    type="button"
                    onClick={() => removerImagem(url)}
                    className="font-poppins text-[10px] text-red-diag border border-red-diag/50 px-2 py-1 hover:bg-red-diag hover:text-white transition-colors"
                  >
                    Remover
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Status e ações */}
      <div className="bg-navy-mid p-8 border border-blue-neon/10">
        <div className="flex items-center justify-between">
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              name="publicado"
              checked={form.publicado}
              onChange={handleChange}
              className="w-4 h-4 accent-yellow-neon"
            />
            <span className="font-poppins text-sm text-white">Publicar no site</span>
          </label>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => router.back()}
              className="btn-outline py-2 px-6 text-xs"
            >
              Cancelar
            </button>
            <button
              type="submit"
              disabled={saving || uploading}
              className="btn-primary disabled:opacity-50"
            >
              {saving ? 'Salvando...' : mode === 'create' ? 'Criar projeto' : 'Salvar alterações'}
            </button>
          </div>
        </div>

        {erro && (
          <p className="mt-4 font-poppins text-sm text-red-diag">{erro}</p>
        )}
      </div>
    </form>
  )
}
