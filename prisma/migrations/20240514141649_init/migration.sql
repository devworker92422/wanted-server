-- CreateTable
CREATE TABLE `InfrasOnHotels` (
    `hotelId` INTEGER NOT NULL,
    `infraId` INTEGER NOT NULL,
    `assignedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`hotelId`, `infraId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `InfrasOnHotels` ADD CONSTRAINT `InfrasOnHotels_hotelId_fkey` FOREIGN KEY (`hotelId`) REFERENCES `Hotel`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `InfrasOnHotels` ADD CONSTRAINT `InfrasOnHotels_infraId_fkey` FOREIGN KEY (`infraId`) REFERENCES `HotelInfra`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
