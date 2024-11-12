import { IFileUpload } from "./IFileUpload";
import { FileType } from "../../enums/file/FileType";

export interface IFileUploadService {
  uploadFile(file: IFileUpload, fileType: FileType): Promise<string>;
}
