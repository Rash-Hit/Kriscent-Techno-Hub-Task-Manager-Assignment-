import { text, pgTable, varchar, pgEnum, integer } from "drizzle-orm/pg-core";

export const userRoleEnum = pgEnum("role", ["USER", "MANAGER"]);
export const taskStatusEnum = pgEnum("status", ["todo, in-progress, done"]);

export const users = pgTable("users", {
  id: integer("id").primaryKey(),
  email: varchar("email", { length: 255 }).notNull(),
  name: varchar("name", { length: 255 }).notNull(),
  role: varchar("role", { length: 255 })
    .notNull()
    .default(userRoleEnum.enumValues[0]),
});

export const task = pgTable("task", {
  id: integer("id").primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  description: text("description"),
  status: varchar("status", { length: 255 })
    .notNull()
    .default(taskStatusEnum.enumValues[0]),
  userId: integer("user_id").references(() => users.id),
});
