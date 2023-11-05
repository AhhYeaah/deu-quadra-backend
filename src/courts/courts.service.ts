import { Injectable } from '@nestjs/common';
import { CreateCourtDto } from './dto/create-court.dto';
import { PrismaService } from 'src/services/prisma.service';

@Injectable()
export class CourtsService {

  constructor(private prisma: PrismaService) { 

   
    
  }

  create(createCourtDto: CreateCourtDto) {
    return this.prisma.quadra.create({
      data: { ...createCourtDto },
    });
  }

  async findAll() {
    return await this.prisma.quadra.findMany()
  }

  async findByProximity([minLon,minLat,maxLon,maxLat]: number[]){
      return await this.prisma.quadra.findMany({
        where: {
          Empresa: {
            lon: {
              gte: minLon,
              lte: maxLon
            }
            ,
            lat: {
              gte: minLat,
              lte: maxLat
            }
          }
        },
        select: {
          nome: true,
          preco: true,
          descricao: true,
          idQuadra:true,
          imagemUrl: true,
          Empresa: {
            select: {
              nome: true,
              idEmpresa: true,
              rua: true,
              lat: true,
              lon: true,
              bairro: true,
              numero: true,
              
            }
          }
        }
      })
    }
    

    async findOne(id: number) {
      return await this.prisma.quadra.findFirst({
        where: {
          empresaIdEmpresa: id,
        },
      });
    }
    

    // update(id: number, updateCourtDto: UpdateCourtDto) {
    //   return `This action updates a #${id} court`;
    // }

    // remove(id: number) {
    //   return `This action removes a #${id} court`;
    // }
  }
