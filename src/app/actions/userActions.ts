import db from "@/db/drizzle";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";

export const getUser = async (userId: string) => {
  return db.query.users.findFirst({
    where: eq(users.id, userId),
  });
};

export type NewUser = typeof users.$inferInsert;

export const addUser = async (user: NewUser) => {
  console.log("we are in somewhere");
  const existingUser = await db
    .select()
    .from(users)
    .where(eq(users.id, user.id));

  if (!existingUser) {
    return db.insert(users).values(user).returning();
  } else {
    return existingUser;
  }
};
