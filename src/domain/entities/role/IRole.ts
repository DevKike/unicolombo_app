import { IActor } from "../actor/IActor";

export interface IRole {
  id: number;
  name: string;
  description?: string;
  actors: IActor[];
}