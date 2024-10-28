import { Response } from "express";
import { HttpStatusCode } from "../../../domain/enums/http/HttpStatusCode";
import { Message } from "../../../domain/enums/message/Message";
import { NotFoundException } from "../../../domain/exceptions/NotFoundException";
import { AlreadyExistsException } from "../../../domain/exceptions/AlreadyExistsException";

export class ResponseModel {
  static async manageResponse(
    promise: Promise<any>,
    res: Response,
    statusCode: HttpStatusCode,
    message: Message
  ): Promise<void> {
    try {
      const result = await promise;
      res.status(statusCode).json({ message: message, data: result });
    } catch (error) {
      if (error instanceof NotFoundException) {
        res.status(HttpStatusCode.NOT_FOUND).json({ error: error.message });
      } else if (error instanceof AlreadyExistsException) {
        res.status(HttpStatusCode.CONFLICT).json({ error: error.message });
      } else {
        console.log(error);
        res
          .status(HttpStatusCode.INTERNAL_SERVER_ERROR)
          .json({ error: Message.INTERNAL_SERVER_ERROR });
      }
    }
  }
}
