import { ICreateMaintenanceType, IMaintenanceType, IUpdateMaintenanceType } from "./IMaintenanceType";

export interface IMaintenanceTypeService {
  createMaintenanceType(maintenanceType: ICreateMaintenanceType): Promise<void>;
  getAllMaintenanceTypes(): Promise<IMaintenanceType[]>;
  updateMaintenanceType(id: number, maintenanceType: IUpdateMaintenanceType): Promise<void>;
}
