import { ICreateExecutor } from "./IExecutor";

export interface IExecutorUseCase {
  createExecutor(executor: ICreateExecutor): Promise<void>;
}
