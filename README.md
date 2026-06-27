# Plixel — Site Institucional e Portfólio

Site institucional e portfólio da Plixel, construído com Next.js 15 (App Router), Supabase e Tailwind CSS.

---

## Stack

- **Next.js 15** com App Router e TypeScript
- **Supabase** — autenticação, banco PostgreSQL e storage de imagens
- **Tailwind CSS** configurado com os tokens do Design System Plixel
- **Vercel** para deploy

---

## Configuração do Supabase

### 1. Criar projeto no Supabase

Acesse [supabase.com](https://supabase.com), crie uma conta e um novo projeto. Anote a **Project URL** e a **anon public key** (disponíveis em Settings → API).

### 2. Criar as tabelas

No Supabase, vá em **SQL Editor** e execute o conteúdo de `supabase/migrations/001_init.sql`.

Esse arquivo cria:
- A tabela `projetos` com todos os campos necessários
- Os índices para performance
- As políticas de RLS (visitantes veem só publicados; admin autenticado vê e edita tudo)

### 3. Criar o bucket de imagens

No Supabase, vá em **Storage → New bucket**:
- Name: `imagens`
- Public bucket: **SIM** (marcar como público)

Depois configure as políticas do bucket via **SQL Editor** (as políticas estão comentadas no final de `001_init.sql`).

### 4. Criar o usuário admin

No Supabase, vá em **Authentication → Users → Invite user** e cadastre o e-mail e senha do Daniel.

Alternativamente, via SQL:
```sql
-- Não execute isso em produção — use o Dashboard ou a API de sign-up
select auth.create_user(
  uid := gen_random_uuid(),
  email := 'danielpires@grupoplixel.com',
  password := '040618dm',
  email_confirm := true
);
```

### 5. Cadastrar o seed inicial (case UCADIS)

Execute `supabase/seed.sql` no SQL Editor para cadastrar o case da UCADIS como primeiro projeto.

---

## Variáveis de ambiente

Copie `.env.local.example` para `.env.local` e preencha:

```bash
cp .env.local.example .env.local
```

```env
NEXT_PUBLIC_SUPABASE_URL=https://xxxxxxxxxxxxxxxxxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

Ambas as chaves estão em **Supabase → Settings → API**.

---

## Rodar localmente

```bash
npm install
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

O painel admin fica em [http://localhost:3000/admin/login](http://localhost:3000/admin/login).

---

## Deploy na Vercel

### 1. Repositório no GitHub

Crie um repositório no GitHub (pode ser privado), suba o código:

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/seu-usuario/plixel-site.git
git push -u origin main
```

### 2. Conectar na Vercel

- Acesse [vercel.com](https://vercel.com)
- "Add New → Project" → conecte o repositório
- Na seção **Environment Variables**, adicione:
  - `NEXT_PUBLIC_SUPABASE_URL`
  - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- Clique em **Deploy**

### 3. Domínio próprio

Em Vercel → Project → Settings → Domains, adicione `grupoplixel.com.br`.

No seu registrador de domínio, aponte os DNS para a Vercel (eles mostram os registros exatos na hora de adicionar o domínio).

Depois que o domínio estiver configurado, atualize `metadataBase` em `app/layout.tsx` com a URL correta.

---

## O que falta antes de publicar

| Item | Onde alterar |
|---|---|
| Textos institucionais (manifesto, sobre, processo, CTA) | Arquivos marcados com `[CONTEÚDO A SER FORNECIDO POR DANIEL]` |
| Número de WhatsApp real | `app/contato/page.tsx` e `components/layout/Footer.tsx` |
| E-mail real | `components/layout/Footer.tsx` |
| Imagens dos projetos | Painel admin → editar cada projeto → upload de imagens |
| Logo PNG nos assets | `public/assets/plixel-logo-navy.png` e `plixel-logo-white.png` |
| Imagem OG (Open Graph) | `public/og-image.png` (1200×630px) |
| URL do domínio | `app/layout.tsx` → `metadataBase` |

---

## Estrutura do projeto

```
plixel-site/
├── app/
│   ├── page.tsx              # Home
│   ├── trabalhos/
│   │   ├── page.tsx          # Listagem de cases
│   │   └── [slug]/page.tsx   # Case individual
│   ├── sobre/page.tsx
│   ├── contato/page.tsx
│   ├── admin/
│   │   ├── page.tsx          # Dashboard
│   │   ├── login/page.tsx
│   │   └── projetos/
│   │       ├── novo/page.tsx
│   │       └── [id]/page.tsx
│   ├── sitemap.ts
│   ├── robots.ts
│   └── globals.css
├── components/
│   ├── layout/               # Header, Footer, TechnicalSignature
│   ├── home/                 # Hero, ProjectsPreview
│   ├── cases/                # ProjectCard, CategoryFilter, ProjectGallery
│   └── admin/                # ProjectForm, AdminLogout, DeleteProjectButton
├── lib/supabase/             # Clientes server e client
├── types/index.ts
├── supabase/
│   ├── migrations/001_init.sql
│   └── seed.sql
└── tailwind.config.ts
```

---

## Painel Admin — fluxo

1. Acesse `/admin/login`
2. Entre com e-mail e senha criados no Supabase
3. No dashboard, veja todos os projetos (publicados e rascunhos)
4. **Novo projeto**: título, cliente, categoria, diagnóstico/processo/resultado, upload de imagens, definir capa, ordem e status
5. **Editar**: clique em qualquer projeto da listagem
6. **Publicar/despublicar**: toggle de checkbox no formulário
7. **Excluir**: botão na página de edição (pede confirmação)
8. **Logout**: botão no canto superior direito
