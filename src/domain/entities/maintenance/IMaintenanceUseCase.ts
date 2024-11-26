import { ICreateCompletedForm } from "../completedForm/ICompletedForm";
import { ICreateMaintenance, IMaintenance, IUpdateMaintenance, IUpdateMaintenanceWithStage } from "./IMaintenance";

export interface IMaintenanceUseCase {
  createMaintenance(maintenance: ICreateMaintenance): Promise<IMaintenance>;
  createPreventiveMaintenance(departmentId: number, maintenance: ICreateMaintenance, completedForm: ICreateCompletedForm): Promise<void>;
  getAllMaintenances(): Promise<IMaintenance[]>;
  getPreventiveMaintenancesByDepartment(departmentId: number): Promise<IMaintenance[]>;
  getPreventiveMaintenanceById(departmentId: number, maintenanceId: number): Promise<IMaintenance | null>;
  getMaintenanceById(id: number): Promise<IMaintenance | null>;
  updatePreventiveMaintenanceWithStage(departmentId: number, maintenanceId: number, data: IUpdateMaintenanceWithStage): Promise<void>;
  updateMaintenanceById(number, maintenance: IUpdateMaintenance): Promise<void>;
}