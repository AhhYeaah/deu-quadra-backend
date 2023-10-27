import { Injectable } from '@nestjs/common';
import { CreateCourtDto } from './dto/create-court.dto';
import { PrismaService } from 'src/services/prisma.service';

@Injectable()
export class CourtsService {

  constructor(private prisma: PrismaService) {}

  create(createCourtDto: CreateCourtDto) {
    return this.prisma.court.create({
      data: { ...createCourtDto },
    });  }

  async findAll() {
    return await this.prisma.court.findMany()
  }

  async findOne(id: number) {
    return await this.prisma.court.findFirst({
      where: {
        companyId: id,
      },
    });;  }

  // update(id: number, updateCourtDto: UpdateCourtDto) {
  //   return `This action updates a #${id} court`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} court`;
  // }
}
