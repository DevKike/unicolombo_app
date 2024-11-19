import { ICreateExecutor } from "../../../domain/entities/executor/IExecutor";
import { IExecutorRepository } from "../../../domain/entities/executor/IExecutorRepository";
import { IExecutorService } from "../../../domain/entities/executor/IExecutorService";

export class ExecutorService implements IExecutorService {
  constructor(private readonly executorRepository: IExecutorRepository) {}

  async createExecutor(executor: ICreateExecutor): Promise<void> {
    try {
      this.executorRepository.save(executor);
    } catch (error) {
      throw error;
    }
  }
}
