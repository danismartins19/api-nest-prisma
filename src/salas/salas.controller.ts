/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { AddAlunoSalaDto } from './dto/add-aluno-sala-dto';
import { UpdateSalaDto } from './dto/update-sala-dto';
import { SalasService } from './salas.service';


@Controller('salas')
export class SalasController {
  constructor(private readonly salasService: SalasService) {}

  @Post()
  create(@Body() createSalaDto: Prisma.SalaUncheckedCreateInput) {
    return this.salasService.create(createSalaDto);
  }

  @Get(':numero')
  findOne(@Param('numero') numero: number) {
    return this.salasService.findOne({numero : +numero});
  }

  @Put(':numero')
  update(@Param('numero') numero: number, @Body() updateSalaDto: UpdateSalaDto) {
    return this.salasService.update({numero : +numero}, updateSalaDto);
  }

  @Delete(':numero')
  remove(@Param('numero') numero: number) {
    return this.salasService.remove({numero : +numero});
  }

  @Post(':numero/addAluno/:matricula')
  addAluno(@Param('numero') numero: number, @Param('matricula') matricula: number, @Body() addAlunoSalaDto: AddAlunoSalaDto) {
    return this.salasService.addAlunoSala(+numero, +matricula, addAlunoSalaDto);
  }

  @Delete(':numero/delAluno/:matricula')
  delAluno(@Param('numero') numero: number, @Param('matricula') matricula: number) {
    return this.salasService.delAluno(+numero, +matricula);
  }

  @Get(':numero/verAlunos')
  verAlunos(@Param('numero') numero: number) {
    return this.salasService.verAlunos({numero : +numero});
  }



}
