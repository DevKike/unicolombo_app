import { ISaveForm } from "../../../domain/entities/form/IForm";
import { IFormService } from "../../../domain/entities/form/IFormService";
import { IFormUseCase } from "../../../domain/entities/form/IFormUseCase";

export class FormUseCase implements IFormUseCase {
  constructor(private readonly formService: IFormService) {}

  async saveForm(form: ISaveForm): Promise<void> {
    try {
      await this.formService.saveForm(form);
    } catch (error) {
      throw error;
    }
  }
}
