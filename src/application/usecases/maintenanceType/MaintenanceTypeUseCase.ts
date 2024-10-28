import { ICreateMaintenanceType, IMaintenanceType, IUpdateMaintenanceType } from "../../../domain/entities/maintenanceType/IMaintenanceType";
import { IMaintenanceTypeService } from "../../../domain/entities/maintenanceType/IMaintenanceTypeService";
import { IMaintenanceTypeUseCase } from "../../../domain/entities/maintenanceType/IMaintenanceTypeUseCase";
import { Message } from "../../../domain/enums/message/Message";
import { NotFoundException } from "../../../domain/exceptions/NotFoundException";

export class MaintenanceTypeUseCase implements IMaintenanceTypeUseCase {
  constructor(private readonly maintenanceTypeService: IMaintenanceTypeService) {}

  async createMaintenanceType(maintenanceType: ICreateMaintenanceType): Promise<void> {
    try {
      await this.maintenanceTypeService.createMaintenanceType(maintenanceType);
    } catch (error) {
      throw error;
    }
  }

  async getAllMaintenanceTypes(): Promise<IMaintenanceType[]> {
    try {
      const maintenanceTypes = await this.maintenanceTypeService.getAllMaintenanceTypes();

      if (!maintenanceTypes || maintenanceTypes.length === 0) {
        throw new NotFoundException(Message.NOT_MAINTENANCE_TYPES_FOUND);
      }

      return maintenanceTypes;
    } catch (error) {
      throw error;
    }
  }

  async updateMaintenanceType(id: number, maintenanceType: IUpdateMaintenanceType): Promise<void> {
    try {
      await this.maintenanceTypeService.updateMaintenanceType(id, maintenanceType);
    } catch (error) {
      throw error;
    }
  }
}
