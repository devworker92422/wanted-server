-- CreateTable
CREATE TABLE `HotelChildFacility` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ChildFacilitiesonHotels` (
    `hotelId` INTEGER NOT NULL,
    `childFacilityId` INTEGER NOT NULL,

    PRIMARY KEY (`hotelId`, `childFacilityId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `HotelOtherFacility` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `service` TEXT NULL,
    `bar` TEXT NULL,
    `health` TEXT NULL,
    `amenity` TEXT NULL,
    `conference` TEXT NULL,
    `beach` VARCHAR(191) NULL,
    `enablePet` BOOLEAN NOT NULL DEFAULT false,
    `enableChild` BOOLEAN NOT NULL DEFAULT false,
    `disabled` TEXT NULL,
    `stuffSay` TEXT NULL,
    `hotelId` INTEGER NOT NULL,

    UNIQUE INDEX `HotelOtherFacility_hotelId_key`(`hotelId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ChildFacilitiesonHotels` ADD CONSTRAINT `ChildFacilitiesonHotels_hotelId_fkey` FOREIGN KEY (`hotelId`) REFERENCES `Hotel`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ChildFacilitiesonHotels` ADD CONSTRAINT `ChildFacilitiesonHotels_childFacilityId_fkey` FOREIGN KEY (`childFacilityId`) REFERENCES `HotelChildFacility`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `HotelOtherFacility` ADD CONSTRAINT `HotelOtherFacility_hotelId_fkey` FOREIGN KEY (`hotelId`) REFERENCES `Hotel`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
