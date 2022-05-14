/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class SalasService {
  constructor(private prisma: PrismaService){}

  create(createSalaDto: Prisma.SalaUncheckedCreateInput) {
    return this.prisma.sala.create({
      data: createSalaDto
    })
  }

  findOne(numero: number) {
    return this.prisma.sala.findUnique({
      where:{ numero }
    })
  }

  update(numero: number, updateSalaDto: Prisma.SalaUpdateInput) {
    return this.prisma.sala.update({
      where:{numero},
      data: updateSalaDto
    })
  }

  remove(numero: number) {
    return this.prisma.sala.delete({
      where: {numero}
    })
  }
}
