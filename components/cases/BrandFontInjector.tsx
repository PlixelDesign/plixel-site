'use client'

import { useLayoutEffect } from 'react'
import { BrandFontConfig } from '@/types'

interface BrandFontInjectorProps {
  fonts?: BrandFontConfig
}

export default function BrandFontInjector({ fonts }: BrandFontInjectorProps) {
  useLayoutEffect(() => {
    if (!fonts) return

    const styleId = 'brand-font-injector-style'
    let styleEl = document.getElementById(styleId) as HTMLStyleElement

    if (!styleEl) {
      styleEl = document.createElement('style')
      styleEl.id = styleId
      document.head.appendChild(styleEl)
    }

    const primaryFont = fonts.primary || 'Sinera, var(--font-dm-serif), Georgia, serif'
    const secondaryFont = fonts.secondary || 'Bontias, var(--font-dm-serif), Didot, serif'
    const tertiaryFont = fonts.tertiary || 'var(--font-julius), "Julius Sans One", var(--font-plus-jakarta), sans-serif'

    let cssRules = ''

    // Se a fonte primária for uma URL HTTP (ex: Google Fonts ou .woff2), gera o @import
    if (fonts.primary?.startsWith('http')) {
      cssRules += `@import url('${fonts.primary}');\n`
    }
    if (fonts.secondary?.startsWith('http')) {
      cssRules += `@import url('${fonts.secondary}');\n`
    }
    if (fonts.tertiary?.startsWith('http')) {
      cssRules += `@import url('${fonts.tertiary}');\n`
    }

    // Regras de escopo isolado
    cssRules += `
      .brand-font-primary {
        font-family: ${primaryFont.startsWith('http') ? '"BrandPrimary", serif' : primaryFont};
      }
      .brand-font-secondary {
        font-family: ${secondaryFont.startsWith('http') ? '"BrandSecondary", serif' : secondaryFont};
      }
      .brand-font-tertiary {
        font-family: ${tertiaryFont.startsWith('http') ? '"BrandTertiary", sans-serif' : tertiaryFont};
      }
    `

    styleEl.innerHTML = cssRules
  }, [fonts])

  return null
}
