/*
  Warnings:

  - Added the required column `city` to the `Hotel` table without a default value. This is not possible if the table is not empty.
  - Added the required column `frame` to the `Hotel` table without a default value. This is not possible if the table is not empty.
  - Added the required column `home` to the `Hotel` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isAbkhazia` to the `Hotel` table without a default value. This is not possible if the table is not empty.
  - Added the required column `latitude` to the `Hotel` table without a default value. This is not possible if the table is not empty.
  - Added the required column `longitude` to the `Hotel` table without a default value. This is not possible if the table is not empty.
  - Added the required column `markUp` to the `Hotel` table without a default value. This is not possible if the table is not empty.
  - Added the required column `region` to the `Hotel` table without a default value. This is not possible if the table is not empty.
  - Added the required column `street` to the `Hotel` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `hotel` ADD COLUMN `city` VARCHAR(191) NOT NULL,
    ADD COLUMN `frame` VARCHAR(191) NOT NULL,
    ADD COLUMN `home` VARCHAR(191) NOT NULL,
    ADD COLUMN `isAbkhazia` BOOLEAN NOT NULL,
    ADD COLUMN `latitude` DOUBLE NOT NULL,
    ADD COLUMN `longitude` DOUBLE NOT NULL,
    ADD COLUMN `markUp` INTEGER NOT NULL,
    ADD COLUMN `region` VARCHAR(191) NOT NULL,
    ADD COLUMN `street` VARCHAR(191) NOT NULL,
    ADD COLUMN `userId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Hotel` ADD CONSTRAINT `Hotel_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
