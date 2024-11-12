import { Router } from "express";
import { IRouterModule } from "../../interfaces/IRouterModule";
import { ICompletedFormUseCase } from "../../../../domain/entities/completedForm/ICompletedFormUseCase";
import { ResponseModel } from "../../response/ResponseModel";
import { HttpStatusCode } from "../../../../domain/enums/http/HttpStatusCode";
import { Message } from "../../../../domain/enums/message/Message";
import { schemaValidator } from "../../../schemas/middleware/schemaValidator";
import { createCompletedFormSchema } from "../../../schemas/completedForm/completedFormSchema";

export class CompletedFormRouter implements IRouterModule {
  private readonly completedFormRouter: Router;

  constructor(private readonly completedFormUseCase: ICompletedFormUseCase) {
    this.completedFormRouter = Router();
    this.initRoutes();
  }

  initRoutes(): void {
    this.completedFormRouter.post("/", schemaValidator(createCompletedFormSchema),  (req, res) => {
        ResponseModel.manageResponse(this.completedFormUseCase.saveCompletedForm(req.body), res, HttpStatusCode.CREATED, Message.COMPLETED_FILE_UPLOADED_SUCCESSFULLY);
    });
  }

  getRouter(): Router {
    return this.completedFormRouter;
  }
}
