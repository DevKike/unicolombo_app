import { ICreateDepartment, IDepartment, IUpdateDepartment } from "./IDepartment";

export interface IDepartmentService {
  createDepartment(department: ICreateDepartment): Promise<void>;
  getDepartments(): Promise<IDepartment[]>;
  updateDepartment(id: number, department: IUpdateDepartment): Promise<void>;
}
