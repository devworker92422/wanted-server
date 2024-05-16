import { Prisma } from "@prisma/client"
import { NewRoomBodyDTO, UpdateRoomBodyDTO } from "src/module/room/room.dto"

export const asFacility_RoomCreateWithoutRoomInput = (fields: Prisma.FacilityCreateManyInput): Prisma.Facility_RoomCreateWithoutRoomInput => ({
    facility: {
        connect: {
            id: fields.id
        }
    }
})

// export const asFacility_RoomWhereUniqueInput =

export const asRoomCreateInput = (fields: NewRoomBodyDTO): Prisma.RoomCreateInput => ({
    name: fields.name,
    size: {
        create: fields.size
    },
    accommodation: {
        create: fields.accommodation
    },
    facilities: {
        create: fields.facilities.map(asFacility_RoomCreateWithoutRoomInput)
    },
    images: {
        connect: fields.images
    }
});

export const asRoomUpdateInput = (fields: UpdateRoomBodyDTO): Prisma.RoomUpdateInput => ({
    name: fields.name,
    size: {
        update: fields.size
    },
    accommodation: {
        update: fields.accommodation
    },
    facilities: {
        create: fields.newFacilities.map(asFacility_RoomCreateWithoutRoomInput),
        delete: fields.removeFacilities.map((a) => ({
            facilityId_roomId: {
                roomId: fields.roomId,
                facilityId: a.id
            }
        }))
    },
    images: {
        connect: fields.images
    }
});