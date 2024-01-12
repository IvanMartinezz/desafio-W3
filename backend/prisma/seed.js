const { PrismaClient } = require("@prisma/client");

const countries = [
  {
    id: 1,
    name: "India",
    population: 1409902000,
  },
  {
    id: 2,
    name: "China",
    population: 1403426000,
  },
  {
    id: 3,
    name: "Estados Unidos",
    population: 331800000,
  },
  {
    id: 4,
    name: "Indonesia",
    population: 271629000,
  },
  {
    id: 5,
    name: "Pakistán",
    population: 224654000,
  },
  {
    id: 6,
    name: "Nigeria",
    population: 219743000,
  },
  {
    id: 7,
    name: "Brasil",
    population: 211420000,
  },
  {
    id: 8,
    name: "Bangladés",
    population: 181781000,
  },
  {
    id: 9,
    name: "Rusia",
    population: 146712000,
  },
  {
    id: 10,
    name: "México",
    population: 127792000,
  },
  {
    id: 11,
    name: "Japón",
    population: 126045000,
  },
  {
    id: 12,
    name: "Filipinas",
    population: 108772000,
  },
  {
    id: 13,
    name: "Egipto",
    population: 101000000,
  },
  {
    id: 14,
    name: "Etiopía",
    population: 100882000,
  },
  {
    id: 15,
    name: "Vietnam",
    population: 97591000,
  },
  {
    id: 16,
    name: "República del Congo",
    population: 89561000,
  },
  {
    id: 17,
    name: "Irán",
    population: 83914000,
  },
  {
    id: 18,
    name: "Turquía",
    population: 83752000,
  },
  {
    id: 19,
    name: "Alemania",
    population: 83421000,
  },
  {
    id: 20,
    name: "Tailandia",
    population: 68232000,
  },
];

const prisma = new PrismaClient();

async function main() {
  for (const country of countries) {
    await prisma.country.upsert({
      where: { id: country.id },
      update: {},
      create: {
        name: country.name,
        population: country.population,
      },
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
