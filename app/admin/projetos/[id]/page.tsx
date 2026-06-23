import { redirect, notFound } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'
import ProjectForm from '@/components/admin/ProjectForm'
import DeleteProjectButton from '@/components/admin/DeleteProjectButton'
import { Projeto } from '@/types'

async function getProjeto(id: string): Promise<Projeto | null> {
  const supabase = await createClient()
  const { data } = await supabase.from('projetos').select('*').eq('id', id).single()
  return data ?? null
}

export default async function EditarProjeto({ params }: { params: Promise<{ id: string }> }) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/admin/login')

  const { id } = await params
  const projeto = await getProjeto(id)
  if (!projeto) notFound()

  return (
    <div className="min-h-screen bg-graphite">
      <header className="bg-navy-deep border-b border-blue-neon/10 px-6 py-4 flex items-center gap-4">
        <Link href="/admin" className="font-poppins text-xs text-white/40 hover:text-white tracking-widest uppercase transition-colors">
          ← Dashboard
        </Link>
        <span className="text-white/20">/</span>
        <span className="label-tech text-blue-neon">{projeto.titulo}</span>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex items-start justify-between mb-10">
          <h1 className="title-impact text-4xl text-white">EDITAR PROJETO</h1>
          <DeleteProjectButton id={projeto.id} titulo={projeto.titulo} />
        </div>

        <ProjectForm mode="edit" initialData={projeto} />
      </main>
    </div>
  )
}
