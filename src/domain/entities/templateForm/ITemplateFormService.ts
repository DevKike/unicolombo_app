import { ISaveTemplateForm, ITemplateForm } from "./ITemplateForm";

export interface ITemplateFormService {
  saveForm(form: ISaveTemplateForm): Promise<void>;
  getTemplateForms(): Promise<ITemplateForm[]>;
  getTemplateFormById(id: number): Promise<ITemplateForm | null>;
  getTemplateFormByStage(stageId: number): Promise<ITemplateForm[]>;
}
