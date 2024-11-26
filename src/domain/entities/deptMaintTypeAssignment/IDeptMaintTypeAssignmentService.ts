import { ICreateDeptMaintTypeAssignment, IDeptMaintTypeAssignment, IUpdateDeptMaintTypeAssignment } from "./IDeptMaintTypeAssignment";

export interface IDeptMaintTypeAssignmentService {
  createDeptMaintTypeAssignment(deptMaintTypeAssignment: ICreateDeptMaintTypeAssignment): Promise<IDeptMaintTypeAssignment>;
  getAllDeptMaintTypeAssignment(): Promise<IDeptMaintTypeAssignment[]>;
  getDeptMaintTypeAssignmentById(id: number): Promise<IDeptMaintTypeAssignment | null>;
  getAllDeptMaintTypeAssignmentByDepartmentId(departmentId: number): Promise<IDeptMaintTypeAssignment[]>;
  getAssignmentByDeptIdAndMaintTypeId(departId: number, maintType: string): Promise<IDeptMaintTypeAssignment | null>;
  updateDeptMaintTypeAssignmentById(id: number, deptMaintTypeAssignment: IUpdateDeptMaintTypeAssignment): Promise<void>;
}