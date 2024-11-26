import { ICreateDeptMaintTypeAssignment, IDeptMaintTypeAssignment, IUpdateDeptMaintTypeAssignment } from "../../../domain/entities/deptMaintTypeAssignment/IDeptMaintTypeAssignment";
import { IDeptMaintTypeAssignmentRepository } from "../../../domain/entities/deptMaintTypeAssignment/IDeptMaintTypeAssignmentRepository";
import { IDeptMaintTypeAssignmentService } from "../../../domain/entities/deptMaintTypeAssignment/IDeptMaintTypeAssignmentService";


export class DeptMaintTypeAssignmentService implements IDeptMaintTypeAssignmentService {
  constructor(private readonly deptMaintTypeAssignmentRepository: IDeptMaintTypeAssignmentRepository) {}

  async createDeptMaintTypeAssignment(deptMaintTypeAssignment: ICreateDeptMaintTypeAssignment): Promise<IDeptMaintTypeAssignment> {
    try {
      const assignment = await this.deptMaintTypeAssignmentRepository.save(deptMaintTypeAssignment);
      return assignment;
    } catch (error) {
      throw error;
    }
  }
  
  async getAllDeptMaintTypeAssignment(): Promise<IDeptMaintTypeAssignment[]> {
    try {
      return await this.deptMaintTypeAssignmentRepository.getAll();
    } catch (error) {
      throw error;
    }
  }

  async getDeptMaintTypeAssignmentById(id: number): Promise<IDeptMaintTypeAssignment | null> {
    try {
      return await this.deptMaintTypeAssignmentRepository.getOneById(id);
    } catch (error) {
      throw error;
    }
  }

  async getAllDeptMaintTypeAssignmentByDepartmentId(departmentId: number): Promise<IDeptMaintTypeAssignment[]> {
    try {
      return await this.deptMaintTypeAssignmentRepository.getByDepartmentId(departmentId);
    } catch (error) {
      throw error;
    }
  }

  async getAssignmentByDeptIdAndMaintTypeId(departId: number, maintType: string): Promise<IDeptMaintTypeAssignment | null> {
    try {
      return await this.deptMaintTypeAssignmentRepository.getByDeptIdAndMaintTypeId(departId, maintType);
    } catch (error) {
      throw error;
    }
  }

  async updateDeptMaintTypeAssignmentById(id: number, deptMaintTypeAssignment: IUpdateDeptMaintTypeAssignment): Promise<void> {
    try {
      await this.deptMaintTypeAssignmentRepository.updateById(id, deptMaintTypeAssignment);
    } catch (error) {
      throw error;
    }
  }
}

