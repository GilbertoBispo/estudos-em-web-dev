import 'dotenv/config';
import { drizzle } from 'drizzle-orm/neon-http';
import { neon } from '@neondatabase/serverless';

if(!process.env.DATABASE_URL) throw new Error("A variável DATABASE_URL não foi encontrada!");

// conectamos a um banco de dados no Neon utilizando aquela URL no .env
const sql = neon(process.env.DATABASE_URL);
// exportamos usando o Drizzle para podermos usar em outros arquivos
export const db = drizzle(sql);

