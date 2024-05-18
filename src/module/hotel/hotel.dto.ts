import { Prisma } from "@prisma/client";

export interface NewHotelBodyDTO {
    name: string;
    markUp: number;
    isAbkhazia: boolean;
    region: string;
    city: string;
    street: string;
    home: string;
    frame: string;
    latitude: number;
    longitude: number;
    htId: number;
    userId?: number;
    reseption: Prisma.HotelReseptionCreateInput;
    wifi: Prisma.HotelWifiCreateInput;
    transport: Prisma.HotelTransportCreateInput;
    other: Prisma.HotelOtherFacilityCreateInput;
    images: Prisma.ImageWhereUniqueInput[];
    facilities: Prisma.FacilityWhereUniqueInput[];
}

export interface UpdateHotelBodyDTO {
    hotelId: number;
    name?: string;
    markUp?: number;
    isAbkhazia?: boolean;
    region?: string;
    city?: string;
    street?: string;
    home?: string;
    frame?: string;
    latitude?: number;
    longitude?: number;
    htId: number;
    reseption: Prisma.HotelReseptionUpdateInput;
    wifi: Prisma.HotelWifiUpdateInput;
    transport: Prisma.HotelTransportUpdateInput;
    other: Prisma.HotelOtherFacilityUpdateInput;
    newFacilities: Prisma.FacilityWhereUniqueInput[];
    removeFacilities: Prisma.FacilityWhereUniqueInput[];
    images: Prisma.ImageWhereUniqueInput[];
}