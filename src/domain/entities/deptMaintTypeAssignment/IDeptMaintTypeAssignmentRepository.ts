import { ICreateDeptMaintTypeAssignment, IDeptMaintTypeAssignment } from "./IDeptMaintTypeAssignment";

export interface IDeptMaintTypeAssignmentRepository {
  save(deptMaintTypeAssignment: ICreateDeptMaintTypeAssignment): Promise<void>;
  getAll(): Promise<IDeptMaintTypeAssignment[]>;
}