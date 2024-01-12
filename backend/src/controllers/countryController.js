const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

class CountryController {}

const countryController = new CountryController();
module.exports = countryController;
