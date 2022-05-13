/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AlunosModule } from './alunos/alunos.module';
import { PrismaService } from './prisma.service';
import { ProfessoresModule } from './professores/professores.module';
import { SalasModule } from './salas/salas.module';


@Module({
  imports: [AlunosModule, ProfessoresModule, SalasModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
