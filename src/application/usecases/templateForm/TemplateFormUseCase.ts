import { ISaveTemplateForm, ITemplateForm, IUpdateTemplateForm } from "../../../domain/entities/templateForm/ITemplateForm";
import { ITemplateFormService } from "../../../domain/entities/templateForm/ITemplateFormService";
import { ITemplateFormUseCase } from "../../../domain/entities/templateForm/ITemplateFormUseCase";

export class TemplateFormUseCase implements ITemplateFormUseCase {
  constructor(private readonly templateFormService: ITemplateFormService) {}

  async saveForm(templateForm: ISaveTemplateForm): Promise<void> {
    try {
      await this.templateFormService.saveForm(templateForm);
    } catch (error) {
      throw error;
    }
  }

  async getTemplateForms(): Promise<ITemplateForm[]> {
    try {
      return await this.templateFormService.getTemplateForms();
    } catch (error) {
      throw error;
    }
  }

  async getTemplateFormById(id: number): Promise<ITemplateForm | null> {
    try {
      return await this.templateFormService.getTemplateFormById(id);
    } catch (error) {
      throw error;
    }
  }

  async getTemplateFormByStage(stageId: number): Promise<ITemplateForm[]> {
    try {
      return await this.templateFormService.getTemplateFormByStage(stageId);
    } catch (error) {
      throw error;
    }
  }

  async updateTemplateFormById(id: number, updateTemplateForm: IUpdateTemplateForm): Promise<void> {
    try {
      await this.templateFormService.updateTemplateFormById(id, updateTemplateForm);
    } catch (error) {
      throw error;
    }
  }
}
