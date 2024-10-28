import { ICreateMaintenance, IMaintenance, IUpdateMaintenance } from "../../../domain/entities/maintenance/IMaintenance";
import { IMaintenanceRepository } from "../../../domain/entities/maintenance/IMaintenanceRepository";
import { IMaintenanceService } from "../../../domain/entities/maintenance/IMaintenanceService";

export class MaintenanceService implements IMaintenanceService {
  constructor(private readonly maintenanceRepository: IMaintenanceRepository) {}

  async createMaintenance(maintenance: ICreateMaintenance, department_id: number): Promise<void> {
    try {
      const newMaintenance = { ...maintenance, department_id };
      await this.maintenanceRepository.save(newMaintenance);
    } catch (error) {
      throw error;
    }
  }

  async getAllMaintenances(): Promise<IMaintenance[]> {
    try {
      return await this.maintenanceRepository.getAll();
    } catch (error) {
      throw error;
    }
  }

  async getMaintenanceById(id: number): Promise<IMaintenance | null> {
    try {
      return await this.maintenanceRepository.getOneById(id);
    } catch (error) {
      throw error;
    }
  }

  async updateMaintenanceById(id: number, maintenance: IUpdateMaintenance): Promise<void> {
    try {
      await this.maintenanceRepository.updateById(id, maintenance);
    } catch (error) {
      throw error;
    }
  }
}
