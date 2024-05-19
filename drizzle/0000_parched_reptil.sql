DO $$ BEGIN
 CREATE TYPE "public"."status" AS ENUM('todo, in-progress, done');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "public"."role" AS ENUM('USER', 'MANAGER');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
