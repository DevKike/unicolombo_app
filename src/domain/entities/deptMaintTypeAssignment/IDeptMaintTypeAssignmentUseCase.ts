import { ICreateDeptMaintTypeAssignment, IDeptMaintTypeAssignment, IUpdateDeptMaintTypeAssignment } from "./IDeptMaintTypeAssignment";

export interface IDeptMaintTypeAssignmentUseCase {
  createDeptMaintTypeAssignment(deptMaintTypeAssignment: ICreateDeptMaintTypeAssignment): Promise<void>;
  getAllDeptMaintTypeAssignment(): Promise<IDeptMaintTypeAssignment[]>;
  getDeptMaintTypeAssignmentById(id: number): Promise<IDeptMaintTypeAssignment | null>;
  updateDeptMaintTypeAssignmentById(id: number, deptMaintTypeAssignment: IUpdateDeptMaintTypeAssignment): Promise<void>;
}