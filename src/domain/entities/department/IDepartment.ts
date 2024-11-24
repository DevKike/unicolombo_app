import { DepartmentStatus } from "../../enums/department/DepartmentStatus";
import { IActor } from "../actor/IActor";
import { IDeptMaintTypeAssignment } from "../deptMaintTypeAssignment/IDeptMaintTypeAssignment";

export interface IDepartment {
  id: number;
  name: string;
  description?: string;
  phoneNumber?: string;
  createdAt: Date;
  updatedAt: Date;
  status?: DepartmentStatus;
  coordinator: IActor | null;
  actors: IActor[];
  deptMaintTypeAssignments: IDeptMaintTypeAssignment[];
}

export interface ICreateDepartment extends Omit<IDepartment, "id" | "createdAt" | "updatedAt" | "actors" | "deptMaintTypeAssignments"> {}

export interface IUpdateDepartment extends Partial<Omit<IDepartment, "id" | "createdAt" | "updatedAt" | "actors" | "deptMaintTypeAssignments">> {}