import path from "path";
import * as fs from "fs";
import { IFileUploadService } from "../../../domain/entities/fileUpload/IFIleUploadService";

import { FileType } from "../../../domain/enums/file/FileType";
import { IFileUpload } from "../../../domain/entities/fileUpload/IFileUpload";

export class FileUploadService implements IFileUploadService {
  private readonly baseUploadPath = path.join(__dirname, "../../uploads");

  async uploadFile(file: IFileUpload, fileType: FileType): Promise<string> {
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
