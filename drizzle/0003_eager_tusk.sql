ALTER TABLE "task" ALTER COLUMN "id" SET DATA TYPE integer;--> statement-breakpoint
ALTER TABLE "task" ALTER COLUMN "user_id" SET DATA TYPE integer USING "user_id"::integer;--> statement-breakpoint
ALTER TABLE "task" ALTER COLUMN "user_id" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "id" SET DATA TYPE integer;