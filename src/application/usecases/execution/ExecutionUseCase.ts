import { ICreateExecution } from "../../../domain/entities/execution/IExecution";
import { IExecutionUseCase } from "../../../domain/entities/execution/IExecutionUseCase";

export class ExecutionUseCase implements IExecutionUseCase {
  constructor(private readonly executionService: IExecutionUseCase) {}

  async createExecution(execution: ICreateExecution): Promise<void> {
    try {
      await this.executionService.createExecution(execution);
    } catch (error) {
      throw error;
    }
  }
}
