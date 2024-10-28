import { ICreateMaintenanceType, IMaintenanceType, IUpdateMaintenanceType } from "./IMaintenanceType";

export interface IMaintenanceTypeRepository {
  save(maintenanceType: ICreateMaintenanceType): Promise<void>;
  getAll(): Promise<IMaintenanceType[]>;
  update(id: number, maintenanceType: IUpdateMaintenanceType): Promise<void>;
}
