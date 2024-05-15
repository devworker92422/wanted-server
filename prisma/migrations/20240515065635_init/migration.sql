-- AlterTable
ALTER TABLE `hotelreseption` MODIFY `checkIn` VARCHAR(191) NULL,
    MODIFY `checkOut` VARCHAR(191) NULL,
    MODIFY `fromTime` VARCHAR(191) NULL,
    MODIFY `toTime` VARCHAR(191) NULL;

-- CreateTable
CREATE TABLE `HotelWifi` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `enableHotelWifi` BOOLEAN NOT NULL DEFAULT false,
    `typeHotelWifi` BOOLEAN NOT NULL DEFAULT false,
    `enableRoomWifi` BOOLEAN NOT NULL DEFAULT false,
    `typeRoomWifi` BOOLEAN NOT NULL DEFAULT false,
    `wifiId` INTEGER NOT NULL,

    UNIQUE INDEX `HotelWifi_wifiId_key`(`wifiId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `HotelWifi` ADD CONSTRAINT `HotelWifi_wifiId_fkey` FOREIGN KEY (`wifiId`) REFERENCES `Hotel`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
