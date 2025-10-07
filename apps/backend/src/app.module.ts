import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule, TypeOrmModule.forRoot({
    type: 'postgres',
    entities: [],
    synchronize: true,
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'pass123',
    database: 'fit-app'
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
