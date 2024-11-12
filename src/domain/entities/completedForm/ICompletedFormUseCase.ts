import { ICreateCompletedForm } from "./ICompletedForm";

export interface ICompletedFormUseCase {
  saveCompletedForm(completedForm: ICreateCompletedForm): Promise<void>;
}
