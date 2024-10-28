import { IMaintenance } from "../../../domain/entities/maintenance/IMaintenance";
import { IMaintenanceService } from "../../../domain/entities/maintenance/IMaintenanceService";
import { IMaintenanceUseCase } from "../../../domain/entities/maintenance/IMaintenanceUseCase";

export class MaintenanceUseCase implements IMaintenanceUseCase {
  constructor(private readonly maintenanceService: IMaintenanceService) {}

  async createMaintenance(maintenance: IMaintenance, departmentId: number): Promise<void> {
    try {
      await this.maintenanceService.createMaintenance(maintenance, departmentId);
    } catch (error) {
      throw error;
    }
  }

  async getAllMaintenances(): Promise<IMaintenance[]> {
    try {
      return await this.maintenanceService.getAllMaintenances();
    } catch (error) {
      throw error;
    }
  }

  async getMaintenanceById(id: number): Promise<IMaintenance | null> {
    try {
      return await this.maintenanceService.getMaintenanceById(id);
    } catch (error) {
      throw error;
    }
  }

  async updateMaintenanceById(id: number, maintenance: IMaintenance): Promise<void> {
    try {
      await this.maintenanceService.updateMaintenanceById(id, maintenance);
    } catch (error) {
      throw error;
    }
  }
}
