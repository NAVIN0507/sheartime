CREATE TABLE "admin_shops" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"admin_id" varchar NOT NULL,
	"shop_name" varchar NOT NULL,
	"shop_address" varchar NOT NULL,
	"shop_description" text,
	"shop_phone" varchar,
	"shop_email" text,
	"shop_image_url" varchar,
	CONSTRAINT "admin_shops_id_unique" UNIQUE("id")
);
