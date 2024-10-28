import { Test, TestingModule } from '@nestjs/testing';
import { ClientService } from './client.service';
import { PrismaService } from '../../prisma/prisma.service';

describe('ClientService', () => {
  let service: ClientService;
  let prismaService: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ClientService,
        {
          provide: PrismaService,
          useValue: {
            client: {
              create: jest.fn(),
              findMany: jest.fn(),
            },
          },
        },
      ],
    }).compile();

    service = module.get<ClientService>(ClientService);
    prismaService = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a new client', async () => {
      const clientData = {
        name: 'John Doe',
        weight: 75.5,
        address: 'Rua Exemplo',
        latitude: -23.5,
        longitude: -46.6,
      };
      const result = { ...clientData, id: '1' };

      jest.spyOn(prismaService.client, 'create').mockResolvedValueOnce(result);

      const createdClient = await service.create(clientData);
      expect(createdClient).toEqual(result);
      expect(prismaService.client.create).toHaveBeenCalledWith({
        data: clientData,
      });
    });
  });

  describe('findAll', () => {
    it('should return a list of clients with pagination', async () => {
      const clients = [
        {
          id: '1',
          name: 'Jane Doe',
          weight: 60,
          address: 'Rua Teste',
          latitude: -23.5,
          longitude: -46.6,
        },
      ];
      jest
        .spyOn(prismaService.client, 'findMany')
        .mockResolvedValueOnce(clients);

      const page = 1;
      const limit = 10;
      const result = await service.findAll(page, limit);

      expect(result).toEqual(clients);
      expect(prismaService.client.findMany).toHaveBeenCalledWith({
        skip: (page - 1) * limit,
        take: limit,
      });
    });
  });
});
