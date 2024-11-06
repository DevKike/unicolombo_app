import { ISaveForm } from "../../../domain/entities/form/IForm";
import { IFormRepository } from "../../../domain/entities/form/IFormRepository";
import { IFormService } from "../../../domain/entities/form/IFormService";

export class FormService implements IFormService {
  constructor(private readonly formRepository: IFormRepository) {}

  async saveForm(form: ISaveForm): Promise<void> {
    try {
      await this.formRepository.save(form);
    } catch (error) {
      throw error;
    }
  }
}
