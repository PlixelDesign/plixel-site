'use client'

import { useState, useRef } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { createClient } from '@/lib/supabase/client'
import {
  Projeto,
  Categoria,
  CATEGORIA_LABELS,
  TemplateType,
  TEMPLATE_TYPE_LABELS,
  BrandFontConfig,
  ColorSwatchData,
  CaseAssets,
  CaseCopywriting,
} from '@/types'
import { slugify } from '@/lib/utils'

type ProjetoFormData = Omit<Projeto, 'id' | 'slug' | 'created_at' | 'updated_at'>

interface ProjectFormProps {
  initialData?: Projeto
  mode: 'create' | 'edit'
}

const DICAS_IMAGEM: Record<Categoria, string> = {
  sistemas_identidade: 'Capa com a marca aplicada. Depois paleta, tipografia e aplicações.',
  design_ops: 'Manual de marca, diretrizes visuais e grid de governança.',
  pontos_contato: 'Sinalização, uniformes, embalagens e suportes físicos.',
  direcao_arte: 'Peças em conjunto, feed, anúncios e esteira de produção.',
}

export default function ProjectForm({ initialData, mode }: ProjectFormProps) {
  const router = useRouter()
  const fileInputRef = useRef<HTMLInputElement>(null)

  const [form, setForm] = useState<ProjetoFormData>({
    titulo: initialData?.titulo ?? '',
    cliente: initialData?.cliente ?? '',
    categoria: initialData?.categoria ?? 'sistemas_identidade',
    diagnostico: initialData?.diagnostico ?? '',
    processo: initialData?.processo ?? '',
    resultado: initialData?.resultado ?? '',
    imagens: initialData?.imagens ?? [],
    imagem_capa: initialData?.imagem_capa ?? '',
    video_url: initialData?.video_url ?? null,
    ordem: initialData?.ordem ?? 99,
    publicado: initialData?.publicado ?? false,
    template_type: initialData?.template_type ?? 'LUXURY_EDITORIAL',
    brand_fonts: initialData?.brand_fonts ?? {
      primary: 'Sinera',
      secondary: 'Bontias',
      tertiary: 'Julius Sans One',
    },
    palette: initialData?.palette ?? [
      { hex: '#001c4a', name: 'Marinho Institucional', role: 'Corpo & Contratos', textHex: '#F5F5F5', verticalLabel: 'Azul Ultramarino / Real' },
      { hex: '#ffd2a9', name: 'Nude de Suporte', role: 'Acento & Hot Stamping', textHex: '#001c4a', verticalLabel: 'Creme Salmão / Nude' },
      { hex: '#F5F5F5', name: 'Branco Puro', role: 'Acolhimento Editorial', textHex: '#001c4a', verticalLabel: 'Off-White Acetinado' },
      { hex: '#001130', name: 'Variante de Contraste', role: 'Profundidade Noturna', textHex: '#F5F5F5', verticalLabel: 'Marinho Sólido Noturno' },
    ],
    assets: initialData?.assets ?? {
      heroSymbol: '',
      heroCover: '',
      gridBImage: '',
      gridCImage: '',
      gridDImage: '',
    },
    copywriting: initialData?.copywriting ?? {
      title_line_1: '',
      title_line_2: '',
      subtitle: '',
      gridCLegend: '',
    },
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

  function handleFontChange(field: keyof BrandFontConfig, value: string) {
    setForm((prev) => ({
      ...prev,
      brand_fonts: {
        ...prev.brand_fonts,
        [field]: value,
      },
    }))
  }

  function handleCopywritingChange(field: keyof CaseCopywriting, value: string) {
    setForm((prev) => ({
      ...prev,
      copywriting: {
        ...prev.copywriting,
        [field]: value,
      },
    }))
  }

  function handleAssetChange(field: keyof CaseAssets, value: string) {
    setForm((prev) => ({
      ...prev,
      assets: {
        ...prev.assets,
        [field]: value,
      },
    }))
  }

  function handlePaletteChange(index: number, field: keyof ColorSwatchData, value: string) {
    setForm((prev) => {
      const palette = [...(prev.palette || [])]
      palette[index] = { ...palette[index], [field]: value }
      return { ...prev, palette }
    })
  }

  function addPaletteSwatch() {
    setForm((prev) => ({
      ...prev,
      palette: [
        ...(prev.palette || []),
        { hex: '#000000', name: 'Nova Cor', role: 'Acento', textHex: '#FFFFFF', verticalLabel: 'Cor Customizada' },
      ],
    }))
  }

  function removePaletteSwatch(index: number) {
    setForm((prev) => ({
      ...prev,
      palette: (prev.palette || []).filter((_, i) => i !== index),
    }))
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
    const payload = {
      ...form,
      slug,
    }

    const legacyPayload = {
      titulo: form.titulo,
      cliente: form.cliente,
      categoria: form.categoria,
      diagnostico: form.diagnostico,
      processo: form.processo,
      resultado: form.resultado,
      imagens: form.imagens,
      imagem_capa: form.imagem_capa,
      video_url: form.video_url,
      ordem: form.ordem,
      publicado: form.publicado,
      slug,
    }

    const trySave = async (dataPayload: any) => {
      if (mode === 'create') {
        return await supabase.from('projetos').insert(dataPayload)
      } else {
        return await supabase
          .from('projetos')
          .update({ ...dataPayload, updated_at: new Date().toISOString() })
          .eq('id', initialData!.id)
      }
    }

    const CATEGORY_CANDIDATES: Record<Categoria, string[]> = {
      sistemas_identidade: [
        'sistemas_identidade',
        'Sistemas de Identidade',
        'sistemas-identidade',
        'sistemas_de_identidade',
        'SISTEMAS_IDENTIDADE',
        'sistemas',
        'identidade',
      ],
      design_ops: [
        'design_ops',
        'Design Ops & Manuais',
        'design-ops',
        'Design Ops',
        'DESIGN_OPS',
      ],
      pontos_contato: [
        'pontos_contato',
        'Pontos de Contato',
        'pontos-contato',
        'PONTOS_CONTATO',
      ],
      direcao_arte: [
        'direcao_arte',
        'Direção de Arte',
        'direcao-arte',
        'Direcao de Arte',
        'DIRECAO_ARTE',
      ],
    }

    let res: any = null
    const candidates = CATEGORY_CANDIDATES[form.categoria as Categoria] || [form.categoria]

    for (const catVal of candidates) {
      // Tenta salvar payload completo
      res = await trySave({ ...payload, categoria: catVal })
      if (!res.error) break

      // Se falhar por colunas JSONB ausentes
      if (res.error && res.error.message.includes('schema cache')) {
        res = await trySave({ ...legacyPayload, categoria: catVal })
        if (!res.error) break
      }

      // Se o erro NÃO for relacionado ao enum de categoria, encerra o loop
      if (!res.error.message.includes('categoria_enum') && !res.error.message.includes('enum')) {
        break
      }
    }

    if (res?.error) {
      setErro(`Erro Supabase: ${res.error.message}`)
      setSaving(false)
      return
    }

    router.push('/admin')
    router.refresh()
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8 max-w-4xl">
      {/* 01. SELEÇÃO DE TEMPLATE POR TIPO DE MARCA */}
      <div className="bg-navy-mid p-8 border border-blue-neon/20 space-y-6 rounded-xl">
        <div>
          <h2 className="label-tech text-yellow-neon text-sm mb-1">01. Seletor de Template por Tipo de Marca</h2>
          <p className="text-xs text-white/50">
            Escolha o modelo de layout editorial que melhor se adapta à estética da marca do cliente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {(Object.entries(TEMPLATE_TYPE_LABELS) as [TemplateType, string][]).map(([type, label]) => (
            <div
              key={type}
              onClick={() => setForm((prev) => ({ ...prev, template_type: type }))}
              className={`p-5 rounded-lg border cursor-pointer transition-all duration-200 ${
                form.template_type === type
                  ? 'border-yellow-neon bg-yellow-neon/10 shadow-lg'
                  : 'border-white/10 bg-navy-deep/60 hover:border-white/30'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono font-bold uppercase text-[#ffd2a9]">
                  {type}
                </span>
                {form.template_type === type && (
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-neon animate-pulse" />
                )}
              </div>
              <p className="text-sm font-semibold text-white">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 02. GESTÃO TIPOGRÁFICA DA MARCA */}
      <div className="bg-navy-mid p-8 border border-blue-neon/20 space-y-6 rounded-xl">
        <div>
          <h2 className="label-tech text-blue-neon text-sm mb-1">02. Gestão Tipográfica da Marca</h2>
          <p className="text-xs text-white/50">
            Defina as fontes oficiais da marca (.woff2, WebFont ou declaração de sistema).
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div>
            <label className="label-tech text-[10px] block mb-2">Fonte Primária (Títulos/H1)</label>
            <input
              type="text"
              value={form.brand_fonts?.primary || ''}
              onChange={(e) => handleFontChange('primary', e.target.value)}
              placeholder="Ex: Sinera, DM Serif Display ou URL"
              className="input-field"
            />
          </div>
          <div>
            <label className="label-tech text-[10px] block mb-2">Fonte Secundária (Subtítulos/Destaques)</label>
            <input
              type="text"
              value={form.brand_fonts?.secondary || ''}
              onChange={(e) => handleFontChange('secondary', e.target.value)}
              placeholder="Ex: Bontias, Plus Jakarta Sans ou URL"
              className="input-field"
            />
          </div>
          <div>
            <label className="label-tech text-[10px] block mb-2">Fonte Terciária (Corpo/Legendas)</label>
            <input
              type="text"
              value={form.brand_fonts?.tertiary || ''}
              onChange={(e) => handleFontChange('tertiary', e.target.value)}
              placeholder="Ex: Julius Sans One, Inter ou URL"
              className="input-field"
            />
          </div>
        </div>
      </div>

      {/* 03. PALETA OFICIAL DE CORES DA MARCA */}
      <div className="bg-navy-mid p-8 border border-blue-neon/20 space-y-6 rounded-xl">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="label-tech text-blue-neon text-sm mb-1">03. Paleta Oficial de Cores</h2>
            <p className="text-xs text-white/50">
              Configure as amostras de cor no código Tailwind e legendas técnicas.
            </p>
          </div>
          <button
            type="button"
            onClick={addPaletteSwatch}
            className="text-xs font-bold text-yellow-neon border border-yellow-neon/40 px-3 py-1.5 rounded hover:bg-yellow-neon hover:text-navy-deep transition-colors"
          >
            + Adicionar Cor
          </button>
        </div>

        <div className="space-y-4">
          {(form.palette || []).map((color, idx) => (
            <div key={idx} className="p-4 bg-navy-deep/80 border border-white/10 rounded-lg grid grid-cols-1 sm:grid-cols-5 gap-3 items-center">
              <div className="flex items-center gap-2">
                <input
                  type="color"
                  value={color.hex}
                  onChange={(e) => handlePaletteChange(idx, 'hex', e.target.value)}
                  className="w-8 h-8 rounded border-none cursor-pointer bg-transparent"
                />
                <input
                  type="text"
                  value={color.hex}
                  onChange={(e) => handlePaletteChange(idx, 'hex', e.target.value)}
                  className="input-field text-xs font-mono"
                  placeholder="#Hex"
                />
              </div>
              <input
                type="text"
                value={color.name}
                onChange={(e) => handlePaletteChange(idx, 'name', e.target.value)}
                className="input-field text-xs"
                placeholder="Nome da cor"
              />
              <input
                type="text"
                value={color.role}
                onChange={(e) => handlePaletteChange(idx, 'role', e.target.value)}
                className="input-field text-xs"
                placeholder="Aplicação/Papel"
              />
              <input
                type="text"
                value={color.verticalLabel || ''}
                onChange={(e) => handlePaletteChange(idx, 'verticalLabel', e.target.value)}
                className="input-field text-xs"
                placeholder="Legenda Vertical"
              />
              <button
                type="button"
                onClick={() => removePaletteSwatch(idx)}
                className="text-xs text-red-400 hover:text-red-300 underline text-right"
              >
                Remover
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* 04. DADOS BÁSICOS & COPYWRITING */}
      <div className="bg-navy-mid p-8 border border-blue-neon/20 space-y-5 rounded-xl">
        <h2 className="label-tech text-blue-neon text-sm mb-4">04. Dados &amp; Copywriting da Marca</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="label-tech text-[10px] block mb-2">Título do Projeto *</label>
            <input
              type="text"
              name="titulo"
              required
              value={form.titulo}
              onChange={handleChange}
              placeholder="Ex: Jennifer Lemos"
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
            <label className="label-tech text-[10px] block mb-2">Título Hero - Linha 1</label>
            <input
              type="text"
              value={form.copywriting?.title_line_1 || ''}
              onChange={(e) => handleCopywritingChange('title_line_1', e.target.value)}
              placeholder="Ex: Jennifer Lemos"
              className="input-field"
            />
          </div>
          <div>
            <label className="label-tech text-[10px] block mb-2">Título Hero - Linha 2</label>
            <input
              type="text"
              value={form.copywriting?.title_line_2 || ''}
              onChange={(e) => handleCopywritingChange('title_line_2', e.target.value)}
              placeholder="Ex: Posicionamento de Luxo"
              className="input-field"
            />
          </div>
        </div>

        <div>
          <label className="label-tech text-[10px] block mb-2">Subtítulo Hero (Headline de Negócio)</label>
          <textarea
            rows={2}
            value={form.copywriting?.subtitle || ''}
            onChange={(e) => handleCopywritingChange('subtitle', e.target.value)}
            placeholder="Romper a barreira de precificação..."
            className="input-field resize-none"
          />
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

        {/* Diagnóstico / Processo / Resultado */}
        <div className="space-y-4 pt-4 border-t border-white/10">
          <div>
            <label className="label-tech text-[10px] block mb-2">01. Diagnóstico *</label>
            <textarea
              name="diagnostico"
              required
              rows={3}
              value={form.diagnostico}
              onChange={handleChange}
              placeholder="Qual era o problema de marca a ser resolvido?"
              className="input-field resize-none"
            />
          </div>
          <div>
            <label className="label-tech text-[10px] block mb-2">02. Processo *</label>
            <textarea
              name="processo"
              required
              rows={3}
              value={form.processo}
              onChange={handleChange}
              placeholder="Quais estratégias de design foram tomadas?"
              className="input-field resize-none"
            />
          </div>
          <div>
            <label className="label-tech text-[10px] block mb-2">03. Resultado *</label>
            <textarea
              name="resultado"
              required
              rows={3}
              value={form.resultado}
              onChange={handleChange}
              placeholder="Quais foram os ganhos percebidos pelo cliente?"
              className="input-field resize-none"
            />
          </div>
        </div>
      </div>

      {/* 05. ASSETS ESPECÍFICOS & UPLOAD DE IMAGENS */}
      <div className="bg-navy-mid p-8 border border-blue-neon/20 space-y-6 rounded-xl">
        <h2 className="label-tech text-blue-neon text-sm mb-4">05. Mapeamento de Assets Específicos</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="label-tech text-[10px] block mb-2">Hero Symbol / Capa</label>
            <input
              type="text"
              value={form.assets?.heroSymbol || ''}
              onChange={(e) => handleAssetChange('heroSymbol', e.target.value)}
              placeholder="/images/Cases/Jennifer-Lemos/jl-hero-capa.png"
              className="input-field"
            />
          </div>
          <div>
            <label className="label-tech text-[10px] block mb-2">Grid B - Engenharia Vetorial</label>
            <input
              type="text"
              value={form.assets?.gridBImage || ''}
              onChange={(e) => handleAssetChange('gridBImage', e.target.value)}
              placeholder="/images/Cases/Jennifer-Lemos/jl-engenharia-logos-responsivos.png"
              className="input-field"
            />
          </div>
          <div>
            <label className="label-tech text-[10px] block mb-2">Grid C - Pattern / Grafismo</label>
            <input
              type="text"
              value={form.assets?.gridCImage || ''}
              onChange={(e) => handleAssetChange('gridCImage', e.target.value)}
              placeholder="/images/Cases/Jennifer-Lemos/jl-mockup-pattern.png"
              className="input-field"
            />
          </div>
          <div>
            <label className="label-tech text-[10px] block mb-2">Grid D - Service Design / Unboxing</label>
            <input
              type="text"
              value={form.assets?.gridDImage || ''}
              onChange={(e) => handleAssetChange('gridDImage', e.target.value)}
              placeholder="/images/Cases/Jennifer-Lemos/jl-mockup-unboxing-luxo.png"
              className="input-field"
            />
          </div>
        </div>

        {/* Upload de Galeria Supabase */}
        <div className="space-y-4 pt-4 border-t border-white/10">
          <label className="label-tech text-[10px] block">Galeria de Imagens &amp; Mockups</label>
          <div
            className={`border-2 border-dashed p-8 text-center cursor-pointer transition-colors duration-200 rounded-lg ${
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
                <p className="font-poppins text-xs text-blue-neon/70 mt-2 max-w-md mx-auto">
                  {DICAS_IMAGEM[form.categoria]}
                </p>
              </>
            )}
          </div>

          {/* Previews */}
          {form.imagens.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {form.imagens.map((url) => (
                <div key={url} className="relative group">
                  <div className={`aspect-video relative overflow-hidden border rounded ${
                    form.imagem_capa === url ? 'border-yellow-neon' : 'border-blue-neon/20'
                  }`}>
                    <Image src={url} alt="Preview" fill className="object-cover" sizes="200px" />
                    {form.imagem_capa === url && (
                      <span className="absolute top-1 left-1 bg-yellow-neon text-navy-deep font-poppins text-[9px] px-1.5 py-0.5 tracking-widest font-bold">
                        CAPA
                      </span>
                    )}
                  </div>
                  <div className="absolute inset-0 bg-navy-deep/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 rounded">
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
      </div>

      {/* AÇÕES FINAIS */}
      <div className="bg-navy-mid p-8 border border-blue-neon/20 rounded-xl flex items-center justify-between">
        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            name="publicado"
            checked={form.publicado}
            onChange={handleChange}
            className="w-4 h-4 accent-yellow-neon"
          />
          <span className="font-poppins text-sm text-white font-semibold">Publicar no site</span>
        </label>

        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => router.back()}
            className="btn-outline py-2.5 px-6 text-xs"
          >
            Cancelar
          </button>
          <button
            type="submit"
            disabled={saving || uploading}
            className="btn-primary disabled:opacity-50 py-2.5 px-8 text-xs font-bold uppercase tracking-wider"
          >
            {saving ? 'Salvando...' : mode === 'create' ? 'Criar projeto' : 'Salvar alterações'}
          </button>
        </div>

        {erro && (
          <p className="mt-4 font-poppins text-sm text-red-diag">{erro}</p>
        )}
      </div>
    </form>
  )
}
