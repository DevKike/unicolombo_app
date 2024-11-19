import { ICreateExecutor, IExecutor, IUpdateExecutor } from "./IExecutor";

export interface IExecutorRepository {
  save(executor: ICreateExecutor): Promise<void>;
  getAll(): Promise<IExecutor[]>;
  getOneById(id: number): Promise<IExecutor | null>;
  getAllByActor(actorId: number): Promise<IExecutor[]>;
  getAllByExecution(executionId: number): Promise<IExecutor[]>;
  updateById(id: number, executor: IUpdateExecutor): Promise<void>;
}
