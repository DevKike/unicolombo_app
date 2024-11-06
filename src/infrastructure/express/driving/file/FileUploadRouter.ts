import { Request, Router } from "express";
import { IRouterModule } from "../../interfaces/IRouterModule";
import { ResponseModel } from "../../response/ResponseModel";
import { HttpStatusCode } from "../../../../domain/enums/http/HttpStatusCode";
import { Message } from "../../../../domain/enums/message/Message";
import { UploadedFile } from "express-fileupload";
import { IFileUploadUseCase } from "../../../../domain/entities/file/IFileUploadUseCase";
import { FileUploadHandler } from "../../handlers/FileUploadHandler";

export class FileUploadRouter implements IRouterModule {
  private readonly fileUploadRouter: Router;

  constructor(private readonly fileUploadedUseCase: IFileUploadUseCase) {
    this.fileUploadRouter = Router();
    this.initRoutes();
  }

  initRoutes(): void {
    this.fileUploadRouter.post("/upload-template", async (req, res) => {
      await ResponseModel.manageResponse(
        this.fileUploadedUseCase
          .uploadFile(req.files?.file as UploadedFile, "template")
          .then((responsePath) =>
            FileUploadHandler.buildFileUrl(responsePath, req)
          ),
        res,
        HttpStatusCode.CREATED,
        Message.FILE_UPLOADED_SUCCESSFULLY
      );
    });
  }

  getRouter(): Router {
    return this.fileUploadRouter;
  }
}
