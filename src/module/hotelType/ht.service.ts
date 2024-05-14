import { Injectable } from "@nestjs/common";
import { Prisma, HotelType } from "@prisma/client";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()

export class HTService {
    constructor(
        private prisma: PrismaService
    ) { }

    async create(data: Prisma.HotelTypeCreateInput): Promise<HotelType> {
        return this.prisma.hotelType.create({ data })
    }

    async findAll(): Promise<HotelType[]> {
        return this.prisma.hotelType.findMany();
    }

    async update(id: number, data: Prisma.HotelTypeUpdateInput): Promise<HotelType> {
        return this.prisma.hotelType.update({
            where: { id },
            data
        })
    }

    async remove(id: number): Promise<HotelType> {
        return this.prisma.hotelType.delete({
            where: { id }
        })
    }
}