/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class SalasService {
  constructor(private prisma: PrismaService){}

  async create(createSalaDto: Prisma.SalaUncheckedCreateInput) {
    
    const numero = createSalaDto.numero;
    const sala = await this.prisma.sala.findUnique({
      where: {numero}
    })

    if(sala){
      throw new HttpException('Já existe uma sala com esse número', HttpStatus.BAD_REQUEST);
    }

    
    return this.prisma.sala.create({
      data: createSalaDto
    })
  }

  async findOne(where: Prisma.SalaWhereUniqueInput) {
    const sala = await this.prisma.sala.findUnique({
      where
    })

    if(!sala){
      throw new HttpException('Sala não encontrada', HttpStatus.BAD_REQUEST);
    } else {
      return sala;
    }
  }

  async update(where: Prisma.SalaWhereUniqueInput, data: Prisma.SalaUpdateInput) {
    const sala = await this.prisma.sala.findUnique({
      where
    })

    if(!sala){
      throw new HttpException('Sala não encontrada', HttpStatus.BAD_REQUEST)
    }

    return this.prisma.sala.update({
      where,
      data
    })


  }

  async remove(where: Prisma.SalaWhereUniqueInput) {

    const sala = await this.prisma.sala.findUnique({
      where
    })

    if(!sala){
      throw new HttpException('Sala não encontrada', HttpStatus.BAD_REQUEST)
    }
    return this.prisma.sala.delete({
      where
    })
  }
}
