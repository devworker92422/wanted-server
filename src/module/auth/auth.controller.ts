import {
    Controller,
    Post,
    Body,
    HttpStatus,
    UseGuards
} from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { AuthService } from "./auth.service";
import { SignInWithEmailDTO, SignUpDTO, ChangePwdDTO } from "./auth.dto";

@Controller('/auth')

export class AuthController {
    constructor(
        private readonly authService: AuthService
    ) { }

    @Post('/signup')
    async signUp(@Body() body: SignUpDTO) {
        const user = await this.authService.signUp(body);
        return {
            statusCode: HttpStatus.OK,
            data: user
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