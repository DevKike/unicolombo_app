import { Response, Router } from "express";
import { IRouterModule } from "../../interfaces/IRouterModule";
import { IAuthUseCase } from "../../../../domain/entities/auth/IAuthUseCase";
import { ResponseModel } from "../../response/ResponseModel";
import { HttpStatusCode } from "../../../../domain/enums/http/HttpStatusCode";
import { Message } from "../../../../domain/enums/message/Message";
import { IRequest } from "../../interfaces/IRequest";
import { authMiddleware } from "../../middlewares/authMiddleware";

export class AuthRouter implements IRouterModule {
  private readonly authRouter: Router;

  constructor(private readonly authUseCase: IAuthUseCase) {
    this.authRouter = Router();
    this.initRoutes();
  }

  initRoutes(): void {
    this.authRouter.post("/login", async (req: IRequest, res: Response) => {
      await ResponseModel.manageResponse(this.authUseCase.login(req.body), res, HttpStatusCode.OK, Message.SIGNED_WITH_SUCCESS);
    });

    this.authRouter.get("/data", authMiddleware(), async (req: IRequest, res: Response) => {
      await ResponseModel.manageResponse(this.authUseCase.getAuthDataById(req.actor!.id), res, HttpStatusCode.OK, Message.AUTH_DATA_OBTAINED_SUCCESSFULLY);
    });
  }

  getRouter(): Router {
    return this.authRouter;
  }
}
