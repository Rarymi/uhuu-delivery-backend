import { Test, TestingModule } from '@nestjs/testing';
import { ClientController } from './client.controller';
import { ClientService } from './client.service';
import { CreateClientDto } from './client.dto';
import { Client } from './client.interface';

describe('ClientController', () => {
  let clientController: ClientController;
  let clientService: ClientService;

  const mockClientService = {
    create: jest.fn(),
    findAll: jest.fn(),
    deleteAll: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClientController],
      providers: [{ provide: ClientService, useValue: mockClientService }],
    }).compile();

    clientController = module.get<ClientController>(ClientController);
    clientService = module.get<ClientService>(ClientService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('createClient', () => {
    it('should create a client and return it', async () => {
      const clientDto: CreateClientDto = {
        name: 'Test Client',
        weight: 70,
        address: '123 Test St',
        latitude: 40.7128,
        longitude: -74.006,
      };

      const createdClient: Client = {
        id: 'uuid',
        ...clientDto,
      };

      mockClientService.create.mockResolvedValue(createdClient);

      const result = await clientController.createClient(clientDto);
      expect(result).toEqual(createdClient);

      expect(mockClientService.create).toHaveBeenCalledWith({
        ...clientDto,
      });
    });
  });

  describe('getClients', () => {
    it('should return an array of clients', async () => {
      const clients: Client[] = [
        {
          id: '1',
          name: 'Client One',
          weight: 70,
          address: 'Address 1',
          latitude: 10,
          longitude: 20,
        },
        {
          id: '2',
          name: 'Client Two',
          weight: 80,
          address: 'Address 2',
          latitude: 30,
          longitude: 40,
        },
      ];

      mockClientService.findAll.mockResolvedValue(clients);

      const result = await clientController.getClients(1, 10);
      expect(result).toEqual(clients);
      expect(mockClientService.findAll).toHaveBeenCalledWith(1, 10);
    });
  });

  describe('deleteAllClients', () => {
    it('should delete all clients and return a confirmation message', async () => {
      mockClientService.deleteAll.mockResolvedValue(undefined);

      const result = await clientController.deleteAllClients();
      expect(result).toEqual({
        message: 'Todos os registros de clientes foram deletados com sucesso',
      });
      expect(mockClientService.deleteAll).toHaveBeenCalled();
    });
  });
});
