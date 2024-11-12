import { ISaveTemplateForm } from "../../../domain/entities/templateForm/ITemplateForm";
import { ITemplateFormService } from "../../../domain/entities/templateForm/ITemplateFormService";
import { ITemplateFormUseCase } from "../../../domain/entities/templateForm/ITemplateFormUseCase";

export class TemplateFormUseCase implements ITemplateFormUseCase {
  constructor(private readonly templateFormService: ITemplateFormService) {}

  async saveForm(form: ISaveTemplateForm): Promise<void> {
    try {
      await this.templateFormService.saveForm(form);
    } catch (error) {
      throw error;
    }
  }
}
