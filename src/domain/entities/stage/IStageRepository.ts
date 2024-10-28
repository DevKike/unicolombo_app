import { ICreateStage, IStage } from "./IStage";

export interface IStageRepository {
  save(stage: ICreateStage): Promise<void>;
  getAll(): Promise<IStage[]>;
}
