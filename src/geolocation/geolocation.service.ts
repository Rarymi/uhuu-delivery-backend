import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class GeolocationService {
  constructor(private readonly httpService: HttpService) {}

  async getCoordinates(address: string) {
    console.log('GeolocationService.getCoordinates', address);

    try {
      const response = await lastValueFrom(
        this.httpService.get('https://nominatim.openstreetmap.org/search', {
          params: {
            q: address,
            format: 'json',
            addressdetails: 1,
            limit: 1,
          },
          headers: {
            'User-Agent': 'uhuu-geolocation/1.0',
            'Accept-Language': 'en',
          },
        }),
      );

      if (response && response.data && response.data.length > 0) {
        const { lat, lon } = response.data[0];
        return { latitude: parseFloat(lat), longitude: parseFloat(lon) };
      }

      throw new HttpException(
        'Coordinates not found for the provided address',
        HttpStatus.NOT_FOUND,
      );
    } catch (error) {
      console.error('GeolocationService.getCoordinates error:', error.message);
      throw new HttpException(
        'Erro ao buscar coordenadas de geolocalização',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
