/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ProfessoresService {
  constructor(private prisma: PrismaService){}

  async create(createProfessoreDto: Prisma.ProfessorCreateInput) {
    return this.prisma.professor.create({
      data: createProfessoreDto
    })
  }

  async findOne(matricula: number) {
    return this.prisma.professor.findUnique({
      where:{matricula}
    })
  }

  async update(matricula: number, updateProfessoreDto: Prisma.ProfessorUpdateInput) {
    return this.prisma.professor.update({
      where: {matricula},
      data: updateProfessoreDto
    })
  }

  async remove(matricula: number) {
    return this.prisma.professor.delete({
      where: {matricula}
    })
  }
}
