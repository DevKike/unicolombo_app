import { ICreateDepartment, IDepartment, IUpdateDepartment } from "./IDepartment";

export interface IDepartmentRepository {
  save(department: ICreateDepartment): Promise<void>;
  getAll(): Promise<IDepartment[]>;
  update(id: number, department: IUpdateDepartment): Promise<void>;
  count(): Promise<number>;
}
