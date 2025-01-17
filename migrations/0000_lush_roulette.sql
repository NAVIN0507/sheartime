CREATE TYPE "public"."" AS ENUM('CUSTOMER', 'ADMIN');--> statement-breakpoint
CREATE TABLE "users" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"full_name" varchar(255) NOT NULL,
	"email" text NOT NULL,
	"phone_number" varchar NOT NULL,
	"passowrd" text NOT NULL,
	"isAdmin" "" DEFAULT 'CUSTOMER',
	"created_at" timestamp with time zone DEFAULT now(),
	CONSTRAINT "users_id_unique" UNIQUE("id"),
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
