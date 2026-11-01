import "dotenv/config";
import { Pool } from "pg";
import { afterAll, beforeAll, describe, expect, test } from "vitest";
import { drizzle } from "drizzle-orm/node-postgres";
import { migrate } from "drizzle-orm/node-postgres/migrator";
import { users } from "../../server/database/schema/users"
import { db } from "../../server/database";
import userService from "../../server/services/user.service";

const pool = new Pool({
  host: process.env.PG_TEST_HOST,
  port: Number(process.env.PG_TEST_PORT),
  user: process.env.PG_TEST_USER,
  password: process.env.PG_TEST_PASSWORD,
  database: process.env.PG_TEST_DB,
})

describe('user service', () => {
	beforeAll(async () => {
		await migrate(drizzle(pool), { migrationsFolder: './server/database/migrations'})
		await db.insert(users).values({
			email: "johndoe@example.com",
			verifiedAt: new Date(),
		})
	})
	afterAll(async () => {
		await pool.query('DROP TABLE IF EXISTS users CASCADE')
		await pool.end()
	})

	test('get user by email', async () => {
		const user = await userService.findByEmail("johndoe@example.com")

		expect(user).not.toBeNull()
		expect(user?.email).toEqual("johndoe@example.com")
	})
})
