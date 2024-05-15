import { Injectable } from "@nestjs/common";
import { HotelTransportFacility, Prisma } from "@prisma/client";
import { PrismaService } from "src/module/prisma/prisma.service";

@Injectable()

export class HTranFacService {
    constructor(
        private prisma: PrismaService
    ) { }

    create(data: Prisma.HotelTransportFacilityCreateInput): Promise<HotelTransportFacility> {
        return this.prisma.hotelTransportFacility.create({ data });
    }

    findAll(): Promise<HotelTransportFacility[]> {
        return this.prisma.hotelTransportFacility.findMany();
    }

    update(id: number, data: Prisma.HotelTransportFacilityUpdateInput): Promise<HotelTransportFacility> {
        return this.prisma.hotelTransportFacility.update({
            where: { id },
            data
        });
    }

    remove(id: number): Promise<HotelTransportFacility> {
        return this.prisma.hotelTransportFacility.delete({
            where: { id }
        });
    }
}