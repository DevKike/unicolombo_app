import { ICreateStage } from "./IStage";

export interface IStageUseCase {
  createStage(stage: ICreateStage): Promise<void>;
}