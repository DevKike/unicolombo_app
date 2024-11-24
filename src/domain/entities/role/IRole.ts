import { RoleEnum } from "../../enums/role/RoleEnum";
import { IActor } from "../actor/IActor";

export interface IRole {
  id: number;
  name: RoleEnum;
  description?: string;
  actors: IActor[];
}

export interface ICreateRole extends Pick<IRole, "name" | "description"> {}
