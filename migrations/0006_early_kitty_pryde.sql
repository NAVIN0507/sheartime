ALTER TABLE "bookings" ALTER COLUMN "booking_date" SET DATA TYPE varchar;--> statement-breakpoint
ALTER TABLE "bookings" ALTER COLUMN "booking_date" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "bookings" ALTER COLUMN "booking_date" SET NOT NULL;