import { IsEmail, IsString, MinLength } from "class-validator";

export class CreateUserDto {
    id: string;

    @IsString()
    name: string;

    @MinLength(6, { message: 'Длина пароля слишком мала' })
    password: string;

    @IsEmail()
    email: string;
}