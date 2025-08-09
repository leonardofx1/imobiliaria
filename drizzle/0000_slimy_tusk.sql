CREATE TABLE "users" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"email" varchar(100) NOT NULL,
	"password" varchar(100) NOT NULL,
	"role" varchar(20) DEFAULT 'user',
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
