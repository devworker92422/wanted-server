import {
    Controller,
    Post,
    Body,
    Delete,
    Param,
    Put,
    HttpStatus
} from "@nestjs/common";
import { RoomService } from "./room.service";
import { NewRoomBodyDTO, UpdateRoomBodyDTO } from "./room.dto";
import { asRoomCreateInput, asRoomUpdateInput } from "src/helper";

@Controller('room')

export class RoomController {

    constructor(
        private roomService: RoomService
    ) { }

    @Post()
    async create(@Body() body: NewRoomBodyDTO) {
        return {
            statusCode: HttpStatus.OK,
            data: await this.roomService.create(asRoomCreateInput(body))
        }
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() body: UpdateRoomBodyDTO) {
        return {
            statusCode: HttpStatus.OK,
            data: await this.roomService.update(parseInt(id), asRoomUpdateInput(body))
        }

    }

    @Delete(':id')
    async remove(@Param('id') id: string) {
        return {
            statusCode: HttpStatus.OK,
            data: await this.roomService.remove(parseInt(id))
        }
    }

}