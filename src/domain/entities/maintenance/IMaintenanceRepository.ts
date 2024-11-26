import { ICreateMaintenance, IMaintenance, IUpdateMaintenance } from "./IMaintenance";

export interface IMaintenanceRepository {
  save(maintenance: ICreateMaintenance): Promise<IMaintenance>;
  getAll(): Promise<IMaintenance[]>;
  getByDepartmentId(departmentId: number): Promise<IMaintenance[]>;
  getOneById(id: number): Promise<IMaintenance | null>;
  updateById(id: number, maintenance: IUpdateMaintenance): Promise<void>;
}