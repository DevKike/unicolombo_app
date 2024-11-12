import Joi from "joi";

const description = Joi.string();
const filePath = Joi.string();
const stageId = Joi.number();

export const saveTemplateFormSchema = Joi.object({
  description: description,
  filePath: filePath.required(),
  stage: stageId.required(),
});

export const updateTemplateFormSchema = Joi.object({
  description: description,
  filePath: filePath,
  stage: stageId,
});
