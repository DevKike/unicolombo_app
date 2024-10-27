import { DepartmentStatus } from "../../enums/department/DepartmentStatus";
import { IActor } from "../actor/IActor";
import { IDepartmentMaintenanceTypeAssignment } from "../departmentMaintenanceTypeAssignment/IDepartmentMaintenanceTypeAssignment";

export interface IDepartment {
  id: number;
  name: string;
  description?: string;
  phoneNumber?: string;
  createdAt: Date;
  updatedAt: Date;
  status?: DepartmentStatus;
  coordinator: IActor;
  actors: IActor[];
  departmentMaintenanceTypeAssignments: IDepartmentMaintenanceTypeAssignment[];
}

export interface ICreateDepartment extends Omit<IDepartment, "id" | "createdAt" | "updatedAt" | "actors" | "departmentMaintenanceTypeAssignments"> {}

export interface IUpdateDepartment extends Partial<Omit<IDepartment, "id" | "createdAt" | "updatedAt" | "actors" | "departmentMaintenanceTypeAssignments">> {}