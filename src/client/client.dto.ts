import {
  IsLatitude,
  IsLongitude,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateClientDto {
  @ApiProperty({ example: 'John Doe' })
  @IsString()
  @IsNotEmpty({ message: 'O nome é obrigatório' })
  name!: string;

  @ApiProperty({ example: 75.5 })
  @IsNumber({}, { message: 'O peso deve ser um número' })
  weight!: number;

  @ApiProperty({ example: 'Rua Exemplo, Bairro Exemplo, Cidade Exemplo' })
  @IsString()
  @IsNotEmpty({ message: 'O endereço é obrigatório' })
  address!: string;

  @ApiProperty({ example: -23.55052 })
  @IsLatitude({ message: 'A latitude deve ser um número válido de latitude' })
  latitude!: number;

  @ApiProperty({ example: -46.633308 })
  @IsLongitude({
    message: 'A longitude deve ser um número válido de longitude',
  })
  longitude!: number;
}
