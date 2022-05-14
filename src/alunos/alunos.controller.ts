/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import { Controller, Get, Post, Body, Patch, Param, Delete, Put, HttpException, HttpStatus } from '@nestjs/common';
import { AlunosService } from './alunos.service';
import { Prisma } from '@prisma/client';
import { UpdateAlunoDto } from 'src/alunos/dto/update-aluno.dto';
import { testData } from 'src/utils/testData';
import { testEmail } from 'src/utils/testEmail';

@Controller('alunos')
export class AlunosController {
  constructor(private readonly alunosService: AlunosService) {}

  @Post()
  create(@Body() createAlunoDto: Prisma.AlunoCreateInput) {

    if(createAlunoDto.data_nasc){
      if(!testData(createAlunoDto.data_nasc)){
        throw new HttpException('Data de nascimento invalida', HttpStatus.BAD_REQUEST)
      }
    }

    if(createAlunoDto.email){
      if(!testEmail(createAlunoDto.email)){
        throw new HttpException('Email inválido', HttpStatus.BAD_REQUEST)
      }
    }

    return this.alunosService.create(createAlunoDto);
  }

  @Get(':matricula')
  findOne(@Param('matricula') matricula: number) {
    return this.alunosService.findOne({matricula : +matricula});
  }

  @Put(':matricula')
  update(@Param('matricula') matricula: number, @Body() updateAlunoDto: UpdateAlunoDto) {

    if(updateAlunoDto.data_nasc){
      if(!testData(updateAlunoDto.data_nasc)){
        throw new HttpException('Data de nascimento invalida', HttpStatus.BAD_REQUEST)
      }
    }

    if(updateAlunoDto.email){
      if(!testEmail(updateAlunoDto.email)){
        throw new HttpException('Email inválido', HttpStatus.BAD_REQUEST)
      }
    }

    return this.alunosService.update({matricula : +matricula}, updateAlunoDto);
  }

  @Delete(':matricula')
  remove(@Param('matricula') matricula: number) {
    return this.alunosService.remove({matricula : +matricula});
  }
}
