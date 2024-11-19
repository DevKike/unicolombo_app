import { ICompletedForm, ICreateCompletedForm, IUpdateCompletedForm } from "../../../domain/entities/completedForm/ICompletedForm";
import { ICompletedFormService } from "../../../domain/entities/completedForm/ICompletedFormService";
import { ICompletedFormUseCase } from "../../../domain/entities/completedForm/ICompletedFormUseCase";

export class CompletedFormUseCase implements ICompletedFormUseCase {
  constructor(private readonly completedFormService: ICompletedFormService) {}

  async saveCompletedForm(completedForm: ICreateCompletedForm): Promise<void> {
    try {
      await this.completedFormService.saveCompletedForm(completedForm);
    } catch (error) {
      throw error;
    }
  }

  async getCompletedForms(): Promise<ICompletedForm[]> {
    try {
      return await this.completedFormService.getCompletedForms();
    } catch (error) {
      throw error;
    }
  }

  async getCompletedFormById(id: number): Promise<ICompletedForm | null> {
    try {
      return await this.completedFormService.getCompletedFormById(id);
    } catch (error) {
      throw error;
    }
  }

  async getCompletedFormsByTemplateForm(templateForm: number): Promise<ICompletedForm[]> {
    try {
      return await this.completedFormService.getCompletedFormsByTemplateForm(templateForm);
    } catch (error) {
      throw error;
    }
  }

  async getCompletedFormsByExecution(executionId: number): Promise<ICompletedForm[]> {
    try {
      return await this.completedFormService.getCompletedFormsByExecution(executionId);
    } catch (error) {
      throw error;
    }
  }

  async updateCompletedFormById(id: number, updateTemplateForm: IUpdateCompletedForm): Promise<void> {
    try {
      await this.completedFormService.updateCompletedFormById(id, updateTemplateForm);
    } catch (error) {
      throw error;
    }
  }
}
