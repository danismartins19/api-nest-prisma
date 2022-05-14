/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Put, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { testData } from 'src/utils/testData';
import { testEmail } from 'src/utils/testEmail';
import { UpdateProfessorDto } from './dto/update-professor-dto';
import { ProfessoresService } from './professores.service';

@Controller('professores')
export class ProfessoresController {
  constructor(private readonly professoresService: ProfessoresService) {}

  @Post()
  create(@Body() createProfessorDto: Prisma.ProfessorCreateInput) {

    if(createProfessorDto.data_nasc){
      if(!testData(createProfessorDto.data_nasc)){
        throw new HttpException('Data de nascimento invalida', HttpStatus.BAD_REQUEST)
      }
    }

    if(createProfessorDto.email){
      if(!testEmail(createProfessorDto.email)){
        throw new HttpException('Email inválido', HttpStatus.BAD_REQUEST)
      }
    }


    return this.professoresService.create(createProfessorDto);
  }

  @Get(':matricula')
  findOne(@Param('matricula') matricula: number) {
    return this.professoresService.findOne({matricula : +matricula});
  }

  @Put(':matricula')
  update(@Param('matricula') matricula: number, @Body() updateProfessorDto: UpdateProfessorDto) {
    return this.professoresService.update({matricula : +matricula}, updateProfessorDto);
  }

  @Delete(':matricula')
  remove(@Param('matricula') matricula: number) {
    return this.professoresService.remove({matricula : +matricula});
  }
}
