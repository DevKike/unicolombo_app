import { ISaveForm } from "./IForm";

export interface IFormUseCase {
  saveForm(form: ISaveForm): Promise<void>;
}