import { ICreateMaintenance, IMaintenance, IUpdateMaintenance } from "../../../domain/entities/maintenance/IMaintenance";
import { IMaintenanceRepository } from "../../../domain/entities/maintenance/IMaintenanceRepository";
import { IMaintenanceService } from "../../../domain/entities/maintenance/IMaintenanceService";
import { MaintenanceTypeEnum } from "../../../domain/enums/maintenanceType/MaintenanceType";

export class MaintenanceService implements IMaintenanceService {
  constructor(private readonly maintenanceRepository: IMaintenanceRepository) {}

  async createMaintenance(maintenance: ICreateMaintenance): Promise<IMaintenance> {
    try {
      return await this.maintenanceRepository.save(maintenance);
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

  async getPreventiveMaintenancesByDepartment(departmentId: number): Promise<IMaintenance[]> {
    try {
      return await this.maintenanceRepository.getByDepartmentAndMaintenanceType(departmentId, MaintenanceTypeEnum.PREVENTIVE);
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
