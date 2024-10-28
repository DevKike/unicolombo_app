import { ICreateDeptMaintTypeAssignment, IDeptMaintTypeAssignment } from "../../../domain/entities/deptMaintTypeAssignment/IDeptMaintTypeAssignment";
import { IDeptMaintTypeAssignmentService } from "../../../domain/entities/deptMaintTypeAssignment/IDeptMaintTypeAssignmentService";
import { IDeptMaintTypeAssignmentUseCase } from "../../../domain/entities/deptMaintTypeAssignment/IDeptMaintTypeAssignmentUseCase";

export class DeptMaintTypeAssignmentUseCase implements IDeptMaintTypeAssignmentUseCase {
  constructor(private readonly deptMaintTypeAssignment: IDeptMaintTypeAssignmentService) {}

  async createDeptMaintTypeAssignment(deptMaintTypeAssignment: ICreateDeptMaintTypeAssignment): Promise<void> {
    try {
      await this.deptMaintTypeAssignment.createDeptMaintTypeAssignment(deptMaintTypeAssignment);
    } catch (error) {
      throw error;
    }
  }

  async getAllDeptMaintTypeAssignment(): Promise<IDeptMaintTypeAssignment[]> {
    try {
      return await this.deptMaintTypeAssignment.getAllDeptMaintTypeAssignment();
    } catch (error) {
      throw error;
    }
  }

  async getDeptMaintTypeAssignmentById(id: number): Promise<IDeptMaintTypeAssignment | null> {
    try {
      return await this.deptMaintTypeAssignment.getDeptMaintTypeAssignmentById(id);
    } catch (error) {
      throw error;
    }
  }
}
