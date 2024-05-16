import { Module } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RoomService } from "./room.service";
import { RoomController } from "./room.controller";

@Module({
    imports: [],
    controllers: [RoomController],
    providers: [PrismaService, RoomService]
})

export class RoomModule { }