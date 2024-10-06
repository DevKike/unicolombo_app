import { IMaintenanceType } from "../../../domain/entities/maintenance/IMaintenance";
import { IMaintenanceTypeService } from "../../../domain/entities/maintenance/IMaintenanceService";
import { IMaintenanceTypeUseCase } from "../../../domain/entities/maintenance/IMaintenanceUseCase";

export class MaintenanceTypeUseCase implements IMaintenanceTypeUseCase {
  constructor(private readonly maintenanceTypeService: IMaintenanceTypeService) {}

  async createMaintenanceType(maintenanceType: IMaintenanceType): Promise<void> {
    try {
      await this.maintenanceTypeService.createMaintenanceType(maintenanceType);
    } catch (error) {
      throw error;
    }
  }
}
