import {
    Controller,
    Post,
    Get,
    Put,
    Delete,
    Param,
    Body,
    UseInterceptors,
    UploadedFile,
    HttpStatus
} from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { diskStorage } from "multer";
import { Express } from "express";
import { extname } from "path";
import { ImageService } from "./image.service";
import { NewImageBodyDTO } from "./image.dto";

@Controller('image')

export class ImageController {
    constructor(
        private imageService: ImageService
    ) { }

    @Post()
    @UseInterceptors(FileInterceptor('image', {
        storage: diskStorage({
            destination: './upload/hotel',
            filename: (req, file, cb) => {
                return cb(null, `${Date.now()}${extname(file.originalname)}`);
            }
        })
    }))
    async create(@UploadedFile() file: Express.Multer.File) {
        const data: NewImageBodyDTO = {
            url: '/hotel/' + file.filename
        }
        return {
            statusCode: HttpStatus.OK,
            data: await this.imageService.create(data)
        }
    }

    @Delete(':id')
    async remove(@Param('id') id: string) {
        return {
            statusCode: HttpStatus.OK,
            data: await this.imageService.remove(parseInt(id))
        }
    }

}