import { IStage } from "../stage/IStage";

export interface ITemplateForm {
  id: number;
  code: number;
  name: string;
  description?: string;
  filePath: string;
  extension: string;
  registeredAt: Date;
  updatedAt: Date;
  stage: IStage;
}

export interface ISaveTemplateForm extends Omit<ITemplateForm, "id" | "registeredAt" | "updatedAt"> {}
