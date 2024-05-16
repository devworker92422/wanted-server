import { Module } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FacilityService } from "./facility.service";
import { FacilityController } from "./facility.controller";

@Module({
    imports: [],
    providers: [PrismaService, FacilityService],
    controllers: [FacilityController]
})

export class FacilityModule { }