import {
    Controller,
    Post,
    Body,
    Get,
    Put,
    Delete,
    Param,
    HttpStatus,
    UseGuards,
    Req,
    ForbiddenException
} from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { HotelService } from "./hotel.service";
import { asHotelCreateInput, asHotelUpdateInput } from "src/helper";
import { NewHotelBodyDTO, UpdateHotelBodyDTO } from "./hotel.dto";
import { AUTH_403_MESSAGE } from "src/constant/message";

@Controller('hotel')

export class HotelController {

    constructor(
        private hotelService: HotelService
    ) { }

    @UseGuards(AuthGuard('jwt'))
    @Post()
    async create(@Body() body: NewHotelBodyDTO, @Req() req) {
        const user = req.user;
        body.userId = user.id;
        if (user.type === 3)
            throw new ForbiddenException(AUTH_403_MESSAGE)
        return {
            statusCode: HttpStatus.OK,
            data: await this.hotelService.create(asHotelCreateInput(body))
        }
    }

    @UseGuards(AuthGuard('jwt'))
    @Put(':id')
    async update(
        @Param('id') id: string,
        @Body() body: UpdateHotelBodyDTO,
        @Req() req
    ) {
        const user = req.user;
        if (user.type === 3)
            throw new ForbiddenException(AUTH_403_MESSAGE)
        return {
            statusCode: HttpStatus.OK,
            data: await this.hotelService.update(parseInt(id), asHotelUpdateInput(body))
        }
    }

    @Delete(':id')
    async remove(@Param('id') id: string, @Req() req) {
        const user = req.user;
        if (user.type === 3)
            throw new ForbiddenException(AUTH_403_MESSAGE)
        return {
            statusCode: HttpStatus.OK,
            data: await this.hotelService.remove(parseInt(id))
        }
    }

}