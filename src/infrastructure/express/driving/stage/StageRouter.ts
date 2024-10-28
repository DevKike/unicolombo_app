import { Router } from "express";
import { IRouterModule } from "../../interfaces/IRouterModule";
import { IStageUseCase } from "../../../../domain/entities/stage/IStageUseCase";
import { schemaValidator } from "../../../schemas/middleware/schemaValidator";
import { ResponseModel } from "../../response/ResponseModel";
import { HttpStatusCode } from "../../../../domain/enums/http/HttpStatusCode";
import { Message } from "../../../../domain/enums/message/Message";
import { createStageSchema } from "../../../schemas/stage/stageSchema";

export class StageRouter implements IRouterModule {
  private readonly stageRouter: Router;

  constructor(private readonly stageUseCase: IStageUseCase) {
    this.stageRouter = Router();
    this.initRoutes();
  }

  initRoutes(): void {
    this.stageRouter.post("/", schemaValidator(createStageSchema), async (req, res) => {
      await ResponseModel.manageResponse(this.stageUseCase.createStage(req.body), res, HttpStatusCode.CREATED, Message.STAGE_CREATED_SUCCESSFULLY);
    });

    this.stageRouter.get("/", async (req, res) => {
      await ResponseModel.manageResponse(this.stageUseCase.getStages(), res, HttpStatusCode.OK, Message.STAGES_OBTAINED_SUCCESSFULLY);
    });
  }

  getRouter(): Router {
    return this.stageRouter;
  }
}
