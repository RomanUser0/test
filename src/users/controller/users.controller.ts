import { Controller, Get, Post, Body, UsePipes, ValidationPipe, Param } from '@nestjs/common';
import { UsersService } from '../service/users.service';
import { CreateUserDto } from '../dtos/createUser.dto';

@Controller()
export class UsersController {
    constructor(private readonly usersService: UsersService) {}


    /*@Get('users')
    getUsers() {
        return this.usersService.findOne()
    }*/

    @Post('api/create')
    @UsePipes(new ValidationPipe())
    createUser(@Body() createUserDto: CreateUserDto) {
        console.log(createUserDto)
        return this.usersService.createUser(createUserDto)
    }
}
