import { AppDataSource } from "../config/typeorm";
import { ActorSeeder } from "./actor/ActorSeeder";
import { AssignmentSeeder } from "./assignment/AssignmentSeeder";
import { DepartmentSeeder } from "./department/DepartmentSeeder";
import { RoleSeeder } from "./role/RoleSeeder";

export const runSeeders = async () => {
  try {
    const seeders = [
      {
        name: "Role Seeder",
        instance: new RoleSeeder(AppDataSource),
      },
      {
        name: "Department Seeder",
        instance: new DepartmentSeeder(AppDataSource),
      },
      {
        name: "Actor Seeder",
        instance: new ActorSeeder(AppDataSource),
      },
      {
        name: "Assignment Seeder",
        instance: new AssignmentSeeder(AppDataSource),
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
