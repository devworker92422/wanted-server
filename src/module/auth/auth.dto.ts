import { User } from "@prisma/client";

export interface SignUpDTO {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    location: string;
    password: string;
}

export interface SignInWithEmailDTO {
    email: string;
    password: string;
}

export interface SignInWithPhoneDTO {
    phoneNumber: string;
}

export interface ChangePwdDTO {
    id: number;
    oldPassword: string;
    newPassword: string;
}

export interface SignInResDTO {
    token: string;
    user: User;
}

export interface JWTENVDTO {
    secret: string;
    expires: string | number;
}