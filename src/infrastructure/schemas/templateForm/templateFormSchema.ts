import Joi from "joi";

const code = Joi.number();
const name = Joi.string();
const description = Joi.string();
const path = Joi.string();
const extension = Joi.string();
const stageId = Joi.number();

export const saveTemplateFormSchema = Joi.object({
  code: code.required(),
  name: name.required(),
  description: description,
  path: path.required(),
  extension: extension.required(),
  stage: stageId.required(),
});
