import { index, bigserial, pgTable, timestamp, varchar } from 'drizzle-orm/pg-core'

export const users = pgTable('users', {
  id: bigserial('id', { mode: 'number' }).primaryKey(),
  email: varchar({ length: 255 }).notNull().unique(),
  rememberToken: varchar('remember_token', { length: 255 }),
  verifiedAt: timestamp('verified_at'),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
  deletedAt: timestamp('deleted_at'),
}, (table) => [
  index('idx_users_email').on(table.email),
])

export type User = typeof users.$inferSelect
export type NewUser = typeof users.$inferInsert
