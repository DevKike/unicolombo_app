import { ITemplateForm } from "./ITemplateForm";

export interface ITemplateFormUseCase {
  saveForm(form: ITemplateForm): Promise<void>;
}
