import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GeolocationService } from './geolocation.service';

@ApiTags('addresses')
@Controller('addresses')
export class GeolocationController {
  constructor(private readonly geolocationService: GeolocationService) {}

  @Get('coordinates')
  async getCoordinates(
    @Query('address') address: string,
  ): Promise<{ latitude: number; longitude: number } | null> {
    return this.geolocationService.getCoordinates(address);
  }

  @Get()
  async getAddressSuggestions(@Query('address') address: string) {
    return this.geolocationService.getAddressSuggestions(address);
  }
}
