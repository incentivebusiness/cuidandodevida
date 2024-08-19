-- CreateTable
CREATE TABLE "LuckyNumber" (
    "id" SERIAL NOT NULL,
    "number" TEXT NOT NULL,
    "series" TEXT NOT NULL,
    "loteClient" TEXT NOT NULL,
    "qnty" TEXT NOT NULL,

    CONSTRAINT "LuckyNumber_pkey" PRIMARY KEY ("id")
);
