import { IExecution } from "../execution/IExecution";
import { ITemplateForm } from "../templateForm/ITemplateForm";

export interface ICompletedForm {
  id: number;
  code: string;
  name: string;
  description: string;
  filePath: string;
  fileExtension: string;
  uploadAt: Date;
  templateForm: ITemplateForm;
  execution: IExecution;
}

export interface ICreateCompletedForm extends Omit<ICompletedForm, "id" | "uploadAt"> {}

export interface IUpdateCompletedForm extends Partial<Omit<ICompletedForm, "id" | "uploadAt">> {}
