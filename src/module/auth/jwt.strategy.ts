import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ConfigService } from "@nestjs/config";
import { PrismaService } from "../prisma/prisma.service";
import { Strategy, ExtractJwt } from 'passport-jwt';
import { JWTENVDTO } from "./auth.dto";
import { AUTH_JWT_ERROR_MESSAGE } from "src/constant/message";

@Injectable()

export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(
        private configService: ConfigService,
        private prisma: PrismaService
    ) {
        super({
            secretOrKey: configService.get<JWTENVDTO>('jwt').secret,
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
        })
    }
    
    async validate(payload) {
        const { id } = payload;
        const user = await this.prisma.user.findFirst({
            where: { id }
        });
        if (!user)
            throw new UnauthorizedException(AUTH_JWT_ERROR_MESSAGE);
        return user;
    }

}