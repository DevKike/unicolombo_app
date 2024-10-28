import { SortDirection } from "../../enums/sortOrder/SortOrder";
import { ICreateStage, IStage } from "./IStage";

export interface IStageService {
  createStage(stage: ICreateStage): Promise<void>;
  getStageById(id: number): Promise<IStage | null>;
  getStages(): Promise<IStage[]>;
  getStagesByOrder(direction: SortDirection): Promise<IStage[]>;
  getStagesByAssignment(id: number, direction: SortDirection): Promise<IStage[]>;
}
