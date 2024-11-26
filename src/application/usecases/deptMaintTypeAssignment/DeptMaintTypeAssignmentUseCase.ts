import { ICreateDeptMaintTypeAssignment, IDeptMaintTypeAssignment, IUpdateDeptMaintTypeAssignment } from "../../../domain/entities/deptMaintTypeAssignment/IDeptMaintTypeAssignment";
import { IDeptMaintTypeAssignmentService } from "../../../domain/entities/deptMaintTypeAssignment/IDeptMaintTypeAssignmentService";
import { IDeptMaintTypeAssignmentUseCase } from "../../../domain/entities/deptMaintTypeAssignment/IDeptMaintTypeAssignmentUseCase";

export class DeptMaintTypeAssignmentUseCase implements IDeptMaintTypeAssignmentUseCase {
  constructor(private readonly deptMaintTypeAssignmentService: IDeptMaintTypeAssignmentService) {}

  async createDeptMaintTypeAssignment(deptMaintTypeAssignment: ICreateDeptMaintTypeAssignment): Promise<IDeptMaintTypeAssignment> {
    try {
      return await this.deptMaintTypeAssignmentService.createDeptMaintTypeAssignment(deptMaintTypeAssignment);
    } catch (error) {
      throw error;
    }
  }

  async getAllDeptMaintTypeAssignment(): Promise<IDeptMaintTypeAssignment[]> {
    try {
      return await this.deptMaintTypeAssignmentService.getAllDeptMaintTypeAssignment();
    } catch (error) {
      throw error;
    }
  }

  async getDeptMaintTypeAssignmentById(id: number): Promise<IDeptMaintTypeAssignment | null> {
    try {
      return await this.deptMaintTypeAssignmentService.getDeptMaintTypeAssignmentById(id);
    } catch (error) {
      throw error;
    }
  }

  async getAllDeptMaintTypeAssignmentByDepartmentId(departmentId: number): Promise<IDeptMaintTypeAssignment[]> {
    try {
      return await this.deptMaintTypeAssignmentService.getAllDeptMaintTypeAssignmentByDepartmentId(departmentId);
    } catch (error) {
      throw error;
    }
  }

  async updateDeptMaintTypeAssignmentById(id: number, deptMaintTypeAssignment: IUpdateDeptMaintTypeAssignment): Promise<void> {
    try {
      await this.deptMaintTypeAssignmentService.updateDeptMaintTypeAssignmentById(id, deptMaintTypeAssignment);
    } catch (error) {
      throw error;
    }
  }
}
