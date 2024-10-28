import { ICreateDeptMaintTypeAssignment, IDeptMaintTypeAssignment } from "./IDeptMaintTypeAssignment";

export interface IDeptMaintTypeAssignmentService {
  createDeptMaintTypeAssignment(deptMaintTypeAssignment: ICreateDeptMaintTypeAssignment): Promise<void>;
  getAllDeptMaintTypeAssignment(): Promise<IDeptMaintTypeAssignment[]>;
  getDeptMaintTypeAssignmentById(id: number): Promise<IDeptMaintTypeAssignment | null>;
}