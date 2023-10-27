-- CreateTable
CREATE TABLE "Court" (
    "courtId" SERIAL NOT NULL,
    "imageURL" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "maxCapacity" INTEGER NOT NULL,
    "createdAt" TEXT NOT NULL,
    "updatedAt" TEXT NOT NULL,
    "deletedAt" TEXT NOT NULL,
    "companyId" INTEGER NOT NULL,

    CONSTRAINT "Court_pkey" PRIMARY KEY ("courtId")
);
