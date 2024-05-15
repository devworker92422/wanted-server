import {
    Controller,
    Post,
    Get,
    Body,
    Param,
    Put,
    Delete,
    HttpStatus
} from "@nestjs/common";
import { HNutritionService } from "./nutrition.service";
import { NutritionBodyDTO } from "./nutrition.dto";


@Controller('nutrition')

export class HNutritionController {
    constructor(
        private nutritionService: HNutritionService
    ) { }

    @Post()
    async create(@Body() body: NutritionBodyDTO) {
        return {
            statusCode: HttpStatus.OK,
            data: await this.nutritionService.create(body)
        }
    }

    @Get()
    async findAll() {
        return {
            statusCode: HttpStatus.OK,
            data: await this.nutritionService.findAll()
        }
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() body: NutritionBodyDTO) {
        return {
            statusCode: HttpStatus.OK,
            data: await this.nutritionService.update(parseInt(id), body)
        }
    }

    @Delete(':id')
    async remove(@Param('id') id: string) {
        return {
            statusCode: HttpStatus.OK,
            data: await this.nutritionService.remove(parseInt(id))
        }
    }
}