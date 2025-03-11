CREATE TABLE "feedbacks" (
	"id" uuid DEFAULT gen_random_uuid() NOT NULL,
	"user_id" varchar NOT NULL,
	"shop_id" varchar NOT NULL,
	"feedbackContent" varchar NOT NULL,
	"rating" varchar NOT NULL,
	CONSTRAINT "feedbacks_id_unique" UNIQUE("id")
);
