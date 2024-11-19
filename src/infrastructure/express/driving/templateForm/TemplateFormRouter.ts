import { Router } from "express";
import { IRouterModule } from "../../interfaces/IRouterModule";
import { ITemplateFormUseCase } from "../../../../domain/entities/templateForm/ITemplateFormUseCase";
import { ResponseModel } from "../../response/ResponseModel";
import { HttpStatusCode } from "../../../../domain/enums/http/HttpStatusCode";
import { Message } from "../../../../domain/enums/message/Message";
import { schemaValidator } from "../../../joi/middleware/schemaValidator";
import { saveTemplateFormSchema, updateTemplateFormSchema } from "../../../joi/schemas/templateForm/templateFormSchema";

export class TemplateFormRouter implements IRouterModule {
  private readonly templateFormRouter: Router;

  constructor(private readonly templateFormUseCase: ITemplateFormUseCase) {
    this.templateFormRouter = Router();
    this.initRoutes();
  }

  initRoutes(): void {
    this.templateFormRouter.post("/", schemaValidator(saveTemplateFormSchema), async (req, res) => {
      await ResponseModel.manageResponse(this.templateFormUseCase.saveForm(req.body), res, HttpStatusCode.CREATED, Message.TEMPLATE_FORM_SAVED_SUCCESSFULLY);
    });
    
    this.templateFormRouter.get("/", async (req, res) => {
      await ResponseModel.manageResponse(this.templateFormUseCase.getTemplateForms(), res, HttpStatusCode.OK, Message.TEMPLATES_FORM_OBTAINED_SUCCESSFULLY);
    });

    this.templateFormRouter.get("/:id", async (req, res) => {
      await ResponseModel.manageResponse(this.templateFormUseCase.getTemplateFormById(Number(req.params.id)), res, HttpStatusCode.OK, Message.TEMPLATE_FORM_OBTAINED_SUCCESSFULLY)
    });

    this.templateFormRouter.get("/by-stage/:stageId", async (req, res) => {
      await ResponseModel.manageResponse(this.templateFormUseCase.getTemplateFormByStage(Number(req.params.stageId)), res, HttpStatusCode.OK, Message.TEMPLATES_FORM_OBTAINED_SUCCESSFULLY);
    });

    this.templateFormRouter.patch("/:id", schemaValidator(updateTemplateFormSchema), async (req, res) => {
      await ResponseModel.manageResponse(this.templateFormUseCase.updateTemplateFormById(Number(req.params.id), req.body), res, HttpStatusCode.OK, Message.TEMPLATE_UPDATED_SUCCESSFULLY);
    });
  }

  getRouter(): Router {
    return this.templateFormRouter;
  }
}
