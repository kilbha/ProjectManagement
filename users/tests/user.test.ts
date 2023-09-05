import request from "supertest";
import app from "../src/server";
import userModel from "../src/models/User";

import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";

let mongoServer: MongoMemoryServer;

// Start the in-memory MongoDB server
beforeAll(async () => {
  mongoServer = new MongoMemoryServer();
  const mongoUri = await mongoServer.getUri();
  await mongoose.connect(mongoUri, {});
});

describe("GET /api/users", () => {
  it("should respond with a 200 status code", async () => {
    const response = await request(app).get("/api/users");
    expect(response.status).toBe(200);
  });

  it("should return an array of users", async () => {
    const response = await request(app).get("/api/users");
    expect(Array.isArray(response.body)).toBe(true);
  });
});

// Stop the in-memory MongoDB server
afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});
