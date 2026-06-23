import { redirect } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'
import { Projeto } from '@/types'
import { formatCategoria } from '@/lib/utils'
import AdminLogout from '@/components/admin/AdminLogout'

async function getProjetos(): Promise<Projeto[]> {
  const supabase = await createClient()
  const { data } = await supabase
    .from('projetos')
    .select('*')
    .order('ordem', { ascending: true })
  return data ?? []
}

export default async function AdminDashboard() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) redirect('/admin/login')

  const projetos = await getProjetos()

  return (
    <div className="min-h-screen bg-graphite">
      {/* Topbar */}
      <header className="bg-navy-deep border-b border-blue-neon/10 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <span className="title-impact text-2xl text-white tracking-[0.2em]">PLIXEL</span>
          <span className="label-tech text-white/30">Admin</span>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/" className="font-poppins text-xs text-white/40 hover:text-white tracking-widest uppercase transition-colors">
            Ver site →
          </Link>
          <AdminLogout />
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <h1 className="title-impact text-4xl text-white">PROJETOS</h1>
            <p className="font-poppins text-sm text-white/40 mt-1">
              {projetos.length} projeto{projetos.length !== 1 ? 's' : ''} cadastrado{projetos.length !== 1 ? 's' : ''}
            </p>
          </div>
          <Link href="/admin/projetos/novo" className="btn-primary">
            + Novo projeto
          </Link>
        </div>

        {/* Tabela */}
        {projetos.length === 0 ? (
          <div className="text-center py-24 border border-blue-neon/10">
            <p className="font-poppins text-white/40 mb-6">Nenhum projeto ainda.</p>
            <Link href="/admin/projetos/novo" className="btn-outline">
              Criar primeiro projeto
            </Link>
          </div>
        ) : (
          <div className="border border-blue-neon/10 overflow-hidden">
            {/* Header da tabela */}
            <div className="grid grid-cols-[auto_1fr_auto_auto_auto] gap-4 px-6 py-3 bg-navy-deep border-b border-blue-neon/10">
              <span className="label-tech text-[10px] w-8">Ord.</span>
              <span className="label-tech text-[10px]">Projeto</span>
              <span className="label-tech text-[10px] w-32">Categoria</span>
              <span className="label-tech text-[10px] w-20 text-center">Status</span>
              <span className="label-tech text-[10px] w-16" />
            </div>

            {/* Linhas */}
            {projetos.map((projeto) => (
              <div
                key={projeto.id}
                className="grid grid-cols-[auto_1fr_auto_auto_auto] gap-4 px-6 py-4 border-b border-blue-neon/5 hover:bg-navy-mid/30 items-center transition-colors"
              >
                <span className="font-poppins text-xs text-white/30 w-8 tabular-nums">
                  {projeto.ordem}
                </span>
                <div className="min-w-0">
                  <p className="font-poppins font-semibold text-sm text-white truncate">{projeto.titulo}</p>
                  <p className="font-poppins text-xs text-white/40">{projeto.cliente}</p>
                </div>
                <span className="font-poppins text-xs text-white/50 w-32">
                  {formatCategoria(projeto.categoria)}
                </span>
                <span className={`w-20 text-center font-poppins text-xs px-2 py-1 ${
                  projeto.publicado
                    ? 'text-green-valid bg-green-valid/10'
                    : 'text-white/40 bg-white/5'
                }`}>
                  {projeto.publicado ? 'Publicado' : 'Rascunho'}
                </span>
                <Link
                  href={`/admin/projetos/${projeto.id}`}
                  className="w-16 font-poppins text-xs text-blue-neon hover:text-white text-right transition-colors"
                >
                  Editar →
                </Link>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}
