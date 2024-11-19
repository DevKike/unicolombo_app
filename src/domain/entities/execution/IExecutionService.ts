import { ICreateExecution, IExecution, IUpdateExecution } from "./IExecution";

export interface IExecutionService {
  createExecution(execution: ICreateExecution): Promise<void>;
  getExecutions(): Promise<IExecution[]>;
  getExecution(id: number): Promise<IExecution | null>;
  getExecutionsByStage(stageId: number): Promise<IExecution[]>;
  updateExecution(id: number, execution: IUpdateExecution): Promise<void>;
}