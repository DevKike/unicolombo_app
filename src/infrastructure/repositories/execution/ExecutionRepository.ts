import { DataSource, Repository } from "typeorm";
import { IExecutionRepository } from "../../../domain/entities/execution/IExecutionRepository";
import { Execution } from "../../database/entities/Execution";
import { ICreateExecution } from "../../../domain/entities/execution/IExecution";

export class ExecutionRepository implements IExecutionRepository {
  private readonly executionRepository: Repository<Execution>;

  constructor(private readonly dataSource: DataSource) {
    this.executionRepository = dataSource.getRepository(Execution);
  }

  async save(execution: ICreateExecution): Promise<void> {
    try {
      await this.executionRepository.save(execution);
    } catch (error) {
      throw error;
    }
  }
}
