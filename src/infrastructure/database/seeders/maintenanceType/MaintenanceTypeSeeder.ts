import { DataSource, Repository } from "typeorm";
import { ISeeder } from "../interfaces/ISeeder";
import { MaintenanceType } from "../../entities/MaintenanceType";
import { SeederException } from "../../../../domain/exceptions/SeederException";
import { ICreateMaintenanceType } from "../../../../domain/entities/maintenanceType/IMaintenanceType";
import { MaintenanceTypeEnum } from "../../../../domain/enums/maintenanceType/MaintenanceType";
import { AlreadySeededException } from "../../../../domain/exceptions/AlreadySeededException";

export class MaintenanceTypeSeeder implements ISeeder {
  private readonly maintenanceTypeRepository: Repository<MaintenanceType>;
  private readonly maintenanceTypes: ICreateMaintenanceType[] = [
    {
      name: MaintenanceTypeEnum.CORRECTIVE,
      description:
        "Set of activities that must be carried out when a piece of equipment, instrument or structure has had a forced and unforeseen stoppage",
    },
    {
      name: MaintenanceTypeEnum.PREVENTIVE,
      description:
        "Set of activities that are carried out in a piece of equipment, instrument or structure, with the purpose that it operates at its maximum work efficiency, avoiding forced or unforeseen stops",
    },
  ];

  constructor(private readonly dataSource: DataSource) {
    this.maintenanceTypeRepository = dataSource.getRepository(MaintenanceType);
  }

  async count(): Promise<number> {
    try {
      return await this.maintenanceTypeRepository.count();
    } catch (error) {
      throw new SeederException("Error counting maintenance types");
    }
  }

  async save(data: any[]): Promise<void> {
    try {
      await this.maintenanceTypeRepository.save(data);
    } catch (error) {
      throw new SeederException("Error saving maintenances types");
    }
  }

  async run(): Promise<void> {
    try {
      const existingMaintenanceTypes = await this.count();
      if (existingMaintenanceTypes > 0) {
        throw new AlreadySeededException("Maintenances types already seeded");
      }

      await this.save(this.maintenanceTypes);
    } catch (error) {
      throw new SeederException("Error running maintenances types seeder");
    }
  }
}
