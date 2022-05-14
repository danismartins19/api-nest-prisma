/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ProfessoresService } from './professores.service';

@Controller('professores')
export class ProfessoresController {
  constructor(private readonly professoresService: ProfessoresService) {}

  @Post()
  create(@Body() createProfessorDto: Prisma.ProfessorCreateInput) {
    return this.professoresService.create(createProfessorDto);
  }

  @Get(':matricula')
  findOne(@Param('matricula') matricula: number) {
    return this.professoresService.findOne(+matricula);
  }

  @Put(':matricula')
  update(@Param('matricula') matricula: number, @Body() updateProfessorDto: Prisma.ProfessorUpdateInput) {
    return this.professoresService.update(+matricula, updateProfessorDto);
  }

  @Delete(':matricula')
  remove(@Param('matricula') matricula: number) {
    return this.professoresService.remove(+matricula);
  }
}
