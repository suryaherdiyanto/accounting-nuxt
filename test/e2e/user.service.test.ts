import "dotenv/config";
import { Pool } from "pg";
import { afterAll, beforeAll, describe, expect, test } from "vitest";
import { drizzle } from "drizzle-orm/node-postgres";
import { migrate } from "drizzle-orm/node-postgres/migrator";
import { users } from "../../server/database/schema/users"
import userService from "../../server/services/user.service";
import { db } from "../../server/database";

const pool = new Pool({
  host: process.env.PG_TEST_HOST,
  port: Number(process.env.PG_TEST_PORT),
  user: process.env.PG_TEST_USER,
  password: process.env.PG_TEST_PASSWORD,
  database: process.env.PG_TEST_DB,
})

describe('user service', () => {
	beforeAll(async () => {
		await migrate(drizzle(pool), { migrationsFolder: './server/database/migrations', migrationsTable: '__drizzle_migrations'})
		await db.insert(users).values({
			email: "johndoe@example.com",
			verifiedAt: new Date(),
		})
	})
	afterAll(async () => {
		await pool.query('DROP TABLE IF EXISTS users CASCADE')
		await pool.query('DROP TABLE IF EXISTS drizzle.__drizzle_migrations CASCADE')
		await pool.end()
	})

	test('get user by email', async () => {
		const user = await userService.findByEmail("johndoe@example.com")

		expect(user).not.toBeNull()
		expect(user?.email).toEqual("johndoe@example.com")
	})

	test('get user by email that does not exist', async () => {
		const user = await userService.findByEmail("test@kaskara.id")
		expect(user).toBeNull()
	})

	test('get user by id', async () => {
		const user = await userService.findById(1)

		expect(user).not.toBeNull()
	})

	test('get user by id that does not exist', async () => {
		const user = await userService.findById(999)
		expect(user).toBeNull()
	})
})
