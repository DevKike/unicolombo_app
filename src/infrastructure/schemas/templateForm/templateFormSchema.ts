import Joi from "joi";

const filePath = Joi.string();
const stageId = Joi.number();

export const saveTemplateFormSchema = Joi.object({
  filePath: filePath.required(),
  stage: stageId.required(),
});
