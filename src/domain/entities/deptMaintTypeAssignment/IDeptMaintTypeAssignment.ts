
import { DeptMaintTypeAssignmentStatus } from "../../enums/DeptMaintTypeAssignmentStatus/DeptMaintTypeAssignmentStatus";
import { IDepartment } from "../department/IDepartment";
import { IMaintenance } from "../maintenance/IMaintenance";
import { IMaintenanceType } from "../maintenanceType/IMaintenanceType";

export interface IDeptMaintTypeAssignment {
  id: number;
  assignedAt: Date;
  updatedAt: Date;
  status?: DeptMaintTypeAssignmentStatus;
  priority?: number;
  comments?: string;
  department: IDepartment;
  maintenanceType: IMaintenanceType;
  maintenances: IMaintenance[];
}

export interface ICreateDeptMaintTypeAssignment extends Omit<IDeptMaintTypeAssignment, "id" | "assignedAt" | "updatedAt" | "maintenances"> {}

export interface IUpdateDeptMaintTypeAssignment extends Partial<Omit<IDeptMaintTypeAssignment, "id" | "assignedAt" | "updatedAt" | "maintenances">> {}
