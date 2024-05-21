import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DogsModule } from './dogs/dogs.module';


@Module({
  imports: [ TypeOrmModule.forRoot({
    type: "mysql",
    host: "localhost",
    port: 3307,
    username: "user_crud",
    password: "root",
    database: "db_crud",
    autoLoadEntities: true,
    synchronize: true,
  }),UsersModule, DogsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
