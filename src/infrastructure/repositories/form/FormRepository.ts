import { DataSource, Repository } from "typeorm";
import { IFormRepository } from "../../../domain/entities/form/IFormRepository";
import { Form } from "../../database/entities/Form";
import { ISaveForm } from "../../../domain/entities/form/IForm";

export class FormRepository implements IFormRepository {
  private readonly formRepository: Repository<Form>;

  constructor(private readonly dataSource: DataSource) {
    this.formRepository = this.dataSource.getRepository(Form);
  }

  async save(form: ISaveForm): Promise<void> {
    try {
      await this.formRepository.save(form);
    } catch (error) {
      throw error;
    }
  }
}
