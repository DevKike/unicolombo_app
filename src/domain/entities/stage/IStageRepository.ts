import { SortDirection } from "../../enums/sortOrder/SortOrder";
import { ICreateStage, IStage } from "./IStage";

export interface IStageRepository {
  save(stage: ICreateStage): Promise<void>;
  getOneById(id: number): Promise<IStage | null>;
  getAll(): Promise<IStage[]>;
  getAllByOrder(direction: SortDirection): Promise<IStage[]>;
  getAllByAssignment(id: number, direction: SortDirection): Promise<IStage[]>;
}
