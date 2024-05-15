import { Module } from "@nestjs/common";
import { PrismaService } from "src/module/prisma/prisma.service";
import { HInfraService } from "./infra.service";
import { HInfraController } from "./infra.controller";

@Module({
    imports: [],
    controllers: [HInfraController],
    providers: [HInfraService, PrismaService]
})

export class HInfraModule { }