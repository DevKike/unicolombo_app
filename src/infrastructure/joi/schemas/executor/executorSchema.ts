import Joi from "joi";
import { ExecutorStatus } from "../../../../domain/enums/executors/ExecutorStatus";

const status = Joi.valid(
  ExecutorStatus.ASSIGNED,
  ExecutorStatus.CANCELLED,
  ExecutorStatus.COMPLETED,
  ExecutorStatus.FAILED,
  ExecutorStatus.IN_PROGRESS,
  ExecutorStatus.ON_HOLD,
  ExecutorStatus.PENDING_CONFIRMATION,
  ExecutorStatus.REASSIGNED
);
const comments = Joi.string();
const actorId = Joi.number();
const executionId = Joi.number();

export const createExecutorSchema = Joi.object({
  status: status,
  comments: comments,
  actor: actorId.required(),
  execution: executionId.required(),
});

export const updateExecutorSchema = Joi.object({
  status: status,
  comments: comments,
  actor: actorId,
  execution: executionId,
});