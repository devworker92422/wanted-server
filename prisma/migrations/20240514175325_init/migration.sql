/*
  Warnings:

  - Made the column `htId` on table `hotel` required. This step will fail if there are existing NULL values in that column.
  - Made the column `userId` on table `hotel` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `hotel` DROP FOREIGN KEY `Hotel_htId_fkey`;

-- DropForeignKey
ALTER TABLE `hotel` DROP FOREIGN KEY `Hotel_userId_fkey`;

-- AlterTable
ALTER TABLE `hotel` MODIFY `htId` INTEGER NOT NULL,
    MODIFY `userId` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `HotelNutrition` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `NutritionsonHotels` (
    `hotelId` INTEGER NOT NULL,
    `nutritionId` INTEGER NOT NULL,
    `assignedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`hotelId`, `nutritionId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Hotel` ADD CONSTRAINT `Hotel_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Hotel` ADD CONSTRAINT `Hotel_htId_fkey` FOREIGN KEY (`htId`) REFERENCES `HotelType`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `NutritionsonHotels` ADD CONSTRAINT `NutritionsonHotels_hotelId_fkey` FOREIGN KEY (`hotelId`) REFERENCES `Hotel`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `NutritionsonHotels` ADD CONSTRAINT `NutritionsonHotels_nutritionId_fkey` FOREIGN KEY (`nutritionId`) REFERENCES `HotelNutrition`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
