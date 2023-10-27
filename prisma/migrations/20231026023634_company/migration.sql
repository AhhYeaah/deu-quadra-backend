-- CreateTable
CREATE TABLE "Company" (
    "companyId" SERIAL NOT NULL,
    "imageURL" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "hashedPassword" TEXT NOT NULL,
    "emailToContact" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "district" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "long" TEXT NOT NULL,
    "lat" TEXT NOT NULL,

    CONSTRAINT "Company_pkey" PRIMARY KEY ("companyId")
);
