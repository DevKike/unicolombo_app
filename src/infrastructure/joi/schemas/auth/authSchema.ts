import Joi from "joi";

const email = Joi.string()
  .email()
  .pattern(/^[a-zA-Z0-9._%+-]+@unicolombo\.edu\.co$/)
  .message("Email must be from the domain @unicolombo.edu.co");
const password = Joi.string();

export const authSchema = Joi.object({
  email: email.required(),
  password: password.required(),
});
