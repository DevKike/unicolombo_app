import { ICreateDeptMaintTypeAssignment } from "./IDeptMaintTypeAssignment";

export interface IDeptMaintTypeAssignmentUseCase {
  createDeptMaintTypeAssignment(deptMaintTypeAssignment: ICreateDeptMaintTypeAssignment): Promise<void>;
}