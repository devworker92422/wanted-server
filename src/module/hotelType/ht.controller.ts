import {
    Controller,
    HttpStatus,
    Post,
    Get,
    UseInterceptors,
    UploadedFile,
    Body,
    Delete,
    Put,
    Param,
} from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { diskStorage } from "multer";
import { extname } from "path";
import { HTService } from "./ht.service";
import { NewHotelTypeBodyDTO, UpdateHotelTypeBodyDTO } from "./ht.dto";

@Controller('ht')

export class HTController {
    constructor(
        private htService: HTService
    ) { }


    @Post()
    @UseInterceptors(FileInterceptor('image', {
        storage: diskStorage({
            destination: './upload/type',
            filename: (req, file, cb) => {
                return cb(null, `${Date.now()}${extname(file.originalname)}`);
            }
        })
    }))
    async createHotelType(@UploadedFile() file: Express.Multer.File, @Body() body: NewHotelTypeBodyDTO) {
        body.image = '/type/' + file.filename;
        const result = await this.htService.create(body)
        return {
            statusCode: HttpStatus.OK,
            data: result
        }
    }

    @Get()
    async getHotelTypes() {
        return {
            statusCode: HttpStatus.OK,
            data: await this.htService.findAll()
        }
    }

    @Put(':id')
    @UseInterceptors(FileInterceptor('image', {
        storage: diskStorage({
            destination: './upload/type',
            filename: (req, file, cb) => {
                return cb(null, `${Date.now()}${extname(file.originalname)}`);
            }
        })
    }))
    async updateHotelType(
        @UploadedFile() file: Express.Multer.File,
        @Param('id') id: string,
        @Body() body: UpdateHotelTypeBodyDTO
    ) {
        body.image = "/type/" + file.filename;
        return {
            statusCode: HttpStatus.OK,
            data: await this.htService.update(parseInt(id), body)
        }
    }

    @Delete(':id')
    async removeHotelType(@Param('id') id: string) {
        return {
            statusCode: HttpStatus.OK,
            data: await this.htService.remove(parseInt(id))
        }
    }



}