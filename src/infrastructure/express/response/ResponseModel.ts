import { Response } from "express";
import { HttpStatusCode } from "../../../domain/enums/http/HttpStatusCode";
import { Message } from "../../../domain/enums/message/Message";
import { NotFoundException } from "../../../domain/exceptions/NotFoundException";
import { AlreadyExistsException } from "../../../domain/exceptions/AlreadyExistsException";
import { InvalidFileFormatException } from "../../../domain/exceptions/InvalidFileFormatException";
import { InvalidFileTypeException } from "../../../domain/exceptions/InvalidFileTypeException";
import { FileType } from "../../../domain/enums/file/FileType";
import { NotFileExtensionAllowed } from "../../../domain/exceptions/NotFileExtensionAllowed";
import { AllowedFileExtensions } from "../../../domain/enums/file/AllowedFileExtensions";

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
      } else if (error instanceof InvalidFileFormatException) {
        res.status(HttpStatusCode.BAD_REQUEST).json({ error: error.message });
      } else if (error instanceof InvalidFileTypeException) {
        res.status(HttpStatusCode.BAD_REQUEST).json({
          error: error.message,
          message: `Valid formats: ['${FileType.TEMPLATE}' and '${FileType.COMPLETED}']`,
        });
      } else if (error instanceof NotFileExtensionAllowed) {
        res.status(HttpStatusCode.BAD_REQUEST).json({
          error: error.message,
          message: `Valid extensions: ['${AllowedFileExtensions.PDF}', '${AllowedFileExtensions.DOC}' and '${AllowedFileExtensions.DOCX}']`,
        });
      } else {
        console.log(error);
        res
          .status(HttpStatusCode.INTERNAL_SERVER_ERROR)
          .json({ error: Message.INTERNAL_SERVER_ERROR });
      }
    }
  }
}
