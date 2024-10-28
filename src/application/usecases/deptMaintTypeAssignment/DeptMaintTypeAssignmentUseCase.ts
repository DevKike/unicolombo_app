import { ICreateDeptMaintTypeAssignment } from "../../../domain/entities/deptMaintTypeAssignment/IDeptMaintTypeAssignment";
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
}
