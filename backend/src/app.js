const express = require("express");

const countryRoutes = require("./routes/countryRoutes");

const PORT = process.env.PORT || 4000;

class App {
  constructor() {
    this.app = express();
    this.settings();
    this.middleware();
    this.routes();
  }

  settings() {
    this.app.set("port", PORT);
  }

  middleware() {
    this.app.use(express.json());
    this.app.use((req, res, next) => {
      res.setHeader("Access-Control-Allow-Methods", "GET");
      next();
    });
  }

  routes() {
    this.app.use("/country", countryRoutes);
  }

  async start() {
    if (process.env.NODE_ENV !== "test")
      this.app.listen(PORT, () =>
        console.log(`Server running on port ${PORT}`)
      );
  }
}

module.exports = App;
