import { AppDataSource } from "../../config/typeorm";
import { runSeeders } from "../runSeeders";

(async () => {
  try {
    console.log("Initializing database connection...");
    await AppDataSource.initialize();

    console.log("Running seeders...");
    await runSeeders();

    console.log("Seeding completed successfully!");
    process.exit(0);
  } catch (error) {
    console.error("Error during seeding:", error);
    process.exit(1);
  }
})();
