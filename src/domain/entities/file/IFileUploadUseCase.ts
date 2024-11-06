import { FileType } from "../../types/file/FileType";
import { IFile } from "./IFile";

export interface IFileUploadUseCase {
  uploadFile(file: IFile, fileType: FileType): Promise<string>;
}
