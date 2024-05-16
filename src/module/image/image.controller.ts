import {
    Controller,
    Post,
    Delete,
    Param,
    UseInterceptors,
    UploadedFile,
    HttpStatus,
    BadRequestException
} from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { diskStorage } from "multer";
import { Express } from "express";
import { extname } from "path";
import { ImageService } from "./image.service";
import { NewImageBodyDTO } from "./image.dto";
import { FILE_400_ERROR_MESSAGE } from "src/constant/message";

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
        if (!file)
            throw new BadRequestException(FILE_400_ERROR_MESSAGE);
        console.log(file);
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