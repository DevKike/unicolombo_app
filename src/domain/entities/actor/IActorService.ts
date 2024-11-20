import { IActor, ICreateActor, IUpdateActor } from "./IActor";

export interface IActorService {
  createActor(actorData: ICreateActor): Promise<void>;
  getActors(page: number, limit: number): Promise<IActor[]>;
  getActorsByQueryParams(params: Partial<IActor>): Promise<IActor[]>;
  updateActorById(id: number, actorData: IUpdateActor): Promise<void>;
}
