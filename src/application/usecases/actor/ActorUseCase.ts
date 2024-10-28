import { IActor, ICreateActor, IUpdateActor } from "../../../domain/entities/actor/IActor";
import { IActorService } from "../../../domain/entities/actor/IActorService";
import { IActorUseCase } from "../../../domain/entities/actor/IActorUseCase";
import { IRoleService } from "../../../domain/entities/role/IRoleService";
import { Message } from "../../../domain/enums/message/Message";
import { RoleId } from "../../../domain/enums/role/Role";
import { AlreadyExistsException } from "../../../domain/exceptions/AlreadyExistsException";
import { NotFoundException } from "../../../domain/exceptions/NotFoundException";

export class ActorUseCase implements IActorUseCase {
  constructor(
    private readonly actorService: IActorService,
    private readonly roleService: IRoleService
  ) {}

  async createActor(actor: ICreateActor): Promise<void> {
    if (actor.phoneNumber) {
      const existingActorByPhoneNumber =
        await this.actorService.getActorsByQueryParams({
          phoneNumber: actor.phoneNumber,
        });
      if (existingActorByPhoneNumber.length > 0) {
        throw new AlreadyExistsException(
          `${Message.ACTOR_ALREADY_EXISTS_EXCEPTION} with phone number: ${actor.phoneNumber}`
        );
      }
    }

    if (actor.email) {
      const existingActorByEmail = await this.actorService.getActorsByQueryParams({ email: actor.email });
      if (existingActorByEmail.length > 0) {
        throw new AlreadyExistsException(
          `${Message.ACTOR_ALREADY_EXISTS_EXCEPTION} with email: ${actor.email}`
        );
      }
    }

    if (actor.documentNumber) {
      const existingActorByDocumentNumber =
        await this.actorService.getActorsByQueryParams({
          documentNumber: actor.documentNumber,
        });
      if (existingActorByDocumentNumber.length > 0) {
        throw new AlreadyExistsException(
          `${Message.ACTOR_ALREADY_EXISTS_EXCEPTION} with document number: ${actor.documentNumber}`
        );
      }
    }

    const actorRoleId = actor.role.id;
    const isActorRoleExisting = await this.roleService.getRoleById(actorRoleId);

    if (!isActorRoleExisting) {
      throw new NotFoundException(Message.NOT_ROLES_FOUND);
    }

    if (actor.role.id === RoleId.SYSTEM_COORDINATOR || actor.role.id === RoleId.MAINTENANCE_COORDINATOR) {
      const existingCoordinator =
        await this.actorService.getActorsByQueryParams({
          role: actor.role,
          department: actor.department,
        });

      if (existingCoordinator.length > 0) {
        throw new AlreadyExistsException(Message.COORDINATOR_ALREADY_EXISTS);
      }
    }

    await this.actorService.createActor(actor);
  }

  async getActors(page: number, limit: number): Promise<IActor[]> {
    const actors = await this.actorService.getActors(page, limit);

    if (!actors || actors.length === 0) {
      throw new NotFoundException(Message.NOT_ACTORS_FOUND);
    }

    return actors;
  }

  async getActorsByQueryParams(params: Partial<IActor>): Promise<IActor[]> {
    const actor = await this.actorService.getActorsByQueryParams(params);

    if (!actor || actor.length === 0) {
      throw new NotFoundException(Message.NOT_ACTOR_FOUND);
    }

    return actor;
  }

  async updateActorById(id: number, actor: IUpdateActor): Promise<void> {
    try {
      this.actorService.updateActorById(id, actor);
    } catch (error) {
      throw error;
    }
  }
}
