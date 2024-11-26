import { ICreateExecution, IExecution, IUpdateExecution } from "../../../domain/entities/execution/IExecution";
import { IExecutionRepository } from "../../../domain/entities/execution/IExecutionRepository";
import { IExecutionService } from "../../../domain/entities/execution/IExecutionService";

export class ExecutionService implements IExecutionService {
  constructor(private readonly executionRepository: IExecutionRepository) {}

  async createExecution(execution: ICreateExecution): Promise<IExecution> {
    try {
      return await this.executionRepository.save(execution);
    } catch (error) {
      throw error;
    }
  }

  async getExecutions(): Promise<IExecution[]> {
    try {
      return await this.executionRepository.getAll();
    } catch (error) {
      throw error;
    }
  }

  async getExecution(id: number): Promise<IExecution | null> {
    try {
      return await this.executionRepository.getOneById(id);
    } catch (error) {
      throw error;
    }
  }

  async getExecutionsByStage(stageId: number): Promise<IExecution[]> {
    try {
      return await this.executionRepository.getAllByStage(stageId);
    } catch (error) {
      throw error;
    }
  }

  async updateExecution(id: number, execution: IUpdateExecution): Promise<void> {
    try {
      await this.executionRepository.updateById(id, execution);
    } catch (error) {
      throw error;
    }
  }
}
