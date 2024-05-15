import { Injectable } from "@nestjs/common";
import { HotelInfra, Prisma } from "@prisma/client";
import { PrismaService } from "src/module/prisma/prisma.service";

@Injectable()

export class HInfraService {
    constructor(
        private prisma: PrismaService
    ) { }

    create(data: Prisma.HotelInfraCreateInput): Promise<HotelInfra> {
        return this.prisma.hotelInfra.create({ data })
    }

    findAll(): Promise<HotelInfra[]> {
        return this.prisma.hotelInfra.findMany();
    }

    update(id: number, data: Prisma.HotelInfraUpdateInput): Promise<HotelInfra> {
        return this.prisma.hotelInfra.update({
            where: { id },
            data
        });
    }

    remove(id: number): Promise<HotelInfra> {
        return this.prisma.hotelInfra.delete({
            where: { id }
        });
    }

}