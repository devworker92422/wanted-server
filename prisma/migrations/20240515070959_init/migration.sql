-- CreateTable
CREATE TABLE `HotelTransportFacility` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TransportFacilitiesonHotels` (
    `hotelId` INTEGER NOT NULL,
    `transportFacilityId` INTEGER NOT NULL,
    `assignedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`hotelId`, `transportFacilityId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `TransportFacilitiesonHotels` ADD CONSTRAINT `TransportFacilitiesonHotels_hotelId_fkey` FOREIGN KEY (`hotelId`) REFERENCES `Hotel`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TransportFacilitiesonHotels` ADD CONSTRAINT `TransportFacilitiesonHotels_transportFacilityId_fkey` FOREIGN KEY (`transportFacilityId`) REFERENCES `HotelTransportFacility`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
