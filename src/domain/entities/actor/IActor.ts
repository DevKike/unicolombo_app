import { DocumentType } from "../../enums/actor/DocumentType";
import { ActorStatus } from "../../enums/actor/ActorStatus";
import { IDepartment } from "../department/IDepartment";
import { IRole } from "../role/IRole";
import { IExecutor } from "../executor/IExecutor";

export interface IActor {
  id: number;
  name: string;
  lastName: string;
  phoneNumber?: string;
  email: string;
  documentNumber: number;
  documentType: DocumentType;
  createdAt: Date;
  updatedAt: Date;
  status?: ActorStatus;
  department: IDepartment;
  role: IRole;
  executors: IExecutor[];
}

export interface ICreateActor extends Omit<IActor, "id" | "createdAt" | "updatedAt"> {}

export interface IUpdateActor extends Partial<Omit<IActor, "id" | "documentNumber" | "documentType" | "createdAt" | "updatedAt">> {}