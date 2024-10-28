import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class GeolocationService {
  constructor(private readonly httpService: HttpService) {}

  async getCoordinates(address: string) {
    try {
      const response = await lastValueFrom(
        this.httpService.get('https://nominatim.openstreetmap.org/search', {
          params: {
            q: address,
            format: 'json',
            addressdetails: 1,
            limit: 1,
          },
        }),
      );

      if (response && response.data && response.data.length > 0) {
        const { lat, lon } = response.data[0];
        return { latitude: parseFloat(lat), longitude: parseFloat(lon) };
      }

      return null;
    } catch (error) {
      throw new HttpException(
        'Erro ao buscar coordenadas de geolocalização',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
