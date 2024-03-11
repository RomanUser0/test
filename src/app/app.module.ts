import { Module } from '@nestjs/common';
import { AppController } from './controller/app.controller';
import { AppService } from './service/app.service';
import { UsersController } from 'src/users/controller/users.controller';
import { UsersService } from 'src/users/service/users.service';
import { UsersModule } from 'src/users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entities/users/users';

@Module({
  imports: [UsersModule, TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'roman',
    password: 'password',
    database: 'users',
    entities: [User],
    synchronize: true,
  })],
  controllers: [AppController, UsersController],
  providers: [AppService, UsersService],
})
export class AppModule {}
