import { IActor, ICreateActor, IUpdateActor } from "../../../domain/entities/actor/IActor";
import { IActorService } from "../../../domain/entities/actor/IActorService";
import { IActorUseCase } from "../../../domain/entities/actor/IActorUseCase";
import { ICreateAuth } from "../../../domain/entities/auth/IAuth";
import { IAuthService } from "../../../domain/entities/auth/IAuthService";
import { Message } from "../../../domain/enums/message/Message";
import { NotFoundException } from "../../../domain/exceptions/NotFoundException";

export class ActorUseCase implements IActorUseCase {
  constructor(
    private readonly actorService: IActorService,
    private readonly authService: IAuthService,
  ) {}

  async createActor(actorData: ICreateActor, authData: ICreateAuth): Promise<void> {
    await this.authService.createAuth(authData);
    await this.actorService.createActor(actorData);
  }


  async getActors(page: number, limit: number): Promise<IActor[]> {
    const actors = await this.actorService.getActors(page, limit);

    if (!actors || actors.length === 0) {
      throw new NotFoundException(Message.NOT_ACTORS_FOUND);
    }

    return actors;
  }

  async getActorsByQueryParams(params: Partial<IActor>): Promise<IActor[]> {
    const actor = await this.actorService.getActorsByQueryParams(params);

    if (!actor || actor.length === 0) {
      throw new NotFoundException(Message.NOT_ACTOR_FOUND);
    }

    return actor;
  }

  async updateActorById(id: number, actorData: IUpdateActor): Promise<void> {
    try {
      this.actorService.updateActorById(id, actorData);
    } catch (error) {
      throw error;
    }
  }
}
