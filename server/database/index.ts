import { drizzle } from 'drizzle-orm/node-postgres'
import { Pool } from 'pg'
import * as schema from './schema'

type DBConfig = {
	host: string
	port: number
	user: string
	password: string
	database: string
}

const createDrizzle = (config: DBConfig) => {
	const pool = new Pool({
	  host: config.host,
	  port: config.port,
	  user: config.user,
	  password: config.password,
	  database: config.database,
	  max: 10,
	  idleTimeoutMillis: 30000
	})

	return drizzle(pool, { schema })
}

export const db = createDrizzle({
	host: process.env.NODE_ENV === 'test' ? process.env.PG_TEST_HOST || '' : process.env.PG_HOST || '',
	port: Number(process.env.NODE_ENV === 'test' ? process.env.PG_TEST_PORT : process.env.PG_PORT) || 5432,
	user: process.env.NODE_ENV === 'test' ? process.env.PG_TEST_USER || '' : process.env.PG_USER || '',
	password: process.env.NODE_ENV === 'test' ? process.env.PG_TEST_PASSWORD || '' : process.env.PG_PASSWORD || '',
	database: process.env.NODE_ENV === 'test' ? process.env.PG_TEST_DB || '' : process.env.PG_DB || ''
})
