import { IRouterManager } from "../../shared/interfaces/IRouterManager";
import { ActorRouter } from "./actor/ActorRouter";
import { RoleRouter } from "./role/RoleRouter";
import { Application } from "express";

export class RouterManager implements IRouterManager {
  private app: Application;
  private roleRouter: RoleRouter;
  private actorRouter: ActorRouter;

  constructor(app: Application, roleRouter: RoleRouter, actorRouter: ActorRouter) {
    this.app = app;
    this.roleRouter = roleRouter;
    this.actorRouter = actorRouter;
  }

  manageRoutes(): void {
    this.app.use("/api", this.roleRouter.getRouter());
    this.app.use("/api", this.actorRouter.getRouter());
  }
}
