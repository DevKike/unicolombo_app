import { DataSource, Repository } from "typeorm";
import { IExecutionRepository } from "../../../domain/entities/execution/IExecutionRepository";
import { Execution } from "../../database/entities/Execution";
import { ICreateExecution, IExecution, IUpdateExecution } from "../../../domain/entities/execution/IExecution";

export class ExecutionRepository implements IExecutionRepository {
  private readonly executionRepository: Repository<Execution>;

  constructor(private readonly dataSource: DataSource) {
    this.executionRepository = this.dataSource.getRepository(Execution);
  }

  async save(execution: ICreateExecution): Promise<IExecution> {
    try {
      return await this.executionRepository.save(execution);
    } catch (error) {
      throw error;
    }
  }

  async getAll(): Promise<IExecution[]> {
    try {
      return await this.executionRepository.find({
        relations: ["maintenance", "stage"],
      });
    } catch (error) {
      throw error;
    }
  }

  async getOneById(id: number): Promise<IExecution | null> {
    try {
      return await this.executionRepository.findOne({
        where: { id: id },
        relations: ["maintenance", "stage"],
      });
    } catch (error) {
      throw error;
    }
  }

  async getAllByStage(stageId: number): Promise<IExecution[]> {
    try {
      return await this.executionRepository.find({
        where: { stage: { id: stageId } },
        relations: ["maintenance", "stage"],
      });
    } catch (error) {
      throw error;
    }
  }

  async updateById(id: number, execution: IUpdateExecution): Promise<void> {
    try {
      await this.executionRepository.update(id, execution);
    } catch (error) {
      throw error;
    }
  }
}
