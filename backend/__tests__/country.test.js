const http = require("http");
const request = require("supertest");
const App = require("../src/app");

const app = new App();

describe("GET /country", () => {
  beforeAll((done) => {
    server = http.createServer(app.app);
    server.listen(done);
  });

  afterAll((done) => {
    server.close(done);
  });

  it("Should return all countries that match the value passed by the query. The status code would be 200", async () => {
    const response = await request(server)
      .get("/country")
      .query({ value: "india" });

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveLength(1);
    expect(response.body[0]).toHaveProperty("id");
    expect(response.body[0]).toHaveProperty("name");
    expect(response.body[0]).toHaveProperty("population");
    expect(response.body[0]).toHaveProperty("percentage_population");
  });

  it("Should return status code 404 since the value entered does not exist", async () => {
    const response = await request(server)
      .get("/country")
      .query({ value: "indiaa" });

    expect(response.statusCode).toBe(404);
  });

  it("Should return status 204 as the query parameters are invalid", async () => {
    const response = await request(server)
      .get("/country")
      .query({ value: "in" });

    expect(response.statusCode).toBe(204);
  });

  it("Should return status 400 as the query parameters include number", async () => {
    const response = await request(server).get("/country").query({ value: 10 });

    expect(response.statusCode).toBe(400);
  });

  it("Should return status 400 as the query parameters include special characters", async () => {
    const response = await request(server)
      .get("/country")
      .query({ value: "$$" });

    expect(response.statusCode).toBe(400);
  });
});
