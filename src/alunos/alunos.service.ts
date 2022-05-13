/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class AlunosService {
  constructor(private prisma: PrismaService){}

  async create(createAlunoDto: Prisma.AlunoCreateInput) {
    return this.prisma.aluno.create({
      data: createAlunoDto
    })
  }

  async findOne(matricula: number) {
    return this.prisma.aluno.findUnique({
      where: {matricula}
    })
  }

  async update(matricula: number, updateAlunoDto: Prisma.AlunoUpdateInput) {
    return  this.prisma.aluno.update({
      where: {matricula},
      data: updateAlunoDto
    })
  }

  async remove(matricula: number) {
    return this.prisma.aluno.delete({
      where:{
        matricula
      }
    })
  }

  async findAllRooms(matricula:number){
    return 'oi'
  }
}
