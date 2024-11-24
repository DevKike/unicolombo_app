import { DepartmentRepository } from "../../repositories/department/DepartmentRepository";
import { RoleRepository } from "../../repositories/role/RoleRepository";
import { AppDataSource } from "../config/typeorm";
import { DepartmentSeeder } from "./department/DepartmentSeeder";
import { RoleSeeder } from "./role/RoleSeeder";

export const runSeeders = async () => {
  try {
    const seeders = [
      {
        name: "Role Seeder",
        instance: new RoleSeeder(new RoleRepository(AppDataSource)),
      },
      {
        name: "Department Seeder",
        instance: new DepartmentSeeder(new DepartmentRepository(AppDataSource)),
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
