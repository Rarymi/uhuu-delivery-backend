import { Module } from '@nestjs/common';
import { ClientModule } from './client/client.module';
import { GeolocationModule } from './geolocation/geolocation.module';
import {
  ConfigModule as NestConfigModule,
  ConfigService,
} from '@nestjs/config';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [
    NestConfigModule.forRoot({
      isGlobal: true,
    }),
    ClientModule,
    GeolocationModule,
    PrismaModule,
  ],
  providers: [ConfigService],
})
export class AppModule {}
