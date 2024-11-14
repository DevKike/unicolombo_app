import { Router } from "express";
import { IRouterModule } from "../../interfaces/IRouterModule";
import { IExecutionUseCase } from "../../../../domain/entities/execution/IExecutionUseCase";
import { ResponseModel } from "../../response/ResponseModel";
import { HttpStatusCode } from "../../../../domain/enums/http/HttpStatusCode";
import { Message } from "../../../../domain/enums/message/Message";
import { schemaValidator } from "../../../schemas/middleware/schemaValidator";
import { createExecutionSchema } from "../../../schemas/execution/executionSchema";

export class ExecutionRouter implements IRouterModule {
  private readonly executionRouter: Router;

  constructor(private readonly executionUseCase: IExecutionUseCase) {
    this.executionRouter = Router();
    this.initRoutes();
  }

  initRoutes(): void {
    this.executionRouter.post("/", schemaValidator(createExecutionSchema), async (req, res) => {
      await ResponseModel.manageResponse(this.executionUseCase.createExecution(req.body), res, HttpStatusCode.OK, Message.EXECUTION_CREATED_SUCCESSFULLY);
    });
  }

  getRouter(): Router {
    return this.executionRouter;
  }
}
