import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    // AVIF primeiro (mais leve que WebP), com WebP de fallback. As imagens já
    // são servidas em srcset responsivo via next/image + atributo sizes.
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.supabase.co',
        pathname: '/storage/v1/object/public/**',
      },
    ],
  },
}

export default nextConfig
