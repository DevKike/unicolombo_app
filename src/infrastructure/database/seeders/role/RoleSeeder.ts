import { ISeeder } from "../interfaces/ISeeder";
import { AlreadySeededException } from "../../../../domain/exceptions/AlreadySeededException";
import { RoleEnum } from "../../../../domain/enums/role/RoleEnum";
import { ICreateRole } from "../../../../domain/entities/role/IRole";
import { IRoleRepository } from "../../../../domain/entities/role/IRoleRepository";
import { SeederException } from "../../../../domain/exceptions/SeederException";

export class RoleSeeder implements ISeeder {
  private readonly roles: ICreateRole[] = [
    {
      name: RoleEnum.ADMINISTRATOR,
      description: "administrator with full access",
    },
    {
      name: RoleEnum.SYSTEM_COORDINATOR,
      description: "person responsible for coordinating system-related tasks",
    },
    {
      name: RoleEnum.SYSTEM_ASSISTANT,
      description: "assistant in system-related operations",
    },
    {
      name: RoleEnum.SYSTEM_AUXILIARY,
      description: "auxiliary support for system-related activities",
    },
    {
      name: RoleEnum.MAINTENANCE_COORDINATOR,
      description: "person in charge of coordinating maintenance tasks",
    },
    {
      name: RoleEnum.MAINTENANCE_AUXILIARY,
      description: "maintenance support for maintenance-related activities",
    },
  ];

  constructor(private readonly roleRepository: IRoleRepository) {}

  async count(): Promise<number> {
    try {
      return await this.roleRepository.count();
    } catch (error) {
      throw new SeederException("Error counting roles");
    }
  }

  async save(data: any[]): Promise<void> {
    try {
      await this.roleRepository.save(data);
    } catch (error) {
      throw new SeederException("Error saving roles");
    }
  }

  async run(): Promise<void> {
    try {
      const existingRoles = await this.count();

      if (existingRoles > 0) {
        throw new AlreadySeededException("Roles already seeded");
      }

      await this.save(this.roles);
    } catch (error) {
      if (error instanceof AlreadySeededException) {
        throw error;
      }
      throw new SeederException("Error running role seeder");
    }
  }
}
