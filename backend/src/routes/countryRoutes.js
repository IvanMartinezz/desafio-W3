const { Router } = require("express");
const countryController = require("../controllers/countryController");

class CountryRoutes {
  router = Router();

  constructor() {
    this.configureRoutes();
  }

  configureRoutes() {
    this.router.route("/").get(countryController.getCountries);
  }
}

const countryRoutes = new CountryRoutes();
module.exports = countryRoutes.router;
