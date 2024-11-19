import { ICreateExecutor, IExecutor } from "./IExecutor";

export interface IExecutorUseCase {
  createExecutor(executor: ICreateExecutor): Promise<void>;
  getExecutors(): Promise<IExecutor[]>;
}
