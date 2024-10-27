import { IDepartmentMaintenanceTypeAssignment } from "../departmentMaintenanceTypeAssignment/IDepartmentMaintenanceTypeAssignment";

export interface IMaintenanceType {
  id: number;
  name: string;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
  departmentMaintenanceTypeAssignments: IDepartmentMaintenanceTypeAssignment[];
}

export interface ICreateMaintenanceType extends Omit<IMaintenanceType, "id" | "createdAt" | "updatedAt" | "departmentMaintenanceTypeAssignments"> {}

export interface IUpdateMaintenanceType extends Partial<Omit<IMaintenanceType, "id" | "createdAt" | "updatedAt" | "departmentMaintenanceTypeAssignments">> {}
