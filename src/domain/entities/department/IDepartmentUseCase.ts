import { IDepartment } from "./IDepartment";

export interface IDepartmentUseCase {
  createDepartment(department: IDepartment): Promise<void>;
  getDepartments(): Promise<IDepartment[]>;
  updateDepartment(id: number, department: IDepartment): Promise<void>;
  deleteDepartment(id: number): Promise<void>;
}