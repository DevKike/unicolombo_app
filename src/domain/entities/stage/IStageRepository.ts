import { ICreateStage } from "./IStage";

export interface IStageRepository {
  save(stage: ICreateStage): Promise<void>;
}
