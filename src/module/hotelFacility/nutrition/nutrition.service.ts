import { Injectable } from "@nestjs/common";
import { Prisma, HotelNutrition } from "@prisma/client";
import { PrismaService } from "src/module/prisma/prisma.service";

@Injectable()

export class HNutritionService {
    constructor(
        private prisma: PrismaService
    ) { }

    create(data: Prisma.HotelNutritionCreateInput): Promise<HotelNutrition> {
        return this.prisma.hotelNutrition.create({
            data
        });
    }

    findAll(): Promise<HotelNutrition[]> {
        return this.prisma.hotelNutrition.findMany();
    }

    update(id: number, data: Prisma.HotelNutritionUpdateInput): Promise<HotelNutrition> {
        return this.prisma.hotelNutrition.update({
            where: { id },
            data
        });
    }

    remove(id: number): Promise<HotelNutrition> {
        return this.prisma.hotelNutrition.delete({
            where: { id }
        });
    }

}