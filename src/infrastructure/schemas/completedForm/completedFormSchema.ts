import Joi from "joi";

const description = Joi.string();
const filePath = Joi.string();
const templateFormId = Joi.number();

export const createCompletedFormSchema = Joi.object({
  description: description,
  filePath: filePath.required(),
  templateForm: templateFormId.required(),
});

export const updateCompletedFormSchema = Joi.object({
  description: description,
  filePath: filePath,
  templateForm: templateFormId,
});
