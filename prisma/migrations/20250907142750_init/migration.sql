-- CreateTable
CREATE TABLE "public"."TossHistory" (
    "id" SERIAL NOT NULL,
    "head" BIGINT NOT NULL DEFAULT 0,
    "toss" BIGINT NOT NULL DEFAULT 0,

    CONSTRAINT "TossHistory_pkey" PRIMARY KEY ("id")
);
