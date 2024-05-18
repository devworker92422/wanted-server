import { Injectable } from "@nestjs/common";
import { Prisma, Hotel } from "@prisma/client";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()

export class HotelService {
    constructor(
        private prisma: PrismaService
    ) { }

    create(data: Prisma.HotelCreateInput): Promise<Hotel> {
        //get the user ID from the jwt token
        return this.prisma.hotel.create({ data })
    }

    findAll(): Promise<Hotel[]> {
        return this.prisma.hotel.findMany()
    }

    update(id: number, data: Prisma.HotelUpdateInput): Promise<Hotel> {
        return this.prisma.hotel.update({
            where: { id },
            data
        });
    }

    remove(id: number): Promise<Hotel> {
        return this.prisma.hotel.delete({
            where: { id }
        });
    }

}