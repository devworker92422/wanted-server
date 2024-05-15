import { Module } from "@nestjs/common";
import { PrismaService } from "src/module/prisma/prisma.service";
import { HChildFacService } from "./childFac.service";
import { HChildFacController } from "./childFac.controller";

@Module({
    imports: [],
    providers: [PrismaService, HChildFacService],
    controllers: [HChildFacController]
})

export class HChildFacModule { }