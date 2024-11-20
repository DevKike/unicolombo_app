import { DocumentType } from "../../enums/actor/DocumentType";
import { ActorStatus } from "../../enums/actor/ActorStatus";
import { IDepartment } from "../department/IDepartment";
import { IRole } from "../role/IRole";
import { IExecutor } from "../executor/IExecutor";
import { IAuth } from "../auth/IAuth";

export interface IActor {
  id: number;
  name: string;
  lastName: string;
  phoneNumber?: string;
  documentNumber: number;
  documentType: DocumentType;
  createdAt: Date;
  updatedAt: Date;
  status?: ActorStatus;
  department: IDepartment;
  role: IRole;
  executors: IExecutor[];
  auth: IAuth;
}

export interface ICreateActor extends Omit<IActor, "id" | "createdAt" | "updatedAt"> {}

export interface IUpdateActor extends Partial<Omit<IActor, "id" | "documentNumber" | "documentType" | "createdAt" | "updatedAt" | "auth">> {}