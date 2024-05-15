import { Module } from "@nestjs/common";
import { PrismaService } from "src/module/prisma/prisma.service";
import { HNutritionService } from "./nutrition.service";
import { HNutritionController } from "./nutrition.controller";

@Module({
    imports: [],
    providers: [PrismaService, HNutritionService],
    controllers: [HNutritionController]
})

export class HNutritionModule { }