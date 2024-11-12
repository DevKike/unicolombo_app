import { ICreateCompletedForm } from "./ICompletedForm";

export interface ICompletedFormRepository {
  save(completedForm: ICreateCompletedForm): Promise<void>;
}