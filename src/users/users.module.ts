import { Module } from '@nestjs/common';
import { UsersService } from './service/users.service';
import { UsersController } from './controller/users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entities/users/users';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { jwtConstants } from 'src/auth/constans/constants';

@Module({
  imports: [TypeOrmModule.forFeature([User]),
  JwtModule.register({
    secret: jwtConstants.secret,
    signOptions: { expiresIn: '30d' },
  })],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [TypeOrmModule.forFeature([User]), UsersService]
})
export class UsersModule {}
