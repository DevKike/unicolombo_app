import { ICreateDepartment, IDepartment, IUpdateDepartment } from "../../../domain/entities/department/IDepartment";
import { IDepartmentRepository } from "../../../domain/entities/department/IDepartmentRepository";
import { IDepartmentService } from "../../../domain/entities/department/IDepartmentService";

export class DepartmentService implements IDepartmentService {
  constructor(private readonly departmentRepository: IDepartmentRepository) {}

  async createDepartment(department: ICreateDepartment): Promise<void> {
    try {
      await this.departmentRepository.save(department);
    } catch (error) {
      throw error;
    }
  }

  async getDepartments(): Promise<IDepartment[]> {
    try {
      const departments = await this.departmentRepository.getAll();

      return departments.map((department) => {
        const departments = { ...department } as any;
        if (departments.coordinator) 
          delete departments.coordinator.auth.password;
        return departments;
      });
    } catch (error) {
      throw error;
    }
  }

  async updateDepartment(id: number, department: IUpdateDepartment): Promise<void> {
    try {
      await this.departmentRepository.update(id, department);
    } catch (error) {
      throw error;
    }
  }
}
