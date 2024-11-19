import { ICreateExecutor, IExecutor } from "./IExecutor";

export interface IExecutorRepository {
  save(executor: ICreateExecutor): Promise<void>;
  getAll(): Promise<IExecutor[]>;
  getOneById(id: number): Promise<IExecutor | null>;
  getAllByActor(actorId: number): Promise<IExecutor[]>;
  getAllByExecution(executionId: number): Promise<IExecutor[]>;
}
