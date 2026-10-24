import { z } from 'zod'
import userService from '~~/server/services/user.service'

const bodySchema = z.object({
  email: z.string({ error: 'Email wajib diisi' }).trim().toLowerCase().pipe(z.email('Format email tidak valid')),
})

export default defineEventHandler(async (event) => {
	const parsed = bodySchema.safeParse(await readBody(event))
	if (!parsed.success) {
		throw createError({ statusCode: 422, message: parsed.error.issues[0]?.message })
	}

	const user = await userService.findByEmail(parsed.data.email)

	if (!user) {
		throw createError({ statusCode: 401, message: 'Email tidak terdaftar' })
	}

	await setUserSession(event, { user })

	return { ok: true }
})
