'use client'

import { CaseData, JenniferCaseData } from '@/types'
import JenniferLemosCase, { DEFAULT_JENNIFER_CASE_DATA } from '@/components/cases/JenniferLemosCase'
import PlayfulVibrantTemplate from '@/components/cases/PlayfulVibrantTemplate'
import TechB2BTemplate from '@/components/cases/TechB2BTemplate'
import MinimalRetailTemplate from '@/components/cases/MinimalRetailTemplate'

interface TemplateRendererProps {
  caseData?: Partial<CaseData>
}

export default function TemplateRenderer({ caseData }: TemplateRendererProps) {
  const templateType = caseData?.template_type || 'LUXURY_EDITORIAL'

  // Normalização do objeto completo com fallback de segurança
  const fullCaseData: CaseData = {
    id: caseData?.id || 'default-id',
    slug: caseData?.slug || 'jennifer-lemos',
    titulo: caseData?.titulo || caseData?.copywriting?.title_line_1 || 'Jennifer Lemos',
    cliente: caseData?.cliente || 'Fotografia de Luxo',
    categoria: caseData?.categoria || 'sistemas_identidade',
    template_type: templateType,
    brand_fonts: caseData?.brand_fonts || {
      primary: 'Sinera',
      secondary: 'Bontias',
      tertiary: 'Julius Sans One',
    },
    palette: caseData?.palette || DEFAULT_JENNIFER_CASE_DATA.paletteColors,
    assets: {
      heroSymbol: caseData?.assets?.heroSymbol || DEFAULT_JENNIFER_CASE_DATA.heroSymbol,
      heroCover: caseData?.assets?.heroCover || DEFAULT_JENNIFER_CASE_DATA.heroSymbol,
      gridBImage: caseData?.assets?.gridBImage || DEFAULT_JENNIFER_CASE_DATA.gridBImage,
      gridCImage: caseData?.assets?.gridCImage || DEFAULT_JENNIFER_CASE_DATA.gridCImage,
      gridDImage: caseData?.assets?.gridDImage || DEFAULT_JENNIFER_CASE_DATA.gridDImage,
    },
    copywriting: {
      title_line_1: caseData?.copywriting?.title_line_1 || DEFAULT_JENNIFER_CASE_DATA.heroTitleLine1,
      title_line_2: caseData?.copywriting?.title_line_2 || DEFAULT_JENNIFER_CASE_DATA.heroTitleLine2,
      subtitle: caseData?.copywriting?.subtitle || DEFAULT_JENNIFER_CASE_DATA.heroSubtitle,
      diagnostico: caseData?.copywriting?.diagnostico || DEFAULT_JENNIFER_CASE_DATA.heroSubtitle,
      processo: caseData?.copywriting?.processo || 'Engenharia de marca & Blindagem vetorial.',
      resultado: caseData?.copywriting?.resultado || 'Posicionamento de alto ticket consolidado.',
      gridCLegend: caseData?.copywriting?.gridCLegend || DEFAULT_JENNIFER_CASE_DATA.gridCLegend,
    },
    publicado: caseData?.publicado ?? true,
  }

  // Renders the specific template based on template_type
  switch (fullCaseData.template_type) {
    case 'PLAYFUL_VIBRANT':
      return <PlayfulVibrantTemplate caseData={fullCaseData} />

    case 'TECH_B2B':
      return <TechB2BTemplate caseData={fullCaseData} />

    case 'MINIMAL_RETAIL':
      return <MinimalRetailTemplate caseData={fullCaseData} />

    case 'LUXURY_EDITORIAL':
    default: {
      // Converte para a prop legada de JenniferLemosCase
      const jenniferProps: Partial<JenniferCaseData> = {
        heroSymbol: fullCaseData.assets.heroSymbol,
        heroTitleLine1: fullCaseData.copywriting.title_line_1,
        heroTitleLine2: fullCaseData.copywriting.title_line_2,
        heroSubtitle: fullCaseData.copywriting.subtitle,
        paletteColors: fullCaseData.palette,
        gridBImage: fullCaseData.assets.gridBImage,
        gridCImage: fullCaseData.assets.gridCImage,
        gridCLegend: fullCaseData.copywriting.gridCLegend,
        gridDImage: fullCaseData.assets.gridDImage,
      }
      return <JenniferLemosCase data={jenniferProps} />
    }
  }
}
