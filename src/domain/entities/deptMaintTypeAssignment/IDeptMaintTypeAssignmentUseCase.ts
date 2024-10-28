import { ICreateDeptMaintTypeAssignment, IDeptMaintTypeAssignment } from "./IDeptMaintTypeAssignment";

export interface IDeptMaintTypeAssignmentUseCase {
  createDeptMaintTypeAssignment(deptMaintTypeAssignment: ICreateDeptMaintTypeAssignment): Promise<void>;
  getAllDeptMaintTypeAssignment(): Promise<IDeptMaintTypeAssignment[]>;
}