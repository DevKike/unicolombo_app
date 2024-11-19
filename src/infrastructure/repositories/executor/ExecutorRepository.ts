import { DataSource, Repository } from "typeorm";
import { IExecutorRepository } from "../../../domain/entities/executor/IExecutorRepository";
import { Executor } from "../../database/entities/Executor";
import { ICreateExecutor, IExecutor, IUpdateExecutor } from "../../../domain/entities/executor/IExecutor";

export class ExecutorRepository implements IExecutorRepository {
  private readonly executorRepository: Repository<Executor>;

  constructor(private readonly dataSource: DataSource) {
    this.executorRepository = this.dataSource.getRepository(Executor);
  }

  async save(executor: ICreateExecutor): Promise<void> {
    try {
      await this.executorRepository.save(executor);
    } catch (error) {
      throw error;
    }
  }

  async getAll(): Promise<IExecutor[]> {
    try {
      return await this.executorRepository.find({
        relations: ["actor", "execution"],
      });
    } catch (error) {
      throw error;
    }
  }
  
  async getOneById(id: number): Promise<IExecutor | null> {
    try {
      return await this.executorRepository.findOne({
        where: { id: id },
        relations: ["actor", "execution"],
      });
    } catch (error) {
      throw error;
    }
  }

  async getAllByActor(actorId: number): Promise<IExecutor[]> {
    try {
      return await this.executorRepository.find({
        where: { actor: { id: actorId } },
        relations: ["actor", "execution"],
      });
    } catch (error) {
      throw error;
    }
  }

  async getAllByExecution(executionId: number): Promise<IExecutor[]> {
    try {
      return await this.executorRepository.find({
        where: { execution: { id: executionId } },
        relations: ["actor", "execution"],
      });
    } catch (error) {
      throw error;
    }
  }

  async updateById(id: number, executor: IUpdateExecutor): Promise<void> {
    try {
      await this.executorRepository.update(id, executor);
    } catch (error) {
      throw error;
    }
  }
}
