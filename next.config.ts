import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'standalone',
  async redirects() {
    return [
      {
        source: '/trabalho',
        destination: '/trabalhos',
        permanent: true,
      },
      {
        source: '/cases',
        destination: '/trabalhos',
        permanent: true,
      },
      {
        source: '/portfolio',
        destination: '/trabalhos',
        permanent: true,
      },
      {
        source: '/trabalhos/ucadis/central-da-marca',
        destination: '/trabalhos/central-da-marca',
        permanent: true,
      },
      {
        source: '/trabalhos/identidade-visual-ucadis/central-da-marca',
        destination: '/trabalhos/central-da-marca',
        permanent: true,
      },
      {
        source: '/trabalhos/identidade-visual-ucadis',
        destination: '/trabalhos/central-da-marca',
        permanent: true,
      },
      {
        source: '/trabalhos/jing-long',
        destination: '/trabalhos/jing-long/central-da-marca',
        permanent: true,
      },
    ]
  },
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
