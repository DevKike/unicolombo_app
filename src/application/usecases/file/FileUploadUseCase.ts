import { IFile } from "../../../domain/entities/file/IFile";
import { IFileUploadService } from "../../../domain/entities/file/IFIleUploadService";
import { IFileUploadUseCase } from "../../../domain/entities/file/IFileUploadUseCase";
import { FileType } from "../../../domain/types/file/FileType";


export class FileUploadUseCase implements IFileUploadUseCase {
  constructor(private readonly fileUploadService: IFileUploadService) {}

  async uploadFile(file: IFile, fileType: FileType): Promise<string> {
    try {
      return await this.fileUploadService.uploadFile(file, fileType);
    } catch (error) {
      throw error;
    }
  }
}
