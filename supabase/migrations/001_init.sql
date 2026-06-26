-- Habilitar extensão UUID
create extension if not exists "uuid-ossp";

-- =============================================
-- TABELA PROJETOS
-- =============================================
create type categoria_enum as enum (
  'identidade_visual',
  'social_media',
  'video',
  'campanha',
  'artes_avulsas',
  'estruturacao'
);

create table if not exists projetos (
  id          uuid primary key default uuid_generate_v4(),
  slug        text unique not null,
  titulo      text not null,
  cliente     text not null,
  categoria   categoria_enum not null,
  diagnostico text not null default '',
  processo    text not null default '',
  resultado   text not null default '',
  imagens     text[] not null default '{}',
  imagem_capa text not null default '',
  ordem       integer not null default 99,
  publicado   boolean not null default false,
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now()
);

-- Índices
create index on projetos (publicado, ordem);
create index on projetos (categoria);

-- Trigger para updated_at automático
create or replace function set_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger projetos_updated_at
  before update on projetos
  for each row execute function set_updated_at();

-- =============================================
-- RLS (Row Level Security)
-- =============================================
alter table projetos enable row level security;

-- Leitura pública: qualquer um pode ver projetos publicados
create policy "Projetos publicados são públicos"
  on projetos for select
  using (publicado = true);

-- Admin (usuário autenticado) pode tudo
create policy "Admin lê todos os projetos"
  on projetos for select
  to authenticated
  using (true);

create policy "Admin insere projetos"
  on projetos for insert
  to authenticated
  with check (true);

create policy "Admin atualiza projetos"
  on projetos for update
  to authenticated
  using (true)
  with check (true);

create policy "Admin exclui projetos"
  on projetos for delete
  to authenticated
  using (true);

-- =============================================
-- STORAGE BUCKET PARA IMAGENS
-- =============================================
-- Execute esse bloco no Supabase Dashboard > Storage > New bucket
-- Name: imagens
-- Public bucket: SIM
-- Ou via SQL (requer extensão storage):
--
-- insert into storage.buckets (id, name, public)
-- values ('imagens', 'imagens', true)
-- on conflict do nothing;
--
-- create policy "Imagens públicas para leitura"
--   on storage.objects for select
--   using (bucket_id = 'imagens');
--
-- create policy "Autenticados podem fazer upload"
--   on storage.objects for insert
--   to authenticated
--   with check (bucket_id = 'imagens');
--
-- create policy "Autenticados podem deletar imagens"
--   on storage.objects for delete
--   to authenticated
--   using (bucket_id = 'imagens');
