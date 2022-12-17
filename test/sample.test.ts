import { PrismaClient } from "@prisma/client";
import { appDataSource } from "../src/database/typeorm";
import { User } from "../src/entity/User";

const client = new PrismaClient({
  log: [{ level: "query", emit: "event" }],
});
client.$on("query", (event) => {
  console.log(event);
});

beforeEach(() => {
  console.log("hi");
});

afterEach(() => {
  console.log("hi");

  // @ts-expect-error
  console.log({ sampleHello });
});

it("sample 1", () => {
  expect(1 + 1).toBe(2);
});

it("sample 2", () => {
  expect(1 + 1).toBe(2);
});

it("typeorm sample", async () => {
  await appDataSource.initialize();
  await appDataSource.manager.getRepository(User).save({
    id: "sample",
    name: "shimokawa",
    age: 20,
  });
});
