import { ICreateExecution } from "./IExecution";

export interface IExecutionUseCase {
  createExecution(execution: ICreateExecution): Promise<void>;
}
