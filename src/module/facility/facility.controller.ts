import {
    Controller,
    Post,
    Body,
    Get,
    Put,
    Param,
    Delete,
    HttpStatus
} from "@nestjs/common";
import { FacilityService } from "./facility.service";
import { NewFacilityBodyDTO, NewFacilitiesBodyDTO, UpdateFacilityBodyDTO } from "./facility.dto";

@Controller('facility')

export class FacilityController {
    constructor(
        private facilityService: FacilityService
    ) { }

    @Post('/createmany')
    async createMany(@Body() body: NewFacilitiesBodyDTO) {
        return {
            statusCode: HttpStatus.OK,
            data: await this.facilityService.createMany(body.facilities)
        }
    }

    @Post()
    async create(@Body() body: NewFacilityBodyDTO) {
        return {
            statusCode: HttpStatus.OK,
            data: await this.facilityService.create(body)
        }
    }

    @Get()
    async findAll() {
        return {
            statusCode: HttpStatus.OK,
            data: await this.facilityService.findAll()
        }
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() body: UpdateFacilityBodyDTO) {
        return {
            statusCode: HttpStatus.OK,
            data: await this.facilityService.update(parseInt(id), body)
        }
    }

    @Delete(':id')
    async remove(@Param('id') id: string) {
        return {
            statusCode: HttpStatus.OK,
            data: await this.facilityService.remove(parseInt(id))
        }
    }

}