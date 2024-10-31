import { DataSource, Repository } from "typeorm";
import { IRole } from "../../../domain/entities/role/IRole";
import { Role } from "../../database/entities/Role";
import { IRoleRepository } from "../../../domain/entities/role/IRoleRepository";

export class RoleRepository implements IRoleRepository {
  private readonly roleRepository: Repository<Role>;

  constructor(private readonly dataSource: DataSource) {
    this.roleRepository = this.dataSource.getRepository(Role);
  }

  async getAll(): Promise<IRole[]> {
    try {
      return await this.roleRepository.find();  
    } catch (error) {
      throw error;
    } 
  }

  async getOneById(id: number): Promise<IRole | null> {
    try {
      return await this.roleRepository.findOneBy({ id: id });
    } catch (error) {
      throw error;
    }
  }
}
