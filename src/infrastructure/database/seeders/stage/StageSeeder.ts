import { DataSource, Repository } from "typeorm";
import { ISeeder } from "../interfaces/ISeeder";
import { Stage } from "../../entities/Stage";
import { SeederException } from "../../../../domain/exceptions/SeederException";
import { AlreadySeededException } from "../../../../domain/exceptions/AlreadySeededException";
import { ICreateStage } from "../../../../domain/entities/stage/IStage";
import { DeptMaintTypeAssignment } from "../../entities/DeptMaintTypeAssignment";

export class StageSeeder implements ISeeder {
  private readonly stageRepository: Repository<Stage>;
  private readonly assignmentRepository: Repository<DeptMaintTypeAssignment>;
  private stages: ICreateStage[] = [];

  constructor(private readonly dataSource: DataSource) {
    this.stageRepository = this.dataSource.getRepository(Stage);
    this.assignmentRepository = this.dataSource.getRepository(
      DeptMaintTypeAssignment
    );
  }

  async count(): Promise<number> {
    try {
      return await this.stageRepository.count();
    } catch (error) {
      throw new AlreadySeededException("Error counting stages");
    }
  }

  async save(data: any): Promise<void> {
    try {
      await this.stageRepository.save(data);
    } catch (error) {
      throw new SeederException("Error saving stages");
    }
  }

  async run(): Promise<void> {
    try {
      const assignments = await this.getAssignments();

      const allStages: ICreateStage[] = [];

      assignments.forEach((assignment) => {
        if (assignment.maintenanceType.name === "Corrective") {
          allStages.push(
            {
              name: "Request",
              description: "Maintenance request submission",
              order: 1,
              deptMaintTypeAssignment: assignment,
            },
            {
              name: "Diagnostic",
              description: "Identify the failure",
              order: 2,
              deptMaintTypeAssignment: assignment,
            },
            {
              name: "Repair",
              description: "Fix the failure",
              order: 3,
              deptMaintTypeAssignment: assignment,
            },
            {
              name: "Testing",
              description: "Verify the repair",
              order: 4,
              deptMaintTypeAssignment: assignment,
            },
            {
              name: "Completion",
              description: "Maintenance completion and sign-off",
              order: 5,
              deptMaintTypeAssignment: assignment,
            }
          );
        } else if (assignment.maintenanceType.name === "Preventive") {
          allStages.push(
            {
              name: "Schedule",
              description: "Schedule maintenance activity",
              order: 1,
              deptMaintTypeAssignment: assignment,
            },
            {
              name: "Inspection",
              description: "General review",
              order: 2,
              deptMaintTypeAssignment: assignment,
            },
            {
              name: "Maintenance",
              description: "Perform preventive maintenance",
              order: 3,
              deptMaintTypeAssignment: assignment,
            },
            {
              name: "Documentation",
              description: "Record activities performed",
              order: 4,
              deptMaintTypeAssignment: assignment,
            },
            {
              name: "Close",
              description: "Close maintenance cycle",
              order: 5,
              deptMaintTypeAssignment: assignment,
            }
          );
        }
      });

      await this.save(allStages);
    } catch (error) {
      throw new SeederException("Error running stages");
    }
  }

  private async getAssignments(): Promise<DeptMaintTypeAssignment[]> {
    try {
      return await this.assignmentRepository.find({
        relations: {
          maintenanceType: true,
        },
      });
    } catch (error) {
      throw new SeederException("Error getting assignment");
    }
  }
}
