-- DropForeignKey
ALTER TABLE `facility` DROP FOREIGN KEY `Facility_facilityGroupId_fkey`;

-- AlterTable
ALTER TABLE `facility` MODIFY `facilityGroupId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Facility` ADD CONSTRAINT `Facility_facilityGroupId_fkey` FOREIGN KEY (`facilityGroupId`) REFERENCES `FacilityGroup`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
