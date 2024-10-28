import { ICreateStage, IStage } from "./IStage";

export interface IStageService {
  createStage(stage: ICreateStage): Promise<void>;
  getStages(): Promise<IStage[]>;
  getStageById(id: number): Promise<IStage | null>;
}