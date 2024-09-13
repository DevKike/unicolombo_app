import { Router } from "express";
import { IRouterModule } from "../../interfaces/driving/IRouterModule";
import { schemaValidator } from "../../../middleware/schemaValidator";
import { createSchema } from "../../../schemas/actor/actorSchema";
import { IActorController } from "../../interfaces/driving/actor/IActorController";

export class ActorRouter implements IRouterModule {
  private actorRouter: Router;

  constructor(private readonly actorController: IActorController) {
    this.actorRouter = Router();
    this.initRoutes();
  }

  initRoutes(): void {
    this.actorRouter.post("/actors", schemaValidator(createSchema), (req, res, next) => {
      this.actorController.createActor(req, res, next);
    });
  }

  getRouter(): Router {
    return this.actorRouter;
  }
}