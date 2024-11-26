import { Response, Router } from "express";
import { IRouterModule } from "../../interfaces/IRouterModule";
import { ResponseModel } from "../../response/ResponseModel";
import { HttpStatusCode } from "../../../../domain/enums/http/HttpStatusCode";
import { Message } from "../../../../domain/enums/message/Message";
import { IMaintenanceUseCase } from "../../../../domain/entities/maintenance/IMaintenanceUseCase";
import { schemaValidator } from "../../../joi/middleware/schemaValidator";
import {
  createMaintenanceSchema,
  createPreventiveMaintenanceSchema,
  updateMaintenanceSchema,
} from "../../../joi/schemas/maintenance/maintenanceSchema";
import { authMiddleware } from "../../middlewares/authMiddleware";
import { IRequest } from "../../interfaces/IRequest";

export class MaintenanceRouter implements IRouterModule {
  private readonly maintenanceRouter: Router;

  constructor(private readonly maintenanceUseCase: IMaintenanceUseCase) {
    this.maintenanceRouter = Router();
    this.initRoutes();
  }

  initRoutes(): void {
    this.maintenanceRouter.post(
      "/",
      authMiddleware(),
      schemaValidator(createMaintenanceSchema),
      async (req: IRequest, res: Response) => {
        await ResponseModel.manageResponse(
          this.maintenanceUseCase.createMaintenance(req.body),
          res,
          HttpStatusCode.CREATED,
          Message.MAINTENANCE_CREATED_SUCCESSFULLY
        );
      }
    );

    this.maintenanceRouter.post(
      "/preventive",
      authMiddleware(),
      schemaValidator(createPreventiveMaintenanceSchema),
      authMiddleware(),
      async (req: IRequest, res: Response) => {
        const { maintenance, completedForm } = req.body;
        await ResponseModel.manageResponse(
          this.maintenanceUseCase.createPreventiveMaintenance(
            req.actor!,
            maintenance,
            completedForm
          ),
          res,
          HttpStatusCode.CREATED,
          Message.MAINTENANCE_CREATED_SUCCESSFULLY
        );
      }
    );

    this.maintenanceRouter.get(
      "/",
      authMiddleware(),
      async (req: IRequest, res: Response) => {
        await ResponseModel.manageResponse(
          this.maintenanceUseCase.getAllMaintenances(),
          res,
          HttpStatusCode.OK,
          Message.MAINTENANCES_OBTAINED_SUCCESSFULLY
        );
      }
    );

    this.maintenanceRouter.get(
      "/:id",
      authMiddleware(),
      async (req: IRequest, res: Response) => {
        await ResponseModel.manageResponse(
          this.maintenanceUseCase.getMaintenanceById(Number(req.params.id)),
          res,
          HttpStatusCode.OK,
          Message.MAINTENANCE_OBTAINED_SUCCESSFULLY
        );
      }
    );

    this.maintenanceRouter.patch(
      "/:id",
      authMiddleware(),
      schemaValidator(updateMaintenanceSchema),
      async (req: IRequest, res: Response) => {
        await ResponseModel.manageResponse(
          this.maintenanceUseCase.updateMaintenanceById(
            Number(req.params.id),
            req.body
          ),
          res,
          HttpStatusCode.OK,
          Message.MAINTENANCE_UPDATED_SUCCESSFULLY
        );
      }
    );
  }

  getRouter(): Router {
    return this.maintenanceRouter;
  }
}
