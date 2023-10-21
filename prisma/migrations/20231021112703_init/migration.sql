-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductRelations" (
    "productAId" INTEGER NOT NULL,
    "productBId" INTEGER NOT NULL,

    CONSTRAINT "ProductRelations_pkey" PRIMARY KEY ("productAId","productBId")
);

-- AddForeignKey
ALTER TABLE "ProductRelations" ADD CONSTRAINT "ProductRelations_productAId_fkey" FOREIGN KEY ("productAId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductRelations" ADD CONSTRAINT "ProductRelations_productBId_fkey" FOREIGN KEY ("productBId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
