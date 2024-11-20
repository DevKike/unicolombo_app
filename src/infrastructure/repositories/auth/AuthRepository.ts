import { DataSource, Repository } from "typeorm";
import { IAuthRepository } from "../../../domain/entities/auth/IAuthRepository";
import { Auth } from "../../database/entities/Auth";
import { ICreateAuth } from "../../../domain/entities/auth/IAuth";

export class AuthRepository implements IAuthRepository {
  private readonly authRepository: Repository<Auth>;

  constructor(private readonly dataSource: DataSource) {
    this.authRepository = this.dataSource.getRepository(Auth);
  }

  async save(authData: ICreateAuth): Promise<void> {
    try {
      await this.authRepository.save(authData);
    } catch (error) {
      throw error;
    }
  }
}
