import { ICreateMaintenanceType, IMaintenanceType, IUpdateMaintenanceType } from "../../../domain/entities/maintenanceType/IMaintenanceType";
import { IMaintenanceTypeRepository } from "../../../domain/entities/maintenanceType/IMaintenanceTypeRepository";
import { IMaintenanceTypeService } from "../../../domain/entities/maintenanceType/IMaintenanceTypeService";

export class MaintenanceTypeService implements IMaintenanceTypeService {
  constructor(private readonly maintenanceTypeRepository: IMaintenanceTypeRepository) {}

  async createMaintenanceType(maintenanceType: ICreateMaintenanceType): Promise<void> {
    try {
      await this.maintenanceTypeRepository.save(maintenanceType);
    } catch (error) {
      throw error;
    }
  }

  async getAllMaintenanceTypes(): Promise<IMaintenanceType[]> {
    try {
      return await this.maintenanceTypeRepository.getAll();
    } catch (error) {
      throw error;
    }
  }

  async updateMaintenanceType(id: number, maintenanceType: IUpdateMaintenanceType): Promise<void> {
    try {
      await this.maintenanceTypeRepository.update(id, maintenanceType);
    } catch (error) {
      throw error;
    }
  }
}
