import { Module } from "@nestjs/common";
import { PrismaService } from "src/module/prisma/prisma.service";
import { HTService } from "./ht.service";
import { HTController } from "./ht.controller";

@Module({
    imports: [],
    controllers: [HTController],
    providers: [PrismaService, HTService]
})

export class HTModule { }