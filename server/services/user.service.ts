import { User } from '../database/schema'
import userRepo from '../repositories/user.repository'

const findById = async (id: number): Promise<User | null> => {
	return await userRepo.findById(id)
}

const findByEmail = async (email: string): Promise<User | null> => {
	return await userRepo.findByEmail(email)
}

export default {
	findById,
	findByEmail,
}
