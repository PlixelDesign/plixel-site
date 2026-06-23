export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
}

export function getEmbedUrl(url: string): string | null {
  if (!url) return null
  // YouTube Shorts: youtube.com/shorts/ID
  const shorts = url.match(/youtube\.com\/shorts\/([^?&/]+)/)
  if (shorts) return `https://www.youtube.com/embed/${shorts[1]}?rel=0&modestbranding=1`
  // YouTube normal: watch?v=ID ou youtu.be/ID
  const yt = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&?/]+)/)
  if (yt) return `https://www.youtube.com/embed/${yt[1]}?rel=0&modestbranding=1`
  // Vimeo: vimeo.com/ID
  const vi = url.match(/vimeo\.com\/(\d+)/)
  if (vi) return `https://player.vimeo.com/video/${vi[1]}?color=60A5FA&title=0&byline=0`
  // URL de embed direta — retorna como está
  if (url.includes('/embed/') || url.includes('player.vimeo')) return url
  return null
}

export function isVideoShorts(url: string): boolean {
  return url.includes('/shorts/')
}

export function formatCategoria(categoria: string): string {
  const map: Record<string, string> = {
    identidade_visual: 'Identidade Visual',
    social_media: 'Social Media',
    video: 'Vídeo',
    campanha: 'Campanha',
  }
  return map[categoria] ?? categoria
}
