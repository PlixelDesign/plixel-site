import { redirect } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'
import ProjectForm from '@/components/admin/ProjectForm'

export default async function NovoProjeto() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/admin/login')

  return (
    <div className="min-h-screen bg-graphite">
      <header className="bg-navy-deep border-b border-blue-neon/10 px-6 py-4 flex items-center gap-4">
        <Link href="/admin" className="font-poppins text-xs text-white/40 hover:text-white tracking-widest uppercase transition-colors">
          ← Dashboard
        </Link>
        <span className="text-white/20">/</span>
        <span className="label-tech text-blue-neon">Novo projeto</span>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="title-impact text-4xl text-white mb-10">NOVO PROJETO</h1>
        <ProjectForm mode="create" />
      </main>
    </div>
  )
}
