import { DataSource, Repository } from "typeorm";
import { ICreateStage, IStage } from "../../../domain/entities/stage/IStage";
import { IStageRepository } from "../../../domain/entities/stage/IStageRepository";
import { Stage } from "../../database/entities/Stage";

export class StageRepository implements IStageRepository {
  private readonly stageRepository: Repository<Stage>;

  constructor(private readonly dataSource: DataSource) {
    this.stageRepository = this.dataSource.getRepository(Stage);
  }

  async save(stage: ICreateStage): Promise<void> {
    try {
      await this.stageRepository.save(stage);
    } catch (error) {
      throw error;
    }
  }

  async getAll(): Promise<IStage[]> {
    try {
      return await this.stageRepository.find({
        relations: ["deptMaintTypeAssignment"],
      });
    } catch (error) {
      throw error;
    } 
  }

  async getOneById(id: number): Promise<IStage | null> {
    try {
      return await this.stageRepository.findOne({ 
        where: { id: id },
        relations: ["deptMaintTypeAssignment"],
      });
    } catch (error) {
      throw error;
    }
  }
}
