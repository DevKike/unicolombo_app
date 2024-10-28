import { IActor, ICreateActor, IUpdateActor } from "./IActor";

export interface IActorRepository {
  save(actor: ICreateActor): Promise<void>;
  getAll(limit: number, skip: number): Promise<IActor[]>;
  getByQueryParams(params: Partial<IActor>): Promise<IActor[]>;
  updateById(id: number, actor: IUpdateActor): Promise<void>;
}
