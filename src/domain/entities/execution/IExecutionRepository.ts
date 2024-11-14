import { ICreateExecution } from "./IExecution";

export interface IExecutionRepository {
  save(execution: ICreateExecution): Promise<void>;
}
