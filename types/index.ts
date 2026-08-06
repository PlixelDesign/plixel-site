export type Categoria =
  | 'sistemas_identidade'
  | 'design_ops'
  | 'pontos_contato'
  | 'direcao_arte'

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
  sistemas_identidade: 'Sistemas de Identidade',
  design_ops: 'Design Ops & Manuais',
  pontos_contato: 'Pontos de Contato',
  direcao_arte: 'Direção de Arte',
}
