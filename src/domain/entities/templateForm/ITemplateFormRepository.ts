import { ISaveTemplateForm } from "./ITemplateForm";

export interface ITemplateFormRepository {
  save(form: ISaveTemplateForm): Promise<void>;
}
