import { ICreateExecutor, IExecutor } from "../../../domain/entities/executor/IExecutor";
import { IExecutorRepository } from "../../../domain/entities/executor/IExecutorRepository";
import { IExecutorService } from "../../../domain/entities/executor/IExecutorService";

export class ExecutorService implements IExecutorService {
  constructor(private readonly executorRepository: IExecutorRepository) {}

  async createExecutor(executor: ICreateExecutor): Promise<void> {
    try {
      await this.executorRepository.save(executor);
    } catch (error) {
      throw error;
    }
  }

  async getExecutors(): Promise<IExecutor[]> {
    try {
      return await this.executorRepository.getAll();
    } catch (error) {
      throw error;
    }
  }
}
