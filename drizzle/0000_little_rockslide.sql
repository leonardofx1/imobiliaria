CREATE TABLE "expenses" (
	"id" uuid PRIMARY KEY NOT NULL,
	"idProperty" uuid NOT NULL,
	"condoFee" numeric,
	"propertyTax" numeric,
	"maintenanceCosts" numeric
);
--> statement-breakpoint
CREATE TABLE "property" (
	"id" uuid PRIMARY KEY NOT NULL,
	"city" varchar(30),
	"number" integer,
	"street" text NOT NULL,
	"title" text NOT NULL,
	"description" text NOT NULL,
	"type" text NOT NULL,
	"vacanciesGarage" integer NOT NULL,
	"buildingFloor" text,
	"price" numeric NOT NULL,
	"ownerId" uuid,
	"area" numeric,
	"bedrooms" integer NOT NULL,
	"bathrooms" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"email" varchar(100) NOT NULL,
	"password" varchar(100) NOT NULL,
	"age" integer NOT NULL,
	"role" varchar(20) DEFAULT 'user',
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
--> statement-breakpoint
ALTER TABLE "expenses" ADD CONSTRAINT "expenses_idProperty_property_id_fk" FOREIGN KEY ("idProperty") REFERENCES "public"."property"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "property" ADD CONSTRAINT "property_ownerId_users_id_fk" FOREIGN KEY ("ownerId") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;