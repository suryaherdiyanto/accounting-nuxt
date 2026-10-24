import { db } from "../database"
import { User } from "../database/schema"

const findById = async (id: number): Promise<User|null> => {
	const user = await db.query.users.findFirst({
		where: (user, { eq }) => eq(user.id, id),
	})

	return user || null
}

const findByEmail = async (email: string): Promise<User|null> => {
	const user = await db.query.users.findFirst({
		where: (user, { eq }) => eq(user.email, email),
	})

	return user || null
}

export default {
	findById,
	findByEmail,
}
