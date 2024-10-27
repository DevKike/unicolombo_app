import { ICreateDepartmentMaintenanceTypeAssignment } from "../../../domain/entities/departmentMaintenanceTypeAssignment/IDepartmentMaintenanceTypeAssignment";
import { IDepartmentMaintenanceTypeAssignmentUseCase } from "../../../domain/entities/departmentMaintenanceTypeAssignment/IDepartmentMaintenanceTypeAssignmentUseCase";
import { DepartmentMaintenanceTypeAssignmentService } from "../../../infrastructure/services/departmentMaintenanceTypeAssignment/DepartmentMaintenanceTypeAssignmentService";

export class DepartmentMaintenanceTypeAssignmentUseCase implements IDepartmentMaintenanceTypeAssignmentUseCase {
  constructor(private readonly departmentMaintenanceTypeAssignmentService: DepartmentMaintenanceTypeAssignmentService ) {}

  async createDepartmentMaintenanceTypeAssignment(departmentMaintenanceTypeAssignment: ICreateDepartmentMaintenanceTypeAssignment): Promise<void> {
    try {
      await this.departmentMaintenanceTypeAssignmentService.createDepartmentMaintenanceTypeAssignment(departmentMaintenanceTypeAssignment);
    } catch (error) {
      throw error;
    }
  }
}
