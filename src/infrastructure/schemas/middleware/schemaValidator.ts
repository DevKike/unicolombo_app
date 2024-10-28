import { Request, Response } from "express";
import { HttpStatusCode } from "../../../domain/enums/http/HttpStatusCode";
import Joi from "joi";

export const schemaValidator =
  (schema: Joi.ObjectSchema) =>
  (req: Request, res: Response): any => {
    const { error } = schema.validate(req.body, { abortEarly: false });

    if (error) {
      const errors = error.details.map((detail) => detail.message);
      return res.status(HttpStatusCode.BAD_REQUEST).json({ errors });
    } else {
      throw error;
    }
  };
