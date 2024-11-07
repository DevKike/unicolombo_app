import path from "path";
import { IFileUploadService } from "../../../domain/entities/file/IFIleUploadService";
import { IFile } from "../../../domain/entities/file/IFile";
import { FileType } from "../../../domain/types/file/FileType";

export class FileUploadService implements IFileUploadService {
  private readonly baseUploadPath = path.join(__dirname, "../../uploads");

  async uploadFile(file: IFile, fileType: FileType): Promise<string> {
    // const newFileName = `${file.name}.${Date.now()}`;
    const filePath = path.join(this.baseUploadPath, fileType, file.name);
    try {
      await file.mv(filePath);
      const encodedFileName = encodeURIComponent(file.name);
      
      return `/uploads/${fileType}/${encodedFileName}`;
    } catch (error) {
      throw error;
    }
  }
}
