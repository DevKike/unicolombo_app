import { IDeptMaintTypeAssignment } from "../deptMaintTypeAssignment/IDeptMaintTypeAssignment";

export interface IStage {
  id: number;
  name: string;
  description: string;
  order: number;
  createdAt: Date;
  updatedAt: Date;
  deptMaintTypeAssignment: IDeptMaintTypeAssignment;
}
