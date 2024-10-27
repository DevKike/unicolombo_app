import Joi from "joi";
import { DepartmentMaintenanceTypeAssignmentStatus } from "../../../domain/enums/DepartmentMaintenanceTypeAssignmentStatus/DepartmentMaintenanceTypeAssignmentStatus";

const status = Joi.string().valid(
  DepartmentMaintenanceTypeAssignmentStatus.ACTIVE,
  DepartmentMaintenanceTypeAssignmentStatus.INACTIVE,
  DepartmentMaintenanceTypeAssignmentStatus.EXPIRED,
  DepartmentMaintenanceTypeAssignmentStatus.PENDING_APPROVAL,
  DepartmentMaintenanceTypeAssignmentStatus.REJECTED
);
const priority = Joi.number();
const comments = Joi.string();
const departmentId = Joi.number();
const maintenanceTypeId = Joi.number();

export const createDepartmentMaintenanceTypeAssignmentSchema = Joi.object({
  status: status,
  priority: priority,
  comments: comments,
  department: departmentId.required(),
  maintenanceType: maintenanceTypeId.required(),
});
