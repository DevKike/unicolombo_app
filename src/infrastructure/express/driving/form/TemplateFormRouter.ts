import { Router } from "express";
import { IRouterModule } from "../../interfaces/IRouterModule";
import { ITemplateFormUseCase } from "../../../../domain/entities/templateForm/ITemplateFormUseCase";

export class TemplateFormRouter implements IRouterModule {
  private readonly templateFormRouter: Router;

  constructor(private readonly templateFormUseCase: ITemplateFormUseCase) {
    this.templateFormRouter = Router();
    this.initRoutes();
  }

  initRoutes(): void {
    try {
    } catch (error) {
      throw error;
    }
  }

  getRouter(): Router {
    return this.templateFormRouter;
  }
}
