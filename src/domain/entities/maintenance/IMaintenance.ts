import { MaintenanceStatus } from "../../enums/maintenance/MaintenanceStatus";
import { IDepartmentMaintenanceTypeAssignment } from "../departmentMaintenanceTypeAssignment/IDepartmentMaintenanceTypeAssignment";

export interface IMaintenance {
  id: number;
  name: string;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
  status?: MaintenanceStatus;
  departmentMaintenanceTypeAssignment: IDepartmentMaintenanceTypeAssignment;
}

export interface ICreateMaintenance extends Omit<IMaintenance, "id" | "createdAt" | "updatedAt"> {}

export interface IUpdateMaintenance extends Partial<Omit<IMaintenance, "id" | "createdAt" | "updatedAt">> {}