import { ICreateDeptMaintTypeAssignment } from "./IDeptMaintTypeAssignment";

export interface IDeptMaintTypeAssignmentRepository {
  save(deptMaintTypeAssignment: ICreateDeptMaintTypeAssignment): Promise<void>;
}
