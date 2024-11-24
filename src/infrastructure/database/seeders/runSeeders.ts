import { RoleRepository } from "../../repositories/role/RoleRepository";
import { AppDataSource } from "../config/typeorm";
import { RoleSeeder } from "./role/RoleSeeder";

export const runSeeders = async () => {
  try {
    const seeders = [
      {
        name: "RoleSeeder",
        instance: new RoleSeeder(new RoleRepository(AppDataSource)),
      },
    ];

    for (const { name, instance } of seeders) {
      console.log(`Running ${name}...`);
      await instance.run();
    }
  } catch (error) {
    console.error("Error during seeding process: ", error);
    throw error;
  }
};
