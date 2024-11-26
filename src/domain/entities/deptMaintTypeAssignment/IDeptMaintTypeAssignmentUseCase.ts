import { ICreateDeptMaintTypeAssignment, IDeptMaintTypeAssignment, IUpdateDeptMaintTypeAssignment } from "./IDeptMaintTypeAssignment";

export interface IDeptMaintTypeAssignmentUseCase {
  createDeptMaintTypeAssignment(deptMaintTypeAssignment: ICreateDeptMaintTypeAssignment): Promise<IDeptMaintTypeAssignment>;
  getAllDeptMaintTypeAssignment(): Promise<IDeptMaintTypeAssignment[]>;
  getDeptMaintTypeAssignmentById(id: number): Promise<IDeptMaintTypeAssignment | null>;
  getAllDeptMaintTypeAssignmentByDepartmentId(departmentId: number): Promise<IDeptMaintTypeAssignment[]>;
  updateDeptMaintTypeAssignmentById(id: number, deptMaintTypeAssignment: IUpdateDeptMaintTypeAssignment): Promise<void>;
}