-- CreateTable
CREATE TABLE "Sequenciais" (
    "id" SERIAL NOT NULL,
    "ano" INTEGER NOT NULL,
    "sequencial" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "Sequenciais_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Sequenciais_ano_key" ON "Sequenciais"("ano");
