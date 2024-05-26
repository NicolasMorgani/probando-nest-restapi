import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DogsModule } from './dogs/dogs.module';
import { AuthModule } from './auth/auth.module';
import { LoggerModule } from 'nestjs-pino';
import { CORRELATION_ID_HEADER, CorrelationIdMiddleware } from './midleware/correlation-id.middleware';
import { Request } from 'express';
import { ConfigModule, ConfigService } from '@nestjs/config';



@Module({

  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3307,
      username: "user_crud",
      password: "root",
      database: "db_crud",
      autoLoadEntities: true,
      synchronize: true,
    }),
    LoggerModule.forRoot({
      pinoHttp: {
        transport: process.env.NODE_ENV === 'development' ? {
          target: 'pino-pretty',
          options: {
            messageKey: 'message'
          }
        } : undefined,
        messageKey: 'message',
        customProps: (req: Request) => { // All request show correlation Id
          return {
            correlationId: req[CORRELATION_ID_HEADER]
          }
        },
        autoLogging: false,
        serializers: {
          req: () => {
            return undefined
          },
          res: () => {
            return undefined
          }

        }
      }
    }), UsersModule, DogsModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  static port: number;
  constructor(private readonly configService: ConfigService) {
    AppModule.port = +this.configService.get("PORT_APP")  //  +  -->  cast to number
  }

  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CorrelationIdMiddleware).forRoutes('*')
  }
}

