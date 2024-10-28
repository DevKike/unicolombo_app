import { IDeptMaintTypeAssignment } from "../deptMaintTypeAssignment/IDeptMaintTypeAssignment";

export interface IMaintenanceType {
  id: number;
  name: string;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
  deptMaintTypeAssignments: IDeptMaintTypeAssignment[];
}

export interface ICreateMaintenanceType extends Omit<IMaintenanceType, "id" | "createdAt" | "updatedAt" | "deptMaintTypeAssignments"> {}

export interface IUpdateMaintenanceType extends Partial<Omit<IMaintenanceType, "id" | "createdAt" | "updatedAt" | "deptMaintTypeAssignments">> {}