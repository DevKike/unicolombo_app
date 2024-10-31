import { IDeptMaintTypeAssignment } from "../deptMaintTypeAssignment/IDeptMaintTypeAssignment";
import { IForm } from "../form/IForm";

export interface IStage {
  id: number;
  name: string;
  description: string;
  order: number;
  createdAt: Date;
  updatedAt: Date;
  deptMaintTypeAssignment: IDeptMaintTypeAssignment;
  forms: IForm[];
}

export interface ICreateStage extends Omit<IStage, "id" | "createdAt" | "updatedAt" | "forms"> {}

export interface IUpdateStage extends Partial<Omit<IStage, "id" | "createdAt" | "updatedAt" | "forms">> {}
