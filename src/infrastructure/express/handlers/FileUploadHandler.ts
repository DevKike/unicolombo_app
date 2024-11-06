import { Request } from "express";

export class FileUploadHandler {
  static buildFileUrl(path: string, req: Request): string {
    return `${req.protocol}://${req.headers.host}/public${path}`;
  }
}
