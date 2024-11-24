import { Router } from "express";
import { IRouterModule } from "../../interfaces/IRouterModule";
import { IExecutionUseCase } from "../../../../domain/entities/execution/IExecutionUseCase";
import { ResponseModel } from "../../response/ResponseModel";
import { HttpStatusCode } from "../../../../domain/enums/http/HttpStatusCode";
import { Message } from "../../../../domain/enums/message/Message";
import { schemaValidator } from "../../../joi/middleware/schemaValidator";
import { createExecutionSchema, updateExecutionSchema } from "../../../joi/schemas/execution/executionSchema";
import { authMiddleware } from "../../middlewares/authMiddleware";

export class ExecutionRouter implements IRouterModule {
  private readonly executionRouter: Router;

  constructor(private readonly executionUseCase: IExecutionUseCase) {
    this.executionRouter = Router();
    this.initRoutes();
  }

  initRoutes(): void {
    this.executionRouter.post("/", authMiddleware(), schemaValidator(createExecutionSchema), async (req, res) => {
      await ResponseModel.manageResponse(this.executionUseCase.createExecution(req.body), res, HttpStatusCode.CREATED, Message.EXECUTION_CREATED_SUCCESSFULLY);
    });

    this.executionRouter.get("/", authMiddleware(), async (req, res) => {
      await ResponseModel.manageResponse(this.executionUseCase.getExecutions(), res, HttpStatusCode.OK, Message.EXECUTIONS_OBTAINED_SUCCESSFULLY);
    });
    
    this.executionRouter.get("/:id", authMiddleware(), async (req, res) => {
      await ResponseModel.manageResponse(this.executionUseCase.getExecution(Number(req.params.id)), res, HttpStatusCode.OK, Message.EXECUTION_OBTAINED_SUCCESSFULLY);
    });

    this.executionRouter.get("/by-stage/:id", authMiddleware(), async (req, res) => {
      await ResponseModel.manageResponse(this.executionUseCase.getExecutionsByStage(Number(req.params.id)), res, HttpStatusCode.OK, Message.EXECUTIONS_OBTAINED_SUCCESSFULLY);
    });

    this.executionRouter.patch("/:id", authMiddleware(), schemaValidator(updateExecutionSchema), async (req, res) => {
      await ResponseModel.manageResponse(this.executionUseCase.updateExecution(Number(req.params.id), req.body), res, HttpStatusCode.OK, Message.EXECUTION_UPDATED_SUCCESSFULLY);
    });
  }

  getRouter(): Router {
    return this.executionRouter;
  }
}
