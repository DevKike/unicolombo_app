import { ICreateCompletedForm } from "../../../domain/entities/completedForm/ICompletedForm";
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
}
