import { DataSource, Repository } from "typeorm";
import { IMaintenanceTypeRepository } from "../../../domain/entities/maintenanceType/IMaintenanceTypeRepository";
import { MaintenanceType } from "../../database/entities/MaintenanceType";
import { ICreateMaintenanceType, IMaintenanceType, IUpdateMaintenanceType } from "../../../domain/entities/maintenanceType/IMaintenanceType";

export class MaintenanceTypeRepository implements IMaintenanceTypeRepository {
  private readonly maintenanceTypeRepository: Repository<MaintenanceType>;

  constructor(private readonly dataSource: DataSource) {
    this.maintenanceTypeRepository = this.dataSource.getRepository(MaintenanceType);
  }

  async save(maintenanceType: ICreateMaintenanceType): Promise<void> {
    try {
      await this.maintenanceTypeRepository.save(maintenanceType);
    } catch (error) {
      throw error;
    }
  }

  async getAll(): Promise<IMaintenanceType[]> {
    try {
      return await this.maintenanceTypeRepository.find();
    } catch (error) {
      throw error;
    }
  }

  async update(id: number, maintenanceType: IUpdateMaintenanceType): Promise<void> {
    try {
      await this.maintenanceTypeRepository.update(id, maintenanceType);
    } catch (error) {
      throw error;
    }
  }
}
