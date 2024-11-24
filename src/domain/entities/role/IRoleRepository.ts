import { ICreateRole, IRole } from "./IRole";

export interface IRoleRepository {
  save(role: ICreateRole[]): Promise<void>;
  getAll(): Promise<IRole[]>;
  getOneById(id: number): Promise<IRole | null>;
  count(): Promise<number>;
}
