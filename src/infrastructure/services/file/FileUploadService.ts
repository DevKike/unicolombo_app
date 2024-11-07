import path from "path";
import * as fs from "fs";
import { IFileUploadService } from "../../../domain/entities/file/IFIleUploadService";
import { IFile } from "../../../domain/entities/file/IFile";
import { FileType } from "../../../domain/enums/file/FileType";

export class FileUploadService implements IFileUploadService {
  private readonly baseUploadPath = path.join(__dirname, "../../uploads");

  async uploadFile(file: IFile, fileType: FileType): Promise<string> {
    const directoryPath = path.join(this.baseUploadPath, fileType);
    const filePath = path.join(this.baseUploadPath, fileType, file.name);

    try {
      if (!fs.existsSync(directoryPath)) {
        fs.mkdirSync(directoryPath, { recursive: true });
      }

      await file.mv(filePath);

      const encodedFileName = encodeURIComponent(file.name);
      return `/uploads/${fileType}/${encodedFileName}`;
    } catch (error) {
      throw error;
    }
  }
}
