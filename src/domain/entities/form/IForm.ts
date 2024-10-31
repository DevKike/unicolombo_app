import { IStage } from "../stage/IStage";

export interface IForm {
  id: number;
  code: number;
  name: string;
  description: string;
  path: string;
  extension: string;
  registeredAt: Date;
  updatedAt: Date;
  stage: IStage;
}
