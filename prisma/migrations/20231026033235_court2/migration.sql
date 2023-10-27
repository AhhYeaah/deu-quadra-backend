/*
  Warnings:

  - The `createdAt` column on the `Court` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `deletedAt` column on the `Court` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `updatedAt` on the `Court` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Court" DROP COLUMN "createdAt",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
DROP COLUMN "updatedAt",
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
DROP COLUMN "deletedAt",
ADD COLUMN     "deletedAt" TIMESTAMP(3);
