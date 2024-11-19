import Joi from "joi";
import { DeptMaintTypeAssignmentStatus } from "../../../../domain/enums/DeptMaintTypeAssignment/DeptMaintTypeAssignmentStatus";


const status = Joi.string().valid(
  DeptMaintTypeAssignmentStatus.ACTIVE,
  DeptMaintTypeAssignmentStatus.INACTIVE,
  DeptMaintTypeAssignmentStatus.EXPIRED,
  DeptMaintTypeAssignmentStatus.PENDING_APPROVAL,
  DeptMaintTypeAssignmentStatus.REJECTED
);
const priority = Joi.number();
const comments = Joi.string();
const departmentId = Joi.number();
const maintenanceTypeId = Joi.number();

export const createDeptMaintTypeAssignmentSchema = Joi.object({
  status: status,
  priority: priority,
  comments: comments,
  department: departmentId.required(),
  maintenanceType: maintenanceTypeId.required(),
});

export const updateDeptMaintTypeAssignmentSchema = Joi.object({
  status: status,
  priority: priority,
  comments: comments,
  department: departmentId,
  maintenanceType: maintenanceTypeId,
});