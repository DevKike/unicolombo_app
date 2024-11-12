import { ISaveTemplateForm, ITemplateForm, IUpdateTemplateForm } from "./ITemplateForm";

export interface ITemplateFormUseCase {
  saveForm(form: ISaveTemplateForm): Promise<void>;
  getTemplateForms(): Promise<ITemplateForm[]>;
  getTemplateFormById(id: number): Promise<ITemplateForm | null>;
  getTemplateFormByStage(stageId: number): Promise<ITemplateForm[]>;
  updateTemplateFormById(id: number, updateTemplateForm: IUpdateTemplateForm): Promise<void>;
}
