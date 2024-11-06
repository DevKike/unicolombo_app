import { DataSource, Repository } from "typeorm";
import { TemplateForm } from "../../database/entities/TemplateForm";
import { ISaveTemplateForm } from "../../../domain/entities/templateForm/ITemplateForm";
import { ITemplateFormRepository } from "../../../domain/entities/templateForm/ITemplateFormRepository";

export class TemplateFormRepository implements ITemplateFormRepository {
  private readonly templateFormRepository: Repository<TemplateForm>;

  constructor(private readonly dataSource: DataSource) {
    this.templateFormRepository = this.dataSource.getRepository(TemplateForm);
  }

  async save(form: ISaveTemplateForm): Promise<void> {
    try {
      await this.templateFormRepository.save(form);
    } catch (error) {
      throw error;
    }
  }
}
