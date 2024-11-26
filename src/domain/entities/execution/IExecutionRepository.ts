import { ICreateExecution, IExecution, IUpdateExecution } from "./IExecution";

export interface IExecutionRepository {
  save(execution: ICreateExecution): Promise<IExecution>;
  getAll(): Promise<IExecution[]>;
  getOneById(id: number): Promise<IExecution | null>;
  getAllByStage(stageId: number): Promise<IExecution[]>;
  updateById(id: number, execution: IUpdateExecution): Promise<void>;
}
