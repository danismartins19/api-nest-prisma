import { Module } from '@nestjs/common';
import { AlunosModule } from './alunos/alunos.module';
import { ProfessoresModule } from './professores/professores.module';
import { SalasModule } from './salas/salas.module';


@Module({
  imports: [AlunosModule, ProfessoresModule, SalasModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
