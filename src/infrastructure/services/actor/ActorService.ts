import { IActor, ICreateActor, IUpdateActor } from "../../../domain/entities/actor/IActor";
import { IActorRepository } from "../../../domain/entities/actor/IActorRepository";
import { IActorService } from "../../../domain/entities/actor/IActorService";

export class ActorService implements IActorService {
  constructor(private readonly actorRepository: IActorRepository) {}

  async createActor(actor: ICreateActor): Promise<void> {
    try {
      await this.actorRepository.save(actor);
    } catch (error) {
      throw error;
    }
  }

  async getActors(page: number, limit: number): Promise<IActor[]> {
    try {
      const skip = (page - 1) * limit;
      return await this.actorRepository.getAll(limit, skip);
    } catch (error) {
      throw error;
    }
  }

  async getActorsByQueryParams(params: Partial<IActor>): Promise<IActor[]> {
    try {
      return await this.actorRepository.getByQueryParams(params);
    } catch (error) {
      throw error;
    }
  }

  async updateActorById(id: number, actor: IUpdateActor): Promise<void> {
    try {
      await this.actorRepository.updateById(id, actor);
    } catch (error) {
      throw error;
    }
  }
}
