import { DataSource } from "typeorm";
import { User } from "../entity/User";

export const appDataSource = new DataSource({
  type: "sqlite",
  database: "./dev-typeorm.db",
  entities: [User],
});

appDataSource
  .initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });
