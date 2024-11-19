import { DataSource, Repository } from "typeorm";
import { IExecutionRepository } from "../../../domain/entities/execution/IExecutionRepository";
import { Execution } from "../../database/entities/Execution";
import { ICreateExecution, IExecution } from "../../../domain/entities/execution/IExecution";

export class ExecutionRepository implements IExecutionRepository {
  private readonly executionRepository: Repository<Execution>;

  constructor(private readonly dataSource: DataSource) {
    this.executionRepository = this.dataSource.getRepository(Execution);
  }

  async save(execution: ICreateExecution): Promise<void> {
    try {
      await this.executionRepository.save(execution);
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
}
