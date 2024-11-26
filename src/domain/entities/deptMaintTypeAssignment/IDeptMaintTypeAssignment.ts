
import { DeptMaintTypeAssignmentStatus } from "../../enums/DeptMaintTypeAssignment/DeptMaintTypeAssignmentStatus";
import { IDepartment } from "../department/IDepartment";
import { IMaintenance } from "../maintenance/IMaintenance";
import { IMaintenanceType } from "../maintenanceType/IMaintenanceType";
import { IStage } from "../stage/IStage";

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
  stages: IStage[];
}

export interface ICreateDeptMaintTypeAssignment extends Omit<IDeptMaintTypeAssignment, "id" | "assignedAt" | "updatedAt" | "maintenances" | "stages"> {}

export interface IUpdateDeptMaintTypeAssignment extends Partial<Omit<IDeptMaintTypeAssignment, "id" | "assignedAt" | "updatedAt" | "maintenances" | "stages">> {}
