import { ISeeder } from "../interfaces/ISeederModel";
import { ICreateActor } from "../../../../domain/entities/actor/IActor";
import { IActorRepository } from "../../../../domain/entities/actor/IActorRepository";
import { DocumentType } from "../../../../domain/enums/actor/DocumentType";
import { AlreadySeededException } from "../../../../domain/exceptions/AlreadySeededException";
import { SeederException } from "../../../../domain/exceptions/SeederException";

export class ActorSeeder implements ISeeder {
  private readonly actor: ICreateActor = {
    name: "John",
    lastName: "Doe",
    phoneNumber: "1111111111",
    documentNumber: 111111111,
    documentType: DocumentType.CC,
    department: {  }
    
  };

  constructor(private readonly actorRepository: IActorRepository) {}

  async count(): Promise<number> {
    try {
      return await this.actorRepository.count();
    } catch (error) {
      throw new SeederException("Error counting actors");
    }
  }

  async save(data: any): Promise<void> {
    try {
      await this.actorRepository.save(data);
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

      await this.save(this.actor);
    } catch (error) {
      if (error instanceof AlreadySeededException) {
        throw error;
      }
      throw new SeederException("Error running actor seeder");
    }
  }
}
