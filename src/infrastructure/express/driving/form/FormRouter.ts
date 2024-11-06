import { Router } from "express";
import { IRouterModule } from "../../interfaces/IRouterModule";
import { IFormUseCase } from "../../../../domain/entities/form/IFormUseCase";
import { ResponseModel } from "../../response/ResponseModel";
import { HttpStatusCode } from "../../../../domain/enums/http/HttpStatusCode";
import { Message } from "../../../../domain/enums/message/Message";
import fileUpload, { UploadedFile } from "express-fileupload";
import path from "path";

export class FormRouter implements IRouterModule {
  private readonly formRouter: Router;

  constructor(private readonly formUseCase: IFormUseCase) {
    this.formRouter = Router();
    this.initRoutes();
  }

  initRoutes(): void {
    this.formRouter.post("/upload", async (req, res) => {
      if (!req.files || !req.files.file) {
        return res.status(400).send("No file uploaded");
      }

      const file = req.files.file as UploadedFile;
      const uploadPath = path.join(__dirname, "../../../uploads", file.name);

      try {
        file.mv(uploadPath, (err) => {
          res.send("File uploaded successfully");
        });
      } catch (error) {
        throw error;
      }

     
      /* await ResponseModel.manageResponse(this.formUseCase.saveForm(req.body), res, HttpStatusCode.CREATED, Message.FORM_SAVED_SUCCESSFULLY); */
    });
  }

  getRouter(): Router {
    return this.formRouter;
  }
}
