import { IActor } from "../actor/IActor";

export interface IAuth {
  id: number;
  email: string;
  password: string;
  actor: IActor;
}

export interface ICreateAuth extends Omit<IAuth, "id"> {}