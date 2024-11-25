import { IAuth, IAuthCredentials, ICreateAuth } from "./IAuth";

export interface IAuthService {
  createAuth(authData: ICreateAuth): Promise<void>;
  login(credentials: IAuthCredentials): Promise<string>;
  getAuthDataById(id: number): Promise<IAuth | null>;
  validatePassword(plainPassword: string, hashedPassword: string): Promise<boolean>;
}
