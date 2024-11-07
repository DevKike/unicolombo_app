import { ISaveTemplateForm } from "../../../domain/entities/templateForm/ITemplateForm";
import { ITemplateFormRepository } from "../../../domain/entities/templateForm/ITemplateFormRepository";
import { ITemplateFormService } from "../../../domain/entities/templateForm/ITemplateFormService";
import { parseFileName } from "../../helpers/parseFileName";

export class TemplateFormService implements ITemplateFormService {
  constructor(private readonly templateFormRepository: ITemplateFormRepository) {}

  async saveForm(form: ISaveTemplateForm): Promise<void> {
    try {
      const parsedFile = parseFileName(form.filePath);

      if (parsedFile) {
        const newForm = {
          ...form,
          code: parsedFile.code,
          name: parsedFile.name,
          fileExtension: parsedFile.extension,
        };
        await this.templateFormRepository.save(newForm);
      }
    } catch (error) {
      throw error;
    }
  }
}
