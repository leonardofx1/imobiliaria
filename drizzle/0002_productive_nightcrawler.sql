ALTER TABLE "property" RENAME COLUMN "type" TO "status";--> statement-breakpoint
ALTER TABLE "rental" ADD COLUMN "payment" double precision NOT NULL;--> statement-breakpoint
ALTER TABLE "rental" ADD CONSTRAINT "rental_idUser_users_id_fk" FOREIGN KEY ("idUser") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "rental" ADD CONSTRAINT "rental_idProperty_property_id_fk" FOREIGN KEY ("idProperty") REFERENCES "public"."property"("id") ON DELETE no action ON UPDATE no action;