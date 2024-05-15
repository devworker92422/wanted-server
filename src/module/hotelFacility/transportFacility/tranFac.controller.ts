import {
    Controller,
    HttpStatus,
    Post,
    Get,
    Put,
    Delete,
    Param,
    Body
} from "@nestjs/common";
import { HTranFacService } from "./tranFac.service";
import { TransportFacilityBodyDTO } from "./tranFac.dto";

@Controller('tranfac')

export class HTranFacController {
    constructor(
        private tranFacService: HTranFacService
    ) { }

    @Post()
    async create(@Body() body: TransportFacilityBodyDTO) {
        return {
            statusCode: HttpStatus.OK,
            data: await this.tranFacService.create(body)
        }
    }

    @Get()
    async findAll() {
        return {
            statusCode: HttpStatus.OK,
            data: await this.tranFacService.findAll()
        }
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() body: TransportFacilityBodyDTO) {
        return {
            statusCode: HttpStatus.OK,
            data: await this.tranFacService.update(parseInt(id), body)
        }
    }

    @Delete(':id')
    async remove(@Param('id') id: string) {
        return {
            statusCode: HttpStatus.OK,
            data: await this.tranFacService.remove(parseInt(id))
        }
    }
}