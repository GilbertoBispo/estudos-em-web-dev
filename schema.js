import { pgTable, serial, varchar, integer } from 'drizzle-orm/pg-core';

export const pessoas = pgTable('pessoas', {
  id: serial('id').primaryKey(),
  nome: varchar('nome').notNull(),
  idade: integer('idade').notNull()
});

// depois usamos um npx drizzle-kit generate para criar um "arquivo de migração", que basicamente traduz o que a gente escreveu para a linguagem SQL.

// depois disso nós usamos um npx drizzle-kit migrate para aplicar as migrações ao Neon.