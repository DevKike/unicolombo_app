import { IFileUpload } from "../../../domain/entities/fileUpload/IFileUpload";
import { IFileUploadService } from "../../../domain/entities/fileUpload/IFIleUploadService";
import { IFileUploadUseCase } from "../../../domain/entities/fileUpload/IFileUploadUseCase";
import { AllowedFileExtensions } from "../../../domain/enums/file/AllowedFileExtensions";
import { FileType } from "../../../domain/enums/file/FileType";
import { Message } from "../../../domain/enums/message/Message";
import { InvalidFileTypeException } from "../../../domain/exceptions/InvalidFileTypeException";
import { NotFileExtensionAllowed } from "../../../domain/exceptions/NotFileExtensionAllowed";
import { parseFileName } from "../../../infrastructure/helpers/parseFileName";

export class FileUploadUseCase implements IFileUploadUseCase {
  constructor(private readonly fileUploadService: IFileUploadService) {}

  async uploadFile(file: IFileUpload, fileType: FileType): Promise<string> {
    try {
      const parsedFile = parseFileName(file.name);
      const fileExtension = parsedFile?.extension;

      if (
        fileExtension !== AllowedFileExtensions.PDF &&
        fileExtension !== AllowedFileExtensions.DOC &&
        fileExtension !== AllowedFileExtensions.DOCX &&
        fileExtension !== AllowedFileExtensions.EXCEL
      ) {
        throw new NotFileExtensionAllowed(Message.NOT_FILE_EXTENSION_ALLOWED);
      }

      if (fileType !== FileType.TEMPLATE && fileType !== FileType.COMPLETED) {
        throw new InvalidFileTypeException(Message.INVALID_FILE_TYPE);
      }

      return await this.fileUploadService.uploadFile(file, fileType);
    } catch (error) {
      throw error;
    }
  }
}
