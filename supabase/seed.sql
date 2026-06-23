-- Seed inicial: Case UCADIS (conteúdo original de Daniel)
insert into projetos (
  slug,
  titulo,
  cliente,
  categoria,
  diagnostico,
  processo,
  resultado,
  imagens,
  imagem_capa,
  ordem,
  publicado
) values (
  'identidade-visual-ucadis',
  'Identidade Visual UCADIS',
  'UCADIS - Ministério Infantil',
  'identidade_visual',
  'A UCADIS tinha propósito, mas não tinha marca. Comunicação visual inconsistente, sem linguagem própria, sem padronização entre materiais físicos e digitais. Funcionava como departamento, não como marca, e isso custava reconhecimento, pertencimento e força de comunicação.',
  'Reposicionamento visual completo, não uma logo isolada: redesenho da marca central com versões secundária, monocromática e símbolo isolado; sistema cromático próprio (Azul Vital, Turquesa, Amarelo Luz, Coral); universo gráfico com padrões exclusivos e sistema modular; quatro mascotes proprietários (Tuco, Bruno, Carol, Mel) com função simbólica na narrativa da marca; aplicações reais em crachá, uniforme, garrafinha, flyer institucional e material infantil.',
  'Transformamos um departamento infantil em um universo de marca capaz de gerar pertencimento, reconhecimento e conexão emocional. Antes fragmentado, depois sistema integrado: os materiais conversam entre si, os personagens criaram vínculo com as crianças, e a marca ganhou escalabilidade para eventos, campanhas e material didático.',
  '{}',
  '',
  1,
  true
)
on conflict (slug) do nothing;
