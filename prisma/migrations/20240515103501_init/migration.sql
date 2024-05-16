-- CreateTable
CREATE TABLE `RoomSize` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `square` DOUBLE NOT NULL,
    `count` INTEGER NOT NULL DEFAULT 0,
    `adult` INTEGER NOT NULL DEFAULT 0,
    `child` INTEGER NOT NULL DEFAULT 0,
    `other` INTEGER NOT NULL DEFAULT 0,
    `roomId` INTEGER NOT NULL,

    UNIQUE INDEX `RoomSize_roomId_key`(`roomId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `RoomAccommodation` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `singleBed` INTEGER NOT NULL DEFAULT 0,
    `doubleBed` INTEGER NOT NULL DEFAULT 0,
    `otherBed` INTEGER NOT NULL DEFAULT 0,
    `roomId` INTEGER NOT NULL,

    UNIQUE INDEX `RoomAccommodation_roomId_key`(`roomId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `RoomFacility` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `type` ENUM('equipment', 'bathroom', 'relax') NOT NULL DEFAULT 'relax',
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `FacilitiesonRooms` (
    `facilityId` INTEGER NOT NULL,
    `roomId` INTEGER NOT NULL,

    PRIMARY KEY (`facilityId`, `roomId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `RoomSize` ADD CONSTRAINT `RoomSize_roomId_fkey` FOREIGN KEY (`roomId`) REFERENCES `Room`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RoomAccommodation` ADD CONSTRAINT `RoomAccommodation_roomId_fkey` FOREIGN KEY (`roomId`) REFERENCES `Room`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FacilitiesonRooms` ADD CONSTRAINT `FacilitiesonRooms_facilityId_fkey` FOREIGN KEY (`facilityId`) REFERENCES `RoomFacility`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FacilitiesonRooms` ADD CONSTRAINT `FacilitiesonRooms_roomId_fkey` FOREIGN KEY (`roomId`) REFERENCES `Room`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
