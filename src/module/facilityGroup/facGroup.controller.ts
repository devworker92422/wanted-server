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
import { FacGroupService } from "./facGroup.service";
import { FacGroupBodyDTO } from "./facGroup.dto";

@Controller('facgroup')


export class FacGroupController {
    constructor(
        private facGroupService: FacGroupService
    ) { }

    @Post()
    async create(@Body() body: FacGroupBodyDTO) {
        return {
            statusCode: HttpStatus.OK,
            data: await this.facGroupService.create(body)
        }
    }

    @Get()
    async findAll() {
        return {
            statusCode: HttpStatus.OK,
            data: await this.facGroupService.findAll()
        }
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() body: FacGroupBodyDTO) {
        return {
            statusCode: HttpStatus.OK,
            data: await this.facGroupService.update(parseInt(id), body)
        }
    }

    @Delete(':id')
    async remove(@Param('id') id: string) {
        return {
            statusCode: HttpStatus.OK,
            data: await this.facGroupService.remove(parseInt(id))
        }
    }

}