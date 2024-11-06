import { ISaveTemplateForm } from "../../../domain/entities/templateForm/ITemplateForm";
import { ITemplateFormRepository } from "../../../domain/entities/templateForm/ITemplateFormRepository";
import { ITemplateFormService } from "../../../domain/entities/templateForm/ITemplateFormService";


export class TemplateFormService implements ITemplateFormService {
  constructor(private readonly templateFormRepository: ITemplateFormRepository) {}

  async saveForm(form: ISaveTemplateForm): Promise<void> {
    try {
      await this.templateFormRepository.save(form);
    } catch (error) {
      throw error;
    }
  }
}
