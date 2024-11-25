import { IAuth, ICreateAuth } from "./IAuth";

export interface IAuthRepository {
  save(authData: ICreateAuth): Promise<void>;
  getById(id: number): Promise<IAuth | null>;
  getByEmail(email: string): Promise<IAuth | null>;
}
