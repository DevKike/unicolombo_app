import { IJwtPayload } from "../../../infrastructure/jwt/interfaces/IJwtPayload";
import { ICreateCompletedForm } from "../completedForm/ICompletedForm";
import { ICreateMaintenance, IMaintenance, IUpdateMaintenance, IUpdateMaintenanceWithStage } from "./IMaintenance";

export interface IMaintenanceUseCase {
  createMaintenance(maintenance: ICreateMaintenance): Promise<IMaintenance>;
  createPreventiveMaintenance(authActor: IJwtPayload, maintenance: ICreateMaintenance, completedForm: ICreateCompletedForm): Promise<void>;
  getAllMaintenances(): Promise<IMaintenance[]>;
  getPreventiveMaintenancesByDepartment(departmentId: number): Promise<IMaintenance[]>;
  getMaintenanceById(id: number): Promise<IMaintenance | null>;
  updatePreventiveMaintenanceWithStage(maintenanceId: number, authActor: IJwtPayload, data: IUpdateMaintenanceWithStage): Promise<void>;
  updateMaintenanceById(id: number, maintenance: IUpdateMaintenance): Promise<void>;
}