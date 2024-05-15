/*
  Warnings:

  - Added the required column `dailyPrice` to the `HotelWifi` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `hotelwifi` ADD COLUMN `dailyPrice` INTEGER NOT NULL;
