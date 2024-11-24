import { ISeeder } from "../interfaces/ISeeder";
import { DocumentType } from "../../../../domain/enums/actor/DocumentType";
import { AlreadySeededException } from "../../../../domain/exceptions/AlreadySeededException";
import { SeederException } from "../../../../domain/exceptions/SeederException";
import { DataSource, Repository } from "typeorm";
import { Actor } from "../../entities/Actor";
import { Role } from "../../entities/Role";
import { Department } from "../../entities/Department";
import { Auth } from "../../entities/Auth";
import { ICreateActor } from "../../../../domain/entities/actor/IActor";
import { ActorStatus } from "../../../../domain/enums/actor/ActorStatus";
import { IAuthCredentials, ICreateAuth } from "../../../../domain/entities/auth/IAuth";

export class ActorSeeder implements ISeeder {
  private readonly actorRepository: Repository<Actor>;
  private readonly roleRepository: Repository<Role>;
  private readonly departmentRepository: Repository<Department>;
  private readonly authRepository: Repository<Auth>;

  private readonly authCredentials: IAuthCredentials = {
    email: "admin@unicolombo.edu.co",
    password: "admin123",
  };

  constructor(private readonly dataSource: DataSource) {
    this.actorRepository = dataSource.getRepository(Actor);
    this.roleRepository = dataSource.getRepository(Role);
    this.departmentRepository = dataSource.getRepository(Department);
    this.authRepository = dataSource.getRepository(Auth);
  }

  private async createActorData(): Promise<ICreateActor> {
    const role = await this.roleRepository.findOneOrFail({
      where: { id: 1 },
    });

    const department = await this.departmentRepository.findOneOrFail({
      where: { id: 1 },
    });

    return {
      name: "John",
      lastName: "Doe",
      phoneNumber: "123456789",
      documentNumber: 123456789,
      documentType: DocumentType.CC,
      status: ActorStatus.ACTIVE,
      department,
      role,
      auth: {
        id: undefined as any,
        email: this.authCredentials.email,
        password: this.authCredentials.password,
        actor: null as any,
      },
    };
  }

  async count(): Promise<number> {
    try {
      return await this.actorRepository.count();
    } catch (error) {
      throw new SeederException("Error counting actors");
    }
  }

  async save(actorData: ICreateActor): Promise<void> {
    try {
      await this.dataSource.transaction(async (transactionalEntityManager) => {
        const authToCreate: ICreateAuth = {
          email: actorData.auth.email,
          password: actorData.auth.password,
          actor: null as any,
        };

        const auth = this.authRepository.create(authToCreate);
        await transactionalEntityManager.save(auth);

        const actor = this.actorRepository.create({
          ...actorData,
          auth,
        });

        await transactionalEntityManager.save(actor);

        auth.actor = actor;
        await transactionalEntityManager.save(auth);
      });
    } catch (error) {
      throw new SeederException("Error saving actors");
    }
  }

  async run(): Promise<void> {
    try {
      const existingActors = await this.count();

      if (existingActors > 0) {
        throw new AlreadySeededException("Actors already seeded");
      }

      const actorData = await this.createActorData();
      await this.save(actorData);
    } catch (error) {
      if (error instanceof AlreadySeededException) {
        throw error;
      }
      throw new SeederException("Error running actor seeder");
    }
  }
}
