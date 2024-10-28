import { ICreateDeptMaintTypeAssignment, IDeptMaintTypeAssignment } from "./IDeptMaintTypeAssignment";

export interface IDeptMaintTypeAssignmentUseCase {
  createDeptMaintTypeAssignment(deptMaintTypeAssignment: ICreateDeptMaintTypeAssignment): Promise<void>;
  getAllDeptMaintTypeAssignment(): Promise<IDeptMaintTypeAssignment[]>;
  getDeptMaintTypeAssignmentById(id: number): Promise<IDeptMaintTypeAssignment | null>;
}