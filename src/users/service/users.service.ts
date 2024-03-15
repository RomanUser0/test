import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/users/users';
import { CreateUserParams } from 'src/utils/types';
import { Repository } from 'typeorm';
import { hashSync } from 'bcryptjs'

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private userRepository: Repository<User>,
    private readonly jwtService: JwtService) { }


    async createUser(userDetails: CreateUserParams) {
        const existUser = await this.userRepository.findOne({
            where: {
                email: userDetails.email
            }
        })
        if (existUser) throw new BadRequestException('Такой пользователь уже существует')

        const user = await this.userRepository.save({
            name: userDetails.name,
            email: userDetails.email,
            password: hashSync(userDetails.password, 6)
        })

        const token = this.jwtService.sign({email: userDetails.email})
        return {...user, token: token}

    }

    async findOne(email: string) {
        return await this.userRepository.findOne({
            where: {
                email
            }
        });
    }

    async findall() {
        return await this.userRepository.find()
    }
}

