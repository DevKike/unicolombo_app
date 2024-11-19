import { ExecutionStatus } from "../../enums/execution/ExecutionStatus";
import { ICompletedForm } from "../completedForm/ICompletedForm";
import { IExecutor } from "../executor/IExecutor";
import { IMaintenance } from "../maintenance/IMaintenance";
import { IStage } from "../stage/IStage";

export interface IExecution {
  id: number;
  status: ExecutionStatus;
  description?: string;
  startedAt: Date;
  updatedAt: Date;
  endedAt?: Date;
  maintenance: IMaintenance;
  stage: IStage;
  completedForms: ICompletedForm[];
  executors: IExecutor[];
}

export interface ICreateExecution extends Omit<IExecution, "id" | "startedAt" | "updatedAt" | "endedAt" | "completedForms">  {};

export interface IUpdateExecution extends Partial<Omit<IExecution, "id" | "startedAt" | "updatedAt" | "completedForms">> {};