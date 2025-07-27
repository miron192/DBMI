/*
  Warnings:

  - You are about to drop the column `type` on the `Movie` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Movie" DROP COLUMN "type",
ADD COLUMN     "posterPath" TEXT;
