import {
    Controller,
    Post,
    Get,
    Put,
    Delete,
    Body,
    Param,
    HttpStatus
} from "@nestjs/common";
import { HInfraService } from "./infra.service";
import { InfraBodyDTO } from "./infra.dto";

@Controller('infra')

export class HInfraController {
    constructor(
        private infraService: HInfraService
    ) { }

    @Post()
    async create(@Body() body: InfraBodyDTO) {
        return {
            statusCode: HttpStatus.OK,
            data: await this.infraService.create(body)
        }
    }

    @Get()
    async findAll() {
        return {
            statusCode: HttpStatus.OK,
            data: await this.infraService.findAll()
        }
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() body: InfraBodyDTO) {
        return {
            statusCode: HttpStatus.OK,
            data: await this.infraService.update(parseInt(id), body)
        }
    }

    @Delete(':id')
    async remove(@Param('id') id: string) {
        return {
            statusCode: HttpStatus.OK,
            data: await this.infraService.remove(parseInt(id))
        }
    }

}