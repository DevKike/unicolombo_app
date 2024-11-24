import { DataSource, Repository } from "typeorm";
import { Actor } from "../../database/entities/Actor";
import { IActorRepository } from "../../../domain/entities/actor/IActorRepository";
import { IActor, ICreateActor, IUpdateActor } from "../../../domain/entities/actor/IActor";
import { applyFilter } from "../../helpers/applyFilters";

export class ActorRepository implements IActorRepository {
  private readonly actorRepository: Repository<Actor>;

  constructor(private readonly dataSource: DataSource) {
    this.actorRepository = this.dataSource.getRepository(Actor);
  }

  async save(actorData: ICreateActor): Promise<IActor> {
    try {
      return await this.actorRepository.save(actorData);
    } catch (error) {
      throw error;
    }
  }

  async getAll(limit: number, skip: number): Promise<IActor[]> {
    try {
      return await this.actorRepository.find({
        take: limit,
        skip,
        relations: ["department", "role", "auth"],
      });
    } catch (error) {
      throw error;
    }
  }

  async getByQueryParams(params: Partial<IActor>): Promise<IActor[]> {
    try {
      const queryBuilder = this.actorRepository.createQueryBuilder("actor");

      queryBuilder
        .leftJoinAndSelect("actor.role", "role")
        .leftJoinAndSelect("actor.department", "department")
        .leftJoinAndSelect("actor.auth", "auth");

      applyFilter(params, queryBuilder);

      return await queryBuilder.getMany();
    } catch (error) {
      throw error;
    }
  }

  async updateById(id: number, actorData: IUpdateActor): Promise<void> {
    try {
      await this.actorRepository.update(id, actorData);
    } catch (error) {
      throw error;
    }
  }

  async count(): Promise<number> {
    try {
      return this.actorRepository.count();
    } catch (error) {
      throw error;
    }
  }
}
