import { Message } from "../../domain/enums/message/Message";
import { InvalidFileFormatException } from "../../domain/exceptions/InvalidFileFormatException";

export const parseFileName = (filePath: string) => {
  const encodedFileName = filePath.split("/").pop();

  if (!encodedFileName) return null;

  const fileName = decodeURIComponent(encodedFileName);
  const regex = /^([\w-]+)\s(.+)(\.\w+)$/;

  if (!regex.test(fileName)) {
    throw new InvalidFileFormatException(Message.INVALID_FILE_FORMAT);
  }

  const match = fileName.match(regex);
  return match ? { code: match[1], name: match[2], extension: match[3] } : null;
};
