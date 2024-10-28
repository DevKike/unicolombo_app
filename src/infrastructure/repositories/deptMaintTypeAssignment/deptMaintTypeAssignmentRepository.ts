import { DataSource, Repository } from "typeorm";
import { IDeptMaintTypeAssignmentRepository } from "../../../domain/entities/deptMaintTypeAssignment/IDeptMaintTypeAssignmentRepository";
import { DeptMaintTypeAssignment } from "../../database/entities/DeptMaintTypeAssignment";
import { ICreateDeptMaintTypeAssignment, IDeptMaintTypeAssignment } from "../../../domain/entities/deptMaintTypeAssignment/IDeptMaintTypeAssignment";

export class DeptMaintTypeAssignmentRepository implements IDeptMaintTypeAssignmentRepository {
  private readonly deptMaintTypeAssignmentRepository: Repository<DeptMaintTypeAssignment>;

  constructor(private readonly dataSource: DataSource) {
    this.deptMaintTypeAssignmentRepository = this.dataSource.getRepository(DeptMaintTypeAssignment);
  }

  async save(deptMaintTypeAssignment: ICreateDeptMaintTypeAssignment): Promise<void> {
    try {
      await this.deptMaintTypeAssignmentRepository.save(deptMaintTypeAssignment);
    } catch (error) {
      throw error;
    }
  }
  
  async getAll(): Promise<IDeptMaintTypeAssignment[]> {
    try {
      return await this.deptMaintTypeAssignmentRepository.find({
        relations: [
          "department", 
          "maintenanceType"
        ],
      });
    } catch (error) {
      throw error;
    }
  }
}
