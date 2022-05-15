/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { Prisma } from '@prisma/client';
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
}
