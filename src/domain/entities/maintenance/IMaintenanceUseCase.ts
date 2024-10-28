import { ICreateMaintenance, IMaintenance, IUpdateMaintenance } from "./IMaintenance";

export interface IMaintenanceUseCase {
  createMaintenance(maintenance: ICreateMaintenance, departmentId: number): Promise<void>;
  getAllMaintenances(): Promise<IMaintenance[]>;
  getMaintenanceById(id: number): Promise<IMaintenance | null>;
  updateMaintenanceById(id: number, maintenance: IUpdateMaintenance): Promise<void>;
}