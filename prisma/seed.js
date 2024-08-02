const { PrismaClient } = require('@prisma/client');
const { faker } = require('@faker-js/faker');

const prisma = new PrismaClient();

async function main() {
  for (let i = 0; i < 10; i++) {
    await prisma.usuarioAssistencia.create({
      data: {
        nome: faker.name.fullName(),
        cpf: faker.finance.creditCardNumber('############'),
        cnpj: faker.finance.creditCardNumber('###############'),
        dataNascimento: faker.date.birthdate({ min: 18, max: 65, mode: 'age' }),
        genero: faker.helpers.arrayElement(['M', 'F']),
        email: faker.internet.email(),
        telefone1: faker.phone.number(),
        telefone2: faker.phone.number(),
        telefone3: faker.phone.number(),
        telefone4: faker.phone.number(),
        endereco: {
          create: [
            {
              endereco: faker.address.streetAddress(),
              uf: faker.address.stateAbbr(),
              cidade: faker.address.city(),
              bairro: faker.address.county(),
              cep: faker.address.zipCode(),
              telefone: faker.phone.number(),
            },
          ],
        },
        contrato: {
          create: [
            {
              numero: faker.random.alphaNumeric(18),
              versao: faker.datatype.number(),
              chave: faker.random.alphaNumeric(30),
              subChave: faker.random.alphaNumeric(15),
              tipoMovimento: faker.helpers.arrayElement(['A', 'B', 'C']),
              inicioVigencia: faker.date.soon(),
              fimVigencia: faker.date.future(),
            },
          ],
        },
      },
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
