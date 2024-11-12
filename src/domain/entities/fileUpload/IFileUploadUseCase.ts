import { FileType } from "../../enums/file/FileType";
import { IFileUpload } from "./IFileUpload";

export interface IFileUploadUseCase {
  uploadFile(file: IFileUpload, fileType: FileType): Promise<string>;
}
