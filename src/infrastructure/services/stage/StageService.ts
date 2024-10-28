import { ICreateStage, IStage } from "../../../domain/entities/stage/IStage";
import { IStageRepository } from "../../../domain/entities/stage/IStageRepository";
import { IStageService } from "../../../domain/entities/stage/IStageService";

export class StageService implements IStageService {
  constructor(private readonly stageRepository: IStageRepository) {}

  async createStage(stage: ICreateStage): Promise<void> {
    await this.stageRepository.save(stage);
  }

  async getStages(): Promise<IStage[]> {
    try {
      return await this.stageRepository.getAll();
    } catch (error) {
      throw error;
    }
  }

  async getStageById(id: number): Promise<IStage | null> {
    try {
      return await this.stageRepository.getOneById(id);
    } catch (error) {
      throw error;
    }
  }
}
