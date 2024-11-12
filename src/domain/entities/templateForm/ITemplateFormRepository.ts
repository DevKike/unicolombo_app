import { ISaveTemplateForm, ITemplateForm, IUpdateTemplateForm } from "./ITemplateForm";

export interface ITemplateFormRepository {
  save(templateForm: ISaveTemplateForm): Promise<void>;
  getAll(): Promise<ITemplateForm[]>;
  getOneById(id: number): Promise<ITemplateForm | null>;
  getByStage(stageId: number): Promise<ITemplateForm[]>;
  updateById(id: number, updateTemplateForm: IUpdateTemplateForm): Promise<void>;
}
