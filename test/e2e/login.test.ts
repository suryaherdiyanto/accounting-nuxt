import 'dotenv/config'
import { fileURLToPath } from 'node:url'
import { afterAll, beforeAll, describe, expect, it } from 'vitest'
import { Pool } from 'pg'
import { drizzle } from 'drizzle-orm/node-postgres'
import { migrate } from 'drizzle-orm/node-postgres/migrator'
import { fetch, setup } from '@nuxt/test-utils/e2e'

// The server reads PG_*; point it at the test database before it is built/started.
process.env.PG_HOST = process.env.PG_TEST_HOST
process.env.PG_PORT = process.env.PG_TEST_PORT
process.env.PG_USER = process.env.PG_TEST_USER
process.env.PG_PASSWORD = process.env.PG_TEST_PASSWORD
process.env.PG_DB = process.env.PG_TEST_DB

const email = 'e2e-login@example.com'
const pool = new Pool({
  host: process.env.PG_TEST_HOST,
  port: Number(process.env.PG_TEST_PORT),
  user: process.env.PG_TEST_USER,
  password: process.env.PG_TEST_PASSWORD,
  database: process.env.PG_TEST_DB,
})

await setup({ rootDir: fileURLToPath(new URL('../..', import.meta.url)) })

const login = (body: unknown) =>
  fetch('/api/auth/login', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(body),
  })

describe('login', () => {
  beforeAll(async () => {
    await migrate(drizzle(pool), { migrationsFolder: './server/database/migrations' })
    await pool.query('insert into users (email) values ($1) on conflict (email) do nothing', [email])
  })

  afterAll(async () => {
    await pool.query('delete from users where email = $1', [email])
    await pool.end()
  })

  it('logs in a registered email and creates a session', async () => {
    const res = await login({ email: email.toUpperCase() })
    expect(res.status).toBe(200)
    expect(await res.json()).toEqual({ ok: true })

    const cookie = res.headers.getSetCookie().map(c => c.split(';')[0]).join('; ')
    expect(cookie).toContain('nuxt-session=')

    const session = await fetch('/api/_auth/session', { headers: { cookie } })
    expect((await session.json()).user.email).toBe(email)
  })

  it('rejects an unregistered email', async () => {
    const res = await login({ email: 'unknown@example.com' })
    expect(res.status).toBe(401)
    expect((await res.json()).message).toBe('Email tidak terdaftar')
  })

  it('rejects an invalid email', async () => {
    const res = await login({ email: 'bukan-email' })
    expect(res.status).toBe(422)
    expect((await res.json()).message).toBe('Format email tidak valid')
  })

  it('rejects a missing email', async () => {
    const res = await login({})
    expect(res.status).toBe(422)
  })
})
