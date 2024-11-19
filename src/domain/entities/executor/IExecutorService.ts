import { ICreateExecutor } from "./IExecutor";

export interface IExecutorService {
  createExecutor(executor: ICreateExecutor): Promise<void>;
}
