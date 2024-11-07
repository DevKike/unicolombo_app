import { Router } from "express";
import { IRouterModule } from "../../interfaces/IRouterModule";
import { ITemplateFormUseCase } from "../../../../domain/entities/templateForm/ITemplateFormUseCase";
import { ResponseModel } from "../../response/ResponseModel";
import { HttpStatusCode } from "../../../../domain/enums/http/HttpStatusCode";
import { Message } from "../../../../domain/enums/message/Message";
import { schemaValidator } from "../../../schemas/middleware/schemaValidator";
import { saveTemplateFormSchema } from "../../../schemas/templateForm/templateFormSchema";

export class TemplateFormRouter implements IRouterModule {
  private readonly templateFormRouter: Router;

  constructor(private readonly templateFormUseCase: ITemplateFormUseCase) {
    this.templateFormRouter = Router();
    this.initRoutes();
  }

  initRoutes(): void {
    this.templateFormRouter.post("/", /* schemaValidator(saveTemplateFormSchema), */ async (req, res) => {
      ResponseModel.manageResponse(this.templateFormUseCase.saveForm(req.body), res, HttpStatusCode.CREATED, Message.TEMPLATE_FORM_SAVED_SUCCESSFULLY);
    });
    try {
    } catch (error) {
      throw error;
    }
  }

  getRouter(): Router {
    return this.templateFormRouter;
  }
}
