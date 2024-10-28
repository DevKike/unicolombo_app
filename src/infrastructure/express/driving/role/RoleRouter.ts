import { IRouterModule } from "../../interfaces/IRouterModule";
import { HttpStatusCode } from "../../../../domain/enums/http/HttpStatusCode";
import { IRoleUseCase } from "../../../../domain/entities/role/IRoleUseCase";
import { Router } from "express";
import { ResponseModel } from "../../response/ResponseModel";
import { Message } from "../../../../domain/enums/message/Message";

export class RoleRouter implements IRouterModule {
  private readonly roleRouter: Router;

  constructor(private readonly roleUseCase: IRoleUseCase) {
    this.roleRouter = Router();
    this.initRoutes();
  }

  initRoutes(): void {
    this.roleRouter.get("/", async (req, res) => {
      await ResponseModel.manageResponse(this.roleUseCase.getRoles(), res, HttpStatusCode.OK, Message.ROLES_OBTAINED_SUCCESSFULLY); 
    });
  }

  getRouter(): Router {
    return this.roleRouter;
  }
}
