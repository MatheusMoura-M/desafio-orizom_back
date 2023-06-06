import "reflect-metadata";
import { DataSourceOptions, DataSource } from "typeorm";

const DataSourceSettings = (): DataSourceOptions => {
  return {
    type: "sqlite",
    database: ":memory:",
    synchronize: true,
  };
};

const appDataSource = new DataSource(DataSourceSettings());

export default appDataSource;
