import { ICompletedForm, ICreateCompletedForm, IUpdateCompletedForm } from "../../../domain/entities/completedForm/ICompletedForm";
import { ICompletedFormRepository } from "../../../domain/entities/completedForm/ICompletedFormRepository";
import { ICompletedFormService } from "../../../domain/entities/completedForm/ICompletedFormService";
import { parseFileName } from "../../helpers/parseFileName";

export class CompletedFormService implements ICompletedFormService {
  constructor(private readonly completedFormRepository: ICompletedFormRepository) {}

  async saveCompletedForm(completedForm: ICreateCompletedForm): Promise<void> {
    try {
      const parsedFile = parseFileName(completedForm.filePath);

      if (parsedFile) {
        const newCompletedForm: ICreateCompletedForm = {
          ...completedForm,
          code: parsedFile.code,
          name: parsedFile.name,
          fileExtension: parsedFile.extension,
        };

        await this.completedFormRepository.save(newCompletedForm);
      }
    } catch (error) {
      throw error;
    }
  }

  async getCompletedForms(): Promise<ICompletedForm[]> {
    try {
      return await this.completedFormRepository.getAll();
    } catch (error) {
      throw error;
    }
  }

  async getCompletedFormById(id: number): Promise<ICompletedForm | null> {
    try {
      return await this.completedFormRepository.getOneById(id);
    } catch (error) {
      throw error;
    }
  }

  async getCompletedFormsByTemplateForm(templateForm: number): Promise<ICompletedForm[]> {
    try {
      return await this.completedFormRepository.getByTemplateForm(templateForm);
    } catch (error) {
      throw error;
    }
  }

  async updateCompletedFormById(id: number, updateTemplateForm: IUpdateCompletedForm): Promise<void> {
    try {
      await this.completedFormRepository.updateById(id, updateTemplateForm);
    } catch (error) {
      throw error;
    }
  }
}
