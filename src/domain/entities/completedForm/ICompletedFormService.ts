import { ICreateCompletedForm } from "./ICompletedForm";

export interface ICompletedFormService {
  saveCompletedForm(completedForm: ICreateCompletedForm): Promise<void>;
}
