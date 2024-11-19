import { ICompletedForm, ICreateCompletedForm, IUpdateCompletedForm } from "./ICompletedForm";

export interface ICompletedFormService {
  saveCompletedForm(completedForm: ICreateCompletedForm): Promise<void>;
  getCompletedForms(): Promise<ICompletedForm[]>;
  getCompletedFormById(id: number): Promise<ICompletedForm | null>;
  getCompletedFormsByTemplateForm(templateForm: number): Promise<ICompletedForm[]>;
  getCompletedFormsByExecution(executionId: number): Promise<ICompletedForm[]>;
  updateCompletedFormById(id: number, updateTemplateForm: IUpdateCompletedForm): Promise<void>;
}
