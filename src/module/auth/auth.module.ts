import { Module } from "@nestjs/common";
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from "@nestjs/jwt";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { AuthController } from "./auth.controller";
import { PrismaService } from "../prisma/prisma.service";
import { AuthService } from "./auth.service";
import { JwtStrategy } from "./jwt.strategy";
import { JWTENVDTO } from "./auth.dto";

@Module({
    imports: [
        PassportModule.register({ defaultStrategy: 'jwt' }),
        JwtModule.registerAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: (config: ConfigService) => {
                return {
                    secret: config.get<JWTENVDTO>('jwt').secret,
                    signOptions: {
                        expiresIn: config.get<JWTENVDTO>('jwt').expires
                    }
                }
            }
        })
    ],
    providers: [AuthService, PrismaService, JwtStrategy, ConfigService],
    controllers: [AuthController],
    exports: [PassportModule, JwtStrategy]
})

export class AuthModule { }