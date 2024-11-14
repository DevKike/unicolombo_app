import { ICreateExecution, IExecution } from "./IExecution";

export interface IExecutionRepository {
  save(execution: ICreateExecution): Promise<void>;
  getAll(): Promise<IExecution[]>;
}
