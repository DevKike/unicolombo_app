import { ICreateStage, IStage } from "./IStage";

export interface IStageUseCase {
  createStage(stage: ICreateStage): Promise<void>;
  getStages(): Promise<IStage[]>;
}
