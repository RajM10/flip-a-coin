/*
  Warnings:

  - You are about to drop the column `toss` on the `TossHistory` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."TossHistory" DROP COLUMN "toss",
ADD COLUMN     "tail" BIGINT NOT NULL DEFAULT 0;
