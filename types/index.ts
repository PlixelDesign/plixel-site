export type Categoria =
  | 'sistemas_identidade'
  | 'design_ops'
  | 'pontos_contato'
  | 'direcao_arte'

export type TemplateType =
  | 'LUXURY_EDITORIAL'
  | 'TECH_B2B'
  | 'PLAYFUL_VIBRANT'
  | 'MINIMAL_RETAIL'

export const TEMPLATE_TYPE_LABELS: Record<TemplateType, string> = {
  LUXURY_EDITORIAL: 'Template 01 — Luxo & Editorial (Behance / Premium)',
  PLAYFUL_VIBRANT: 'Template 02 — Vibrante & Jovem (Cards Arredondados)',
  TECH_B2B: 'Template 03 — Tech, Corporate & B2B (Design Ops & KPIs)',
  MINIMAL_RETAIL: 'Template 04 — Minimalista & Varejo (Embalagens & Produtos)',
}

export interface BrandFontConfig {
  primary?: string     // e.g. 'Sinera', 'DM Serif Display', or font URL
  secondary?: string   // e.g. 'Bontias', 'Plus Jakarta Sans', or font URL
  tertiary?: string    // e.g. 'Julius Sans One', 'Poppins', or font URL
}

export interface ColorSwatchData {
  hex: string
  name: string
  role: string
  textHex: string
  verticalLabel?: string
}

export interface CaseAssets {
  heroSymbol?: string
  heroCover?: string
  gridBImage?: string
  gridCImage?: string
  gridDImage?: string
  mockups?: string[]
}

export interface CaseCopywriting {
  title_line_1?: string
  title_line_2?: string
  subtitle?: string
  diagnostico?: string
  processo?: string
  resultado?: string
  gridCLegend?: string
}

export interface CaseData {
  id?: string
  slug: string
  titulo: string
  cliente: string
  categoria: Categoria
  template_type: TemplateType
  brand_fonts: BrandFontConfig
  palette: ColorSwatchData[]
  assets: CaseAssets
  copywriting: CaseCopywriting
  publicado: boolean
  ordem?: number
  imagem_capa?: string
  diagnostico?: string
  processo?: string
  resultado?: string
  created_at?: string
  updated_at?: string
}

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
  template_type?: TemplateType
  brand_fonts?: BrandFontConfig
  palette?: ColorSwatchData[]
  assets?: CaseAssets
  copywriting?: CaseCopywriting
  created_at: string
  updated_at: string
}

export const CATEGORIA_LABELS: Record<Categoria, string> = {
  sistemas_identidade: 'Sistemas de Identidade',
  design_ops: 'Design Ops & Manuais',
  pontos_contato: 'Pontos de Contato',
  direcao_arte: 'Direção de Arte',
}

export interface JenniferCaseData {
  heroSymbol: string
  heroTitleLine1: string
  heroTitleLine2: string
  heroSubtitle: string
  paletteColors: ColorSwatchData[]
  gridBImage: string
  gridCImage: string
  gridCLegend: string
  gridDImage: string
}
