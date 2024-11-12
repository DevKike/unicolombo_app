import { ISaveTemplateForm, ITemplateForm } from "../../../domain/entities/templateForm/ITemplateForm";
import { ITemplateFormRepository } from "../../../domain/entities/templateForm/ITemplateFormRepository";
import { ITemplateFormService } from "../../../domain/entities/templateForm/ITemplateFormService";
import { parseFileName } from "../../helpers/parseFileName";

export class TemplateFormService implements ITemplateFormService {
  constructor(private readonly templateFormRepository: ITemplateFormRepository) {}

  async saveForm(templateForm: ISaveTemplateForm): Promise<void> {
    try {
      const parsedFile = parseFileName(templateForm.filePath);
          
      if (parsedFile) {
        const newForm = {
          ...templateForm,
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

  async getTemplateForms(): Promise<ITemplateForm[]> {
    try {
      return await this.templateFormRepository.getAll();
    } catch (error) {
      throw error;
    }
  }

  async getTemplateFormById(id: number): Promise<ITemplateForm | null> {
    try {
      return await this.templateFormRepository.getOneById(id);
    } catch (error) {
      throw error;
    }
  }

  async getTemplateFormByStage(stageId: number): Promise<ITemplateForm[]> {
    try {
      return await this.templateFormRepository.getByStage(stageId);
    } catch (error) {
      throw error;
    }
  }
}
