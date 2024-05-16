import { Injectable } from "@nestjs/common";
import { Prisma, Room } from "@prisma/client";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()

export class RoomService {
    constructor(
        private prisma: PrismaService
    ) { }

    create(data: Prisma.RoomCreateInput): Promise<Room> {
        return this.prisma.room.create({
            data
        });
    }

    findAll(): Promise<Room[]> {
        return this.prisma.room.findMany();
    }

    update(id: number, data: Prisma.RoomUpdateInput): Promise<Room> {
        return this.prisma.room.update({
            where: { id },
            data
        });
    }

    remove(id: number): Promise<Room> {
        return this.prisma.room.delete({
            where: { id }
        });
    }
}
