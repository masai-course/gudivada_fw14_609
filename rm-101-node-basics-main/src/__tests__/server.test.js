const supertest = require("supertest");
const app = require("../server");
const fs = require("fs");
const users = require("../assets/user.json");

describe("Testing routing Application", () => {
  beforeAll((done) => {
    global.score = 0;
    done();
  });

  test("GET /", () => {
    supertest(app)
      .get("/")
      .expect(200)
      .then((response) => {
        let usersHtml = fs.readFileSync(__dirname + "../assets/users.html");
        // Check type and length
        expect(response.body).toBeTruthy();
        expect(response.body).toEqual(usersHtml);
      });
    global.score += 2;
  });
  test("GET /users", () => {
    supertest(app)
      .get("/users")
      .expect(200)
      .then((response) => {
        // Check type and length
        expect(Array.isArray(response.body)).toBeTruthy();
        expect(response.body.length).toEqual(99);
      });
    global.score += 2;
  });

  test("GET /users/1", () => {
    supertest(app)
      .get("/users/1")
      .expect(200)
      .then((response) => {
        // Check type and length
        expect(response.body).toEqual(users[0]);
      });
    global.score += 2;
  });
  afterAll((done) => {
    console.log("Final Score is", global.score);
    done();
  });
});
