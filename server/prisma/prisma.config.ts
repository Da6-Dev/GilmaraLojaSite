// Importa o dotenv para carregar as variáveis de ambiente
import * as dotenv from 'dotenv';
import { defineDatasource } from '@prisma/config';

// Carrega as variáveis do .env no processo
dotenv.config({ path: '../.env' });

export default {
  db: defineDatasource({
    url: process.env.DATABASE_URL,
  }),
};
