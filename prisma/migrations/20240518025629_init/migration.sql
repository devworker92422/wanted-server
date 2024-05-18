-- AlterTable
ALTER TABLE `hoteltransport` MODIFY `typePark` BOOLEAN NULL DEFAULT false,
    MODIFY `typeTransfer` BOOLEAN NULL DEFAULT false;

-- AlterTable
ALTER TABLE `hotelwifi` MODIFY `typeHotelWifi` BOOLEAN NULL DEFAULT false,
    MODIFY `typeRoomWifi` BOOLEAN NULL DEFAULT false;

-- AlterTable
ALTER TABLE `user` MODIFY `type` INTEGER NOT NULL DEFAULT 3;
