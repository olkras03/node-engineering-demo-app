const app = require("../app.js"); // Link to your server file
const supertest = require("supertest");
const request = supertest(app);

describe("posts", () => {
  it("gets test endpoint", async done => {
    const response = await request.get("/posts/test");

    expect(response.status).toBe(200);
    expect(response.text).toBe("Greetings from the Test controller!");
    done();
  });

  it("posts to the posts/endpoint", async done => {
    const response = await request.post("/posts?message=hello");

    expect(response.status).toBe(200);
    expect(response.text).toBe("Post Created successfully");
    done();
  });

  it("get a specific post from database", async done => {
    const response = await request.get("/posts/5ddc0252a5333e46c6442ff8");

    expect(response.status).toBe(200);
    expect(JSON.parse(response.text).message).toBe("we are a great team");
    done();
  });
});
