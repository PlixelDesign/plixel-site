-- Supabase Database Seed File
-- Sync official executive copy data for Francis Pinheiro Seguros & EB Escola de Música

UPDATE projetos
SET diagnostico = 'A marca enfrentava um gargalo de posicionamento digital. Os canais não transmitiam a proposta de valor corporativa, forçando a captação a depender puramente de abordagem direta comercial, sem uma base de autoridade visual prévia.',
    cliente = 'Identidade Corporativa e Uniformização de Ativos'
WHERE slug = 'francis-pinheiro-seguros';

UPDATE projetos
SET diagnostico = 'A falta de padronização visual reduzia a taxa de conversão de novos leads e enfraquecia o diferencial competitivo de mercado. O desafio consistiu em estruturar um sistema visual que tangibilizasse a metodologia e acelerasse a jornada de decisão do aluno.',
    cliente = 'Design de Identidade Local'
WHERE slug = 'eb-escola-de-musica';
