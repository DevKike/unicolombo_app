import { ICreateMaintenance, IMaintenance, IUpdateMaintenance } from "./IMaintenance";

export interface IMaintenanceService {
  createMaintenance(maintenance: ICreateMaintenance): Promise<void>;
  getAllMaintenances(): Promise<IMaintenance[]>;
  getMaintenanceById(id: number): Promise<IMaintenance | null>;
  updateMaintenanceById(id: number, maintenance: IUpdateMaintenance): Promise<void>;
}