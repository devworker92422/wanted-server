/*
  Warnings:

  - Added the required column `hotelId` to the `HotelReseption` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `hotelreseption` ADD COLUMN `hotelId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `HotelReseption` ADD CONSTRAINT `HotelReseption_hotelId_fkey` FOREIGN KEY (`hotelId`) REFERENCES `Hotel`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
