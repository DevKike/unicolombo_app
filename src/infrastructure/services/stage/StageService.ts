import { ICreateStage, IStage, IUpdateStage } from "../../../domain/entities/stage/IStage";
import { IStageRepository } from "../../../domain/entities/stage/IStageRepository";
import { IStageService } from "../../../domain/entities/stage/IStageService";
import { SortDirection } from "../../../domain/enums/sortOrder/SortOrder";

export class StageService implements IStageService {
  constructor(private readonly stageRepository: IStageRepository) {}

  async createStage(stage: ICreateStage): Promise<void> {
    await this.stageRepository.save(stage);
  }

  async getStageById(id: number): Promise<IStage | null> {
    try {
      return await this.stageRepository.getOneById(id);
    } catch (error) {
      throw error;
    }
  }

  async getStages(): Promise<IStage[]> {
    try {
      return await this.stageRepository.getAll();
    } catch (error) {
      throw error;
    }
  }

  async getStagesByOrder(direction: SortDirection): Promise<IStage[]> {
    try {
      return await this.stageRepository.getAllByOrder(direction);
    } catch (error) {
      throw error;
    }
  }

  async getStagesByAssignment(id: number, direction: SortDirection): Promise<IStage[]> {
    try {
      return await this.stageRepository.getAllByAssignment(id, direction);
    } catch (error) {
      throw error;
    }
  }

  async updateStageById(id: number, stage: IUpdateStage): Promise<void> {
    try {
      await this.stageRepository.updateById(id, stage);
    } catch (error) {
      throw error;
    }
  }
}
