import { ICreateExecution, IExecution, IUpdateExecution } from "../../../domain/entities/execution/IExecution";
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

  async getExecutions(): Promise<IExecution[]> {
    try {
      return await this.executionService.getExecutions();
    } catch (error) {
      throw error;
    }
  }

  async getExecution(id: number): Promise<IExecution | null> {
    try {
      return await this.executionService.getExecution(id);
    } catch (error) {
      throw error;
    }
  }

  async updateExecution(id: number, execution: IUpdateExecution): Promise<void> {
    try {
      await this.executionService.updateExecution(id, execution);
    } catch (error) {
      throw error;
    }
  }
}
