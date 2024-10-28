import { ApiProperty } from '@nestjs/swagger';

export class Client {
  @ApiProperty({ example: '1' })
  id?: string;

  @ApiProperty({ example: 'John Doe' })
  name!: string;

  @ApiProperty({ example: 75.5 })
  weight!: number;

  @ApiProperty({ example: 'Rua Exemplo, Bairro Exemplo, Cidade Exemplo' })
  address!: string;

  @ApiProperty({ example: -23.55052 })
  latitude!: number;

  @ApiProperty({ example: -46.633308 })
  longitude!: number;
}
