-- CreateTable
CREATE TABLE "Aluno" (
    "matricula" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "data_nasc" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Professor" (
    "matricula" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "data_nasc" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Sala" (
    "numero" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "capacidade" INTEGER NOT NULL,
    "disponivel" BOOLEAN NOT NULL,
    "professor_matricula" INTEGER NOT NULL,
    CONSTRAINT "Sala_professor_matricula_fkey" FOREIGN KEY ("professor_matricula") REFERENCES "Professor" ("matricula") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "AlunosSalas" (
    "aluno_matricula" INTEGER NOT NULL,
    "sala_numero" INTEGER NOT NULL,

    PRIMARY KEY ("aluno_matricula", "sala_numero"),
    CONSTRAINT "AlunosSalas_aluno_matricula_fkey" FOREIGN KEY ("aluno_matricula") REFERENCES "Aluno" ("matricula") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "AlunosSalas_sala_numero_fkey" FOREIGN KEY ("sala_numero") REFERENCES "Sala" ("numero") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Sala_professor_matricula_key" ON "Sala"("professor_matricula");
