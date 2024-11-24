import { Router } from "express";
import { IRouterModule } from "../../interfaces/IRouterModule";
import { IExecutorUseCase } from "../../../../domain/entities/executor/IExecutorUseCase";
import { ResponseModel } from "../../response/ResponseModel";
import { HttpStatusCode } from "../../../../domain/enums/http/HttpStatusCode";
import { Message } from "../../../../domain/enums/message/Message";
import { schemaValidator } from "../../../joi/middleware/schemaValidator";
import { createExecutorSchema, updateExecutorSchema } from "../../../joi/schemas/executor/executorSchema";
import { authMiddleware } from "../../middlewares/authMiddleware";

export class ExecutorRouter implements IRouterModule {
  private readonly executorRouter: Router;

  constructor(private readonly executorUseCase: IExecutorUseCase) {
    this.executorRouter = Router();
    this.initRoutes();
  }

  initRoutes(): void {
    this.executorRouter.post("/", authMiddleware(), schemaValidator(createExecutorSchema), async (req, res) => {
      await ResponseModel.manageResponse(this.executorUseCase.createExecutor(req.body), res, HttpStatusCode.CREATED, Message.EXECUTOR_CREATED_SUCCESSFULLY);
    });

    this.executorRouter.get("/", authMiddleware(), async (req, res) => {
      await ResponseModel.manageResponse(this.executorUseCase.getExecutors(), res, HttpStatusCode.OK, Message.EXECUTORS_OBTAINED_SUCCESSFULLY);
    });

    this.executorRouter.get("/:id", authMiddleware(), async (req, res) => {
      await ResponseModel.manageResponse(this.executorUseCase.getExecutorById(Number(req.params.id)), res, HttpStatusCode.OK, Message.EXECUTOR_OBTAINED_SUCCESSFULLY);
    });

    this.executorRouter.get("/by-actor/:id", authMiddleware(), async (req, res) => {
      await ResponseModel.manageResponse(this.executorUseCase.getExecutorsByActor(Number(req.params.id)), res, HttpStatusCode.OK, Message.EXECUTORS_OBTAINED_SUCCESSFULLY);
    });

    this.executorRouter.get("/by-execution/:id", authMiddleware(), async (req, res) => {
      await ResponseModel.manageResponse(this.executorUseCase.getExecutorsByExecution(Number(req.params.id)), res, HttpStatusCode.OK, Message.EXECUTORS_OBTAINED_SUCCESSFULLY);
    });

    this.executorRouter.patch("/:id", authMiddleware(), schemaValidator(updateExecutorSchema), async (req, res) => {
      await ResponseModel.manageResponse(this.executorUseCase.updateExecutor(Number(req.params.id), req.body), res, HttpStatusCode.OK, Message.EXECUTOR_UPDATED_SUCCESSFULLY);
    });
  }

  getRouter(): Router {
    return this.executorRouter;
  }
}
