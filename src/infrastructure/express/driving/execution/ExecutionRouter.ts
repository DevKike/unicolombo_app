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
      await ResponseModel.manageResponse(this.executionUseCase.createExecution(req.body), res, HttpStatusCode.CREATED, Message.EXECUTION_CREATED_SUCCESSFULLY);
    });

    this.executionRouter.get("/", async (req, res) => {
      await ResponseModel.manageResponse(this.executionUseCase.getExecutions(), res, HttpStatusCode.OK, Message.EXECUTIONS_OBTAINED_SUCCESSFULLY);
    });
  }

  getRouter(): Router {
    return this.executionRouter;
  }
}
