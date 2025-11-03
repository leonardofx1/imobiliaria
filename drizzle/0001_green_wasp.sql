CREATE TABLE "rental" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"idUser" uuid NOT NULL,
	"idProperty" uuid NOT NULL,
	"startDate" date NOT NULL,
	"endDate" date NOT NULL,
	"createdAt" date DEFAULT now() NOT NULL
);
