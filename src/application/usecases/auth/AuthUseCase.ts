import { IAuthCredentials } from "../../../domain/entities/auth/IAuth";
import { IAuthService } from "../../../domain/entities/auth/IAuthService";
import { IAuthUseCase } from "../../../domain/entities/auth/IAuthUseCase";

export class AuthUseCase implements IAuthUseCase {
  constructor(private readonly authService: IAuthService) {}

  async login(credentials: IAuthCredentials): Promise<string> {
    try {
      const token = await this.authService.login(credentials);
      return token;
    } catch (error) {
      throw error;
    }
  }
}
