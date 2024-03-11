import { Controller, Get, Post } from '@nestjs/common';
import { UsersService } from '../service/users.service';
import { CreateUserDto } from '../dtos/createUser.dto';

@Controller()
export class UsersController {
    constructor(private readonly usersService: UsersService) {}


    @Get('api/users')
    getUsers() {
        return this.usersService.getUsers();
    }

    @Post('api/create')
    createUser(createUserDto: CreateUserDto) {
        return this.usersService.createUser(createUserDto)
    }
}
