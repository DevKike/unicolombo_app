import { ICreateAuth } from "../auth/IAuth";
import { IActor, ICreateActor, IUpdateActor } from "./IActor";

export interface IActorUseCase {
  createActor(actorData: ICreateActor, authData: ICreateAuth): Promise<void>;
  getActors(page: number, limit: number): Promise<IActor[]>;
  getActorsByQueryParams(params: Partial<IActor>): Promise<IActor[]>;
  updateActorById(id: number, actorData: IUpdateActor): Promise<void>;
}
