-- CreateTable
CREATE TABLE "ContactForm" (
    "id" UUID NOT NULL,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "companyName" TEXT NOT NULL,
    "companySize" TEXT NOT NULL,
    "notes" TEXT NOT NULL,
    "projectTypes" TEXT[],
    "engineeringTypes" TEXT[],
    "otherServices" TEXT[],

    CONSTRAINT "ContactForm_pkey" PRIMARY KEY ("id")
);
