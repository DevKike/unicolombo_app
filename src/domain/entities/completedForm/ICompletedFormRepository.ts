import { ICompletedForm, ICreateCompletedForm, IUpdateCompletedForm } from "./ICompletedForm";

export interface ICompletedFormRepository {
  save(completedForm: ICreateCompletedForm): Promise<void>;
  getAll(): Promise<ICompletedForm[]>;
  getOneById(id: number): Promise<ICompletedForm | null>;
  getAllByTemplateForm(stageId: number): Promise<ICompletedForm[]>;
  updateById(id: number, updateTemplateForm: IUpdateCompletedForm): Promise<void>;
}