/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `Hotel` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `fromTime` to the `HotelReseption` table without a default value. This is not possible if the table is not empty.
  - Added the required column `toTime` to the `HotelReseption` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `hotelreseption` ADD COLUMN `fromTime` VARCHAR(191) NOT NULL,
    ADD COLUMN `status` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `toTime` VARCHAR(191) NOT NULL,
    ADD COLUMN `type` INTEGER NOT NULL DEFAULT 1;

-- CreateIndex
CREATE UNIQUE INDEX `Hotel_userId_key` ON `Hotel`(`userId`);
