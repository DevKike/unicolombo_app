import { ICreateExecution } from "./IExecution";

export interface IExecutionService {
  createExecution(execution: ICreateExecution): Promise<void>;
}
