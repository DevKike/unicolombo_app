import { ICreateExecution } from "../../../domain/entities/execution/IExecution";
import { IExecutionRepository } from "../../../domain/entities/execution/IExecutionRepository";
import { IExecutionService } from "../../../domain/entities/execution/IExecutionService";

export class ExecutionService implements IExecutionService {
  constructor(private readonly executionRepository: IExecutionRepository) {}

  async createExecution(execution: ICreateExecution): Promise<void> {
    try {
      await this.executionRepository.save(execution);
    } catch (error) {
      throw error;
    }
  }
}
