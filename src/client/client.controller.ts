import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ClientService } from './client.service';
import { Client } from './client.interface';
import { CreateClientDto } from './client.dto';
import { ApiBody, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('clients')
@Controller('clients')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  @ApiBody({ type: CreateClientDto })
  @ApiResponse({
    status: 201,
    description: 'Cliente criado com sucesso',
    type: Client,
  })
  async createClient(@Body() clientData: CreateClientDto): Promise<Client> {
    return this.clientService.create({
      ...clientData,
    });
  }

  @Get()
  @ApiQuery({ name: 'page', required: false, example: 1 })
  @ApiQuery({ name: 'limit', required: false, example: 10 })
  @ApiResponse({
    status: 200,
    description: 'Lista de clientes',
    type: [Client],
  })
  async getClients(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10,
  ): Promise<Client[]> {
    return this.clientService.findAll(page, limit);
  }

  @Delete()
  @ApiResponse({
    status: 200,
    description: 'Todos os registros de clientes foram deletados',
  })
  async deleteAllClients(): Promise<{ message: string }> {
    await this.clientService.deleteAll();
    return {
      message: 'Todos os registros de clientes foram deletados com sucesso',
    };
  }
}
