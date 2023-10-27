import { Injectable } from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-company.dto';
import { PrismaService } from 'src/services/prisma.service';
import { count } from 'console';

@Injectable()
export class CompaniesService {

  constructor(private prisma: PrismaService) {}

  async createCompany(createCompanyDto: CreateCompanyDto) {
      return this.prisma.company.create({       
        data: { ...createCompanyDto },
      });
  }

  async findAll() {
    return await this.prisma.company.findMany({
      include: {
        courts: true,
      },
    });;
    }

  async findOne(id: number) {
    return await this.prisma.company.findFirst({
      where: {
        companyId: id,
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
