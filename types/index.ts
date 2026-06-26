export type Categoria = 'identidade_visual' | 'social_media' | 'video' | 'campanha' | 'artes_avulsas' | 'estruturacao'

export interface Projeto {
  id: string
  slug: string
  titulo: string
  cliente: string
  categoria: Categoria
  diagnostico: string
  processo: string
  resultado: string
  imagens: string[]
  imagem_capa: string
  video_url: string | null
  ordem: number
  publicado: boolean
  created_at: string
  updated_at: string
}

export const CATEGORIA_LABELS: Record<Categoria, string> = {
  identidade_visual: 'Identidade Visual',
  social_media: 'Social Media',
  video: 'Vídeo',
  campanha: 'Campanha',
  artes_avulsas: 'Artes Avulsas',
  estruturacao: 'Estruturação de Perfil',
}
