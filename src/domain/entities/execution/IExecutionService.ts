import { ICreateExecution, IExecution } from "./IExecution";

export interface IExecutionService {
  createExecution(execution: ICreateExecution): Promise<void>;
  getExecutions(): Promise<IExecution[]>;
}
