import { Prisma } from "@prisma/client"
import { NewRoomBodyDTO, UpdateRoomBodyDTO } from "src/module/room/room.dto"
import { NewHotelBodyDTO, UpdateHotelBodyDTO } from "src/module/hotel/hotel.dto";


export const asFacility_RoomCreateWithoutRoomInput = (fields: Prisma.FacilityCreateManyInput): Prisma.Facility_RoomCreateWithoutRoomInput => ({
    facility: {
        connect: {
            id: fields.id
        }
    }
})

export const asFacility_HotelCreateWithoutHotelInput = (fields: Prisma.FacilityWhereUniqueInput): Prisma.Facility_HotelCreateWithoutHotelInput => ({
    facility: {
        connect: {
            id: fields.id
        }
    }
})

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
    },
    hotel: {
        connect: {
            id: fields.hotelId
        }
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

export const asHotelCreateInput = (fields: NewHotelBodyDTO): Prisma.HotelCreateInput => ({
    name: fields.name,
    markUp: fields.markUp,
    isAbkhazia: fields.isAbkhazia,
    region: fields.region,
    city: fields.city,
    street: fields.street,
    home: fields.home,
    frame: fields.frame,
    latitude: fields.latitude,
    longitude: fields.longitude,
    user: {
        connect: {
            id: fields.userId
        }
    },
    type: {
        connect: {
            id: fields.htId
        }
    },
    reseption: {
        create: fields.reseption
    },
    wifi: {
        create: fields.wifi
    },
    transport: {
        create: fields.transport
    },
    other: {
        create: fields.other
    },
    images: {
        connect: fields.images
    },
    facilities: {
        create: fields.facilities.map(asFacility_HotelCreateWithoutHotelInput)
    }
})

export const asHotelUpdateInput = (fields: UpdateHotelBodyDTO): Prisma.HotelUpdateInput => ({
    name: fields.name,
    markUp: fields.markUp,
    isAbkhazia: fields.isAbkhazia,
    region: fields.region,
    city: fields.city,
    street: fields.street,
    home: fields.home,
    frame: fields.frame,
    latitude: fields.latitude,
    longitude: fields.longitude,
    type: {
        connect: {
            id: fields.htId
        }
    },
    reseption: {
        update: fields.reseption
    },
    wifi: {
        update: fields.wifi
    },
    transport: {
        update: fields.transport
    },
    other: {
        update: fields.other
    },
    facilities: {
        delete: fields.removeFacilities.map((a) => ({
            facilityId_hotelId: {
                facilityId: a.id,
                hotelId: fields.hotelId
            }
        })),
        create: fields.newFacilities.map(asFacility_HotelCreateWithoutHotelInput)
    }
})