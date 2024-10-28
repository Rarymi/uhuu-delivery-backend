import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class ClientService {
  constructor(private prisma: PrismaService) {}

  async create(data: {
    name: string;
    weight: number;
    address: string;
    latitude: number;
    longitude: number;
  }) {
    return this.prisma.client.create({
      data,
    });
  }

  async findAll(page: number, limit: number) {
    return this.prisma.client.findMany({
      skip: (page - 1) * limit,
      take: Number(limit),
    });
  }

  async deleteAll() {
    return this.prisma.client.deleteMany({});
  }
}
