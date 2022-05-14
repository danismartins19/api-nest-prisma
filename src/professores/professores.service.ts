/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ProfessoresService {
  constructor(private prisma: PrismaService){}

  async create(createProfessoreDto: Prisma.ProfessorCreateInput) {
    
    const matricula = createProfessoreDto.matricula;
    
    const professor = await this.prisma.professor.findUnique({
      where : {matricula}
    })

    if(professor){
      throw new HttpException('Professor já cadastrado', HttpStatus.BAD_REQUEST)
    }
    
    return this.prisma.professor.create({
      data: createProfessoreDto
    })
  }

  async findOne(where: Prisma.ProfessorWhereUniqueInput) {

    const professor = await this.prisma.professor.findUnique({
      where
    })
    if(!professor){
      throw new HttpException('Professor não encontrado', HttpStatus.BAD_REQUEST)
    } else {
      return professor
    }

  }

  async update(where: Prisma.ProfessorWhereUniqueInput, data: Prisma.ProfessorUpdateInput) {
    const professor = await this.prisma.professor.findUnique({
      where
    })
    if(!professor){
      throw new HttpException('Professor não encontrado', HttpStatus.BAD_REQUEST)
    }

    return  this.prisma.professor.update({
      where,
      data
    })
  }

  async remove(where: Prisma.ProfessorWhereUniqueInput) {
    
    const professor = await this.prisma.professor.findUnique({
      where
    })
    if(!professor){
      throw new HttpException('Professor não encontrado', HttpStatus.BAD_REQUEST)
    }
    
    return this.prisma.professor.delete({
      where
    })
  }
}
