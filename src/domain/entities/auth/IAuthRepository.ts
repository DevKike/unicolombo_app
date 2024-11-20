import { IAuth, ICreateAuth } from "./IAuth";

export interface IAuthRepository {
  save(authData: ICreateAuth): Promise<void>;
  getByEmail(email: string): Promise<IAuth | null>;
}
