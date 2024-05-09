/*
  Warnings:

  - Added the required column `password` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phoneNumber` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `user` ADD COLUMN `emailVerify` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `password` VARCHAR(191) NOT NULL,
    ADD COLUMN `phoneNumber` VARCHAR(191) NOT NULL,
    ADD COLUMN `phoneVerify` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `status` INTEGER NOT NULL DEFAULT 1,
    ADD COLUMN `type` INTEGER NOT NULL DEFAULT 2;
