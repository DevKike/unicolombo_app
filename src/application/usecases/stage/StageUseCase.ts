import { ICreateStage, IStage } from "../../../domain/entities/stage/IStage";
import { IStageService } from "../../../domain/entities/stage/IStageService";
import { IStageUseCase } from "../../../domain/entities/stage/IStageUseCase";

export class StageUseCase implements IStageUseCase {
  constructor(private readonly stageService: IStageService) {}

  async createStage(stage: ICreateStage): Promise<void> {
    try {
      await this.stageService.createStage(stage);
    } catch (error) {
      throw error;
    }
  }

  async getStages(): Promise<IStage[]> {
    try {
      return await this.stageService.getStages();
    } catch (error) {
      throw error;
    }
  }
}
