import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GeolocationService } from './geolocation.service';

@ApiTags('geolocation')
@Controller('geolocation')
export class GeolocationController {
  constructor(private readonly geolocationService: GeolocationService) {}

  @Get('coordinates')
  async getCoordinates(
    @Query('address') address: string,
  ): Promise<{ latitude: number; longitude: number } | null> {
    return this.geolocationService.getCoordinates(address);
  }
}
