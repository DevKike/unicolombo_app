
import { DepartmentMaintenanceTypeAssignmentStatus } from "../../enums/DepartmentMaintenanceTypeAssignmentStatus/DepartmentMaintenanceTypeAssignmentStatus";
import { IDepartment } from "../department/IDepartment";
import { IMaintenance } from "../maintenance/IMaintenance";
import { IMaintenanceType } from "../maintenanceType/IMaintenanceType";

export interface IDepartmentMaintenanceTypeAssignment {
  id: number;
  assignedAt: Date;
  updatedAt: Date;
  status?: DepartmentMaintenanceTypeAssignmentStatus;
  priority?: number;
  comments?: string;
  department: IDepartment;
  maintenanceType: IMaintenanceType;
  maintenances: IMaintenance[];
}

export interface ICreateDepartmentMaintenanceTypeAssignment extends Omit<IDepartmentMaintenanceTypeAssignment, "id" | "assignedAt" | "updatedAt" | "maintenances"> {}
