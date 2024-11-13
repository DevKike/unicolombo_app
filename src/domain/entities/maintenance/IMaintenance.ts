import { MaintenanceStatus } from "../../enums/maintenance/MaintenanceStatus";
import { IDeptMaintTypeAssignment } from "../deptMaintTypeAssignment/IDeptMaintTypeAssignment";
import { IExecution } from "../execution/IExecution";

export interface IMaintenance {
  id: number;
  name: string;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
  status?: MaintenanceStatus;
  deptMaintTypeAssignment: IDeptMaintTypeAssignment;
  executions: IExecution[];
}

export interface ICreateMaintenance extends Omit<IMaintenance, "id" | "createdAt" | "updatedAt"> {}

export interface IUpdateMaintenance extends Partial<Omit<IMaintenance, "id" | "createdAt" | "updatedAt">> {}