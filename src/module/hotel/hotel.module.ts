import { Module } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { HotelService } from "./hotel.service";
import { HotelController } from "./hotel.controller";

@Module({
    imports: [],
    providers: [PrismaService, HotelService],
    controllers: [HotelController]
})

export class HotelModule { }
