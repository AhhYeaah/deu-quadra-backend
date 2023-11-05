-- CreateEnum
CREATE TYPE "Roles" AS ENUM ('ADMIN', 'USER');

-- CreateTable
CREATE TABLE "Convidado" (
    "idConvidado" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT,
    "cpf" TEXT,
    "reservaIdReserva" INTEGER,

    CONSTRAINT "Convidado_pkey" PRIMARY KEY ("idConvidado")
);

-- CreateTable
CREATE TABLE "User" (
    "identificador" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "hashedPassword" TEXT,
    "role" "Roles" NOT NULL DEFAULT 'USER',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "User_pkey" PRIMARY KEY ("identificador")
);

-- CreateTable
CREATE TABLE "Reserva" (
    "idReserva" SERIAL NOT NULL,
    "nome" TEXT,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,
    "userIdentificador" INTEGER NOT NULL,

    CONSTRAINT "Reserva_pkey" PRIMARY KEY ("idReserva")
);

-- CreateTable
CREATE TABLE "ReservaEspaco" (
    "idReservaEspaco" SERIAL NOT NULL,
    "espacoIdEspaco" INTEGER NOT NULL,
    "reservaIdReserva" INTEGER NOT NULL,

    CONSTRAINT "ReservaEspaco_pkey" PRIMARY KEY ("idReservaEspaco")
);

-- CreateTable
CREATE TABLE "Espaco" (
    "idEspaco" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "imagemUrl" TEXT,
    "preco" TEXT NOT NULL,
    "descricao" TEXT,
    "empresaIdEmpresa" INTEGER NOT NULL,

    CONSTRAINT "Espaco_pkey" PRIMARY KEY ("idEspaco")
);

-- CreateTable
CREATE TABLE "ReservaServico" (
    "idServico" SERIAL NOT NULL,
    "quantidade" INTEGER NOT NULL,
    "servicoIdServico" INTEGER NOT NULL,
    "reservaIdReserva" INTEGER NOT NULL,

    CONSTRAINT "ReservaServico_pkey" PRIMARY KEY ("idServico")
);

-- CreateTable
CREATE TABLE "Servico" (
    "idServico" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "tipoServico" TEXT NOT NULL,
    "imagemUrl" TEXT,
    "preco" DECIMAL(11,2) NOT NULL,
    "descricao" TEXT,
    "quantidade" INTEGER NOT NULL,
    "empresaIdEmpresa" INTEGER NOT NULL,

    CONSTRAINT "Servico_pkey" PRIMARY KEY ("idServico")
);

-- CreateTable
CREATE TABLE "Cidade" (
    "idCidade" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "estadoIdEstado" INTEGER NOT NULL,

    CONSTRAINT "Cidade_pkey" PRIMARY KEY ("idCidade")
);

-- CreateTable
CREATE TABLE "Estado" (
    "idEstado" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "uf" TEXT NOT NULL,

    CONSTRAINT "Estado_pkey" PRIMARY KEY ("idEstado")
);

-- CreateTable
CREATE TABLE "Empresa" (
    "idEmpresa" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "rua" TEXT NOT NULL,
    "bairro" TEXT NOT NULL,
    "numero" TEXT NOT NULL,
    "cidadeIdCidade" INTEGER NOT NULL,
    "lat" DECIMAL(10,8) NOT NULL,
    "lon" DECIMAL(10,8) NOT NULL,
    "usuarioLocadorIdUsuarioLocador" INTEGER NOT NULL,

    CONSTRAINT "Empresa_pkey" PRIMARY KEY ("idEmpresa")
);

-- CreateTable
CREATE TABLE "UsuarioLocador" (
    "idUsuarioLocador" SERIAL NOT NULL,
    "identificador" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "avatarUrl" TEXT,

    CONSTRAINT "UsuarioLocador_pkey" PRIMARY KEY ("idUsuarioLocador")
);

-- CreateTable
CREATE TABLE "Quadra" (
    "idQuadra" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "imagemUrl" TEXT NOT NULL,
    "preco" DECIMAL(11,2) NOT NULL,
    "descricao" TEXT,
    "empresaIdEmpresa" INTEGER,

    CONSTRAINT "Quadra_pkey" PRIMARY KEY ("idQuadra")
);

-- CreateTable
CREATE TABLE "Modalidade" (
    "idModalidade" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "Modalidade_pkey" PRIMARY KEY ("idModalidade")
);

-- CreateTable
CREATE TABLE "QuadraModalidade" (
    "idQuadraModalidade" SERIAL NOT NULL,
    "quadraIdQuadra" INTEGER NOT NULL,
    "modalidadeIdModalidade" INTEGER NOT NULL,

    CONSTRAINT "QuadraModalidade_pkey" PRIMARY KEY ("idQuadraModalidade")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "UsuarioLocador_email_key" ON "UsuarioLocador"("email");

-- AddForeignKey
ALTER TABLE "Convidado" ADD CONSTRAINT "Convidado_reservaIdReserva_fkey" FOREIGN KEY ("reservaIdReserva") REFERENCES "Reserva"("idReserva") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reserva" ADD CONSTRAINT "Reserva_userIdentificador_fkey" FOREIGN KEY ("userIdentificador") REFERENCES "User"("identificador") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReservaEspaco" ADD CONSTRAINT "ReservaEspaco_espacoIdEspaco_fkey" FOREIGN KEY ("espacoIdEspaco") REFERENCES "Espaco"("idEspaco") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReservaEspaco" ADD CONSTRAINT "ReservaEspaco_reservaIdReserva_fkey" FOREIGN KEY ("reservaIdReserva") REFERENCES "Reserva"("idReserva") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Espaco" ADD CONSTRAINT "Espaco_empresaIdEmpresa_fkey" FOREIGN KEY ("empresaIdEmpresa") REFERENCES "Empresa"("idEmpresa") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReservaServico" ADD CONSTRAINT "ReservaServico_reservaIdReserva_fkey" FOREIGN KEY ("reservaIdReserva") REFERENCES "Reserva"("idReserva") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReservaServico" ADD CONSTRAINT "ReservaServico_servicoIdServico_fkey" FOREIGN KEY ("servicoIdServico") REFERENCES "Servico"("idServico") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Servico" ADD CONSTRAINT "Servico_empresaIdEmpresa_fkey" FOREIGN KEY ("empresaIdEmpresa") REFERENCES "Empresa"("idEmpresa") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cidade" ADD CONSTRAINT "Cidade_estadoIdEstado_fkey" FOREIGN KEY ("estadoIdEstado") REFERENCES "Estado"("idEstado") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Empresa" ADD CONSTRAINT "Empresa_cidadeIdCidade_fkey" FOREIGN KEY ("cidadeIdCidade") REFERENCES "Cidade"("idCidade") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Empresa" ADD CONSTRAINT "Empresa_usuarioLocadorIdUsuarioLocador_fkey" FOREIGN KEY ("usuarioLocadorIdUsuarioLocador") REFERENCES "UsuarioLocador"("idUsuarioLocador") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Quadra" ADD CONSTRAINT "Quadra_empresaIdEmpresa_fkey" FOREIGN KEY ("empresaIdEmpresa") REFERENCES "Empresa"("idEmpresa") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "QuadraModalidade" ADD CONSTRAINT "QuadraModalidade_quadraIdQuadra_fkey" FOREIGN KEY ("quadraIdQuadra") REFERENCES "Quadra"("idQuadra") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "QuadraModalidade" ADD CONSTRAINT "QuadraModalidade_modalidadeIdModalidade_fkey" FOREIGN KEY ("modalidadeIdModalidade") REFERENCES "Modalidade"("idModalidade") ON DELETE RESTRICT ON UPDATE CASCADE;
