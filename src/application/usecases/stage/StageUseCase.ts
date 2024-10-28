import { ICreateStage, IStage } from "../../../domain/entities/stage/IStage";
import { IStageService } from "../../../domain/entities/stage/IStageService";
import { IStageUseCase } from "../../../domain/entities/stage/IStageUseCase";
import { NotFoundException } from "../../../domain/exceptions/NotFoundException";
import { Message } from "../../../domain/enums/message/Message";
import { SortDirection } from "../../../domain/enums/sortOrder/SortOrder";

export class StageUseCase implements IStageUseCase {
  constructor(private readonly stageService: IStageService) {}

  async createStage(stage: ICreateStage): Promise<void> {
    try {
      await this.stageService.createStage(stage);
    } catch (error) {
      throw error;
    }
  }

  async getStageById(id: number): Promise<IStage | null> {
    try {
      const stage = await this.stageService.getStageById(id);

      if (stage === null) {
        throw new NotFoundException(Message.NOT_STAGE_FOUND);
      }

      return stage;
    } catch (error) {
      throw error;
    }
  }

  async getStages(): Promise<IStage[]> {
    try {
      const stages = await this.stageService.getStages();

      if (!stages || stages.length === 0) {
        throw new NotFoundException(Message.NOT_STAGES_FOUND);
      }

      return stages;
    } catch (error) {
      throw error;
    }
  }

  async getStagesByOrder(direction: SortDirection): Promise<IStage[]> {
    try {
      const orderedStages = await this.stageService.getStagesByOrder(direction);

      if (!orderedStages || orderedStages.length === 0) {
        throw new NotFoundException(Message.NOT_STAGES_FOUND);
      }

      return orderedStages;
    } catch (error) {
      throw error;
    }
  }

  async getStagesByAssignment(id: number, direction: SortDirection): Promise<IStage[]> {
    try {
      const stagesByAssignment = await this.stageService.getStagesByAssignment(id, direction);

      if (!stagesByAssignment || stagesByAssignment.length === 0) {
        throw new NotFoundException(Message.NOT_STAGES_FOUND);
      }

      return stagesByAssignment;
    } catch (error) {
      throw error;
    }
  }
}
