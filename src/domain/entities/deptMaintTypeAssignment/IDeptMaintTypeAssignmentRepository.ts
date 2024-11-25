import { ICreateDeptMaintTypeAssignment, IDeptMaintTypeAssignment, IUpdateDeptMaintTypeAssignment } from "./IDeptMaintTypeAssignment";

export interface IDeptMaintTypeAssignmentRepository {
  save(deptMaintTypeAssignment: ICreateDeptMaintTypeAssignment): Promise<IDeptMaintTypeAssignment>;
  getAll(): Promise<IDeptMaintTypeAssignment[]>;
  getOneById(id: number): Promise<IDeptMaintTypeAssignment | null>;
  updateById(id: number, deptMaintTypeAssignment: IUpdateDeptMaintTypeAssignment): Promise<void>;
}
