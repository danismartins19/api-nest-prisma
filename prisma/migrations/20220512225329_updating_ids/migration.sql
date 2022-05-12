-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Sala" (
    "numero" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "capacidade" INTEGER NOT NULL,
    "disponivel" BOOLEAN NOT NULL,
    "professor_matricula" INTEGER NOT NULL,
    CONSTRAINT "Sala_professor_matricula_fkey" FOREIGN KEY ("professor_matricula") REFERENCES "Professor" ("matricula") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Sala" ("capacidade", "disponivel", "numero", "professor_matricula") SELECT "capacidade", "disponivel", "numero", "professor_matricula" FROM "Sala";
DROP TABLE "Sala";
ALTER TABLE "new_Sala" RENAME TO "Sala";
CREATE UNIQUE INDEX "Sala_professor_matricula_key" ON "Sala"("professor_matricula");
CREATE TABLE "new_AlunosSalas" (
    "aluno_matricula" INTEGER NOT NULL,
    "sala_numero" INTEGER NOT NULL,

    PRIMARY KEY ("aluno_matricula", "sala_numero"),
    CONSTRAINT "AlunosSalas_aluno_matricula_fkey" FOREIGN KEY ("aluno_matricula") REFERENCES "Aluno" ("matricula") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "AlunosSalas_sala_numero_fkey" FOREIGN KEY ("sala_numero") REFERENCES "Sala" ("numero") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_AlunosSalas" ("aluno_matricula", "sala_numero") SELECT "aluno_matricula", "sala_numero" FROM "AlunosSalas";
DROP TABLE "AlunosSalas";
ALTER TABLE "new_AlunosSalas" RENAME TO "AlunosSalas";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
