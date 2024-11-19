import { ICreateExecutor, IExecutor } from "./IExecutor";

export interface IExecutorService {
  createExecutor(executor: ICreateExecutor): Promise<void>;
  getExecutors(): Promise<IExecutor[]>;
}
