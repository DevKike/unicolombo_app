import { MaintenanceStatus } from "../../enums/maintenance/MaintenanceStatus";
import { ICreateCompletedForm } from "../completedForm/ICompletedForm";
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

export interface ICreateMaintenance extends Omit<IMaintenance, "id" | "createdAt" | "updatedAt" | "executions"> {}

export interface IUpdateMaintenance extends Partial<Omit<IMaintenance, "id" | "createdAt" | "updatedAt" | "executions">> {}

export interface IUpdateMaintenanceWithStage {
  maintenance: IUpdateMaintenance;
  stage: number;
  completedForm: ICreateCompletedForm;
}