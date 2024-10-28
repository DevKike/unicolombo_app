import { ICreateStage } from "./IStage";

export interface IStageService {
  createStage(stage: ICreateStage): Promise<void>;
}