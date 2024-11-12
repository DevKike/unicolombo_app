import { ICompletedForm } from "../completedForm/ICompletedForm";
import { IStage } from "../stage/IStage";

export interface ITemplateForm {
  id: number;
  code: string;
  name: string;
  description?: string;
  filePath: string;
  fileExtension: string;
  registeredAt: Date;
  updatedAt: Date;
  stage: IStage;
  completedForms: ICompletedForm[];
}

export interface ISaveTemplateForm extends Omit< ITemplateForm, "id" | "registeredAt" | "updatedAt" | "stage" | "completedForms" > {}
