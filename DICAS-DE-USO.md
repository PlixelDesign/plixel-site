# Plixel — Dicas de Uso e Guia de Edição

Este guia é pra você (Daniel) mexer no site sem depender de ninguém. Ele cobre o
que dá pra fazer **sem código** (gerenciar projetos pelo painel) e o que exige
**editar código** (textos institucionais, contatos, cores), além de boas práticas
e solução de problemas.

> Regra de ouro: **projetos do portfólio** vivem no Supabase e se editam pelo
> painel. **Textos institucionais** (manifesto, sobre, CTA) vivem no código.

---

## 1. Mapa rápido — onde mexer em cada coisa

| Quero alterar… | Onde | Precisa de código? |
|---|---|---|
| Adicionar/editar/excluir projeto | Painel `/admin` | ❌ Não |
| Imagens de um projeto | Painel `/admin` → editar projeto | ❌ Não |
| Ordem dos projetos na listagem | Painel → campo "Ordem" | ❌ Não |
| Publicar/despublicar projeto | Painel → checkbox "Publicar" | ❌ Não |
| Textos do manifesto / sobre / processo / CTA | Arquivos `.tsx` | ✅ Sim |
| WhatsApp, e-mail, Instagram | `Footer.tsx` e `contato/page.tsx` | ✅ Sim |
| Cores e fontes da marca | `tailwind.config.ts` + `globals.css` | ✅ Sim |
| Criar uma página nova | Pasta `app/` | ✅ Sim |

---

## 2. Rodar e publicar (resumo)

**Rodar no seu PC:**
```bash
npm install      # só na primeira vez
npm run dev
```
Abre em `http://localhost:3000`. Painel em `http://localhost:3000/admin/login`.

**Publicar alterações:** suba pro GitHub e a Vercel publica sozinha.
```bash
git add .
git commit -m "descrição da mudança"
git push
```
O passo a passo detalhado de Supabase e Vercel está no [README.md](README.md).

---

## 3. Gerenciar projetos pelo painel (sem código)

Esse é o fluxo do dia a dia. **Não precisa abrir o código nem mexer em JSON.**

### Adicionar um projeto
1. Entre em `/admin/login` com seu e-mail e senha.
2. Clique em **+ Novo projeto**.
3. Preencha:
   - **Título** — vira o slug da URL automaticamente (ex.: "Identidade UCADIS" → `/trabalhos/identidade-ucadis`).
   - **Cliente** — nome do cliente.
   - **Categoria** — Identidade Visual / Social Media / Vídeo / Campanha (controla o filtro da página Trabalhos).
   - **Ordem** — número que define a posição na listagem (menor aparece primeiro).
   - **Diagnóstico → Processo → Resultado** — a narrativa do case (ver tom no item 3.4).
4. **Imagens** — arraste os arquivos pra área pontilhada ou clique pra selecionar. Aceita várias de uma vez.
5. Passe o mouse sobre uma imagem pra **definir como capa** ou **remover**.
6. Marque **Publicar no site** se já quer que apareça (ou deixe desmarcado pra rascunho).
7. **Criar projeto**.

### Editar / excluir
- No dashboard, clique em **Editar →** na linha do projeto.
- Botão **Excluir projeto** fica no topo da tela de edição (pede confirmação — não tem desfazer).

### Reordenar
- Mude o número no campo **Ordem** de cada projeto e salve. A listagem pública e o dashboard respeitam essa ordem.

### 3.4 Tom dos textos do case (importante)
Mantenha a pegada da Plixel: técnico, direto, sem clichê de agência.
- **Diagnóstico** = qual era o problema real (não "o cliente queria algo bonito").
- **Processo** = o que foi decidido e por quê (paleta, tipografia, sistema, aplicações).
- **Resultado** = o que mudou de fato (reconhecimento, consistência, conversão, escala).

Evite frases proibidas: "transformamos ideias em realidade", "criatividade que conecta". O case da UCADIS já cadastrado é a referência de profundidade.

### 3.5 Imagens — boas práticas antes do upload
- Formato: **WebP** (mais leve) ou JPG. PNG só quando precisar de fundo transparente.
- Largura: **máximo ~2000px** no lado maior. Acima disso é peso à toa.
- Peso: tente manter cada imagem **abaixo de ~400 KB**.
- A **capa** aparece em proporção ~16:9 nas listagens — escolha uma imagem que funcione cortada nesse formato.
- Otimize em [squoosh.app](https://squoosh.app) (grátis) antes de subir.

---

## 4. Trocar textos institucionais (precisa editar código)

Todo texto que ainda não foi escrito está marcado com **`[CONTEÚDO A SER FORNECIDO POR DANIEL]`**. Procure por esse marcador no editor (Ctrl+Shift+F no VS Code) pra achar todos de uma vez.

| Texto | Arquivo |
|---|---|
| Frase de apoio do hero (home) | [components/home/Hero.tsx](components/home/Hero.tsx) |
| Manifesto (home) | [app/page.tsx](app/page.tsx) |
| Os 3 passos do processo (home) | [app/page.tsx](app/page.tsx) |
| Texto do CTA "Pronto pra começar?" | [app/page.tsx](app/page.tsx) |
| Página Sobre (manifesto, valores, processo) | [app/sobre/page.tsx](app/sobre/page.tsx) |

**Como editar:** abra o arquivo, ache o texto entre aspas, troque pelo conteúdo real, salve. Se o `npm run dev` estiver rodando, a página recarrega sozinha.

⚠️ **Não mexa** nas tags (`<span>`, `className=...`) — só troque o texto que fica **entre** elas.

---

## 5. Trocar contatos

Hoje os contatos estão com placeholders. Atualize nestes pontos:

| Contato | Arquivos | O que trocar |
|---|---|---|
| **WhatsApp** | [components/layout/Footer.tsx](components/layout/Footer.tsx) e [app/contato/page.tsx](app/contato/page.tsx) | `wa.me/5511999999999` → seu número com DDI+DDD (ex.: `wa.me/5571999998888`). Na página de contato troque também o texto visível `[NÚMERO A SER INSERIDO]`. |
| **E-mail** | [components/layout/Footer.tsx](components/layout/Footer.tsx) e [app/contato/page.tsx](app/contato/page.tsx) | `contato@plixel.com.br` → seu e-mail. |
| **Instagram** | [components/layout/Footer.tsx](components/layout/Footer.tsx) e [app/contato/page.tsx](app/contato/page.tsx) | `@plixel_design` / `instagram.com/plixel_design`. |
| **Destino do formulário** | [app/contato/page.tsx](app/contato/page.tsx) | O formulário envia pra `danielspsg@gmail.com` via FormSubmit. Troque esse e-mail se quiser receber em outro. Na primeira mensagem o FormSubmit pede uma confirmação por e-mail — confirme uma vez e pronto. |

---

## 6. Mexer na identidade visual (cores e fontes)

### Cores (tokens)
As cores da marca estão em **dois lugares que devem ficar iguais**:
- [tailwind.config.ts](tailwind.config.ts) — usadas nas classes (ex.: `bg-navy-deep`, `text-blue-neon`).
- [app/globals.css](app/globals.css) — bloco `:root` com as variáveis CSS.

Pra trocar uma cor, altere nos dois. Tokens principais:

| Token | Cor | Uso |
|---|---|---|
| `navy-deep` | `#0D2342` | Fundo principal |
| `navy-mid` | `#1b3659` | Variação de fundo |
| `blue-neon` | `#60A5FA` | Linhas técnicas, grid, Parisienne |
| `yellow-neon` | `#FFD700` | **Ação (CTA) — máx. 10%, nunca como fundo** |
| `graphite` | `#1a1b1c` | Fundo alternativo |

### Fontes
Definidas em [app/layout.tsx](app/layout.tsx) (Bebas Neue, Parisienne, Poppins via Google Fonts). Normalmente **não precisa mexer**.

### Regras do Design System que o site respeita (não quebre)
- **Parisienne nunca em caixa alta.** É cursiva — sempre minúscula, uma palavra por título, maior que o Bebas ao lado. (Isso é garantido pela classe `.title-accent` no `globals.css` — se criar título novo, use sempre `title-accent` na palavra de destaque, nunca `font-parisienne` cru.)
- **Amarelo é cor de ação: ≤10% da tela e nunca como fundo de seção.** Use em botão, linha ou detalhe — não em fundo cheio.
- **Máximo 3 cores por seção.**
- **Grid técnico** (`tech-grid`) em todo fundo escuro.
- **Assinatura técnica nos 4 cantos** (`<TechnicalSignature />`) em toda seção de destaque.
- Só as 3 fontes definidas. Sem emoji, sem ícone genérico de biblioteca, sem gradiente como fundo dominante.

---

## 7. Criar uma página ou seção nova

### Anatomia de uma seção Plixel
Toda seção escura segue esse esqueleto:
```tsx
<section className="relative section-dark py-24 md:py-32 overflow-hidden">
  <TechnicalSignature categoria="PROCESSO" />        {/* assinatura nos cantos */}
  <div className="max-w-7xl mx-auto px-6">
    <p className="label-tech mb-6">Rótulo técnico</p>  {/* label azul neon */}
    <h2 className="title-impact text-[clamp(40px,5vw,64px)] text-white">
      TÍTULO EM BEBAS{' '}
      <span className="title-accent text-[clamp(44px,5.5vw,70px)]">destaque</span>
    </h2>
    {/* conteúdo */}
  </div>
</section>
```
Fundos disponíveis: `section-dark` (navy), `section-mid` (navy médio), `section-graphite` (preto gráfico), `section-light` (off-white). Alterne entre eles em seções vizinhas pra dar ritmo.

### Criar uma página nova
1. Crie uma pasta em `app/` com o nome da rota (ex.: `app/servicos/`).
2. Dentro, crie `page.tsx`.
3. Comece copiando a estrutura de [app/sobre/page.tsx](app/sobre/page.tsx) (já tem Header, Footer e seções prontas) e adapte.
4. A rota fica automática: `app/servicos/page.tsx` → `/servicos`.
5. Pra aparecer no menu, adicione o link em [components/layout/Header.tsx](components/layout/Header.tsx) (array `links`) e/ou no [Footer.tsx](components/layout/Footer.tsx).

### Componentes que dá pra reaproveitar
- `<TechnicalSignature categoria="..." />` — assinatura dos 4 cantos.
- `<ProjectCard projeto={...} />` — card de projeto.
- `<Button href="..." variant="primary|outline|ghost">` — botão padrão.
- Classes utilitárias: `btn-primary`, `btn-outline`, `label-tech`, `body-text`, `input-field`, `tech-grid`.

---

## 8. SEO e performance (o que é automático e o que cuidar)

**Já está pronto e automático:**
- Meta tags e Open Graph (compartilhamento no WhatsApp/Instagram/LinkedIn) — em [app/layout.tsx](app/layout.tsx).
- `sitemap.xml` e `robots.txt` gerados sozinhos (incluem os projetos publicados).
- O painel `/admin` é bloqueado dos buscadores.

**O que depende de você:**
- Trocar a imagem de compartilhamento: coloque `public/og-image.png` (1200×630px).
- Otimizar imagens antes de subir (item 3.5) — é o maior fator de velocidade.
- Quando o domínio final estiver definido, atualizar a URL em [app/layout.tsx](app/layout.tsx) (campo `metadataBase`) e em [app/sitemap.ts](app/sitemap.ts) / [app/robots.ts](app/robots.ts).

---

## 9. Checklist antes de publicar de verdade

- [ ] Todos os `[CONTEÚDO A SER FORNECIDO POR DANIEL]` substituídos
- [ ] WhatsApp, e-mail e Instagram reais nos arquivos do item 5
- [ ] Formulário de contato testado (enviou e chegou no e-mail)
- [ ] Pelo menos os cases principais cadastrados e publicados pelo painel
- [ ] Imagens otimizadas (nenhuma página pesada/lenta no celular)
- [ ] `og-image.png` e logos colocados em `public/`
- [ ] `metadataBase` com o domínio final
- [ ] Abriu o site no celular e no desktop — tudo legível e sem erro

---

## 10. Problemas comuns (troubleshooting)

**"Cannot find module 'autoprefixer'" ou erro parecido ao rodar**
→ Faltou instalar dependências. Rode `npm install` na pasta do projeto.

**"supabaseUrl is required" / página em branco**
→ O arquivo `.env.local` não existe ou está sem as chaves. Copie de `.env.local.example` e preencha com as chaves do Supabase (Settings → API). Reinicie o `npm run dev` depois de mexer no `.env.local`.

**Imagem do projeto não aparece**
→ Confira se o bucket `imagens` no Supabase está marcado como **público** e se as políticas de leitura foram criadas (ver README). O domínio do Supabase já está liberado em [next.config.ts](next.config.ts).

**Login não funciona**
→ O usuário admin precisa existir no Supabase (Authentication → Users). Veja o passo 4 do README. Não dá pra se cadastrar pelo site — é só login.

**Mudei um texto e não atualizou**
→ Salve o arquivo. Se mesmo assim não mudar, pare (Ctrl+C) e rode `npm run dev` de novo.

**Palavra em Parisienne apareceu em CAIXA ALTA**
→ Você usou `font-parisienne` direto. Use a classe `title-accent` na palavra de destaque — ela já força minúscula e o tamanho correto.

---

Qualquer ajuste maior (nova funcionalidade, mudança de estrutura), vale pedir ajuda
técnica. Edições de conteúdo, contatos e projetos você faz sozinho com este guia.
