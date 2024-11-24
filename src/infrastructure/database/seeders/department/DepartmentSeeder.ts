import { DataSource, Repository } from "typeorm";
import { ICreateDepartment } from "../../../../domain/entities/department/IDepartment";
import { IDepartmentRepository } from "../../../../domain/entities/department/IDepartmentRepository";
import { AlreadySeededException } from "../../../../domain/exceptions/AlreadySeededException";
import { SeederException } from "../../../../domain/exceptions/SeederException";
import { ISeeder } from "../interfaces/ISeeder";
import { Department } from "../../entities/Department";

export class DepartmentSeeder implements ISeeder {
  private readonly departmentRepository: Repository<Department>;
  private readonly department: ICreateDepartment = {
    name: "System department",
    description: "Department in charge of system maintenances",
    phoneNumber: "123456789",
    coordinator: null,
  };

  constructor(private readonly dataSource: DataSource) {
    this.departmentRepository = dataSource.getRepository(Department);
  }

  async count(): Promise<number> {
    try {
      return await this.departmentRepository.count();
    } catch (error) {
      throw new SeederException("Error counting department");
    }
  }

  async save(data: any): Promise<void> {
    try {
      await this.departmentRepository.save(data);
    } catch (error) {
      throw new SeederException("Error saving department");
    }
  }

  async run(): Promise<void> {
    try {
      const existingDepartment = await this.count();
      if (existingDepartment > 0) {
        throw new AlreadySeededException("Department already seeded");
      }

      await this.save(this.department);
    } catch (error) {
      if (error instanceof AlreadySeededException) {
        throw error;
      }
      throw new SeederException("Error running department seeder");
    }
  }
}
