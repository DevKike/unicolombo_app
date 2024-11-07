import Joi from "joi";

const code = Joi.number();
const name = Joi.string();
const description = Joi.string();
const filePath = Joi.string();
const stageId = Joi.number();

export const saveTemplateFormSchema = Joi.object({
  code: code.required(),
  name: name.required(),
  description: description,
  filePath: filePath.required(),
  stage: stageId.required(),
});
