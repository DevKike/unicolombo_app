import { IDeptMaintTypeAssignment } from "../deptMaintTypeAssignment/IDeptMaintTypeAssignment";
import { IExecution } from "../execution/IExecution";
import { ITemplateForm } from "../templateForm/ITemplateForm";

export interface IStage {
  id: number;
  name: string;
  description: string;
  order: number;
  createdAt: Date;
  updatedAt: Date;
  deptMaintTypeAssignment: IDeptMaintTypeAssignment;
  templateForms: ITemplateForm[];
  executions: IExecution[];
}

export interface ICreateStage extends Omit<IStage, "id" | "createdAt" | "updatedAt" | "templateForms" | "executions"> {}

export interface IUpdateStage extends Partial<Omit<IStage, "id" | "createdAt" | "updatedAt" | "templateForms" | "executions">> {}
