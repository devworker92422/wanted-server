import {
    Controller,
    Post,
    Get,
    Put,
    Delete,
    Param,
    Body,
    HttpStatus
} from "@nestjs/common";
import { HChildFacService } from "./childFac.service";
import { ChildFacilityBodyDTO } from "./childFac.dto";

@Controller('childfac')

export class HChildFacController {
    constructor(
        private childFacService: HChildFacService
    ) { }

    @Post()
    async create(@Body() body: ChildFacilityBodyDTO) {
        return {
            statusCode: HttpStatus.OK,
            data: await this.childFacService.create(body)
        }
    }

    @Get()
    async findAll() {
        return {
            statusCode: HttpStatus.OK,
            data: await this.childFacService.findAll()
        }
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() body: ChildFacilityBodyDTO) {
        return {
            statusCode: HttpStatus.OK,
            data: await this.childFacService.update(parseInt(id), body)
        }
    }

    @Delete(':id')
    async remove(@Param('id') id: string) {
        return {
            statusCode: HttpStatus.OK,
            data: await this.childFacService.remove(parseInt(id))
        }
    }

}