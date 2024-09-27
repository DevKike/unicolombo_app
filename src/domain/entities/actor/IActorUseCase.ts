import { IActor } from "./IActor";

export interface IActorUseCase {
  createActor(actor: IActor): Promise<void>;
  getActors(page: number, limit: number): Promise<IActor[]>;
  getActorsByQueryParams(params: Partial<IActor>): Promise<IActor[]> 
}
