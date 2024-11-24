import { IActor, ICreateActor, IUpdateActor } from "./IActor";

export interface IActorRepository {
  save(actorData: ICreateActor): Promise<IActor>;
  getAll(limit: number, skip: number): Promise<IActor[]>;
  getByQueryParams(params: Partial<IActor>): Promise<IActor[]>;
  updateById(id: number, actorData: IUpdateActor): Promise<void>;
  count(): Promise<number>;
}
