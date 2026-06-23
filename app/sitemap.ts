import { MetadataRoute } from 'next'
import { createClient } from '@/lib/supabase/server'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = 'https://plixel.com.br'

  const supabase = await createClient()
  const { data: projetos } = await supabase
    .from('projetos')
    .select('slug, updated_at')
    .eq('publicado', true)

  const projetoRoutes = (projetos ?? []).map((p) => ({
    url: `${base}/trabalhos/${p.slug}`,
    lastModified: new Date(p.updated_at),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [
    { url: base, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/trabalhos`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/sobre`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/contato`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    ...projetoRoutes,
  ]
}
