import { DataSource, Repository } from "typeorm";
import { IExecutorRepository } from "../../../domain/entities/executor/IExecutorRepository";
import { Executor } from "../../database/entities/Executor";
import { ICreateExecutor, IExecutor } from "../../../domain/entities/executor/IExecutor";

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
}
