import { ICreateDeptMaintTypeAssignment } from "./IDeptMaintTypeAssignment";

export interface IDeptMaintTypeAssignmentService {
  createDeptMaintTypeAssignment(deptMaintTypeAssignment: ICreateDeptMaintTypeAssignment): Promise<void>;
}