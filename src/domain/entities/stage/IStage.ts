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

export interface ICreateStage extends Omit<IStage, "id" | "createdAt" | "updatedAt"> {}
