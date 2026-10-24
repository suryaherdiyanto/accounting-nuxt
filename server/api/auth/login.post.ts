import { and, eq, isNull } from 'drizzle-orm'
import { z } from 'zod'
import { db } from '~~/server/database'
import { users } from '~~/server/database/schema'

const bodySchema = z.object({
  email: z.string({ error: 'Email wajib diisi' }).trim().toLowerCase().pipe(z.email('Format email tidak valid')),
})

export default defineEventHandler(async (event) => {
  const parsed = bodySchema.safeParse(await readBody(event))
  if (!parsed.success) {
    throw createError({ statusCode: 422, message: parsed.error.issues[0]?.message })
  }

  const [user] = await db
    .select({ id: users.id, email: users.email })
    .from(users)
    .where(and(eq(users.email, parsed.data.email), isNull(users.deletedAt)))
    .limit(1)

  if (!user) {
    throw createError({ statusCode: 401, message: 'Email tidak terdaftar' })
  }

  await setUserSession(event, { user })

  return { ok: true }
})
