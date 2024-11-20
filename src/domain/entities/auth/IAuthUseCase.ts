import { IAuthCredentials } from "./IAuth";

export interface IAuthUseCase {
  login(credentials: IAuthCredentials): Promise<string>;
}
