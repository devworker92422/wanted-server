import { Injectable } from "@nestjs/common";
import { Prisma, FacilityGroup } from "@prisma/client";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()

export class FacGroupService {
    constructor(
        private prisma: PrismaService
    ) { }

    create(data: Prisma.FacilityGroupCreateInput): Promise<FacilityGroup> {
        return this.prisma.facilityGroup.create({
            data
        });
    }

    findAll(): Promise<FacilityGroup[]> {
        return this.prisma.facilityGroup.findMany({
            include: {
                facilities: true
            }
        });
    }

    update(id: number, data: Prisma.FacilityGroupUpdateInput): Promise<FacilityGroup> {
        return this.prisma.facilityGroup.update({
            where: { id },
            data
        });
    }

    remove(id: number): Promise<FacilityGroup> {
        return this.prisma.facilityGroup.delete({
            where: { id }
        });
    }
}
