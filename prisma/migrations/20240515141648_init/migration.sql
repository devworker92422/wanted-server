/*
  Warnings:

  - You are about to drop the `childfacilitiesonhotels` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `facilitiesonrooms` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `hotelchildfacility` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `hotelinfra` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `hotelnutrition` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `hoteltransportfacility` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `infrasonhotels` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `nutritionsonhotels` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `roomfacility` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `transportfacilitiesonhotels` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `childfacilitiesonhotels` DROP FOREIGN KEY `ChildFacilitiesonHotels_childFacilityId_fkey`;

-- DropForeignKey
ALTER TABLE `childfacilitiesonhotels` DROP FOREIGN KEY `ChildFacilitiesonHotels_hotelId_fkey`;

-- DropForeignKey
ALTER TABLE `facilitiesonrooms` DROP FOREIGN KEY `FacilitiesonRooms_facilityId_fkey`;

-- DropForeignKey
ALTER TABLE `facilitiesonrooms` DROP FOREIGN KEY `FacilitiesonRooms_roomId_fkey`;

-- DropForeignKey
ALTER TABLE `infrasonhotels` DROP FOREIGN KEY `InfrasOnHotels_hotelId_fkey`;

-- DropForeignKey
ALTER TABLE `infrasonhotels` DROP FOREIGN KEY `InfrasOnHotels_infraId_fkey`;

-- DropForeignKey
ALTER TABLE `nutritionsonhotels` DROP FOREIGN KEY `NutritionsonHotels_hotelId_fkey`;

-- DropForeignKey
ALTER TABLE `nutritionsonhotels` DROP FOREIGN KEY `NutritionsonHotels_nutritionId_fkey`;

-- DropForeignKey
ALTER TABLE `transportfacilitiesonhotels` DROP FOREIGN KEY `TransportFacilitiesonHotels_hotelId_fkey`;

-- DropForeignKey
ALTER TABLE `transportfacilitiesonhotels` DROP FOREIGN KEY `TransportFacilitiesonHotels_transportFacilityId_fkey`;

-- AlterTable
ALTER TABLE `image` ADD COLUMN `roomId` INTEGER NULL;

-- DropTable
DROP TABLE `childfacilitiesonhotels`;

-- DropTable
DROP TABLE `facilitiesonrooms`;

-- DropTable
DROP TABLE `hotelchildfacility`;

-- DropTable
DROP TABLE `hotelinfra`;

-- DropTable
DROP TABLE `hotelnutrition`;

-- DropTable
DROP TABLE `hoteltransportfacility`;

-- DropTable
DROP TABLE `infrasonhotels`;

-- DropTable
DROP TABLE `nutritionsonhotels`;

-- DropTable
DROP TABLE `roomfacility`;

-- DropTable
DROP TABLE `transportfacilitiesonhotels`;

-- CreateTable
CREATE TABLE `FacilityGroup` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `type` INTEGER NOT NULL DEFAULT 1,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Facility` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `facilityGroupId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Image` ADD CONSTRAINT `Image_roomId_fkey` FOREIGN KEY (`roomId`) REFERENCES `Room`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Facility` ADD CONSTRAINT `Facility_facilityGroupId_fkey` FOREIGN KEY (`facilityGroupId`) REFERENCES `FacilityGroup`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
