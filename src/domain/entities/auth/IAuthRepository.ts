import { ICreateAuth } from "./IAuth";

export interface IAuthRepository {
  save(authData: ICreateAuth): Promise<void>;
}
