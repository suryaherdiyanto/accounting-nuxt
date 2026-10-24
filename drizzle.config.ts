import 'dotenv/config'
import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  dialect: 'postgresql',
  schema: './server/database/schema',
  out: './server/database/migrations',
  dbCredentials: {
    host: process.env.PG_HOST!,
    port: Number(process.env.PG_PORT),
    user: process.env.PG_USER!,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DB!,
    ssl: false,
  },
})
