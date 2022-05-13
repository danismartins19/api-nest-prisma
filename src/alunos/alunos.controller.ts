/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { AlunosService } from './alunos.service';
import { Prisma } from '@prisma/client';

@Controller('alunos')
export class AlunosController {
  constructor(private readonly alunosService: AlunosService) {}

  @Post()
  create(@Body() createAlunoDto: Prisma.AlunoCreateInput) {
    return this.alunosService.create(createAlunoDto);
  }

  @Get(':matricula')
  findOne(@Param('matricula') matricula: number) {
    return this.alunosService.findOne(+matricula);
  }

  @Put(':matricula')
  update(@Param('matricula') matricula: number, @Body() updateAlunoDto: Prisma.AlunoUpdateInput) {
    return this.alunosService.update(+matricula, updateAlunoDto);
  }

  @Delete(':matricula')
  remove(@Param('matricula') matricula: number) {
    return this.alunosService.remove(+matricula);
  }
}
