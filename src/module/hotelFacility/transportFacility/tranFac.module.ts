import { Module } from "@nestjs/common";
import { PrismaService } from "src/module/prisma/prisma.service";
import { HTranFacService } from "./tranFac.service";
import { HTranFacController } from "./tranFac.controller";

@Module({
    imports: [],
    controllers: [HTranFacController],
    providers: [PrismaService, HTranFacService]
})

export class HTranFacModule { }