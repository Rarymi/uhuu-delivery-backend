import { Module } from '@nestjs/common';
import { ClientService } from './client.service';
import { ClientController } from './client.controller';
import { GeolocationModule } from '../geolocation/geolocation.module';
import { PrismaModule } from '../../prisma/prisma.module';

@Module({
  imports: [GeolocationModule, PrismaModule],
  providers: [ClientService],
  controllers: [ClientController],
})
export class ClientModule {}
