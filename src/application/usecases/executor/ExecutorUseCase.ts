import { ICreateExecutor, IExecutor, IUpdateExecutor } from "../../../domain/entities/executor/IExecutor";
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

  async getExecutorById(id: number): Promise<IExecutor | null> {
    try {
      return await this.executorService.getExecutorById(id);
    } catch (error) {
      throw error;
    }
  }

  async getExecutorsByActor(actorId: number): Promise<IExecutor[]> {
    try {
      return await this.executorService.getExecutorsByActor(actorId);
    } catch (error) {
      throw error;
    }
  }

  async getExecutorsByExecution(executionId: number): Promise<IExecutor[]> {
    try {
      return await this.executorService.getExecutorsByExecution(executionId);
    } catch (error) {
      throw error;
    }
  }

  async updateExecutor(id: number, executor: IUpdateExecutor): Promise<void> {
    try {
      await this.executorService.updateExecutor(id, executor);
    } catch (error) {
      throw error;
    }
  }
}
