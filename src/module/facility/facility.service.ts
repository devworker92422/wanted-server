import { Injectable } from "@nestjs/common";
import { Prisma, Facility } from "@prisma/client";
import { PrismaService } from "../prisma/prisma.service";
// import {BatchPayload}

@Injectable()

export class FacilityService {
    constructor(
        private prisma: PrismaService
    ) { }

    createMany(data: Prisma.FacilityCreateManyInput[]): Promise<{ count: number }> {
        return this.prisma.facility.createMany(
            {
                data
            }
        );
    }

    create(data: Prisma.FacilityCreateInput): Promise<Facility> {
        return this.prisma.facility.create({ data });
    }

    findAll(): Promise<Facility[]> {
        return this.prisma.facility.findMany()
    }

    update(id: number, data: Prisma.FacilityGroupUpdateInput): Promise<Facility> {
        return this.prisma.facility.update({
            where: { id },
            data
        });
    }

    remove(id: number): Promise<Facility> {
        return this.prisma.facility.delete({
            where: { id }
        })
    }
}