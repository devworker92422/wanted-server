/*
  Warnings:

  - Added the required column `hotelId` to the `Room` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `facility` DROP FOREIGN KEY `Facility_facilityGroupId_fkey`;

-- AlterTable
ALTER TABLE `room` ADD COLUMN `hotelId` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `Facility_Hotel` (
    `facilityId` INTEGER NOT NULL,
    `hotelId` INTEGER NOT NULL,

    PRIMARY KEY (`facilityId`, `hotelId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Room` ADD CONSTRAINT `Room_hotelId_fkey` FOREIGN KEY (`hotelId`) REFERENCES `Hotel`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Facility` ADD CONSTRAINT `Facility_facilityGroupId_fkey` FOREIGN KEY (`facilityGroupId`) REFERENCES `FacilityGroup`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Facility_Hotel` ADD CONSTRAINT `Facility_Hotel_facilityId_fkey` FOREIGN KEY (`facilityId`) REFERENCES `Facility`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Facility_Hotel` ADD CONSTRAINT `Facility_Hotel_hotelId_fkey` FOREIGN KEY (`hotelId`) REFERENCES `Hotel`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
