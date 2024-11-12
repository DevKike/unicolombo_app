import { DataSource, Repository } from "typeorm";
import { ICreateCompletedForm } from "../../../domain/entities/completedForm/ICompletedForm";
import { ICompletedFormRepository } from "../../../domain/entities/completedForm/ICompletedFormRepository";
import { CompletedForm } from "../../database/entities/CompletedForm";

export class CompletedFormRepository implements ICompletedFormRepository {
  private readonly completedFormRepository: Repository<CompletedForm>;

  constructor(private readonly dataSource: DataSource) {
    this.completedFormRepository = this.dataSource.getRepository(CompletedForm);
  }

  async save(completedForm: ICreateCompletedForm): Promise<void> {
    try {
      await this.completedFormRepository.save(completedForm);
    } catch (error) {
      throw error;
    }
  }
}
