import Joi from "joi";

const name = Joi.string();
const description = Joi.string();
const order = Joi.number();
const deptMaintTypeAssignmentId = Joi.number();

export const createStageSchema = Joi.object({
  name: name.required(),
  description: description.required(),
  order: order.required(),
  deptMaintTypeAssignment: deptMaintTypeAssignmentId.required(),
});

export const updateStageSchema = Joi.object({
  name: name,
  description: description,
  order: order,
  deptMaintTypeAssignment: deptMaintTypeAssignmentId,
});
