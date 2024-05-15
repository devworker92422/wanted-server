/*
  Warnings:

  - You are about to drop the column `dailyPrice` on the `hotelwifi` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `hotelwifi` DROP COLUMN `dailyPrice`,
    ADD COLUMN `priceHotelWifi` INTEGER NULL,
    ADD COLUMN `priceRoomWifi` INTEGER NULL;

-- CreateTable
CREATE TABLE `HotelTransport` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `enablePark` BOOLEAN NOT NULL DEFAULT false,
    `typePark` BOOLEAN NOT NULL DEFAULT false,
    `enableTransfer` BOOLEAN NOT NULL DEFAULT false,
    `typeTransfer` BOOLEAN NOT NULL DEFAULT false,
    `pricePark` INTEGER NULL,
    `priceTransfer` INTEGER NULL,
    `transportId` INTEGER NOT NULL,

    UNIQUE INDEX `HotelTransport_transportId_key`(`transportId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `HotelTransport` ADD CONSTRAINT `HotelTransport_transportId_fkey` FOREIGN KEY (`transportId`) REFERENCES `Hotel`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
