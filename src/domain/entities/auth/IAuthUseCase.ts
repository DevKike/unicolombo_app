import { IAuth, IAuthCredentials } from "./IAuth";

export interface IAuthUseCase {
  login(credentials: IAuthCredentials): Promise<string>;
  getAuthDataById(id: number): Promise<IAuth | null>;
}
