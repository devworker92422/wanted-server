-- DropForeignKey
ALTER TABLE `facility_room` DROP FOREIGN KEY `Facility_Room_facilityId_fkey`;

-- DropForeignKey
ALTER TABLE `facility_room` DROP FOREIGN KEY `Facility_Room_roomId_fkey`;

-- DropForeignKey
ALTER TABLE `image` DROP FOREIGN KEY `Image_roomId_fkey`;

-- DropForeignKey
ALTER TABLE `roomaccommodation` DROP FOREIGN KEY `RoomAccommodation_roomId_fkey`;

-- DropForeignKey
ALTER TABLE `roomsize` DROP FOREIGN KEY `RoomSize_roomId_fkey`;

-- AddForeignKey
ALTER TABLE `Image` ADD CONSTRAINT `Image_roomId_fkey` FOREIGN KEY (`roomId`) REFERENCES `Room`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RoomSize` ADD CONSTRAINT `RoomSize_roomId_fkey` FOREIGN KEY (`roomId`) REFERENCES `Room`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RoomAccommodation` ADD CONSTRAINT `RoomAccommodation_roomId_fkey` FOREIGN KEY (`roomId`) REFERENCES `Room`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Facility_Room` ADD CONSTRAINT `Facility_Room_facilityId_fkey` FOREIGN KEY (`facilityId`) REFERENCES `Facility`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Facility_Room` ADD CONSTRAINT `Facility_Room_roomId_fkey` FOREIGN KEY (`roomId`) REFERENCES `Room`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
