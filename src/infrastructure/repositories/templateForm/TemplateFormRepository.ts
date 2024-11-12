import { DataSource, Repository } from "typeorm";
import { TemplateForm } from "../../database/entities/TemplateForm";
import { ISaveTemplateForm, ITemplateForm } from "../../../domain/entities/templateForm/ITemplateForm";
import { ITemplateFormRepository } from "../../../domain/entities/templateForm/ITemplateFormRepository";

export class TemplateFormRepository implements ITemplateFormRepository {
  private readonly templateFormRepository: Repository<TemplateForm>;

  constructor(private readonly dataSource: DataSource) {
    this.templateFormRepository = this.dataSource.getRepository(TemplateForm);
  }

  async save(templateForm: ISaveTemplateForm): Promise<void> {
    try {
      await this.templateFormRepository.save(templateForm);
    } catch (error) {
      throw error;
    }
  }

  async getAll(): Promise<ITemplateForm[]> {
    try {
      return await this.templateFormRepository.find({
        relations: ["stage"],
      });
    } catch (error) {
      throw error;
    }
  }

  async getOneById(id: number): Promise<ITemplateForm | null> {
    try {
      return await this.templateFormRepository.findOne({
        where: { id: id },
        relations: ["stage"],
      });
    } catch (error) {
      throw error;
    }
  }

  async getByStage(stageId: number): Promise<ITemplateForm[]> {
    try {
      return await this.templateFormRepository.find({
        where: { stage: { id: stageId } },
      });
    } catch (error) {
      throw error;
    }
  }
}
