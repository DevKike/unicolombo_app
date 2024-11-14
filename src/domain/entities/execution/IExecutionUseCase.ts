import { ICreateExecution, IExecution } from "./IExecution";

export interface IExecutionUseCase {
  createExecution(execution: ICreateExecution): Promise<void>;
  getExecutions(): Promise<IExecution[]>;
}
