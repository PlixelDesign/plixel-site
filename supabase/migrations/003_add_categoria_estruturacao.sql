-- Adiciona a categoria "Estruturação de Perfil" ao enum existente.
-- Para o setup/otimização de perfil: nome, @, bio, destaques e foto.
-- Rode este bloco no Supabase > SQL Editor (banco já existente).

ALTER TYPE categoria_enum ADD VALUE IF NOT EXISTS 'estruturacao';
