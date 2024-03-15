import { Controller, Get, Post, Body, UsePipes, ValidationPipe } from '@nestjs/common';
import { UsersService } from '../service/users.service';
import { CreateUserDto } from '../dtos/createUser.dto';

@Controller()
export class UsersController {
    constructor(private readonly usersService: UsersService) {}


    @Get('api/users')
    getUsers() {
        return this.usersService.findall()
    }

    @Post('api/create')
    @UsePipes(new ValidationPipe())
    createUser(@Body() createUserDto: CreateUserDto) {
        console.log(createUserDto)
        return this.usersService.createUser(createUserDto)
    }
}
