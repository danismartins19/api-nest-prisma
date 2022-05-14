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
    
    const aluno = await this.prisma.aluno.findUnique({
      where : {matricula}
    })

    if(aluno){
      throw new HttpException('Aluno já cadastrado', HttpStatus.BAD_REQUEST)
    }


    return await this.prisma.aluno.create({
      data: createAlunoDto
    })
  }

  async findOne(where: Prisma.AlunoWhereUniqueInput) {

    const aluno = await this.prisma.aluno.findUnique({
      where
    })
    if(!aluno){
      throw new HttpException('Aluno não encontrado', HttpStatus.BAD_REQUEST)
    } else {
      return aluno
    }
  }

  async update(where: Prisma.AlunoWhereUniqueInput, data: Prisma.AlunoUpdateInput) {

      const aluno = await this.prisma.aluno.findUnique({
        where
      })
      if(!aluno){
        throw new HttpException('Aluno não encontrado', HttpStatus.BAD_REQUEST)
      }

      return  this.prisma.aluno.update({
        where,
        data
      })
    
  }

  async remove(where: Prisma.AlunoWhereUniqueInput) {

    const aluno = await this.prisma.aluno.findUnique({
      where
    })
    if(!aluno){
      throw new HttpException('Aluno não encontrado', HttpStatus.BAD_REQUEST)
    }

    return this.prisma.aluno.delete({
      where
    })
  }

  async findAllRooms(matricula:number){
    return 'oi'
  }
}
