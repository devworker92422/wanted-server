import { Module } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FacGroupService } from "./facGroup.service";
import { FacGroupController } from "./facGroup.controller";

@Module({
    imports: [],
    controllers: [FacGroupController],
    providers: [PrismaService, FacGroupService]
})

export class FacGroupModule { }