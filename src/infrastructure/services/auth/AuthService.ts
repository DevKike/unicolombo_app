import { IAuth, ICreateAuth } from "../../../domain/entities/auth/IAuth";
import { IAuthRepository } from "../../../domain/entities/auth/IAuthRepository";
import { IAuthService } from "../../../domain/entities/auth/IAuthService";
import { compare, hash } from "../../helpers/bcrypt";
import { IJwtService } from "../../jwt/IJwtService";

export class AuthService implements IAuthService {
  constructor(
    private readonly authRepository: IAuthRepository,
    private readonly jwtService: IJwtService
  ) {}

  async createAuth(authData: ICreateAuth): Promise<void> {
    const hashedPassword = await hash(authData.password);

    const newAuthData: ICreateAuth = { ...authData, password: hashedPassword };

    await this.authRepository.save(newAuthData);
  }

  generateToken(auth: IAuth) {
    return this.jwtService.generateToken({ id: auth.id, email: auth.email });
  }

  async validatePassword(plainPassword: string, hashedPassword: string): Promise<boolean> {
    return await compare(plainPassword, hashedPassword);
  }
}
