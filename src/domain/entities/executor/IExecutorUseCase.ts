import { ICreateExecutor, IExecutor } from "./IExecutor";

export interface IExecutorUseCase {
  createExecutor(executor: ICreateExecutor): Promise<void>;
  getExecutors(): Promise<IExecutor[]>;
  getExecutorById(id: number): Promise<IExecutor | null>;
  getExecutorsByActor(actorId: number): Promise<IExecutor[]>;
  getExecutorsByExecution(executionId: number): Promise<IExecutor[]>;
}
