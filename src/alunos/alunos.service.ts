/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class AlunosService {
  constructor(private prisma: PrismaService){}

  async create(createAlunoDto: Prisma.AlunoCreateInput) {

    const matricula = createAlunoDto.matricula;
    const aluno = this.prisma.aluno.findUnique({
      where: {matricula}
    })

    if(aluno){
      throw new HttpException('Aluno já cadastrado', HttpStatus.BAD_REQUEST)
;    }



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
