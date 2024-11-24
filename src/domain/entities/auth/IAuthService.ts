import { IAuth, IAuthCredentials, ICreateAuth } from "./IAuth";

export interface IAuthService {
  createAuth(authData: ICreateAuth): Promise<void>;
  login(credentials: IAuthCredentials): Promise<string>;
  generateToken(auth: IAuth): string;
  validatePassword(plainPassword: string, hashedPassword: string): Promise<boolean>;
}
