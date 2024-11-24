import { Router } from "express";
import { IRouterModule } from "../../interfaces/IRouterModule";
import { ICompletedFormUseCase } from "../../../../domain/entities/completedForm/ICompletedFormUseCase";
import { ResponseModel } from "../../response/ResponseModel";
import { HttpStatusCode } from "../../../../domain/enums/http/HttpStatusCode";
import { Message } from "../../../../domain/enums/message/Message";
import { schemaValidator } from "../../../joi/middleware/schemaValidator";
import { createCompletedFormSchema, updateCompletedFormSchema } from "../../../joi/schemas/completedForm/completedFormSchema";
import { authMiddleware } from "../../middlewares/authMiddleware";

export class CompletedFormRouter implements IRouterModule {
  private readonly completedFormRouter: Router;

  constructor(private readonly completedFormUseCase: ICompletedFormUseCase) {
    this.completedFormRouter = Router();
    this.initRoutes();
  }

  initRoutes(): void {
    this.completedFormRouter.post("/", authMiddleware(), schemaValidator(createCompletedFormSchema), async (req, res) => {
      await ResponseModel.manageResponse(this.completedFormUseCase.saveCompletedForm(req.body), res, HttpStatusCode.CREATED, Message.COMPLETED_FORM_SAVED_SUCCESSFULLY);
    });

    this.completedFormRouter.get("/", authMiddleware(), async (req, res) => {
      await ResponseModel.manageResponse(this.completedFormUseCase.getCompletedForms(), res, HttpStatusCode.OK, Message.COMPLETED_FORMS_OBTAINED_SUCCESSFULLY);
    });

    this.completedFormRouter.get("/:id", authMiddleware(), async (req, res) => {
      await ResponseModel.manageResponse(this.completedFormUseCase.getCompletedFormById(Number(req.params.id)), res, HttpStatusCode.OK, Message.COMPLETED_FORM_OBTAINED_SUCCESSFULLY);
    });

    this.completedFormRouter.get("/by-template-form/:id", authMiddleware(), async (req, res) => {
      ResponseModel.manageResponse(this.completedFormUseCase.getCompletedFormsByTemplateForm(Number(req.params.id)), res, HttpStatusCode.OK, Message.COMPLETED_FORMS_OBTAINED_SUCCESSFULLY);
    });

    this.completedFormRouter.get("/by-execution/:id", authMiddleware(), async (req, res) => {
      ResponseModel.manageResponse(this.completedFormUseCase.getCompletedFormsByExecution(Number(req.params.id)), res, HttpStatusCode.OK, Message.COMPLETED_FORMS_OBTAINED_SUCCESSFULLY);
    });

    this.completedFormRouter.patch("/:id", authMiddleware(), schemaValidator(updateCompletedFormSchema), async (req, res) => {
      ResponseModel.manageResponse(this.completedFormUseCase.updateCompletedFormById(Number(req.params.id), req.body), res, HttpStatusCode.OK, Message.COMPLETED_FORM_UPDATED_SUCCESSFULLY);
    });
  }

  getRouter(): Router {
    return this.completedFormRouter;
  }
}
