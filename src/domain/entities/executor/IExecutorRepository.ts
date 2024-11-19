import { ICreateExecutor } from "./IExecutor";

export interface IExecutorRepository {
  save(executor: ICreateExecutor): Promise<void>;
}
