import {
    Injectable,
    UnauthorizedException,
    BadRequestException
} from "@nestjs/common";
import { User, Prisma } from "@prisma/client";
import { JwtService } from "@nestjs/jwt";

import * as bycrypt from 'bcryptjs';
import { PrismaService } from "../prisma/prisma.service";
import { SignInResDTO, SignInWithEmailDTO, ChangePwdDTO } from "./auth.dto";
import { AUTH_401_MESSAGE, AUTH_400_DUPLICATE_EMAIL_MESSAGE } from "src/constant/message";


@Injectable()

export class AuthService {
    constructor(
        private prisma: PrismaService,
        private jwtService: JwtService
    ) { }

    async signUp(
        data: Prisma.UserCreateInput
    ): Promise<User> {
        const old = await this.prisma.user.findFirst({
            where: { email: data.email }
        });
        if (old)
            throw new BadRequestException(AUTH_400_DUPLICATE_EMAIL_MESSAGE);
        data.password = await bycrypt.hash(data.password, 10);
        return this.prisma.user.create({
            data
        });
    }

    async signInWithEmail(
        body: SignInWithEmailDTO
    ): Promise<SignInResDTO> {
        const user = await this.prisma.user.findFirst({
            where: {
                email: body.email
            }
        });
        if (!user)
            throw new UnauthorizedException(AUTH_401_MESSAGE);
        const isPwdMatched = await bycrypt.compare(body.password, user.password);
        if (!isPwdMatched)
            throw new UnauthorizedException(AUTH_401_MESSAGE);
        const token = this.jwtService.sign({ id: user.id });
        return {
            token,
            user
        }
    }

    async changePassword(
        body: ChangePwdDTO
    ): Promise<User> {
        const { id, oldPassword, newPassword } = body;
        const user = await this.prisma.user.findUnique({
            where: { id }
        });
        if (!user)
            throw new UnauthorizedException(AUTH_401_MESSAGE);
        const isPwdMatched = await bycrypt.compare(oldPassword, user.password);
        if (!isPwdMatched)
            throw new UnauthorizedException(AUTH_401_MESSAGE);
        await this.prisma.user.update({
            where: { id },
            data: { password: await bycrypt.hash(newPassword, 10) }
        });
        return user;
    }
}