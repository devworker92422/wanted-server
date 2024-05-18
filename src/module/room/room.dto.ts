import { Prisma } from "@prisma/client";

export interface NewRoomBodyDTO {
    name: string;
    hotelId: number;
    size: Prisma.RoomSizeCreateInput;
    accommodation: Prisma.RoomAccommodationCreateInput;
    facilities: Prisma.FacilityCreateManyInput[];
    images: Prisma.ImageWhereUniqueInput[];
}

export interface UpdateRoomBodyDTO {
    name: string;
    roomId: number;
    size: Prisma.RoomSizeCreateInput;
    accommodation: Prisma.RoomAccommodationCreateInput;
    newFacilities: Prisma.FacilityCreateManyInput[];
    removeFacilities: Prisma.FacilityCreateManyInput[];
    images: Prisma.ImageWhereUniqueInput[];
}