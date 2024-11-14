import { ExecutionStatus } from "../../enums/execution/ExecutionStatus";
import { ICompletedForm } from "../completedForm/ICompletedForm";
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
}

export interface ICreateExecution extends Omit<IExecution, "id" | "startedAt" | "endedAt" | "completedForms">  {};