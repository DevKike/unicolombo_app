import { ExecutorStatus } from "../../enums/executors/ExecutorStatus";
import { IActor } from "../actor/IActor";
import { IExecution } from "../execution/IExecution";

export interface IExecutor {
  id: number;
  assignedAt: Date;
  updatedAt: Date;
  status: ExecutorStatus;
  comments?: string;
  actor: IActor;
  execution: IExecution;
}

export interface ICreateExecutor extends Omit<IExecutor, "id" | "assignedAt" | "updatedAt"> {}

export interface IUpdateExecutor extends Partial<Omit<IExecutor, "id" | "assignedAt" | "updatedAt">> {}
