import Joi from "joi";
import { MaintenanceStatus } from "../../../domain/enums/maintenance/MaintenanceStatus";
import { MaintenanceType } from "../../../domain/enums/maintenanceType/MaintenanceType";

const name = Joi.string();
const description = Joi.string();
const status = Joi.string()
  .valid(
    MaintenanceStatus.APPROVED,
    MaintenanceStatus.ASSIGNED,
    MaintenanceStatus.CANCELED,
    MaintenanceStatus.CLOSED,
    MaintenanceStatus.COMPLETED,
    MaintenanceStatus.COMPLETED,
    MaintenanceStatus.IN_PROGRESS,
    MaintenanceStatus.PAUSED,
    MaintenanceStatus.REJECTED,
    MaintenanceStatus.REQUESTED,
    MaintenanceStatus.UNDER_EVALUATION
  )
  .empty("")
  .default(null);

const maintenanceType = Joi.string().valid(MaintenanceType.CORRECTIVE, MaintenanceType.PREVENTIVE);
const departmentId = Joi.number();

export const createMaintenanceSchema = Joi.object({
  name: name.required(),
  description: description.required(),
  status: status,
  maintenanceType: maintenanceType.required(),
});

export const updateMaintenanceSchema = Joi.object({
  name: name,
  description: description,
  status: status,
  maintenanceType: maintenanceType,
  department: departmentId,
});
