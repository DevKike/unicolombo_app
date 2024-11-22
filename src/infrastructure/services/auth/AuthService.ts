import { IAuth, IAuthCredentials, ICreateAuth } from "../../../domain/entities/auth/IAuth";
import { IAuthRepository } from "../../../domain/entities/auth/IAuthRepository";
import { IAuthService } from "../../../domain/entities/auth/IAuthService";
import { InvalidCredentialsException } from "../../../domain/exceptions/InvalidCredentialsException";
import { compare, hash } from "../../helpers/bcrypt";
import { IJwtService } from "../../jwt/interfaces/IJwtService";

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

  async login(credentials: IAuthCredentials): Promise<string> {
    const auth = await this.authRepository.getByEmail(credentials.email);

    if (!auth) {
      throw new InvalidCredentialsException("Email or password is incorrect");
    }

    const isPasswordValid = await this.validatePassword(credentials.password, auth.password);

    if (!isPasswordValid) {
      throw new InvalidCredentialsException("Email or password is incorrect");
    }

    return this.generateToken(auth);
  }

  generateToken(auth: IAuth) {
    return this.jwtService.generateToken({ id: auth.id, email: auth.email });
  }

  async validatePassword(plainPassword: string, hashedPassword: string): Promise<boolean> {
    return await compare(plainPassword, hashedPassword);
  }
}
