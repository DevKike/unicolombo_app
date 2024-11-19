import { ICreateExecutor, IExecutor } from "../../../domain/entities/executor/IExecutor";
import { IExecutorUseCase } from "../../../domain/entities/executor/IExecutorUseCase";
import { ExecutorService } from "../../../infrastructure/services/executor/ExecutorService";

export class ExecutorUseCase implements IExecutorUseCase {
  constructor(private readonly executorService: ExecutorService) {}

  async createExecutor(executor: ICreateExecutor): Promise<void> {
    try {
      await this.executorService.createExecutor(executor);
    } catch (error) {
      throw error;
    }
  }

  async getExecutors(): Promise<IExecutor[]> {
    try {
      return await this.executorService.getExecutors();
    } catch (error) {
      throw error;
    }
  }
}
