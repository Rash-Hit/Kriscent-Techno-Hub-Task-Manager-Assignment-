import { Client } from "pg";
import "dotenv/config";
import { drizzle } from "drizzle-orm/node-postgres";
import * as schema from "./schema";

export const client = new Client({
  connectionString: process.env.DATABASE_URL,
});

const db = drizzle(client, { schema });
export default db;
