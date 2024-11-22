import { IRouterModule } from "../../interfaces/IRouterModule";
import { HttpStatusCode } from "../../../../domain/enums/http/HttpStatusCode";
import { IActorUseCase } from "../../../../domain/entities/actor/IActorUseCase";
import { Response, Router } from "express";
import { Message } from "../../../../domain/enums/message/Message";
import { ResponseModel } from "../../response/ResponseModel";
import { schemaValidator } from "../../../joi/middleware/schemaValidator";
import { createActorSchema, updateActorSchema } from "../../../joi/schemas/actor/actorSchema";
import { authMiddleware } from "../../middlewares/authMiddleware";
import { IRequest } from "../../interfaces/IRequest";

export class ActorRouter implements IRouterModule {
  private readonly actorRouter: Router;

  constructor(private readonly actorUseCase: IActorUseCase) {
    this.actorRouter = Router();
    this.initRoutes();
  }

  initRoutes(): void {
    this.actorRouter.post("/", authMiddleware(), schemaValidator(createActorSchema), async (req: IRequest, res: Response) => {
      const { actor, auth } = req.body;
      await ResponseModel.manageResponse(this.actorUseCase.createActor(actor, auth), res, HttpStatusCode.CREATED, Message.ACTOR_CREATED_SUCCESSFULLY);
    });
    
    this.actorRouter.get("/", async (req: IRequest, res: Response) => {
      const page = Number(req.query.page as string) || 1;
      const limit = Number(req.query.limit as string) || 10;
      await ResponseModel.manageResponse(this.actorUseCase.getActors(page, limit), res, HttpStatusCode.OK, Message.ACTORS_OBTAINED_SUCCESSFULLY);
    });

    this.actorRouter.get("/by", async (req: IRequest, res: Response) => {
      await ResponseModel.manageResponse(this.actorUseCase.getActorsByQueryParams(req.query), res, HttpStatusCode.OK, Message.ACTOR_OBTAINED_SUCCESSFULLY);
    })

    this.actorRouter.patch("/:id", schemaValidator(updateActorSchema), async (req: IRequest, res: Response) => {
      await ResponseModel.manageResponse(this.actorUseCase.updateActorById(Number(req.params.id), req.body), res, HttpStatusCode.OK, Message.ACTOR_UPDATED_SUCCESSFULLY);
    }) 
  }
  
  getRouter(): Router {
    return this.actorRouter;
  }
}
