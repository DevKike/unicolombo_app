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
}

export interface ISaveTemplateForm extends Omit<ITemplateForm, "id" | "registeredAt" | "updatedAt"> {}
