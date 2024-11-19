import { ICreateExecutor, IExecutor } from "./IExecutor";

export interface IExecutorRepository {
  save(executor: ICreateExecutor): Promise<void>;
  getAll(): Promise<IExecutor[]>;
}
