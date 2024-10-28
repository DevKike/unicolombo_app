import { Router } from "express";
import { IRouterModule } from "../../interfaces/IRouterModule";
import { IStageUseCase } from "../../../../domain/entities/stage/IStageUseCase";
import { schemaValidator } from "../../../schemas/middleware/schemaValidator";
import { ResponseModel } from "../../response/ResponseModel";
import { HttpStatusCode } from "../../../../domain/enums/http/HttpStatusCode";
import { Message } from "../../../../domain/enums/message/Message";
import { createStageSchema } from "../../../schemas/stage/stageSchema";
import { SortDirection } from "../../../../domain/enums/sortOrder/SortOrder";

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

    this.stageRouter.get("/:id", async (req, res) => {
      await ResponseModel.manageResponse(this.stageUseCase.getStageById(Number(req.params.id)), res, HttpStatusCode.OK, Message.STAGE_OBTAINED_SUCCESSFULLY);
    });

    this.stageRouter.get("/", async (req, res) => {
      await ResponseModel.manageResponse(this.stageUseCase.getStages(), res, HttpStatusCode.OK, Message.STAGES_OBTAINED_SUCCESSFULLY);
    });

    this.stageRouter.get("/ordered", async (req, res) => {
      const direction = req.query.direction as SortDirection;
      await ResponseModel.manageResponse(this.stageUseCase.getStagesByOrder(direction), res, HttpStatusCode.OK, Message.STAGES_OBTAINED_SUCCESSFULLY);
    });

    this.stageRouter.get("/by-assignment/:id", async (req, res) => {
      const direction = req.query.direction as SortDirection;
      await ResponseModel.manageResponse(this.stageUseCase.getStagesByAssignment(Number(req.params.id), direction), res, HttpStatusCode.OK, Message.STAGES_OBTAINED_SUCCESSFULLY);
    });
  }

  getRouter(): Router {
    return this.stageRouter;
  }
}
