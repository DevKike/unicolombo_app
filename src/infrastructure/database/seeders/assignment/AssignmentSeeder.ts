import { DataSource, Repository } from "typeorm";
import { ISeeder } from "../interfaces/ISeeder";
import { DeptMaintTypeAssignment } from "../../entities/DeptMaintTypeAssignment";
import { SeederException } from "../../../../domain/exceptions/SeederException";
import { AlreadySeededException } from "../../../../domain/exceptions/AlreadySeededException";
import { Department } from "../../entities/Department";
import { MaintenanceType } from "../../entities/MaintenanceType";
import { ICreateDeptMaintTypeAssignment } from "../../../../domain/entities/deptMaintTypeAssignment/IDeptMaintTypeAssignment";
import { DeptMaintTypeAssignmentStatus } from "../../../../domain/enums/DeptMaintTypeAssignment/DeptMaintTypeAssignmentStatus";

export class AssignmentSeeder implements ISeeder {
  private readonly assignmentRepository: Repository<DeptMaintTypeAssignment>;
  private readonly departmentRepository: Repository<Department>;
  private readonly maintenanceType: Repository<MaintenanceType>;
  private assignments: ICreateDeptMaintTypeAssignment[] = [];

  constructor(private readonly dataSource: DataSource) {
    this.assignmentRepository = dataSource.getRepository(DeptMaintTypeAssignment);
    this.departmentRepository = dataSource.getRepository(Department);
    this.maintenanceType = dataSource.getRepository(MaintenanceType);
  }

  async count(): Promise<number> {
    try {
      return await this.assignmentRepository.count();
    } catch (error) {
      throw new AlreadySeededException("Error counting assignments");
    }
  }

  async save(data: ICreateDeptMaintTypeAssignment): Promise<void> {
    try {
      await this.assignmentRepository.save(data);
    } catch (error) {
      throw new SeederException("Error saving assignments");
    }
  }

  async run(): Promise<void> {
    try {
      const departments = await this.getDepartments();
      const maintenanceTypes = await this.getMaintenanceTypes();

      const department = departments[0];
      const corrective = maintenanceTypes.find((type) => type.name === "Corrective");
      const preventive = maintenanceTypes.find((type) => type.name === "Preventive");

      if (!department || !corrective || !preventive) {
        throw new SeederException("Error getting department or maintenance types");
      }

      this.assignments = [
        {
          status: DeptMaintTypeAssignmentStatus.ACTIVE,
          priority: 1,
          comments: "Corrective maintenance assignment",
          department,
          maintenanceType: corrective,
        },
        {
          status: DeptMaintTypeAssignmentStatus.ACTIVE,
          priority: 1,
          comments: "Preventive maintenance assignment",
          department,
          maintenanceType: preventive,
        },
      ];

      await Promise.all(this.assignments.map(async (assignment) => await this.save(assignment)));
    } catch (error) {
      throw new SeederException("Error running assignments");
    }
  }

  private async getDepartments() {
    try {
      return await this.departmentRepository.find();
    } catch (error) {
      throw new SeederException("Error getting departments");
    }
  }

  private async getMaintenanceTypes() {
    try {
      return await this.maintenanceType.find();
    } catch (error) {
      throw new SeederException("Error getting maintenance types");
    }
  }
}
