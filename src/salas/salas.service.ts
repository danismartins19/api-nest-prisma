/* eslint-disable prettier/prettier */
/* eslint-disable prefer-const */
/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { AddAlunoSalaDto } from './dto/add-aluno-sala-dto';

@Injectable()
export class SalasService {
  constructor(private prisma: PrismaService){}

  async create(createSalaDto: Prisma.SalaUncheckedCreateInput) {
    
    const numero = createSalaDto.numero;
    const sala = await this.prisma.sala.findUnique({
      where: {numero}
    })

    if(sala){
      throw new HttpException('Já existe uma sala com esse número', HttpStatus.BAD_REQUEST);
    }

    
    return this.prisma.sala.create({
      data: createSalaDto
    })
  }

  async findOne(where: Prisma.SalaWhereUniqueInput) {
    const sala = await this.prisma.sala.findUnique({
      where
    })

    if(!sala){
      throw new HttpException('Sala não encontrada', HttpStatus.BAD_REQUEST);
    } else {
      return sala;
    }
  }

  async update(where: Prisma.SalaWhereUniqueInput, data: Prisma.SalaUpdateInput) {
    const sala = await this.prisma.sala.findUnique({
      where
    })

    if(!sala){
      throw new HttpException('Sala não encontrada', HttpStatus.BAD_REQUEST)
    }

    return this.prisma.sala.update({
      where,
      data
    })


  }

  async remove(where: Prisma.SalaWhereUniqueInput) {

    const sala = await this.prisma.sala.findUnique({
      where
    })

    if(!sala){
      throw new HttpException('Sala não encontrada', HttpStatus.BAD_REQUEST)
    }
    return this.prisma.sala.delete({
      where
    })
  }

  async addAlunoSala(numero: number, matricula: number, addAlunoSalaDto : AddAlunoSalaDto){
    const sala = await this.prisma.sala.findUnique({
      where: { numero}
    })

    const aluno = await this.prisma.aluno.findUnique({
      where: {matricula}
    })

    if(!aluno){
      throw new HttpException('Não foi encontrado um aluno com essa matrícula', HttpStatus.BAD_REQUEST)
    }

    if(!sala){
      throw new HttpException('Não foi encontrada uma sala com esse número', HttpStatus.BAD_REQUEST)
    }

    if(!sala.disponivel){
      throw new HttpException('Essa sala não está disponivel no momento', HttpStatus.BAD_REQUEST)
    }

    if(sala.professor_matricula != addAlunoSalaDto.professor_matricula){
      throw new HttpException('Esse professor não pode adicionar alunos a essa sala!', HttpStatus.BAD_REQUEST)
    }

    const salaAlunos = await this.prisma.sala.findUnique({
      where: {numero},
      include:{
        alunos: true
      }
    })

    if(salaAlunos.alunos.length >= sala.capacidade){
      throw new HttpException('Essa sala está na sua capacidade máxima!', HttpStatus.BAD_REQUEST)
    }

    try{
      return await this.prisma.sala.update({
        where: { numero},
        data: {
          alunos: {
            create: {
              aluno_matricula: matricula,
            }
          }
        }
      })
    } catch(err){
      throw new HttpException('Não foi possivel adicionar esse aluno nessa sala', HttpStatus.BAD_REQUEST)
    }
  }

  async delAluno(numero: number, matricula: number){
    const sala = await this.prisma.sala.findUnique({
      where: { numero}
    })

    const aluno = await this.prisma.aluno.findUnique({
      where: {matricula}
    })

    if(!aluno){
      throw new HttpException('Não foi encontrado um aluno com essa matrícula', HttpStatus.BAD_REQUEST)
    }

    if(!sala){
      throw new HttpException('Não foi encontrada uma sala com esse número', HttpStatus.BAD_REQUEST)
    }

    try{
      const alunoRemoved = await this.prisma.sala.update({
        where: { numero},
        data: {
          alunos: {
            deleteMany:{
              aluno_matricula: matricula
            }
          }
        }
      })

      if(alunoRemoved){
        return {
          message: "Aluno removido"
        }
      }

    } catch(err){
      throw new HttpException('Não foi possivel remover o aluno dessa sala', HttpStatus.BAD_REQUEST)
    }
  }

  async verAlunos(where: Prisma.SalaWhereUniqueInput){

    const sala = await this.prisma.sala.findUnique({
      where
    })

    if(!sala){
      throw new HttpException('Não foi encontrada uma sala com esse número', HttpStatus.BAD_REQUEST)
    }


    const salaAlunos = await this.prisma.sala.findUnique({
      where,
      include:{
        alunos: true
      }
    })

    if(salaAlunos.alunos.length === 0){
      return {
        message: "Esta sala não possui alunos"
      }
    } else {

      let result : Prisma.AlunoCreateInput[] = [];

      for(let aluno of salaAlunos.alunos){
        let searchAluno = await this.prisma.aluno.findUnique({
          where: {matricula: aluno.aluno_matricula}
        })
  
        result.push(
          searchAluno
        )
      }

      return result;
    }
  }
}
