/*
  Warnings:

  - The primary key for the `Product` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the `ProductRelations` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `allowCustomerReviews` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `deleted` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `disableBuyButton` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `disableCompareButton` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `disableWishlistButton` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isBestSeller` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isCallForPricing` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isDownload` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isFeatured` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isFreeShipping` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isGiftCard` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isNew` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isOnHomePage` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isOnSale` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isOnSalePage` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isRecurring` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isShipEnabled` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `published` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `showOnHomePage` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `showOnSalePage` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ProductRelations" DROP CONSTRAINT "ProductRelations_productAId_fkey";

-- DropForeignKey
ALTER TABLE "ProductRelations" DROP CONSTRAINT "ProductRelations_productBId_fkey";

-- AlterTable
ALTER TABLE "Product" DROP CONSTRAINT "Product_pkey",
ADD COLUMN     "CategoryId" TEXT,
ADD COLUMN     "ProductBrandId" TEXT,
ADD COLUMN     "ProductTypeId" TEXT,
ADD COLUMN     "allowCustomerReviews" BOOLEAN NOT NULL,
ADD COLUMN     "closureType" TEXT,
ADD COLUMN     "color" TEXT,
ADD COLUMN     "createdOnUtc" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "decoration" TEXT,
ADD COLUMN     "deleted" BOOLEAN NOT NULL,
ADD COLUMN     "disableBuyButton" BOOLEAN NOT NULL,
ADD COLUMN     "disableCompareButton" BOOLEAN NOT NULL,
ADD COLUMN     "disableWishlistButton" BOOLEAN NOT NULL,
ADD COLUMN     "discountPercentage" DECIMAL(65,30),
ADD COLUMN     "displayOrder" INTEGER,
ADD COLUMN     "dressLength" TEXT,
ADD COLUMN     "fitType" TEXT,
ADD COLUMN     "isBestSeller" BOOLEAN NOT NULL,
ADD COLUMN     "isCallForPricing" BOOLEAN NOT NULL,
ADD COLUMN     "isDownload" BOOLEAN NOT NULL,
ADD COLUMN     "isFeatured" BOOLEAN NOT NULL,
ADD COLUMN     "isFreeShipping" BOOLEAN NOT NULL,
ADD COLUMN     "isGiftCard" BOOLEAN NOT NULL,
ADD COLUMN     "isNew" BOOLEAN NOT NULL,
ADD COLUMN     "isOnHomePage" BOOLEAN NOT NULL,
ADD COLUMN     "isOnSale" BOOLEAN NOT NULL,
ADD COLUMN     "isOnSalePage" BOOLEAN NOT NULL,
ADD COLUMN     "isRecurring" BOOLEAN NOT NULL,
ADD COLUMN     "isShipEnabled" BOOLEAN NOT NULL,
ADD COLUMN     "material" TEXT,
ADD COLUMN     "neckline" TEXT,
ADD COLUMN     "occasion" TEXT,
ADD COLUMN     "oldPrice" DECIMAL(65,30),
ADD COLUMN     "pantClosureType" TEXT,
ADD COLUMN     "pantLength" TEXT,
ADD COLUMN     "pantStyle" TEXT,
ADD COLUMN     "pattern" TEXT,
ADD COLUMN     "pictureUrl" TEXT,
ADD COLUMN     "price" DECIMAL(65,30) NOT NULL,
ADD COLUMN     "published" BOOLEAN NOT NULL,
ADD COLUMN     "season" TEXT,
ADD COLUMN     "shortDescription" TEXT,
ADD COLUMN     "showOnHomePage" BOOLEAN NOT NULL,
ADD COLUMN     "showOnSalePage" BOOLEAN NOT NULL,
ADD COLUMN     "silhouette" TEXT,
ADD COLUMN     "size" TEXT,
ADD COLUMN     "sleeve" TEXT,
ADD COLUMN     "specialPrice" DECIMAL(65,30),
ADD COLUMN     "stockQuantity" INTEGER,
ADD COLUMN     "style" TEXT,
ADD COLUMN     "updatedOnUtc" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "waistline" TEXT,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Product_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Product_id_seq";

-- DropTable
DROP TABLE "ProductRelations";

-- CreateTable
CREATE TABLE "RelatedProduct" (
    "productAId" TEXT NOT NULL,
    "productBId" TEXT NOT NULL,

    CONSTRAINT "RelatedProduct_pkey" PRIMARY KEY ("productAId","productBId")
);

-- CreateTable
CREATE TABLE "ProductBrand" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "pictureUrl" TEXT,

    CONSTRAINT "ProductBrand_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "pictureUrl" TEXT,
    "showOnHomePage" BOOLEAN NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductType" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "ProductType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductColors" (
    "productId" TEXT NOT NULL,
    "colorId" TEXT NOT NULL,

    CONSTRAINT "ProductColors_pkey" PRIMARY KEY ("productId","colorId")
);

-- CreateTable
CREATE TABLE "Color" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "colorCode" TEXT NOT NULL,

    CONSTRAINT "Color_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductPictures" (
    "productId" TEXT NOT NULL,
    "pictureId" TEXT NOT NULL,

    CONSTRAINT "ProductPictures_pkey" PRIMARY KEY ("productId","pictureId")
);

-- CreateTable
CREATE TABLE "Picture" (
    "id" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "pictureType" TEXT NOT NULL,
    "pictureTypeId" TEXT NOT NULL,

    CONSTRAINT "Picture_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductSizes" (
    "productId" TEXT NOT NULL,
    "sizeId" TEXT NOT NULL,

    CONSTRAINT "ProductSizes_pkey" PRIMARY KEY ("productId","sizeId")
);

-- CreateTable
CREATE TABLE "Size" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Size_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductTags" (
    "productId" TEXT NOT NULL,
    "tagId" TEXT NOT NULL,

    CONSTRAINT "ProductTags_pkey" PRIMARY KEY ("productId","tagId")
);

-- CreateTable
CREATE TABLE "Tag" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Tag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductReview" (
    "id" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "comment" TEXT NOT NULL,
    "UserId" TEXT,
    "ProductId" TEXT,
    "createdOnUtc" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ProductReview_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CategoryProductType" (
    "id" TEXT NOT NULL,
    "CategoryId" TEXT,
    "ProductTypeId" TEXT,

    CONSTRAINT "CategoryProductType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AppUser" (
    "id" TEXT NOT NULL,
    "displayName" TEXT NOT NULL,
    "userName" TEXT,
    "normalizedUserName" TEXT,
    "email" TEXT NOT NULL,
    "normalizedEmail" TEXT NOT NULL,
    "emailConfirmed" BOOLEAN NOT NULL,
    "passwordHash" TEXT NOT NULL,
    "securityStamp" TEXT NOT NULL,
    "concurrencyStamp" TEXT NOT NULL,
    "phoneNumber" TEXT,
    "phoneNumberConfirmed" BOOLEAN NOT NULL,
    "twoFactorEnabled" BOOLEAN NOT NULL,
    "lockoutEnd" TIMESTAMP(3),
    "lockoutEnabled" BOOLEAN NOT NULL,
    "accessFailedCount" INTEGER NOT NULL,

    CONSTRAINT "AppUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Address" (
    "id" TEXT NOT NULL,
    "firstName" TEXT,
    "lastName" TEXT,
    "street" TEXT,
    "city" TEXT,
    "state" TEXT,
    "zipcode" TEXT,
    "AppUserId" TEXT NOT NULL,

    CONSTRAINT "Address_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DeliveryMethod" (
    "id" TEXT NOT NULL,
    "shortName" TEXT NOT NULL,
    "deliveryTime" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "DeliveryMethod_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Order" (
    "id" TEXT NOT NULL,
    "buyerEmail" TEXT NOT NULL,
    "orderDate" TIMESTAMP(3) NOT NULL,
    "subtotal" DOUBLE PRECISION NOT NULL,
    "status" TEXT NOT NULL,
    "paymentIntentId" TEXT,
    "ShipToAddressId" TEXT,
    "DeliveryMethodId" TEXT,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OrderItem" (
    "id" TEXT NOT NULL,
    "itemOrdered_ProductItemId" TEXT NOT NULL,
    "itemOrdered_ProductName" TEXT NOT NULL,
    "itemOrdered_PictureUrl" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "quantity" INTEGER NOT NULL,
    "OrderId" TEXT,

    CONSTRAINT "OrderItem_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ProductBrand_name_key" ON "ProductBrand"("name");

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_ProductTypeId_fkey" FOREIGN KEY ("ProductTypeId") REFERENCES "ProductType"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_CategoryId_fkey" FOREIGN KEY ("CategoryId") REFERENCES "Category"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_ProductBrandId_fkey" FOREIGN KEY ("ProductBrandId") REFERENCES "ProductBrand"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RelatedProduct" ADD CONSTRAINT "RelatedProduct_productAId_fkey" FOREIGN KEY ("productAId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RelatedProduct" ADD CONSTRAINT "RelatedProduct_productBId_fkey" FOREIGN KEY ("productBId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductColors" ADD CONSTRAINT "ProductColors_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductColors" ADD CONSTRAINT "ProductColors_colorId_fkey" FOREIGN KEY ("colorId") REFERENCES "Color"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductPictures" ADD CONSTRAINT "ProductPictures_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductPictures" ADD CONSTRAINT "ProductPictures_pictureId_fkey" FOREIGN KEY ("pictureId") REFERENCES "Picture"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductSizes" ADD CONSTRAINT "ProductSizes_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductSizes" ADD CONSTRAINT "ProductSizes_sizeId_fkey" FOREIGN KEY ("sizeId") REFERENCES "Size"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductTags" ADD CONSTRAINT "ProductTags_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductTags" ADD CONSTRAINT "ProductTags_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "Tag"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductReview" ADD CONSTRAINT "ProductReview_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES "AppUser"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductReview" ADD CONSTRAINT "ProductReview_ProductId_fkey" FOREIGN KEY ("ProductId") REFERENCES "Product"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CategoryProductType" ADD CONSTRAINT "CategoryProductType_CategoryId_fkey" FOREIGN KEY ("CategoryId") REFERENCES "Category"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CategoryProductType" ADD CONSTRAINT "CategoryProductType_ProductTypeId_fkey" FOREIGN KEY ("ProductTypeId") REFERENCES "ProductType"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_AppUserId_fkey" FOREIGN KEY ("AppUserId") REFERENCES "AppUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_ShipToAddressId_fkey" FOREIGN KEY ("ShipToAddressId") REFERENCES "Address"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_DeliveryMethodId_fkey" FOREIGN KEY ("DeliveryMethodId") REFERENCES "DeliveryMethod"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_OrderId_fkey" FOREIGN KEY ("OrderId") REFERENCES "Order"("id") ON DELETE SET NULL ON UPDATE CASCADE;
