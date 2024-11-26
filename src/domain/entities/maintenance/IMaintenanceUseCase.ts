import { IJwtPayload } from "../../../infrastructure/jwt/interfaces/IJwtPayload";
import { ICreateCompletedForm } from "../completedForm/ICompletedForm";
import { ICreateMaintenance, IMaintenance, IUpdateMaintenance } from "./IMaintenance";

export interface IMaintenanceUseCase {
  createMaintenance(maintenance: ICreateMaintenance): Promise<IMaintenance>;
  createPreventiveMaintenance(authActor: IJwtPayload, maintenance: ICreateMaintenance, completedForm: ICreateCompletedForm): Promise<void>;
  getAllMaintenances(): Promise<IMaintenance[]>;
  getPreventiveMaintenancesByDepartment(): Promise<IMaintenance[]>;
  getMaintenanceById(id: number): Promise<IMaintenance | null>;
  updateMaintenanceById(id: number, maintenance: IUpdateMaintenance): Promise<void>;
}