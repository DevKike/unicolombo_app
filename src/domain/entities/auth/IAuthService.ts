import { IAuth, ICreateAuth } from "./IAuth";

export interface IAuthService {
  createAuth(authData: ICreateAuth): Promise<void>;
  generateToken(auth: IAuth): string;
  validatePassword(plainPassword: string, hashedPassword: string): Promise<boolean>;
}
