import { DataSource, Repository } from "typeorm";
import { ICompletedForm, ICreateCompletedForm, IUpdateCompletedForm } from "../../../domain/entities/completedForm/ICompletedForm";
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

  async getAll(): Promise<ICompletedForm[]> {
    try {
      return await this.completedFormRepository.find({
        relations: ["templateForm", "execution"],
      });
    } catch (error) {
      throw error;
    }
  }

  async getOneById(id: number): Promise<ICompletedForm | null> {
    try {
      return await this.completedFormRepository.findOne({
        where: { id: id },
        relations: ["templateForm", "execution"],
      });
    } catch (error) {
      throw error;
    }
  }

  async getAllByTemplateForm(templateFormId: number): Promise<ICompletedForm[]> {
    try {
      return await this.completedFormRepository.find({
        where: { templateForm: { id: templateFormId } },
        relations: ["templateForm"],
      });
    } catch (error) {
      throw error;
    }
  }

  async getAllByExecution(executionId: number): Promise<ICompletedForm[]> {
    try {
      return await this.completedFormRepository.find({
        where: { execution: { id: executionId } },
        relations: ["templateForm", "execution"]
      })
    } catch (error) {
      throw error;
    }
  }

  async updateById(id: number, updateTemplateForm: IUpdateCompletedForm): Promise<void> {
    try {
      await this.completedFormRepository.update(id, updateTemplateForm);
    } catch (error) {
      throw error;
    }
  }
}
