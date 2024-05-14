-- CreateTable
CREATE TABLE `HotelReseption` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `type` INTEGER NOT NULL DEFAULT 1,
    `fromTime` VARCHAR(191) NULL,
    `toTime` VARCHAR(191) NULL,
    `checkIn` VARCHAR(191) NULL,
    `checkOut` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
