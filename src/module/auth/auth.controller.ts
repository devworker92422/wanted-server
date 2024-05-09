import {
    Controller,
    Post,
    Body,
    HttpStatus,
    UseGuards
} from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { Prisma } from "@prisma/client";
import { AuthService } from "./auth.service";
import { SignInWithEmailDTO, SignUpDTO, ChangePwdDTO } from "./auth.dto";

@Controller('/auth')

export class AuthController {
    constructor(
        private readonly authService: AuthService
    ) { }

    @Post('/signup')
    async signUp(@Body() body: SignUpDTO) {
        try {
            const user = await this.authService.signUp(body);
            return {
                statusCode: HttpStatus.OK,
                data: user
            }
        } catch (e) {
            let message = "Внутренняя ошибка сервера";
            if (e instanceof Prisma.PrismaClientKnownRequestError && e.code === 'P2002') {
                message = "Электронная почта зарегистрирована"
            }
            return {
                statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                message
            }
        }
    }

    @Post('/signin')
    async signIn(@Body() body: SignInWithEmailDTO) {
        return {
            statusCode: HttpStatus.OK,
            data: await this.authService.signInWithEmail(body)
        }
    }

    @Post('/changepwd')
    @UseGuards(AuthGuard('jwt'))
    async changePassword(@Body() body: ChangePwdDTO) {
        return {
            statusCode: HttpStatus.OK,
            data: await this.authService.changePassword(body)
        }
    }

}