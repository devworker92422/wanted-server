import { Injectable } from "@nestjs/common";
import { HotelChildFacility, Prisma } from "@prisma/client";
import { PrismaService } from "src/module/prisma/prisma.service";


@Injectable()

export class HChildFacService {
    constructor(
        private prisma: PrismaService
    ) { }

    create(data: Prisma.HotelChildFacilityCreateInput): Promise<HotelChildFacility> {
        return this.prisma.hotelChildFacility.create({ data });
    }

    findAll(): Promise<HotelChildFacility[]> {
        return this.prisma.hotelChildFacility.findMany();
    }

    update(id: number, data: Prisma.HotelChildFacilityUpdateInput): Promise<HotelChildFacility> {
        return this.prisma.hotelChildFacility.update({
            where: { id },
            data
        });
    }

    remove(id: number): Promise<HotelChildFacility> {
        return this.prisma.hotelChildFacility.delete({
            where: { id }
        });
    }

}