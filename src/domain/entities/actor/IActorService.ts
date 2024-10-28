import { IActor, ICreateActor, IUpdateActor } from "./IActor";

export interface IActorService {
  createActor(actor: ICreateActor): Promise<void>;
  getActors(page: number, limit: number): Promise<IActor[]>;
  getActorsByQueryParams(params: Partial<IActor>): Promise<IActor[]>;
  updateActorById(id: number, actor: IUpdateActor): Promise<void>;
}
