/*
  Warnings:

  - You are about to drop the column `fromTime` on the `hotelreseption` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `hotelreseption` table. All the data in the column will be lost.
  - You are about to drop the column `toTime` on the `hotelreseption` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `hotelreseption` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[hotelId]` on the table `HotelReseption` will be added. If there are existing duplicate values, this will fail.
  - Made the column `checkIn` on table `hotelreseption` required. This step will fail if there are existing NULL values in that column.
  - Made the column `checkOut` on table `hotelreseption` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `hotelreseption` DROP COLUMN `fromTime`,
    DROP COLUMN `status`,
    DROP COLUMN `toTime`,
    DROP COLUMN `type`,
    MODIFY `checkIn` VARCHAR(191) NOT NULL,
    MODIFY `checkOut` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `HotelReseption_hotelId_key` ON `HotelReseption`(`hotelId`);
