-- Adiciona a categoria "Artes Avulsas" ao enum existente.
-- Para flyers de igreja, peças pontuais e serviços avulsos.
-- Rode este bloco no Supabase > SQL Editor (banco já existente).

ALTER TYPE categoria_enum ADD VALUE IF NOT EXISTS 'artes_avulsas';
