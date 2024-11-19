import { Router } from "express";
import { IRouterModule } from "../../interfaces/IRouterModule";
import { IExecutorUseCase } from "../../../../domain/entities/executor/IExecutorUseCase";
import { ResponseModel } from "../../response/ResponseModel";
import { HttpStatusCode } from "../../../../domain/enums/http/HttpStatusCode";
import { Message } from "../../../../domain/enums/message/Message";
import { schemaValidator } from "../../../joi/middleware/schemaValidator";
import { createExecutorSchema } from "../../../joi/schemas/executor/executorSchema";

export class ExecutorRouter implements IRouterModule {
  private readonly executorRouter: Router;

  constructor(private readonly executorUseCase: IExecutorUseCase) {
    this.executorRouter = Router();
    this.initRoutes();
  }

  initRoutes(): void {
    this.executorRouter.post("/", schemaValidator(createExecutorSchema), async (req, res) => {
      ResponseModel.manageResponse(this.executorUseCase.createExecutor(req.body), res, HttpStatusCode.CREATED, Message.EXECUTOR_CREATED_SUCCESSFULLY);
    });
  }

  getRouter(): Router {
    return this.executorRouter;
  }
}
