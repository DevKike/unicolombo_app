import { ISaveForm } from "./IForm";

export interface IFormRepository {
  save(form: ISaveForm): Promise<void>;
}
