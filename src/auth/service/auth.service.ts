import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/service/users.service';
import { CreateUserParams } from 'src/utils/types';
import { compareSync } from 'bcryptjs'

@Injectable()
export class AuthService {

    constructor(private readonly usersService: UsersService,
        private jwtService: JwtService
    ) { }


    async validateUser(email: string, password: string) {
        const user = await this.usersService.findOne(email);
        const passwordIsMatch = compareSync( password, user.password)
        if (user && passwordIsMatch) {
            return user

        }
        return null;
    }


    async login(user: CreateUserParams) {
        const { email } = user
        
        return {
           ...user,
           token: this.jwtService.sign({ email: email })
        };
    }
}
