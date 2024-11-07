import { IFileUpload } from "../../../domain/entities/fileUpload/IFileUpload";
import { IFileUploadService } from "../../../domain/entities/fileUpload/IFIleUploadService";
import { IFileUploadUseCase } from "../../../domain/entities/fileUpload/IFileUploadUseCase";
import { FileType } from "../../../domain/enums/file/FileType";
import { Message } from "../../../domain/enums/message/Message";
import { InvalidFileTypeException } from "../../../domain/exceptions/InvalidFileTypeException";

export class FileUploadUseCase implements IFileUploadUseCase {
  constructor(private readonly fileUploadService: IFileUploadService) {}

  async uploadFile(file: IFileUpload, fileType: FileType): Promise<string> {
    try {
      if (fileType !== FileType.TEMPLATE && fileType !== FileType.COMPLETED) {
        throw new InvalidFileTypeException(Message.INVALID_FILE_TYPE);
      }

      return await this.fileUploadService.uploadFile(file, fileType);
    } catch (error) {
      throw error;
    }
  }
}
