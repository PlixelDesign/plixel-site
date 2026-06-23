'use client'

import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'

export default function DeleteProjectButton({ id, titulo }: { id: string; titulo: string }) {
  const router = useRouter()

  async function handleDelete() {
    if (!confirm(`Tem certeza que quer excluir "${titulo}"? Essa ação não pode ser desfeita.`)) return

    const supabase = createClient()
    const { error } = await supabase.from('projetos').delete().eq('id', id)
    if (error) { alert('Erro ao excluir: ' + error.message); return }
    router.push('/admin')
    router.refresh()
  }

  return (
    <button
      onClick={handleDelete}
      className="font-poppins text-xs text-red-diag/50 hover:text-red-diag border border-red-diag/20 hover:border-red-diag/50 px-4 py-2 tracking-widest uppercase transition-colors duration-200"
    >
      Excluir projeto
    </button>
  )
}
