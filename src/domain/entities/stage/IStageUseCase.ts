import { SortDirection } from "../../enums/sortOrder/SortOrder";
import { ICreateStage, IStage, IUpdateStage } from "./IStage";

export interface IStageUseCase {
  createStage(stage: ICreateStage): Promise<void>;
  getStageById(id: number): Promise<IStage | null>;
  getStages(): Promise<IStage[]>;
  getStagesByOrder(direction: SortDirection): Promise<IStage[]>;
  getStagesByAssignment(id: number, direction: SortDirection): Promise<IStage[]>;
  updateStageById(id: number, stage: IUpdateStage): Promise<void>;
}
