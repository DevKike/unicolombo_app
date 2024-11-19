import Joi from "joi";
import { ExecutionStatus } from "../../../domain/enums/execution/ExecutionStatus";

const status = Joi.valid(
  ExecutionStatus.CANCELED,
  ExecutionStatus.COMPLETED,
  ExecutionStatus.FAILED,
  ExecutionStatus.IN_PROGRESS,
  ExecutionStatus.ON_HOLD,
  ExecutionStatus.PENDING
);

const description = Joi.string();
const endedAt = Joi.date();
const maintenanceId = Joi.number();
const stageId = Joi.number();

export const createExecutionSchema = Joi.object({
  status: status,
  description: description,
  maintenance: maintenanceId.required(),
  stage: stageId.required(),
});

export const updateExecutionSchema = Joi.object({
  status: status,
  description: description,
  endedAt: endedAt,
  maintenance: maintenanceId,
  stage: stageId,
});
