import { Router } from "express";
import { IRouterModule } from "../../interfaces/IRouterModule";
import { ResponseModel } from "../../response/ResponseModel";
import { HttpStatusCode } from "../../../../domain/enums/http/HttpStatusCode";
import { Message } from "../../../../domain/enums/message/Message";
import { UploadedFile } from "express-fileupload";
import { IFileUploadUseCase } from "../../../../domain/entities/fileUpload/IFileUploadUseCase";
import { buildFileUrl } from "../../handlers/buildFileUrl";
import { FileType } from "../../../../domain/enums/file/FileType";
import { authMiddleware } from "../../middlewares/authMiddleware";

export class FileUploadRouter implements IRouterModule {
  private readonly fileUploadRouter: Router;

  constructor(private readonly fileUploadedUseCase: IFileUploadUseCase) {
    this.fileUploadRouter = Router();
    this.initRoutes();
  }

  initRoutes(): void {
    this.fileUploadRouter.post("/upload", authMiddleware(), async (req, res) => {
      await ResponseModel.manageResponse(
        this.fileUploadedUseCase
          .uploadFile(
            req.files?.file as UploadedFile,
            req.body.fileType as FileType
          )
          .then((responsePath) => buildFileUrl(responsePath, req)),
        res,
        HttpStatusCode.CREATED,
        Message.TEMPLATE_FILE_UPLOADED_SUCCESSFULLY
      );
    });
  }

  getRouter(): Router {
    return this.fileUploadRouter;
  }
}
