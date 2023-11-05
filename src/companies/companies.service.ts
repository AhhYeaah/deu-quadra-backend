import { Injectable } from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-company.dto';
import { PrismaService } from 'src/services/prisma.service';
import { count } from 'console';
import { CreateCourtDto } from 'src/courts/dto/create-court.dto';

@Injectable()
export class CompaniesService {

  constructor(private prisma: PrismaService) {}

  async createCompany(createCompanyDto: CreateCompanyDto) {
      return this.prisma.empresa.create({       
        data: { ...createCompanyDto},
      });
  }

  async findAll() {
    return await this.prisma.empresa.findMany({
      include: {
        quadras: true,
      },
    });;
    }

  async findOne(id: number) {
    return await this.prisma.empresa.findFirst({
      where: {
        idEmpresa: id,
      },
    });;
  }

  // update(id: number, updateCompanyDto: UpdateCompanyDto) {
  //   return `This action updates a #${id} company`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} company`;
  // }
}
