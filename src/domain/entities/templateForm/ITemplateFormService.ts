import { ISaveTemplateForm } from "./ITemplateForm";

export interface ITemplateFormService {
  saveForm(form: ISaveTemplateForm): Promise<void>;
}
