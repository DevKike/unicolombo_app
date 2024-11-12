import { ISaveTemplateForm, ITemplateForm } from "./ITemplateForm";

export interface ITemplateFormUseCase {
  saveForm(form: ISaveTemplateForm): Promise<void>;
  getTemplateForms(): Promise<ITemplateForm[]>;
  getTemplateFormById(id: number): Promise<ITemplateForm | null>;
  getTemplateFormByStage(stageId: number): Promise<ITemplateForm[]>;
}
