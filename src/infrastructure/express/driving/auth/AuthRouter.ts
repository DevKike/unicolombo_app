import { Router } from "express";
import { IRouterModule } from "../../interfaces/IRouterModule";
import { IAuthUseCase } from "../../../../domain/entities/auth/IAuthUseCase";
import { ResponseModel } from "../../response/ResponseModel";
import { HttpStatusCode } from "../../../../domain/enums/http/HttpStatusCode";
import { Message } from "../../../../domain/enums/message/Message";

export class AuthRouter implements IRouterModule {
  private readonly authRouter: Router;

  constructor(private readonly authUseCase: IAuthUseCase) {
    this.authRouter = Router();
    this.initRoutes();
  }

  initRoutes(): void {
    this.authRouter.post("/login", async (req, res) => {
      await ResponseModel.manageResponse(this.authUseCase.login(req.body), res, HttpStatusCode.OK, Message.ACTOR_CREATED_SUCCESSFULLY);
    });
  }

  getRouter(): Router {
    return this.authRouter;
  }
}
