import { ICreateExecutor, IExecutor, IUpdateExecutor } from "../../../domain/entities/executor/IExecutor";
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

  async getExecutorById(id: number): Promise<IExecutor | null> {
    try {
      return await this.executorRepository.getOneById(id);
    } catch (error) {
      throw error;
    }
  }

  async getExecutorsByActor(actorId: number): Promise<IExecutor[]> {
    try {
      return await this.executorRepository.getAllByActor(actorId);
    } catch (error) {
      throw error;
    }
  }

  async getExecutorsByExecution(executionId: number): Promise<IExecutor[]> {
    try {
      return await this.executorRepository.getAllByExecution(executionId);
    } catch (error) {
      throw error;
    }
  }

  async updateExecutor(id: number, executor: IUpdateExecutor): Promise<void> {
    try {
      await this.executorRepository.updateById(id, executor);
    } catch (error) {
      throw error;
    }
  }
}
