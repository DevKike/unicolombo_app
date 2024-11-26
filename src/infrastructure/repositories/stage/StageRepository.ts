import { DataSource, Repository } from "typeorm";
import { ICreateStage, IStage, IUpdateStage } from "../../../domain/entities/stage/IStage";
import { IStageRepository } from "../../../domain/entities/stage/IStageRepository";
import { Stage } from "../../database/entities/Stage";
import { SortDirection } from "../../../domain/enums/sortOrder/SortOrder";

export class StageRepository implements IStageRepository {
  private readonly stageRepository: Repository<Stage>;

  constructor(private readonly dataSource: DataSource) {
    this.stageRepository = this.dataSource.getRepository(Stage);
  }

  async save(stage: ICreateStage): Promise<void> {
    try {
      await this.stageRepository.save(stage);
    } catch (error) {
      throw error;
    }
  }

  async getOneById(id: number): Promise<IStage | null> {
    try {
      return await this.stageRepository.findOne({
        where: { id: id },
        relations: [
          "deptMaintTypeAssignment.department",
          "deptMaintTypeAssignment.maintenanceType",
        ],
      });
    } catch (error) {
      throw error;
    }
  }

  async getAll(): Promise<IStage[]> {
    try {
      return await this.stageRepository.find({
        relations: [
          "deptMaintTypeAssignment.department",
          "deptMaintTypeAssignment.maintenanceType",
        ],
      });
    } catch (error) {
      throw error;
    }
  }

  async getAllByOrder(direction: SortDirection): Promise<IStage[]> {
    try {
      return await this.stageRepository.find({
        relations: [
          "deptMaintTypeAssignment.department",
          "deptMaintTypeAssignment.maintenanceType",
        ],
        order: {
          order: direction,
        },
      });
    } catch (error) {
      throw error;
    }
  }

  async getAllByAssignment(
    id: number,
    direction: SortDirection
  ): Promise<IStage[]> {
    try {
      return await this.stageRepository.find({
        where: { deptMaintTypeAssignment: { id: id } },
        relations: [
          "deptMaintTypeAssignment.department",
          "deptMaintTypeAssignment.maintenanceType",
        ],
        order: {
          order: direction,
        },
      });
    } catch (error) {
      throw error;
    }
  }

  async updateById(id: number, stage: IUpdateStage): Promise<void> {
    try {
      await this.stageRepository.update(id, stage);
    } catch (error) {
      throw error;
    }
  }
}
