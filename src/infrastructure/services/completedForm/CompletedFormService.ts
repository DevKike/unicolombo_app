import { ICreateCompletedForm } from "../../../domain/entities/completedForm/ICompletedForm";
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
}
