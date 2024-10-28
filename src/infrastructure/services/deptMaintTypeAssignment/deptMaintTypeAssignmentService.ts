import { ICreateDeptMaintTypeAssignment } from "../../../domain/entities/deptMaintTypeAssignment/IDeptMaintTypeAssignment";
import { IDeptMaintTypeAssignmentRepository } from "../../../domain/entities/deptMaintTypeAssignment/IDeptMaintTypeAssignmentRepository";
import { IDeptMaintTypeAssignmentService } from "../../../domain/entities/deptMaintTypeAssignment/IDeptMaintTypeAssignmentService";


export class DeptMaintTypeAssignmentService implements IDeptMaintTypeAssignmentService {
  constructor(private readonly deptMaintTypeAssignmentRepository: IDeptMaintTypeAssignmentRepository) {}

  async createDeptMaintTypeAssignment(deptMaintTypeAssignment: ICreateDeptMaintTypeAssignment): Promise<void> {
    try {
      await this.deptMaintTypeAssignmentRepository.save(deptMaintTypeAssignment);
    } catch (error) {
      throw error;
    }
  }
}

