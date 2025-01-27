CREATE TYPE "public"."amount_status" AS ENUM('PAID', 'NOT_PAID');--> statement-breakpoint
CREATE TYPE "public"."booking_status" AS ENUM('PENDING', 'BOOKED', 'CANCLED');--> statement-breakpoint
CREATE TABLE "bookings" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" varchar NOT NULL,
	"shop_id" varchar NOT NULL,
	"booking_date" timestamp with time zone DEFAULT now(),
	"booking_status" "booking_status" DEFAULT 'PENDING',
	"amount_status" "amount_status" DEFAULT 'NOT_PAID',
	CONSTRAINT "bookings_id_unique" UNIQUE("id")
);
