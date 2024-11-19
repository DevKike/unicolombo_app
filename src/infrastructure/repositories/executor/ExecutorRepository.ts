import { DataSource, Repository } from "typeorm";
import { IExecutorRepository } from "../../../domain/entities/executor/IExecutorRepository";
import { Executor } from "../../database/entities/Executor";
import { ICreateExecutor } from "../../../domain/entities/executor/IExecutor";

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
}
