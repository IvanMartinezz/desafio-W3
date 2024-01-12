const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

class CountryController {
  async getCountries(req, res) {
    const { value } = req.query;

    const pattern = /^[a-zA-Z]+$/;

    const hasInvalidCharacters = !pattern.test(value);

    const hasInvalidLength = !value || value.length < 3;

    if (hasInvalidCharacters) return res.status(400).json();

    if (hasInvalidLength) return res.status(204).json();

    try {
      const sumTotalPopulation = await prisma.country.aggregate({
        _sum: {
          population: true,
        },
      });

      const totalPopulation = Number(sumTotalPopulation._sum.population);

      const countries = await prisma.country.findMany({
        where: {
          name: {
            contains: value,
            mode: "insensitive",
          },
        },
        take: 5,
      });

      const hasNoMatches = countries.length === 0;

      if (hasNoMatches) return res.status(404).json();

      const data = countries.map((c) => ({
        ...c,
        population: c.population.toString(),
        percentage_population: (
          (Number(c.population) / totalPopulation) *
          100
        ).toString(),
      }));
      return res.status(200).json(data);
    } catch (e) {
      console.error(e);
      return res.status(500).json();
    }
  }
}

const countryController = new CountryController();
module.exports = countryController;
