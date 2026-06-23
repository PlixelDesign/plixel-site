import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'Admin — Plixel',
    template: '%s | Admin Plixel',
  },
  robots: { index: false, follow: false },
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-graphite font-poppins">
      {children}
    </div>
  )
}
