import { ISaveForm } from "./IForm";

export interface IFormService {
  saveForm(form: ISaveForm): Promise<void>;
}
