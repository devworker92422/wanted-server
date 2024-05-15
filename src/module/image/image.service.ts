import { Injectable } from "@nestjs/common";
import { Image, Prisma } from "@prisma/client";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()

export class ImageService {
    constructor(
        private prisma: PrismaService
    ) { }

    create(data: Prisma.ImageCreateInput): Promise<Image> {
        return this.prisma.image.create({ data });
    }

    update(id: number, data: Prisma.ImageUpdateInput): Promise<Image> {
        return this.prisma.image.update({
            where: { id },
            data
        });
    }

    remove(id: number): Promise<Image> {
        return this.prisma.image.delete({
            where: { id }
        });
    }

}