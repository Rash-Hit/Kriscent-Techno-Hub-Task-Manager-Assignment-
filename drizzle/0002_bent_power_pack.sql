ALTER TABLE "task" ALTER COLUMN "user_id" SET DATA TYPE serial;--> statement-breakpoint
ALTER TABLE "task" ALTER COLUMN "user_id" SET NOT NULL;